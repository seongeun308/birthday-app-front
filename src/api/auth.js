import axios from "axios";

export const login = async ({ email, password }) => {
  const res = await axios.post("http://localhost:8080/login", {
    email,
    password,
  });
  
  return res.data.data;
};