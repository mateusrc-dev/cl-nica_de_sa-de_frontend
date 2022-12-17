import axios from "axios"
export const api = axios.create({
  baseURL: "https://fullnessclinic-api.onrender.com"
})