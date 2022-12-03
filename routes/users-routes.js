const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel');

// users/register
router.post('/register',
    function(req, res) {

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