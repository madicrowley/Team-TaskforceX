//use express
const express = require('express');
const router = express.Router();


//controller
const foodController = require('../controllers/foodController');

//get foods
router.get('/', foodController.getAllFood)

//post food
router.post('/create', foodController.addFood);

//post food
router.put('/update', foodController.updateFood);

// //export router
module.exports = {routes: router}