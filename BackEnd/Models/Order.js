/* 
Name: Saleh Mohamed
Date Created : 13/3/2018
*/

var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }],
    status: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: false
    },
    User: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});

module.exports = mongoose.model('Order', orderSchema);