import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { msalConfig } from './Config';

// MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on
// re-renders.

const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first accour
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0){
  msalInstance.setActiveAccount(msalInstance.getActiveAccount()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType == EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account; 
      msalConfig.setActiveAccount (account);
  }
});

const root =  ReactDOM. createRoot(document.getElementById('root'));
root.render(
<App instance= {msalInstance}/>
);