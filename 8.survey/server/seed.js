const mongoose = require("mongoose");

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

const addQuestions = async () => {
  const questions = [
    "What is your age?",
    "What is your gender?",
    "What is your highest level of education?",
    "What is your current employment status?",
    "What is your occupation?",
    "What is your annual household income?",
    "What is your marital status?",
    "How many children do you have?",
    "What is your primary language spoken at home?",
    "What is your race or ethnicity?",
    "What is your country of residence?",
    "What is your state/province of residence?",
    "What is your zip/postal code?",
    "What type of residence do you live in? (e.g., apartment, house, condo)",
    "How long have you lived at your current address?",
  ];

  try {
    await Question.deleteMany({}); // Clear existing questions
    await Question.insertMany(questions.map((q) => ({ question: q })));
    console.log("Demographic questions added successfully.");
  } catch (error) {
    console.error("Error adding demographic questions:", error.message);
  } finally {
    mongoose.connection.close(); // Close connection after seeding
  }
};

// Call the function to seed the database
addQuestions();
