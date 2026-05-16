import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">

      <h1 className="text-7xl font-black text-red-500">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;