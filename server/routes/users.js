'use strict';

const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/users');

router.put('/user/:id', userCtrl.getUserById, userCtrl.update, userCtrl.jsonUser);
router.put('/changePassword', userCtrl.changePassword, userCtrl.jsonUser);
router.get('/users', userCtrl.getUsers, userCtrl.jsonUser);
router.get('/user/:id', userCtrl.getUserById, userCtrl.jsonUser);


module.exports = router;
