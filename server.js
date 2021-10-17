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

// var Users = require('./BackEnd/Models/User');
// var Suppliers = require('./BackEnd/Models/Supplier');
var Companys = require('./BackEnd/Models/Company');

//Controllers lives here
import { userController } from "./Backend/Controllers/UserController"
import { supplierController } from "./Backend/Controllers/SupplierController"
import { productController } from "./Backend/Controllers/ProductController"

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


//     // 	// get all the Users (accessed at GET http://localhost:8080/api/user)
// .get(function(req, res) {
//     Users.find(function(err, Users) {

//         if (err)
//             res.send(err);

//         res.json(Users);
//     });
// });


// // // on routes that end in /Users/:User_id
// // // ----------------------------------------------------
// router.route('/user/:user_id')

// .get(function(req, res) {
//     Users.findById(req.params.user_id, function(err, Users) {
//         if (err)
//             res.send(err);
//         res.json(User);
//     });
// })

// router.route('/usercart/:user_id')

// .get(function(req, res) {
//     Users.findById(req.params.user_id, function(err, Users) {
//         if (err)
//             res.send(err);
//         res.json(Users.cart);
//     });
// })

// router.route('/userorders/:user_id')

// .get(function(req, res) {
//     Users.findById(req.params.user_id, function(err, Users) {
//         if (err)
//             res.send(err);
//         res.json(Users.orders);
//     });
// })

// router.route('/editUserInfo/:user_id')
//     .patch(function(req, res) {

//         Users.findByIdAndUpdate(req.params.user_id, req.body,
//             function(err, updateduser) {

//                 if (err) {

//                     console.log(err)
//                 } else {
//                     res.json({ message: 'User info updated!' });

//                 }
//             })
//     });



// SUPPLIER



// // // on routes that end in /Suppliers/:Supplier_id
// // // ----------------------------------------------------
// router.route('/supplier/:supplier_id')

// .get(function(req, res) {
//     Suppliers.findById(req.params.supplier_id, function(err, Suppliers) {
//         if (err)
//             res.send(err);
//         res.json(Suppliers);
//     });
// })

// router.route('/editSupplierInfo/:supplier_id')
//     .patch(function(req, res) {

//         Suppliers.findByIdAndUpdate(req.params.user_id,
//             function(err, updatedsupplier) {

//                 if (err) {

//                     console.log(err)
//                 } else {
//                     res.json({ message: 'Supplier info updated!' });

//                 }
//             })
//     });
router.route('/company')
    // create a User (accessed at POST http://localhost:8080/company)
    .post(function(req, res) {

        var newcompany = new Companys(); // create a new instance of the Company model
        newuser.name = req.body.name;
        newuser.email = req.body.email;
        newuser.companyNumber = req.body.companyNumber;


        newuser.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Company created!' });
        });
    })
router.route('/editCompanyInfo/:company_id')
    .patch(function(req, res) {

        Companys.findByIdAndUpdate(req.params.user_id,
            function(err, updatedcompany) {

                if (err) {

                    console.log(err)
                } else {
                    res.json({ message: 'Company info updated!' });

                }
            })
    });

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/api/user', userController)
app.use('/api/supplier', supplierController)
app.use('/api/product', productController)
    // START THE SERVER
    // =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);