import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-74ps7j4fsnlvuuel.us.auth0.com"
    clientId="8Ubo9q3A4j7DEH4IbSbYFHaie79uzU3D"
    redirectUri={window.location.origin}
    reloadOnRedirect={false}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);


