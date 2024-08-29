// ./src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, logout } = useAuth0();
  return (
    <nav className="flex justify-between bg-blue-500 p-4 text-white">
      <div>
        <Link className="mr-4" to="/">
          Apply Leave
        </Link>
        <Link to="/status">Leave Status</Link>
      </div>
      <div className="flex items-center gap-4">
        <h1>
          Hi <span className="text-xl font-bold">{user.name}</span>
        </h1>

        <button
          className="bg-red-500 text-white px-4 py-1 rounded"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
