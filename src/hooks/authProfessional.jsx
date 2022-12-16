import { createContext, useContext, useState, useEffect } from "react";
export const AuthProfessionalContext = createContext({});
import { api } from "../services/api";

function AuthProfessionalProvider({ children }) {
  const [data, setData] = useState({});

  async function signInProfessional({ emailProfessional, passwordProfessional }) {
    try {
      const response = await api.post("/sessionsprofessionals", { email: emailProfessional, password: passwordProfessional });
      const { professional, token } = response.data;
      localStorage.setItem("@fullnessclinic:professional", JSON.stringify(professional));
      localStorage.setItem("@fullnessclinic:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ professional, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  function signOutProfessional(navigate) {
    localStorage.removeItem("@fullnessclinic:token");
    localStorage.removeItem("@fullnessclinic:professional");
    setData({});
    {navigate}
  }

  async function updateProfileProfessional({ professional, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/professionals/avatar", fileUploadForm)
        professional.avatar = response.data.avatar
      }
      await api.put("/professionals", professional);
      localStorage.setItem("@fullnessclinic:professional", JSON.stringify(professional));
      setData({ professional, token: data.token });
      alert("Perfil atualizado");
      window.location.reload();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@fullnessclinic:token");
    const professional = localStorage.getItem("@fullnessclinic:professional");
    if (token && professional) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        professional: JSON.parse(professional),
      });
    }
  }, []);

  return (
    <AuthProfessionalContext.Provider value={{ signInProfessional, professional: data.professional, signOutProfessional, updateProfileProfessional }}>
      {children}
    </AuthProfessionalContext.Provider>
  );
}

function useAuthProfessional() {
  const context = useContext(AuthProfessionalContext);
  return context;
}

export { AuthProfessionalProvider, useAuthProfessional };
