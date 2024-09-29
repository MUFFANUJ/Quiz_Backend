const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/voter/eventController');

// Define the route for logging events
router.post('/events', eventController.logEvent);

module.exports = router;
