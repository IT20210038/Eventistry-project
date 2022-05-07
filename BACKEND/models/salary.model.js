const mongoose = require('mongoose');
// var Sequelize = require('sequelize');

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    basicSalary: {
        type: Number
    },
    otHours: {
        type: Number
    },
    otPay: {
        type: Number
    },
    totalSalary: {
        type: Number
    }
}, {
    timestamps: true,
})

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;