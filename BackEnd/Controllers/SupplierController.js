import {
    Supplier
} from "../Models/Supplier";

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
    .post(function (req, res) {

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

//Login
//Logout
//Register
//View my Info
//Edit my Info 
//Add products 
//View my products 
//Edit my products info (Price,Photos,name,description,etc..)
//View orders sent to me from users and view their status 
//Send final price to user based on his order
//Rate customer
export const supplierController = router;