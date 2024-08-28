import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { user } = useAuth0();
  return (
    <div className=" bg-gray-50 shadow-gray-300 shadow-md text-slate-600 text-3xl font-bold sticky top-0 z-40 py-5 rounded-lg">
      <h1 className="text-center">
        {user?.email} - Project Management Dashboard
      </h1>
    </div>
  );
}

export default Nav;
