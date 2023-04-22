const path = require('path');

const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();


router.get('/contactus', contactusController.getacall);


router.post('/contactus', contactusController.postsuccess);

module.exports = router;
