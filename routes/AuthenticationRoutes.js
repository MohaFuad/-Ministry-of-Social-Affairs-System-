const express = require('express');
const router = express.Router();

const { register, login, logout } = require('../controllers/AuthenticationController');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;