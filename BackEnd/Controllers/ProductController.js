import { Router } from "express";
import { authenticateadmin, authenticatesupplier } from "../../MiddleWare";
import { Product } from "../Models/Product";
const router = Router();

router.post("/getall", (req, res) => { // Gets all products
    const { queryBody, search, page, sort, limit } = req.body;
    const skip = limit * (page - 1);
    if (search) queryBody.$text = { $search: search };
    Product.find({ isremoved: false, ...queryBody })
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .then(async(products) => {
            const count = await Product.countDocuments({ isremoved: false, ...queryBody })
                .sort(sort);
            const pages = Math.ceil(count / limit);
            res.status(200).send({ products, pages, count });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
});

router.post("/create", authenticatesupplier, (req, res) => {

    var newproduct = new Product(); // create a new instance of the Product model
    newproduct.productName = req.body.productName;
    newproduct.photoLinks = req.body.photoLinks;
    newproduct.description = req.body.description;
    newproduct.specs = req.body.specs;
    newproduct.priceRange = req.body.priceRange;
    newproduct.percentageDiscount = req.body.percentageDiscount;
    newproduct.priceDiscount = req.body.priceDiscount;
    newproduct.rating = req.body.rating;
    newproduct.supplier = req.supplier_id;
    newproduct.quantity = req.body.quantity;
    newproduct.category = req.body.category;
    newproduct.Subcategory = req.body.Subcategory;
    newproduct.save().then(product => {
            res.status(200).send({ product: newproduct });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})


router.get("/myproducts/:supplier_id", authenticatesupplier, (req, res) => {
    Product.find({ supplier: req.params.supplier_id }).then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})



router.get('/viewproduct/:product_id', (req, res) => {
    Product.findById(req.params.product_id).then(product => {
            if (!product) {
                throw { err: "No product with this id" }
            }
            res.status(200).send(product);

        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });;
})
router.patch("/editmyproduct", authenticatesupplier, (req, res) => {
    Product.findOneAndUpdate({ _id: req.body._id, supplier: req.supplier._id }, { $set: req.body }, { new: true }).then(updatedproduct => res.status(200).send({ updatedproduct: updatedproduct }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });


})
router.patch("/editsupplierproduct/:product_id", authenticateadmin, (req, res) => {
    Product.findOneAndUpdate({ _id: req.params }, { $set: req.body }, { new: true }).then(updatedproduct => res.status(200).send({ updatedproduct: updatedproduct }))
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });


})


export const productController = router;