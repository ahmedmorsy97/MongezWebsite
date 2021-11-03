const router = Router();


router.post("/createcompanyadmin/:company_id", authenticateadmin, (req, res) => {

    var newuser = new User(); // create a new instance of the User model
    newuser.username = req.body.username;
    newuser.email = req.body.email;
    newuser.mobileNumber = req.body.mobileNumber;
    newuser.firstname = req.body.firstname;
    newuser.lastname = req.body.lastname;
    newuser.password = req.body.password;
    newuser.employeeLevel = "CompanyAdmin";
    newuser.company = company_id;
    newuser.save().then(userres => { //ERROR

            // Company.findOneAndUpdate({ _id: req.params.company_id }, { $push: { admins: userres._id } }, { new: true })
            //     .then(updatedcompany => res.status(200).send({ company: updatedcompany }))

        })
        .catch((err) => {
            res.status(400).send({
                err: err.message ? err.message : err,
            });
        });

});





export const AdminController = router;

//View All user's order history done not tested
//Block suppliers and users done not tested
//Unblock supplier and users done not tested
//Block and Unblock company done not tested ( HOW WILL WE BLOCK AND UNBLOCK ALL COMPANY USERS WHEN COMPANY IS BLCOKED OR UNBLOCKED)
//Cancel user's orders 
//Creates Company done tested
//Sets Company Admin done tested
//Edit any product price done not tested