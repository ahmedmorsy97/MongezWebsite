var mongoose = require('mongoose');
// Payement info 
var userSchema = mongoose.Schema({
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
    company: {
        type: mongoose.Types.ObjectId,
        ref: "Company"
    },
    mobileNumber: {
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
    employeeLevel: {
        type: String,
        required: true,
        trim: true,
    },
    wallet: {
        type: Number,
    },
    limit: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    numberOfRatings: {
        type: Number,
    },

    admin: {
        type: Boolean,
        default: false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    imageURL: {
        type: String,
        required: false
    },
    nationalID: {
        type: String,
        required: false
    },
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],

});

module.exports = mongoose.model('User', userSchema);