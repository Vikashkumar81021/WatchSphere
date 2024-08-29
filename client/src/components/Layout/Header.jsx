import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contextAPI/Auth";
import toast from "react-hot-toast";
const Header = () => {
  const [auth, setAuth] = useAuth(); // Access auth and setAuth

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            WatchSphere
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link">
                Category
              </NavLink>
            </li>
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/dashboard" className="dropdown-item">
                        DashBoard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/login"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
