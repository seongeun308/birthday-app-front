import { Link } from "react-router-dom";

export default function HomePage({ email }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {email ? (
        <h1 className="text-2xl font-bold">Welcome, {email}!</h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">홈 화면</h1>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            로그인
          </Link>
        </>
      )}
    </div>
  );
}