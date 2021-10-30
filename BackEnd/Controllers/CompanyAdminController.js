const { authenticateCompanyadmin, authenticateadmin, authenticatemanager } = require("../../MiddleWare");
import { Company } from "../Models/Company";
import { Router } from "express";
const router = Router();

router.patch('/addmanager/:manager_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $push: { managers: req.params.manager_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})

router.patch('/addemployee/:employee_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $push: { employees: req.params.employee_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
router.patch('/addadmin/:admin_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $push: { admins: req.params.admin_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
router.patch('/removeemployee/:employee_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $pull: { employees: req.params.employee_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})

router.patch('/removemanager/:manager_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $pull: { managers: req.params.manager_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
router.patch('/removeadmin/:admin_id', authenticateCompanyadmin, (req, res) => {
    Company.findOneAndUpdate({ admins: { $in: req.user._id } }, { $pull: { admins: req.params.admin_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})









export const companyAdminController = router;
// Adds Managers done tested
//Adds Employees to the company done tested
//Remove Managers done tested
//Remove Employees done tested
//Add admin done tested
//Remove admin done tested