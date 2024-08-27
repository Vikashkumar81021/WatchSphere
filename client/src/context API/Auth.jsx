import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    // Example useEffect with setState
    // This should only run once or when specific dependencies change
    setAuth((prevAuth) => ({
      ...prevAuth,
      token: "someToken", // Example of setting token (remove this logic to avoid infinite loop)
    }));
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
