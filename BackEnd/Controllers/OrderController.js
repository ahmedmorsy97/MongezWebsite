import { Router } from "express";
import { authenticateadmin, authenticatemanager, authenticateuser } from "../../MiddleWare";
import { Order } from "../Models/Order";
const router = Router();

// router.post("/createbulkorder", authenticateuser, (req, res) => {

//     var neworder = new Order(); // create a new instance of the User model
//     neworder.products = req.body.products;
//     neworder.status = "pending";
//     neworder.price = req.body.price;
//     neworder.user = req.user._id;
//     //SEND TO REQUEST SUPPLIER 
//     neworder.save().then(res => {
//             res.status(200).send({ order: neworder });
//         })
//         .catch((err) => {
//             res.status(400).send({
//                 err: err.message ? err.message : err,
//             });
//         });
// })  

router.post("/createorder", authenticateuser, (req, res) => {

    var neworder = new Order();
    neworder.products = req.body.products;
    neworder.status = "pending";
    neworder.price = req.body.price;
    neworder.user = req.user._id;
    neworder.save().then(res => {
            res.status(200).send({ order: neworder });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.patch("/changeorderinfo", authenticatesupplier, (req, res) => {
    Order.findOneAndUpdate({ _id: req.body._id, supplier: req.supplier._id }, { $set: req.body }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})



router.get("/myordersemployee", authenticateuser, (req, res) => {
    Order.find({ user: req.user._id }).then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.get("/myemployeeorders/:employee_id", authenticatemanager, (req, res) => { // Missing checking if this is my direct manager
    Order.find({ user: req.params.employee_id }).then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

// router.get("/vieworderssupplier")

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

router.get('/viewallorders', authenticateadmin, function(req, res) {
    Order.find(function(err, Order) {
        if (err)
            res.send(err);
        res.json(Order);
    });
})



//create order done not tested
//change order status done not tested
//cancel order by employee(CHECK STATUS BEFORE CANCELLING  NOT DONE) done not tested
//How to cancel just part of the order?
//cancel order by manager(CHECK STATUS BEFORE CANCELLING NOT DONE ) done not tested
//cancel order by admin done not tested
//When order is done if product price is altered it shoudn't be altered in the order view so i added priceatpurchase


//The order can be sent to the supplier and only view the products that concerns him
//When order is created it should be pushed in the pending list of the supplier concerned
//How will the supplier view the orders he has done before?

export const orderController = router;