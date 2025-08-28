import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import { useMe } from "./hooks/useMe.js";

export default function App() {
  const { data: res } = useMe();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage email={ res.data.email } />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}