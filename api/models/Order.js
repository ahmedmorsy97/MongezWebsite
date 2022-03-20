import mongoose from "mongoose";
import mongoose_sequence from "mongoose-sequence";

const AutoIncrement = mongoose_sequence(mongoose);

const orderSchema = mongoose.Schema({
    ordernumber: {
        type: Number,
        unique: true,
        index: true
    },

    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        status: {
            type: String,
            default: "Pending"
        },
        expectedDelivery: {
            type: Date,
            default: null
        },
        priceatPurchase: {
            type: Number,
            required: true
        },
        supplier: {
            type: mongoose.Types.ObjectId,
            ref: "Supplier"
        },
        dateOfPurchase: {
            type: Date,
            default: Date.now()
        }
    }, ],
    status: {
        type: String,
        default: "Pending",
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

    // manager: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // },
    paid: {
        type: Boolean,
        default: true
    }
});
orderSchema.index({ "$**": "text" });
orderSchema.plugin(AutoIncrement, { inc_field: "ordernumber" });
export const Order = mongoose.model('Order', orderSchema);