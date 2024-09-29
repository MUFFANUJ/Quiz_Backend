const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json()); 

app.get("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

const voterAuthRoutes = require("./routes/voter/auth");
const quizRoutes = require('./routes/voter/quizRoutes');
const questionRoutes = require('./routes/voter/questionRoutes');
const optionRoutes = require('./routes/voter/optionRoutes');
const scoreRoutes = require('./routes/voter/scoreRoutes');
const eventRoutes = require('./routes/voter/eventRoutes');
app.use('/quiz', quizRoutes);
app.use("/api/voter/auth", voterAuthRoutes);
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);
app.use('/scores', scoreRoutes);
app.use('/api', eventRoutes);

app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app };

