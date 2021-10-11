import { Router } from "express";
import User from "../Models/User";

const router = Router();
//Login
router.post("/login", (req, res) => {
    if (!req.body.email) {
      return res.status(400).send({
        err: "email feild is required !",
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
    
    User.findByCredentials(userData.email, userData.password)
      .then((user) => {
        return user.generateAuthToken().then((token) => {
          res.header("x-auth", token).status(200).send(user);
        });
      })
      .catch((err) => {
        res.status(400).send({
          err: err.message ? err.message : err,
        });
      });
  });
//Logout
//Register
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