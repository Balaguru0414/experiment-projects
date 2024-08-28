import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-4ftujhmyhitv8ehp.us.auth0.com"
    clientId="IFI3k0HcyvvBNO3LaR88CJGOuxlYJcLx"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
