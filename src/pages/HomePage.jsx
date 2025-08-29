import { useMe } from "../hooks/useMe";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data: user, isError } = useMe();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isError || !user ? (
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          로그인
        </Link>
      ) : (
        <h1 className="text-2xl font-bold">
          환영합니다, {user.email}님!
        </h1>
      )}
    </div>
  );
}