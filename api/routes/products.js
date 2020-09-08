const express = require('express');

const router  = express.Router();

router.get('/', (req, res , next) => {
    res.status(200).json({
        message: 'GET request to /products'
    });
});

router.post('/', (req, res , next) => {
    const porduct = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'POST request to /products',
        createdProduct: porduct
    });
});

router.get('/:productId', (req ,res, next) => {
    const id = req.params.producdId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You reached a special ID',
            id:id
        });
     } else {
            res.status(200).json({
                message: 'You passed an ID'
            });
    
    };
});

router.patch('/:productId', (req ,res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req ,res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});
module.exports = router;