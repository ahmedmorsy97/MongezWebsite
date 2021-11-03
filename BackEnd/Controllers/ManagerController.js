import { Router } from "express";
import { authenticatemanager } from "../../MiddleWare";
import { Company } from "../Models/Company";
const router = Router();

router.patch('/addemployee/:employee_id', authenticatemanager, (req, res) => {

    Company.findOneAndUpdate({ managers: { $in: req.user._id } }, { $push: { employees: req.params.employee_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})
router.patch('/addmanager/:manager_id', authenticatemanager, (req, res) => {

    Company.findOneAndUpdate({ managers: { $in: req.user._id } }, { $push: { managers: req.params.manager_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})

router.patch('/removeemployee/:employee_id', authenticatemanager, (req, res) => {
    Company.findOneAndUpdate({ managers: { $in: req.user._id } }, { $pull: { employees: req.params.employee_id } }, { new: true }).then(updatedlist => res.status(200).send({ list: updatedlist }))
})



export const ManagerController = router;