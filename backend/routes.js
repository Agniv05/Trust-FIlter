const express = require('express');
const router = express.Router();
const controller = require('../controllers/phoneController');

// Routes
router.post('/add', controller.addPhoneNumber);
router.get('/list', controller.listPhoneNumbers);
router.post('/analyze', controller.analyzeMessage);

module.exports = router;
