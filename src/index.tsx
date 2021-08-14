import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the Auth0Provider from the @auth0 package
import { Auth0Provider } from '@auth0/auth0-react';

// Auth0 credentials come from the Auth0 dashboard (https://manage.auth0.com)
// We store them in our dotenv file (see .env.example)
const Auth0Credentials = {
  domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
  clientId: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
  redirectUri: window.location.origin,
};
console.log({ Auth0Credentials });

// Now we can wrap our app with it.
// Check Demo.tsx to see how we use it.
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...Auth0Credentials}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
