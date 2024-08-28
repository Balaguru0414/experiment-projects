import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, logout } = useAuth0();
  return <>{isAuthenticated ? <Home /> : <Login />}</>;
}

export default App;
