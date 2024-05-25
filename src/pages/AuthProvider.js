import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: JSON.parse(localStorage.getItem("cred")), // Default user state is explicitly null
  login: (email, password) => {}, // No-op default functions for login
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("cred"))); // null means not logged in

  const login = (email, password) => {
    // Simulate an authentication
    console.log("Logging in with:", email, password);
    localStorage.setItem("cred", JSON.stringify({ email, password }));
    setUser({ email, password }); // Example user data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cred");
    // localStorage.removeItem("expiryDate");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
