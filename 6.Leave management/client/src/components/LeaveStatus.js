import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const LeaveStatus = () => {
  const { user } = useAuth0(); // Get the authenticated user's details
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leaves", {
          params: {
            email: user.email, // Pass the user's email as a query parameter
          },
        });

        setLeaves(response.data);
      } catch (error) {
        console.error("Failed to fetch leave status:", error);
      }
    };

    fetchLeaves();
  }, [user.email]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Leave Status
      </h2>
      <ul className="divide-y divide-gray-200">
        {leaves.length > 0 ? (
          leaves.map((leave, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">
                {leave.leaveType}
              </span>
              <span className="text-sm font-semibold text-gray-500">
                {leave.leaveDays} days
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No leave applications submitted yet.
          </p>
        )}
      </ul>
    </div>
  );
};

export default LeaveStatus;
