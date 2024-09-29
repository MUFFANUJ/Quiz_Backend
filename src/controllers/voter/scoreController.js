const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createScore(req, res) {
    const { score, voterId, quizId } = req.body;
    try {
        const newScore = await prisma.score.create({
            data: {
                score,
                voterId,
                quizId
            }
        });
        res.status(201).json(newScore);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllScores(req, res) {
    try {
        const scores = await prisma.score.findMany();
        res.status(200).json(scores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createScore,
    getAllScores
};
