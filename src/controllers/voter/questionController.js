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

// async function deleteQuestion(req, res) {
//   const { id } = req.params;
//   const questionId = id
//   try {
//     // await prisma.question.deleteMany({
//     //   where: { id: parseInt(id) }
//     // });
//     await prisma.option.deleteMany({
//       where: { questionId: parseInt(questionId, 10) }
//     });

//     // Then, delete related scores if necessary
//     await prisma.score.deleteMany({
//       where: { questionId: parseInt(questionId, 10) }
//     });

//     // Now delete the question
//     const deletedQuestion = await prisma.question.delete({
//       where: { id: parseInt(questionId, 10) }
//     });

//   //   res.status(200).json(deletedQuestion);
//   // } catch (error) {
//   //   res.status(500).json({ error: error.message });
//   // }
//     res.status(204).send(deletedQuestion);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

async function deleteQuestion(req, res) {
  const { id } = req.params;
  const questionId = parseInt(id, 10); // Parse the questionId from request params

  try {
    // First, delete related options for the question
    await prisma.option.deleteMany({
      where: { questionId: questionId }
    });

    // Find the quizId for the question
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      select: { quizId: true } // Select only the quizId
    });

    // If the question exists, delete related scores for the quizId
    if (question) {
      await prisma.score.deleteMany({
        where: { quizId: question.quizId }
      });
    }

    // Now delete the question itself
    const deletedQuestion = await prisma.question.delete({
      where: { id: questionId }
    });

    // Respond with the deleted question data
    res.status(204).send({message:"deleted succesfully"}); // 204 No Content since we are deleting

  } catch (error) {
    // Catch and handle any errors
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
