var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: false
    },
    photoLinks: [{
        type: String,
        required: false
    }],
    price: {
        type: Number,
        required: false
    },
    percentageDiscount: {
        type: Number,
    },
    priceDiscount: {
        type: Number,
    },
    rating: {
        type: Number,
        required: false
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier"

    },
    quantity: {
        type: Number,

    },


});

module.exports = mongoose.model('Product', productSchema);