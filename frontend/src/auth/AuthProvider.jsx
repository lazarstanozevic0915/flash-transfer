import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [ connectedWallet, setConnectedWallet ] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isWalletConnected');
  });

  // Update localStorage when auth state changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('isWalletConnected', connectedWallet);
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const connectWallet = (name) => setConnectedWallet(name);
  const disconnectWallet = () => setConnectedWallet('');
  const logout = () => {
      setIsAuthenticated(false);
      setConnectedWallet('');
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, connectWallet, disconnectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};