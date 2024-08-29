// ./src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LeaveApplication from "./components/LeaveApplication";
import LeaveStatus from "./components/LeaveStatus";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [leaves, setLeaves] = useState([]);

  const applyLeave = (leave) => {
    setLeaves([...leaves, leave]);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<LeaveApplication applyLeave={applyLeave} />}
            />
            <Route path="/status" element={<LeaveStatus leaves={leaves} />} />
          </Routes>
        </div>
      ) : (
        <LoginButton />
      )}
    </Router>
  );
}

export default App;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  );
};
