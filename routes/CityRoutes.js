const express = require('express');
const router = express.Router();
const { authenticateUser,} = require('../middleware/authentication');
const {
    getAllCities,getSingleCity,
    deleteCity ,createCity ,updateCity
  } = require('../controllers/CityController')
  
  router.route('/').get(authenticateUser,getAllCities).post(createCity)

  router.route('/:id').get(authenticateUser,getSingleCity )
  router.route('/:id').delete(authenticateUser,deleteCity ).patch(authenticateUser,updateCity)

  module.exports = router;