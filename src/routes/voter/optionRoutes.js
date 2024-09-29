const express = require('express');
const router = express.Router();
const optionController = require('../../controllers/voter/optionController');

router.post('/', optionController.createOption);
router.get('/', optionController.getAllOptions);

module.exports = router;
