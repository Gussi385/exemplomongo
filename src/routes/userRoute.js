const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/user', userController.getUsers);
router.post('/user', userController.createUser);
router.get('/user/:id', userController.detailsUser);

module.exports = router;
