const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createQuestion(req, res) {
  const { text, quizId, options } = req.body;
  try {
      const newQuestion = await prisma.question.create({
          data: {
              text,
              quizId,
              options: {
                  createMany: {
                      data: options
                  }
              }
          }
      });
      res.status(201).json(newQuestion);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}


async function getAllQuestions(req, res) {
    try {
        const questions = await prisma.question.findMany({
            include: {
                options: true  // To include options in the response
            }
        });
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateQuestion (req, res) {
  const { id } = req.params;
  const { text, quizId } = req.body;
  try {
    const question = await prisma.question.update({
      where: { id: parseInt(id) },
      data: { text, quizId }
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function deleteQuestion(req, res) {
  const { id } = req.params;
  try {
    await prisma.question.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getQuestionById(req, res) {
  const { id } = req.params;
  try {
    const question = await prisma.question.findUnique({
      where: { id: parseInt(id) },
      include: {
        options: true // Include options to show answers
      }
    });
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the question: " + error.message });
  }
};
module.exports = {
    createQuestion,
    getAllQuestions,updateQuestion,deleteQuestion,getQuestionById
};
