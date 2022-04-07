import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useData } from "../../contexts";
import { useTheme } from "../../contexts";

export default function Navigation() {
  const navigate = useNavigate();
  const { theme, Toggle } = useTheme();
  const { data, dispatch } = useData();
  const { token, setToken } = useAuth();

  const LogoutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    setToken(false);
    navigate("/");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to="/">
          <img
            src="https://i.postimg.cc/LsWYVvxT/freshbuy-logo.png"
            alt="logo"
          />
        </Link>
      </section>
      <button
        className="btn btn-outline-primary primary-text"
        onClick={() => navigate("/productlist")}
      >
        Products
      </button>
      <section className="search-item">
        <div className="input search-field outlined ">
          <button className="search-icon">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" name="username" placeholder="Search here..." />
        </div>
      </section>
      <ul className="list-style-none account-data">
        {!token && (
          <li className="list-inline-item">
            <Link to="/login" className="btn btn-solid-primary link-btn">
              Login
            </Link>
          </li>
        )}
        {token && (
          <Link to="/profile">
            <li className="list-inline-item">
              <div className="avatar avatar-xs">
                <img
                  className="img-responsive img-round"
                  src="https://i.postimg.cc/28Zcgq1j/avatar.png"
                  alt="Avatar"
                />
              </div>
            </li>
          </Link>
        )}
        <li className="list-inline-item">
          <button className="badge-container badge-btn">
            <Link to="/wishlist">
              <i className="fas fa-heart icon"></i>
              <span className="status-badge-icon bg-red">
                {data.wishlist.length}
              </span>
            </Link>
          </button>
        </li>
        <li className="list-inline-item">
          <button className="badge-container badge-btn">
            <Link to="/cart">
              <i className="fas fa-basket-shopping"></i>
              <span className="status-badge-icon bg-red">
                {data.cart.length}
              </span>
            </Link>
          </button>
        </li>
        {token && (
          <li className="list-inline-item">
            <button
              className="btn btn-icon-primary user-signout"
              onClick={LogoutHandler}
            >
              <i className="fa fa-sign-out fa-2x"></i>
            </button>
          </li>
        )}
        <li className="list-inline-item">
          <span className="nav-icon-link link-style-none">
            <i
              className={
                theme === "light"
                  ? "fas fa-sun nav-icon"
                  : "fas fa-moon nav-icon"
              }
              onClick={() => Toggle()}
            ></i>
          </span>
        </li>
      </ul>
    </nav>
  );
}
