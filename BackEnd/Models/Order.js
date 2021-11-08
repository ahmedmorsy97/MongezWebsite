import mongoose from "mongoose";
import { Product } from "./Product";

const orderSchema = mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        },
        status: {
            type: String,
            default: "Pending"
        },
        expectedDelivery: {
            type: Date
        },
        priceatPurchase: {
            type: Number
        },
        supplier: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    }, ],
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
    },

    manager: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    paid: {
        type: boolean
    }
});

export const order = mongoose.model('Order', orderSchema);