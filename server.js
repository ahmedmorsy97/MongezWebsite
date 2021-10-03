// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("DB connection alive");
});

//Models lives here

var Users = require('./BackEnd/Models/User');
var Suppliers = require('./BackEnd/Models/Supplier');
// const Supplier = require('./BackEnd/Models/Supplier');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
// 	res.json({ message: 'hooray! welcome to our api!' });	
// });

// // on routes that end in /Users
// ----------------------------------------------------
router.route('/user')
    // create a User (accessed at POST http://localhost:8080/user)
    .post(function(req, res) {

        var newuser = new Users(); // create a new instance of the User model
        newuser.username = req.body.username;
        newuser.email = req.body.email;
        newuser.address = req.body.address;
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
        // newuser.cart = req.body.cart;
        // newuser.orders = req.body.orders;

        newuser.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
    })


//     // 	// get all the Users (accessed at GET http://localhost:8080/api/user)
.get(function(req, res) {
    Users.find(function(err, Users) {

        if (err)
            res.send(err);

        res.json(Users);
    });
});


// // // on routes that end in /Users/:User_id
// // // ----------------------------------------------------
router.route('/user/:user_id')

.get(function(req, res) {
    Users.findById(req.params.user_id, function(err, Users) {
        if (err)
            res.send(err);
        res.json(Users);
    });
})

router.route('/usercart/:user_id')

.get(function(req, res) {
    Users.findById(req.params.user_id, function(err, Users) {
        if (err)
            res.send(err);
        res.json(Users.cart);
    });
})

router.route('/userorders/:user_id')

.get(function(req, res) {
    Users.findById(req.params.user_id, function(err, Users) {
        if (err)
            res.send(err);
        res.json(Users.orders);
    });
})

router.route('/editUserInfo/:user_id')
    .patch(function(req, res) {

        Users.findByIdAndUpdate(req.params.user_id, req.body,
            function(err, updateduser) {

                if (err) {

                    console.log(err)
                } else {
                    res.json({ message: 'User info updated!' });

                }
            })
    });



// SUPPLIER
router.route('/supplier')
    // create a User (accessed at POST http://localhost:8080/supplier)
    .post(function(req, res) {

        var newsupplier = new Suppliers(); // create a new instance of the User model
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


        newsupplier.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Supplier created!' });
        });
    })
    //     // 	// get all the Users (accessed at GET http://localhost:8080/api/Supplier)
    .get(function(req, res) {
        Suppliers.find(function(err, Suppliers) {

            if (err)
                res.send(err);

            res.json(Suppliers);
        });
    });


// // // on routes that end in /Suppliers/:Supplier_id
// // // ----------------------------------------------------
router.route('/supplier/:supplier_id')

.get(function(req, res) {
    Suppliers.findById(req.params.supplier_id, function(err, Suppliers) {
        if (err)
            res.send(err);
        res.json(Suppliers);
    });
})

router.route('/editSupplierInfo/:supplier_id')
    .patch(function(req, res) {

        Suppliers.findByIdAndUpdate(req.params.user_id,
            function(err, updatedsupplier) {

                if (err) {

                    console.log(err)
                } else {
                    res.json({ message: 'Username updated!' });

                }
            })
    });



// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);