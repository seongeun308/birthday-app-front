import axios from "axios";

export const fetchMe = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const res = await axios.get("http://localhost:8080/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  return res.data.data;
};