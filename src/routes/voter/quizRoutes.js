const express = require('express');
const router = express.Router();
const quizController = require('../../controllers/voter/quizController');

router.post('/', quizController.createQuiz);
router.get('/', quizController.getAllQuizzes);

module.exports = router;