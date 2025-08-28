export async function fetchMe() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:8080/me", {
    method: "GET",
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
   }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  return res.json();
}