import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
