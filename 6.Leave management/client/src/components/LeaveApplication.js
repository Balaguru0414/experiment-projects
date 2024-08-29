import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const LeaveApplication = () => {
  const { user } = useAuth0(); // Get the authenticated user's details
  const [leaveType, setLeaveType] = useState("");
  const [leaveDays, setLeaveDays] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/leaves/apply",
        {
          email: user?.email, // Send the user's email
          leaveType,
          leaveDays,
        }
      );

      setMessage(response.data.message);
      setLeaveType("");
      setLeaveDays(0);
    } catch (error) {
      setMessage("Failed to apply for leave.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Apply for Leave
      </h2>
      {message && <p className="text-center mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Leave Type
          </label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Leave Type</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Medical Leave">Medical Leave</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Days
          </label>
          <input
            type="number"
            min={0}
            value={leaveDays}
            onChange={(e) => setLeaveDays(e.target.value)}
            className="block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
