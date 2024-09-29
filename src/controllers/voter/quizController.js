const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createQuiz(req, res) {
  const { title, description } = req.body;
  try {
      const newQuiz = await prisma.quiz.create({
          data: {
              title,
              description
          }
      });
      res.status(201).json(newQuiz);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

async function getAllQuizzes(req, res) {
  try {
      const quizzes = await prisma.quiz.findMany();
      res.status(200).json(quizzes);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createQuiz,
  getAllQuizzes
};