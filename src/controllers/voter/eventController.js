const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.logEvent = async (req, res) => {
    const { type, userId, quizId, properties } = req.body;
    try {
        const event = await prisma.event.create({
            data: {
                type,
                userId,
                quizId,
                properties,
            },
        });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error recording event", error: error.message });
    }
};
