import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fgdnwk6b3wx7z6wg.us.auth0.com"
      clientId="i1j8rMd2YJiDuFwh3CvBeOEuORaGxxbM"
      authorizationParams={{
        redirect_uri:
          "https://test1-meuh7tiyp-garvits-projects-e2677b98.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
