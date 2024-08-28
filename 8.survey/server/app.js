const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
});
const Question = mongoose.model("Question", questionSchema);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/surveyApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes

// GET all questions
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mock storage for responses
let responses = [];

// POST survey responses
app.post("/api/surveys", (req, res) => {
  try {
    const { useremail, responses: userResponses } = req.body;

    // Save responses (in-memory example)
    responses.push({ useremail, responses: userResponses });

    res.status(201).json({ message: "Responses submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
console.log(responses);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
