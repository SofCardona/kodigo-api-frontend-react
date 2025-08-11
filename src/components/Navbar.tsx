import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        {user && (
          <Link to="/" className="text-blue-700 font-bold hover:underline">
            Home
          </Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-700">Bienvenido, <span className="font-semibold">{user.email}</span></span>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-700 font-bold hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-blue-700 font-bold hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;