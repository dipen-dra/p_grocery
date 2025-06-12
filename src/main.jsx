// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { AppContextProvider } from './context/AppContext.jsx';

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <BrowserRouter>
// //   <AppContextProvider>
// //   <App />

// //   </AppContextProvider>
   
// //   </BrowserRouter>
   
 
// // );

// const { StrictMode } = React;
// const { createRoot } = ReactDOM;

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// If you are using react-toastify, you might want these here too
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 2. Create a new instance of the QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Wrap your App component with the QueryClientProvider
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* It's also a good practice to put the ToastContainer here at the top level 
        so it doesn't get re-rendered unnecessarily.
      */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </QueryClientProvider>
  </React.StrictMode>
);