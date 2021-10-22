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
    }

});

export const order = mongoose.model('Order', orderSchema);