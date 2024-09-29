const express = require('express');
const router = express.Router();
const questionController = require('../../controllers/voter/questionController');

router.post('/', questionController.createQuestion);
router.get('/', questionController.getAllQuestions);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);
router.get('/:id', questionController.getQuestionById);

module.exports = router;
