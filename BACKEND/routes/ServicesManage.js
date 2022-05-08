const router = require("express").Router();
const ServicesManage = require("../models/ServicesManage");
const { findById } = require("../models/ServicesManage");

//router.get("/test",async (req, res) => {
//    console.log("adasd", await res.json())
//})

router.route('/').get((req, res) => {
  ServicesManage.find()
    .then(ServicesManage => res.json(ServicesManage))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const phoneno = Number(req.body.phoneno);
  const fee = Number(req.body.fee);
  
  const newServices = new ServicesManage({
      name,
      type,
      phoneno,
      fee
    });

    newServices.save()
  .then(() => res.json('Service added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:id').get((req, res) => {
  ServicesManage.findById(req.params.id)
    .then(ServicesManage => res.json(ServicesManage))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  ServicesManage.findByIdAndDelete(req.params.id)
    .then(() => res.json('Service deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  ServicesManage.findById(req.params.id)
    .then(ServicesManage => {
      ServicesManage.name = req.body.name;
      ServicesManage.type = req.body.type;
      ServicesManage. phoneno= Number(req.body.phoneno);
      ServicesManage.fee = Number(req.body.fee);
    


      ServicesManage.save()
        .then(() => res.json('Service updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
