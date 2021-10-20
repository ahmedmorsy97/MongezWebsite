import { Supplier } from "./Backend/Models/Supplier";
import { User } from "./Backend/Models/User";

export const authenticateuser = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    User.findByToken(token)
        .then((user) => {
            if (!user) {
                throw {
                    message: "No user with this id !",
                };
            }
            req.user = user;
            req.token = token;
            next(); // to execute the coming instruction
        })
        .catch((err) => {
            res.status(401).send({
                err: err.message ? err.message : err,
            });
        });
};

export const authenticateadmin = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    User.findByToken(token)
        .then((user) => {
            if (!user) {
                throw {
                    message: "No admin with this id !",
                };
            }
            if (user.admin == false) {
                throw {
                    message: "Access Denied, Not and admin!",
                };
            }
            req.user = user;
            req.token = token;
            next(); // to execute the coming instruction
        })
        .catch((err) => {
            res.status(401).send({
                err: err.message ? err.message : err,
            });
        });
};
export const authenticatemanager = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    User.findByToken(token)
        .then((user) => {
            if (!user) {
                throw {
                    message: "No admin with this id !",
                };
            }
            if (user.employeeLevel == "Manager") {
                throw {
                    message: "Access Denied, Not and manager!",
                };
            }
            req.user = user;
            req.token = token;
            next(); // to execute the coming instruction
        })
        .catch((err) => {
            res.status(401).send({
                err: err.message ? err.message : err,
            });
        });
};


export const authenticatesupplier = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    Supplier.findByToken(token)
        .then((supplier) => {
            if (!supplier) {
                throw {
                    message: "No Supplier with this id !",
                };
            }
            req.supplier = supplier;
            req.token = token;
            next(); // to execute the coming instruction
        })
        .catch((err) => {
            res.status(401).send({
                err: err.message ? err.message : err,
            });
        });
};
// Authenticate admin done not tested
//Authenticate manager