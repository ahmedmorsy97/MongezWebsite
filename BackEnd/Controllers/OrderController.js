import { Router } from "express";
import { authenticateuser } from "../../MiddleWare";
import { Order } from "../Models/Order";
const router = Router();

router.post("/createorder", authenticateuser, (req, res) => {

    var neworder = new Order(); // create a new instance of the User model
    neworder.products = req.body.products;
    neworder.status = "pending";
    neworder.price = req.body.price;
    neworder.user = req.user; //WHYY??

    neworder.save().then(res => {
            res.status(200).send({ user: neworder });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.patch("/changeorderinfo", authenticatesupplier, (req, res) => { //Automatic by system? Or admin? Or supplier?
    Order.findOneAndUpdate({ _id: req.body._id, supplier: req.supplier._id }, { $set: req.body }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });

})

router.get("/myorders", authenticateuser, (req, res) => {
    Order.find({ user: req.user._id }).then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.get('/vieworder/:order_id', (req, res) => {
    Order.findById(req.params.order_id).then(order => {
            if (!order) {
                throw { err: "No order with this id" }
            }
            res.status(200).send(order);

        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });;
})

//create order done not tested
//change order status done not tested
//cancel order done not tested
// view 

//If order if from multiple sources some of order is delivered some not, part cancelled? 
// How will the supplier view orders sent to him?
//Part of Order that concerns the supplier is sent to supplier to be able to give discount


export const orderController = router;