import mongoose from "mongoose";
import mongoose_sequence from "mongoose-sequence";
import mongooseautopopulate from "mongoose-autopopulate";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import _ from "lodash";
import { secretOrPrivateKey } from "../config";

// Payement info 
const AutoIncrement = mongoose_sequence(mongoose);
const userSchema = mongoose.Schema({
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
    company: {
        type: mongoose.Types.ObjectId,
        ref: "Company"
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dateOfBirth: {
        type: Date,
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
    employeeLevel: {
        type: String,
        required: true,
        trim: true,
    },
    wallet: {
        type: Number,
    },
    limit: {
        type: Number,
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
        default: true
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

});

userSchema.plugin(AutoIncrement, { inc_field: "userId" });
userSchema.plugin(mongooseautopopulate);

userSchema.pre("save", async function () {
    if (this.isModified("password"))
        this.password = await hash(this.password, 10);
});
userSchema.pre("findOneAndUpdate", async function () {
    if (this._update && this._update.password)
        this._update.password = await hash(this._update.password, 10);
});

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    return _.omit(userObject, ["isBanned", "password", "tokens", "__v"]);
};

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = "auth";
    const token = jwt.sign({
            _id: user._id.toHexString(),
            access
        },
        secretOrPrivateKey
    );
    user.tokens.push({
        access,
        token,
    });

    return user.save().then(() => {
        return token;
    });
};

userSchema.methods.removeToken = function (token) {
    const user = this;

    return user.updateOne({
        $pull: {
            tokens: {
                token,
            },
        },
    });
};

userSchema.statics.findByToken = function (token) {
    const User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, secretOrPrivateKey);
    } catch (err) {
        return Promise.reject({
            message: err,
        });
    }

    return User.findOne({
        _id: decoded._id,
        "tokens.token": token,
        "tokens.access": "auth",
    });
};

userSchema.statics.findByCredentials = function (email, password) {
    const User = this;

    return User.findOne({
        email
    }).then((user) => {
        if (!user) {
            return Promise.reject({
                message: "email is incorrect !!",
            });
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject({
                        message: "password is incorrect !!",
                        err,
                    });
                }
            });
        });
    });
};

export const user = mongoose.model('User', userSchema);