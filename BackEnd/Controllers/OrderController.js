import { Router } from "express";
import { authenticateadmin, authenticatemanager, authenticatesupplier, authenticateuser } from "../../MiddleWare";
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
    neworder.status = "Pending";
    neworder.price = req.body.price;
    neworder.user = req.user._id;
    neworder.dateOfPurchase = req.body.dateOfPurchase;
    // neworder.manager = req.user.createdBy;
    neworder.company = req.user.company;

    neworder.save().then(orderes => {
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

    Order.find({ user: req.user._id }).populate({ path: "products.product", select: "productName _id photolinks specs description" }).populate({ path: "products.supplier", select: "firstname lastname _id" }).exec((err, orders) => {

            if (err) {
                res.status(400).send({
                    err: err.message ? err.message : err,
                });
            } else {
                res.status(200).send(orders)
            }
        })
        // .then((orders) => {
        //         res.status(200).send(orders)
        //     })
        //     .catch((err) => {
        //         res.status(400).send({
        //             err: err.message ? err.message : err,
        //         });
        //     });
})
router.get("/myorderssupplier", authenticatesupplier, (req, res) => { //NOT TESTED
        Order.find({ "products.supplier": req.supplier._id }).populate({ path: "products.product", select: "productName _id photolinks specs description" }).populate({ path: "user", select: "firstname lastname _id" }).exec((err, orders) => {
            if (err) {
                res.status(400).send({
                    err: err.message ? err.message : err,
                });
            } else {
                const supplierorder = JSON.parse(JSON.stringify(orders)).map(order => {
                    // console.log(order)
                    // console.log(order.products.filter(product => product.supplier == req.supplier._id))
                    return {
                        ...order,
                        products: order.products.filter(product => product.supplier == req.supplier._id)
                    }
                })
                console.log(supplierorder)
                res.status(200).send(supplierorder)
            }
        })

    })
    // .catch((err) => {
    //     res.status(400).send({
    //         err: err.message ? err.message : err,
    //     });
    // });
    // })

router.get("/viewmyemployeeorders", authenticatemanager, (req, res) => {
    Order.find({ manager: req.user._id }).then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.get("/myemployeeorders/:employee_id", authenticatemanager, (req, res) => {
    Order.find({ user: req.params.employee_id, manager: req.user._id }).then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

// router.get("/vieworderssupplier")

router.get('/vieworder/:order_id', authenticateuser, (req, res) => {
    Order.findOne({ _id: req.params.order_id, $or: { user: req.user._id, manager: req.user._id } }).then(order => {
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
router.get('/viewallordersofcompany', authenticateadmin, function(req, res) {
    Order.find(function(err, Order) {
        if (err)
            res.send(err);
        res.json(Order);
    });
})


router.patch("/changetotalorderstatus/:order_id", authenticatesupplier, (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.order_id, "products.supplier": req.user._id, status: "Pending" }, { $set: { status: "Delivered" } }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.patch("/changepartialorderstatus/:order_id", authenticatesupplier, (req, res) => {
    Order.findOneAndUpdate({ _id: req.params.order_id, "products.supplier": req.supplier._id, "products.product": req.body.product._id }, { $set: { "products.$.status": req.body.status } }, { new: true }).then(updatedorder => res.status(200).send({ updatedorder: updatedorder }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
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