// BASE SETUP
// =============================================================================

// call the packages we need
import { path } from "path";
import express from "express";
import cors from "cors";

const app = express();

app.use(json());
app.use(
  urlencoded({
    extended: false,
  })
);

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

var port = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose = require('mongoose');
mongoose.connect(`${process.env.NODE_ENV}` === "production" ? `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@mongez.0leai.mongodb.net/mongezdb?retryWrites=true&w=majority`: 'mongodb://localhost:27017/myapp'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("DB connection alive");
});

//Models lives here

// var Users = require('./BackEnd/Models/User');
// var Suppliers = require('./BackEnd/Models/Supplier');
// var Companys = require('./BackEnd/Models/Company');

//Controllers lives here
import { userController } from "./Backend/Controllers/UserController"
import { supplierController } from "./Backend/Controllers/SupplierController"
import { productController } from "./Backend/Controllers/ProductController"
import { orderController } from "./BackEnd/Controllers/OrderController";
import { companyController } from "./BackEnd/Controllers/CompanyController";
import { companyAdminController } from "./BackEnd/Controllers/CompanyAdminController";
import { ManagerController } from "./BackEnd/Controllers/ManagerController";
// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next();
// });

app.use('/api', router);
app.use('/api/user', userController)
app.use('/api/supplier', supplierController)
app.use('/api/product', productController)
app.use('/api/order', orderController)
app.use('/api/company', companyController)
app.use('/api/companyadmin', companyAdminController)
app.use('/api/manager', ManagerController)

// START THE SERVER
// =============================================================================

app.use(express.static(path.join(__dirname, "Frontend/dist/FrontEnd")));

app.listen(port);
console.log('Magic happens on port ' + port);