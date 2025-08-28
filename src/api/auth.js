export async function loginRequest({ email, password }) {
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || "Login failed");
  }

  // ✅ 서버가 반환하는 형태에 따라 조정 필요
  // 예: { data: { accessToken, user } }
  return res.json();
}