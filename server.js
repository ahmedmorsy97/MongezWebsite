// BASE SETUP
// =============================================================================
// Db setup
import "./BackEnd/config/DBConnection";

// call the packages we need
import express, { json, urlencoded } from "express";
import path from "path";
import http from "http";
import cors from "cors";

//Controllers lives here
import { userController } from "./Backend/Controllers/UserController"
import { supplierController } from "./Backend/Controllers/SupplierController"
import { productController } from "./Backend/Controllers/ProductController"
import { orderController } from "./BackEnd/Controllers/OrderController";
import { companyController } from "./BackEnd/Controllers/CompanyController";
import { companyAdminController } from "./BackEnd/Controllers/CompanyAdminController";
import { ManagerController } from "./BackEnd/Controllers/ManagerController";

const publicPath = path.join(__dirname, "FrontEnd");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

app.use(express.static(publicPath));

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

server.listen(port, () => {
    console.log('Magic happens on port ' + port);
});