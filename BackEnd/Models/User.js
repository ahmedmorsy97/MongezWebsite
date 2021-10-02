var mongoose = require('mongoose');

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
    address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dateOfBirth: {
        type: String,
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
    levelOfPurchase: {
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
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],


    // The customer sends the order to the supplier , the supplier gives a final price for the whole order and sends the price
    // back to the customer if the customer agrees then the customer pays otehrwise the transaction is terminated.
});

module.exports = mongoose.model('User', userSchema);