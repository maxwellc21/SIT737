const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/api/message', mainController.getMessage); // API to get message data

module.exports = router;
