const express = require('express');
const router = express.Router();

const { authenticateUser,} = require('../middleware/authentication');
const {
  getAllUsers,getSingleUser,
  updateUser,updateUserPassword
} = require('../controllers/UserController');

router.route('/').get(authenticateUser,getAllUsers);

router.route('/updateUser').patch(authenticateUser,updateUser);

router.route('/updateUserPassword').patch(authenticateUser,updateUserPassword);

router.route('/:id').get(authenticateUser,getSingleUser);

module.exports = router;
