const { authenticateCompanyadmin } = require("../../MiddleWare");
import { Company } from "../Models/Company";
const router = Router();

router.patch('/addmanager', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ _id: req.user._id }, { $push: { managers: { manager: req.body.userid } } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})

router.patch('/addemployee', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ _id: req.user._id }, { $push: { employees: { employee: req.body.userid } } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
router.patch('/removeemployee/:employee_id', authenticateCompanyadmin, (req, res) => {
    User.findOneAndUpdate({ _id: req.employee_id }, { $pull: { employees: { _id: req.params.employee_id } } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})

router.patch('/removemanager/:manager_id', authenticateCompanyadmin, (req, res) => {
    User.findOneAndUpdate({ _id: req.manager_id }, { $pull: { managers: { _id: req.params.manager_id } } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
export const companyAdminController = router;
// Adds Managers done not tested
//Adds Employees to the company done not tested
//Remove Managers done not tested
//Remove Employees done not tested