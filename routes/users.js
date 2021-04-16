const controlerUser = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/', controlerUser.getUser);

module.exports = router;
