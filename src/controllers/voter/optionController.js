const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createOption(req, res) {
    const { text, questionId, isCorrect } = req.body;
    try {
        const newOption = await prisma.option.create({
            data: {
                text,
                questionId,
                isCorrect
            }
        });
        res.status(201).json(newOption);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllOptions(req, res) {
    try {
        const options = await prisma.option.findMany();
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createOption,
    getAllOptions
};
