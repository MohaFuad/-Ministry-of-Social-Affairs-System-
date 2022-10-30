const express = require('express');
const router = express.Router();
const { authenticateUser,} = require('../middleware/authentication');
const {
    getAllStates,getSingleState,
    deleteState ,createState ,updateState
  } = require('../controllers/StateController')
  
  router.route('/').get(authenticateUser,getAllStates).post(authenticateUser,createState)

  router.route('/:id').get(authenticateUser,getSingleState )
  router.route('/:id').delete(authenticateUser,deleteState ).patch(authenticateUser,updateState)

  module.exports = router;