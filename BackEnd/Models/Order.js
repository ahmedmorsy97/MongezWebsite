import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
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
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});

export const order = mongoose.model('Order', orderSchema);