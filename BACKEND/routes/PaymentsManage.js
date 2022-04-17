const router = require("express").Router();
const PaymentsManage = require("../models/PaymentsManage");
const { findById } = require("../models/PaymentsManage");

//router.get("/test",async (req, res) => {
//    console.log("adasd", await res.json())
//})

router.route('/').get((req, res) => {
  PaymentsManage.find()
    .then(PaymentsManage => res.json(PaymentsManage))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const DocumentNo = req.body.DocumentNo;
  const InvoiceNo = req.body.InvoiceNo;
  const BilltoName = req.body.BilltoName;
  const PaymentDetails= req.body.PaymentDetails;
  const date = Date.parse(req.body.date);
  const TotalAmount = Number(req.body.TotalAmount);
  
  const newPayments = new PaymentsManage({
      DocumentNo,
      InvoiceNo,
      BilltoName,
      PaymentDetails,
      date,
      TotalAmount
    });

    newPayments.save()
  .then(() => res.json('Payments added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:id').get((req, res) => {
  PaymentsManage.findById(req.params.id)
    .then(PaymentsManage => res.json(PaymentsManage))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  PaymentsManage.findByIdAndDelete(req.params.id)
    .then(() => res.json('Payments deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  PaymentsManage.findById(req.params.id)
    .then(PaymentsManage => {
      PaymentsManage.InvoiceNo = req.body.InvoiceNo;
      PaymentsManage.BilltoName= req.body.BilltoName;
      PaymentsManage.PaymentDetails = req.body.PaymentDetails;
      PaymentsManage.date = Date.parse(req.body.date);
      PaymentsManage.TotalAmount = req.body.TotalAmount;
    


     PaymentsManage.save()
        .then(() => res.json('Payments updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
