import { createContext, useContext, useState, useEffect } from "react";
export const AuthUserContext = createContext({});
import { api } from "../services/api";

function AuthUserProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      console.log(email, password)
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      localStorage.setItem("@fullnessclinic:user", JSON.stringify(user));
      localStorage.setItem("@fullnessclinic:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  function signOut(navigate) {
    localStorage.removeItem("@fullnessclinic:token");
    localStorage.removeItem("@fullnessclinic:user");
    setData({});
    {
      navigate;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@fullnessclinic:token");
    const user = localStorage.getItem("@fullnessclinic:user");
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthUserContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthUserContext.Provider>
  );
}

function useAuthUser() {
  const context = useContext(AuthUserContext);
  return context;
}

export { AuthUserProvider, useAuthUser };
