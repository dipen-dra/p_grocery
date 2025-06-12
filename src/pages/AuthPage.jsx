import React, { useState, useEffect } from 'react';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import NavigationContext from '../../context/NavigationContext';

export const AuthPage = () => {
  const [view, setView] = useState('login'); // Default to login

  const navigate = (target) => {
    setView(target); // 'login' or 'signup' or anything else
  };

  // Provide navigation to children
  const contextValue = { navigate };

  useEffect(() => {
    // Handle deep linking via hash: #/login or #/signup
    const hash = window.location.hash.replace('#/', '');
    if (hash === 'signup') {
      setView('signup');
    } else {
      setView('login'); // Default fallback
    }

    const handleHashChange = () => {
      const updated = window.location.hash.replace('#/', '');
      setView(updated || 'login');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <NavigationContext.Provider value={contextValue}>
      {view === 'signup' ? <SignupPage /> : <LoginPage />}
    </NavigationContext.Provider>
  );
};
