import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
   <Auth0Provider
    domain="dev-x3al2aqvpgpv36ta.us.auth0.com"
    clientId="UispeXNY0f5XXwnYTpTxlodQT3BKNFrf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  
);
