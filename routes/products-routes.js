const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel');

// products/add
router.post('/add',
    function (req, res) {
        let newDocument = {
            "brand": req.body.brand,
            "price": req.body.price,
            "category": req.body.category,
            "origin": req.body.origin,
            "dietaryNeeds": req.body.dietaryNeeds,
            "storageReq": req.body.storageReq,
            "shelfLife": req.body.shelfLife
        }

        ProductModel
            .create(newDocument)
            .then(
                function (dbDocument) {
                    res.json(dbDocument)
                }
            )
            .catch(
                function(error) {
                    console.log('/addproduct error', error);
                    res.send('An error occured');
                }
            )
    }
);

// products/listing
router.post('/list',
    function(req, res) {
        ProductModel
        .find(req.query)
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){
                console.log('products/list error', error);

                res.send('An error occured');
            }
        )
    }
);

// products/update
router.put('/update',
    
);

module.exports = router;