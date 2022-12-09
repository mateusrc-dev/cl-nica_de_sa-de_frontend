import { createContext, useContext, useState } from "react";
export const AuthUserContext = createContext({});
import { api } from "../services/api";

function AuthUserProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }
  return (
    <AuthUserContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthUserContext.Provider>
  );
}

function useAuthUser() {
  const context = useContext(AuthUserContext);
  return context;
}

export { AuthUserProvider, useAuthUser };
