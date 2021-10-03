var mongoose = require('mongoose');
//Payement info and suppier wallet
var supplierSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
    },
    numberOfRatings: {
        type: Number,
    },
    blocked: {
        type: Boolean,
        default: false
    },
    imageURL: {
        type: String,
        required: false
    },
    nationalID: {
        type: String,
        required: false
    },
    // listOfProducts: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Product"
    // }]
});

module.exports = mongoose.model('Supplier', supplierSchema);