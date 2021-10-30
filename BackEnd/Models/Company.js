import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
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
    companyNumber: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    admins: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    managers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    employees: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    blocked: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },

});

export const Company = mongoose.model('Company', companySchema);