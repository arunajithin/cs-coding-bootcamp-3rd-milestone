const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel');

// products/add
router.post('/create',
    function(req, res) {
        
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