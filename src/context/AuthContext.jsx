/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const navigate = useNavigate();

  const register = (data) => {
    const existing = JSON.parse(localStorage.getItem("users")) || [];

    const emailExist = existing.find((u) => u.email === data.email);

    if (emailExist) {
      return { success: false, message: "Email already registered" };
    }
    const upUser = [...existing, data];
    localStorage.setItem("users", JSON.stringify(upUser));
    return { success: true, message: "Registration Success" };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existing = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (existing) {
      const expiryTime = Date.now() + 5 * 60 * 1000;
      setUser(existing);
      localStorage.setItem("user", JSON.stringify(existing));
      localStorage.setItem("expiry", JSON.stringify(expiryTime));
      return { success: true, message: "Login SucessFully" };
    }
    return { success: false, message: "Invalid Detail" };
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expiry");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const checkSession = () => {
      const expiryTime = localStorage.getItem("expiry");

      if (expiryTime && Date.now() > Number(expiryTime)) {
        logout();
      }
    };
    const interval = setInterval(checkSession, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRemainingTime = () => {
    const expiryTime = localStorage.getItem("expiry");

    if (!expiryTime) return 0;

    const remaining = Number(expiryTime) - Date.now();
    return remaining > 0 ? remaining : 0;
  };



  const authValue = {
    register,
    login,
    user,
    logout,
    getRemainingTime,
    setUser 
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
