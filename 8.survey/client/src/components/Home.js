import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Home = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };
    fetchQuestions();
  }, []);

  const handleResponseChange = (question, value) => {
    setResponses({ ...responses, [question]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You must be logged in to submit your responses.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/surveys", {
        useremail: user.email,
        responses: responses,
      });
      setSubmitted(true);
      alert("Responses submitted successfully.");
    } catch (error) {
      console.error("Error submitting responses", error);
      alert("There was an error submitting your responses.");
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8">
        <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-8 text-gray-800 relative">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute right-5 top-5 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => logout()}
          >
            Logout
          </button>
          <h1 className="text-3xl font-extrabold mb-6 text-center">
            Survey Questions
          </h1>
          <form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div
                key={q._id}
                className="mb-6 bg-gray-100 p-4 rounded-lg shadow-inner"
              >
                <p className="text-xl font-semibold mb-4">{q.question}</p>
                <textarea
                  required
                  rows="4"
                  placeholder="Your answer here..."
                  onChange={(e) =>
                    handleResponseChange(q.question, e.target.value)
                  }
                  className="w-full min-h-12 max-h-12 border rounded-lg p-2 bg-white"
                  disabled={submitted}
                />
              </div>
            ))}
            <input
              type="submit"
              className={`w-full ${
                submitted ? "bg-gray-500" : "bg-green-500"
              } hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg
               shadow-lg mt-8 transform hover:scale-105 transition-transform duration-200 focus:outline-none 
               focus:ring-2 focus:ring-green-400`}
              disabled={submitted}
            />
          </form>
        </div>
      </div>
    )
  );
};

export default Home;
