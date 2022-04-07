import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("login")) {
        setToken(true);
      } else if (localStorage.getItem("token")) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
