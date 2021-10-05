var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
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

module.exports = mongoose.model('Company', companySchema);