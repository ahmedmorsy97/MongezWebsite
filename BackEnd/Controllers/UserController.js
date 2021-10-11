import { Router } from "express";
import { User } from "../Models/User";

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
    const userData = {
        email: req.body.email,
        password: req.body.password,
    };

    User.findByCredentials(userData.email, userData.password) // Checks the username and password of user
        .then((user) => {
            return user.generateAuthToken().then((token) => {
                // res.header("x-auth", token).status(200).send(user);
                res.status(200).send({ user: newuser, token: token });
            });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
});

router.post("/register", (req, res) => {

    var newuser = new User(); // create a new instance of the User model
    newuser.username = req.body.username;
    newuser.email = req.body.email;
    newuser.mobileNumber = req.body.mobileNumber;
    newuser.dateOfBirth = req.body.dateOfBirth;
    newuser.firstname = req.body.firstname;
    newuser.lastname = req.body.lastname;
    newuser.password = req.body.password;
    newuser.levelOfPurchase = req.body.levelOfPurchase;
    newuser.rating = req.body.rating;
    newuser.numberOfRatings = req.body.numberOfRatings;
    newuser.imageURL = req.body.imageURL;
    newuser.nationalID = req.body.nationalID;
    newuser.employeeLevel = req.body.employeeLevel;
    newuser.save().then(res => (newuser.generateAuthToken())).then(token => {
            res.status(200).send({ user: newuser, token: token });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });;
})

// router.post("/logout",)

//Logout
//Register done
//login done
//View my Info
//Edit my Info 
//View Products and sort or filter them according to price or location
//Add to cart
//View Supplier Info
//Cancel Order if possible 
//Send order to supplier 
//View Order info and status
//Rate supplier
//Manager adds employees
//Manager sets employee wallet money
//Manager sets limit for each employee


export const userController = router;