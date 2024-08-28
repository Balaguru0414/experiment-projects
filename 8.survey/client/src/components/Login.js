import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  // const handleLogin = () => {
  //   // Simulate OAuth login
  //   localStorage.setItem("auth", true);
  //   window.location.href = "/home";
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => loginWithRedirect()}
      >
        Login with OAuth
      </button>
    </div>
  );
};

export default Login;
