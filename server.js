// "heroku-postbuild": "npm install -g @angular/cli && cd FrontEnd; npm install && ng build --prod" 
  //   "engines": {
  //     "node": "16.13.1",
  //     "npm": "8.1.2"
  // },
// =============================================================================

import "./api/config/dbconnection";

// call the packages we need
import express, { json, urlencoded } from "express";
import path from "path";
import http from "http";
import cors from "cors";

//controllers lives here
import { userController } from "./api/controllers/UserController"
import { supplierController } from "./api/controllers/SupplierController"
import { productController } from "./api/controllers/ProductController"
import { orderController } from "./api/controllers/OrderController";
import { companyController } from "./api/controllers/CompanyController";
import { companyAdminController } from "./api/controllers/CompanyAdminController";
import { ManagerController } from "./api/controllers/ManagerController";

const publicPath = path.join(__dirname, "FrontEnd");
const port = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

// app.use(express.static(publicPath));

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


app.get("/api", (req, res) => {
  res.send("<h1>Welcome to Mongez app</h1>");
});

app.use('/api/user', userController)
app.use('/api/supplier', supplierController)
app.use('/api/product', productController)
app.use('/api/order', orderController)
app.use('/api/company', companyController)
app.use('/api/companyadmin', companyAdminController)
app.use('/api/manager', ManagerController)

// START THE SERVER
// =============================================================================

app.use(express.static(path.join(__dirname, "FrontEnd/dist/FrontEnd")));

// app.get('/*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "FrontEnd/dist/FrontEnd"))
// });


server.listen(port, () => {
    console.log('Magic happens on port ' + port);
});