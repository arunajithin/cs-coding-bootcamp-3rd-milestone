const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel');

// users/register
// http://localhost:3001/users/registration
router.post('/registration',
    function (req, res) {
        let newDocument = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "password": req.body.password,
            "phone": req.body.phone
        };

        UserModel
            .create(newDocument)
            .then(
                function (dbDocument) {
                    res.json(dbDocument)
                }
            )
            .catch(
                function (error) {
                    console.log('/registration error', error);
                    res.send('An error occured');
                }
            )
    }
);

// users/login
router.post('/login',
    function(req, res) {

    }
);

// users/update
router.put('/update',
    function(req, res){
        let updates = {}

        if(req.body.firstName){
            updates['firstName'] = req.body.firstName;
        };
        if(req.body.lastName){
            updates['lastName'] = req.body.lastName;
        };
        if(req.body.phone){
            updates['phone'] = req.body.phone;
        };
        if(req.body.password){
            updates['password'] = req.body.password;
        };

        UserModel
        .findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                $set: updates
            },
            {
                new: true
            }
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('/users/update error', error);
                res.send('An error occured');
            }
        )
    }
);

module.exports = router;