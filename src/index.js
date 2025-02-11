import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-qrydnlpr5g8v3g6s.us.auth0.com"
     clientId="LP6o0um7nDzhGvMaUBpL7JU15yJ1ZI5g"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
