import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain='dev-74ps7j4fsnlvuuel.us.auth0.com'
    clientId='WN3aZiokEien1zyuNxwpq7bTa7bosKcZ'
    redirectUri={window.location.origin}
    reloadOnRedirect={false}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
