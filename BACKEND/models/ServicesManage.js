const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicesSchema = new Schema({

    name :{
        type : String,
        required: true,
        trim:true
    },
    type :{
        type : String,
        required: true,
        trim:true
    },
    phoneno: {
        type: Number, 
    required: true, 
    maxlength:10, 
    minlength:10, 
    unique:true
     },
    fee :{
        type : Number
    }
},
 );
    
    const ServicesManage = mongoose.model("Services",servicesSchema);
    
    module.exports = ServicesManage;
