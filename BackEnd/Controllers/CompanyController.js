import { authenticateadmin, authenticateCompanyadmin, authenticatemanager } from "../../MiddleWare";
import { Company } from "../Models/Company";
import { Router } from "express";

const router = Router();


router.post("/createcompany", authenticateadmin, (req, res) => {

    var newcompany = new Company(); // create a new instance of the User model
    newcompany.name = req.body.name;
    newcompany.email = req.body.email;
    newcompany.address = req.body.address;
    newcompany.companyNumber = req.body.companyNumber;
    newcompany.taxNumber = req.body.taxNumber;
    newcompany.officialDocuments = req.body.officialDocuments;
    newcompany.companylogo = req.body.companylogo;

    newcompany.save().then(companyres => {
            res.status(200).send({ company: newcompany });
        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });
})
router.get('/allcompanys', function(req, res) {
    Company.find(function(err, Company) {
        if (err)
            res.send(err);
        res.json(Company);
    });
})
router.patch('/updatebyCompanyadmin', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $set: req.body }, { new: true }).then(updatedcompany => res.status(200).send({ company: updatedcompany }))
})
router.patch('blockcompany/:company_id', authenticateadmin, (req, res) => {
    Company.findOneAndUpdate({ _id: req.params.company_id }, { $set: { blocked: true } }, { new: true }).then(updateduser => res.status(200).send({ updateduser: updateduser }))
})
router.patch('unblockcompany/:company_id', authenticateadmin, (req, res) => {
    User.findOneAndUpdate({ _id: req.params.company_id }, { $set: { blocked: false } }, { new: true }).then(updateduser => res.status(200).send({ updateduser: updateduser }))
})



//Create company done tested
//Edit company done tested
//Add employees done by manager and admin (first manager is added by the admin) done tested
//Remove employees done tested
//Remove manager done tested
//Delete company and employees (done by the admin) (HOW DELETE ALL COMPANY USERS?) done not tested by the update method


export const companyController = router;