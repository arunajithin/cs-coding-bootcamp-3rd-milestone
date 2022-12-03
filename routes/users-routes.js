const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel.js');

// http://localhost:3001/users/registration
router.post('/registration',
    function (req, res) {
        let newDocument = {
            "fristName": req.body.fristName,
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

module.exports = router;