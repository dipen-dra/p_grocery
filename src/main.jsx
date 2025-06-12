import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <AppContextProvider>
//   <App />

//   </AppContextProvider>
   
//   </BrowserRouter>
   
 
// );

const { StrictMode } = React;
const { createRoot } = ReactDOM;

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))