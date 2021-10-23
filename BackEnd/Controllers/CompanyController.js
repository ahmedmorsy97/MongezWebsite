import { authenticateadmin, authenticatemanager } from "../../MiddleWare";
import { Company } from "../Models/Company";
import { Router } from "express";
// import { createCompanyAdmin } from "./UserController";
const router = Router();


router.post("/createcompany", authenticateadmin, (req, res) => {

    var newcompany = new Company(); // create a new instance of the User model
    newcompany.name = req.body.name;
    newcompany.email = req.body.email;
    newcompany.address = req.body.address;
    newcompany.companyNumber = req.body.companyNumber;


    newcompany.save().then(companyres => {
            res.status(200).send({ company: newcompany });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})

router.patch('/update', authenticateadmin, (req, res) => {
    Company.findOneAndUpdate({ _id: req.user._id }, { $set: req.body }, { new: true }).then(updatedcompany => res.status(200).send({ company: updatedcompany }))
})

router.post('/addCompanyAdmin/:company_id', authenticateadmin, (req, res) => {

    Company.findOneAndUpdate({ _id: req.params.company_id }, { $push: { admins: req.userres._id } }, { new: true })
        .then(updatedcompany => res.status(200).send({ company: updatedcompany }))

    .catch((err) => {
        res.status(400).send({
            err: err.message ? err.message : err,
        });
    });
})

//Create company done not tested
//Edit company done not tested
//Add employees done by manager and admin (first manager is added by the admin) done not tested
//Remove employees done not tested
//Remove manager done not tested (Do we add manager remove manager? not only admin?)
//Delete company and employees (done by the admin) done not tested by the update method


export const companyController = router;