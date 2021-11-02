import { Router } from "express";
import { authenticateuser } from "../../MiddleWare";
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

    var neworder = new Order(); // create a new instance of the User model
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

router.patch("/changeorderinfo", authenticatesupplier, (req, res) => { //Automatic by system? Or admin? Or supplier?
    Order.findOneAndUpdate({ _id: req.body._id, supplier: req.supplier._id }, { $set: req.body }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.patch("/cancelorder", authenticateuser, (req, res) => {
    Order.findOneAndUpdate({ _id: req.body._id, user: req.user._id }, { $set: req.body }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
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



//If order if from multiple sources some of order is delivered some not, part cancelled? 
// How will the supplier view orders sent to him?
//The order can be sent to the supplier and only view the products that concerns him
//2 order types: 1-Bulk Order can have a diffrent price 2- Normal Order immediate purchase cancelled 

export const orderController = router;