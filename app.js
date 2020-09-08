const express = require ('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

//logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cors for all
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Headers','*');
    if (req.method === "OPTIONS"){
        res.header('Access-Controll-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next(); 
});

//Routes
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
  
    next(error);
});

app.use((error, req, res, next) => {
    res.status( error)
    res.json({error})
       
});

module.exports = app;
