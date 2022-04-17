const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentsSchema = new Schema({

    DocumentNo :{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    InvoiceNo :{
        type : String,
        required: true,
        trim:true
    },
    BilltoName :{
        type : String,
        required: true,
        trim:true
    },
    PaymentDetails :{
        type: Number,
        maxlength:5,
        required: true
    },
    date :{
        type : Date,
        required: true
    },
    TotalAmount :{
        type : Number
    }
},
 );
    
    const PaymentsManage = mongoose.model("Payments",paymentsSchema);
    
    module.exports = PaymentsManage;
