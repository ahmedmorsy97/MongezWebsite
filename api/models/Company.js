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
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },

        id: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    }],
    company: {
        type: mongoose.Types.ObjectId,
        ref: "Company"
    },
    blocked: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    taxNumber: {
        type: String,
        required: false
    },
    officialDocuments: {
        type: String,
        required: false
    },
    companylogo: {
        type: String,
        required: false
    }

});
companySchema.index({ "$**": "text" });

export const Company = mongoose.model('Company', companySchema);