import { authenticatesupplier, authenticateuser } from "../../MiddleWare";
import { Supplier } from "../Models/Supplier";
import { Router } from "express";
const router = Router();

//Login 
router.post("/login", (req, res) => { // If email or password fields are not entered return error
    if (!req.body.email) {
        return res.status(400).send({
            err: "email field is required !",
        });
    }
    if (!req.body.password) {
        return res.status(400).send({
            err: "password feild is required !",
        });
    }
    const supplierData = {
        email: req.body.email,
        password: req.body.password,
    };

    Supplier.findByCredentials(supplierData.email, supplierData.password) // Checks the username and password of supplier
        .then((supplier) => {
            return supplier.generateAuthToken();
        }).then((token) => {
            // res.header("x-auth", token).status(200).send(supplier);
            res.status(200).send({
                supplier: newsupplier,
                token: token
            });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
});
//Register
router.route('/register')
    .post(function(req, res) {

        var newsupplier = new Supplier(); // create a new instance of the Supplier model
        newsupplier.username = req.body.username;
        newsupplier.email = req.body.email;
        newsupplier.address = req.body.address;
        newsupplier.mobileNumber = req.body.mobileNumber;
        newsupplier.dateOfBirth = req.body.dateOfBirth;
        newsupplier.firstname = req.body.firstname;
        newsupplier.lastname = req.body.lastname;
        newsupplier.password = req.body.password;
        newsupplier.companyName = req.body.companyName;
        newsupplier.rating = req.body.rating;
        newsupplier.numberOfRatings = req.body.numberOfRatings;
        newsupplier.blocked = false;
        newsupplier.imageURL = req.body.imageURL;
        newsupplier.nationalID = req.body.nationalID;

        newsupplier.save().then(res => (newsupplier.generateAuthToken())).then(token => {
                res.status(200).send({
                    supplier: newsupplier,
                    token: token
                });
            })
            .catch((err) => {
                res.status(400).send({
                    err: err.message ? err.message : err,
                });
            });;

    })

router.post("/logout", authenticatesupplier, (req, res) => {
    req.supplier.removeToken(req.token).then(logoutres => res.status(200).send({ msg: "Supplier logged out successfully" })).catch((err) => {
        res.status(400).send({
            err: err.message ? err.message : err,
        });
    });
})
router.get('/info', authenticatesupplier, (req, res) => {
    res.status(200).send(req.supplier)
})

router.patch('/update', authenticatesupplier, (req, res) => {
    Supplier.findOneAndUpdate({ _id: req.user._id }, { $set: req.body }, { new: true }).then(updatedsupplier => res.status(200).send({ supplier: updatedsupplier }))
})

router.get('/viewsupplier/:supplier_id', (req, res) => {
    Supplier.findById(req.params.supplier_id).then(supplier => {
            if (!supplier) {
                throw { err: "No supplier with this id" }
            }
            res.status(200).send(supplier);

        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });;
})
router.get('/allsuppliers', function(req, res) {
    Supplier.find(function(err, Supplier) {
        if (err)
            res.send(err);
        res.json(Supplier);
    });
})

router.patch('/ratesupplier/:supplier_id', authenticateuser, (req, res) => {
    Supplier.findOneAndUpdate({ _id: req.params.supplier_id }, { $inc: { rating: req.body.rating, numberOfRatings: 1 } }, { new: true }).then(updatedsupplier => res.status(200).send({ supplier: updatedsupplier }))

})


//Login done
//Logout done
//Register done
//View my Info done
//Edit my Info done
//Add products done
//View my products done not tested
//Edit my products info (Price,Photos,name,description,etc..) done not tested
//View orders sent to me from users and view their status 
//Send final price to user based on his order
//Rate customer done tested

export const supplierController = router;