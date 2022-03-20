import { Supplier } from ".apimodel/Supplier";
import { User } from ".apimodel/User";

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

            if (user.employeeLevel != "Admin") {
                throw {
                    message: "Access Denied, Not an admin!",
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
            if (user.employeeLevel != "Manager") {
                throw {
                    message: "Access Denied, Not a manager!",
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
export const authenticateCompanyadmin = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];

    User.findByToken(token)
        .then((user) => {
            if (!user) {
                throw {
                    message: "No admin with this id !",
                };
            }
            if (user.employeeLevel != "CompanyAdmin") {
                throw {
                    message: "Access Denied, Not a Company Admin!",
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

export const authenticateCompanyadminorManager = (req, res, next) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    console.log("IN AUTHENTICATION");
    User.findByToken(token)
        .then((user) => {
            if (!user) {
                throw {
                    message: "No admin with this id !",
                };
            }
            console.log(user.employeeLevel);
            if (user.employeeLevel != "CompanyAdmin" && user.employeeLevel != "Manager") {
                throw {
                    message: "Access Denied, Not a Company Admin or Manager!",
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
    console.log("IN AUTH")
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