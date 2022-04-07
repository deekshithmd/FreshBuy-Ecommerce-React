import "./authentication.css";
import { getCredentials, getTestData } from "../../utils";
import axios from "axios";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const TestLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", getTestData());
      console.log(response.data);
      if (response.data.encodedToken) {
        localStorage.setItem(
          "login",
          JSON.stringify(response.data.encodedToken)
        );
        setToken(true);
        navigate("/");
      }
    } catch (e) {
      setError(true);
      navigate("/login");
    }
  };

  const HandleLogin = async (event) => {
    try {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const response = await axios.post(
        "/api/auth/login",
        getCredentials(email, password)
      );
      console.log(response.data);
      if (response.data.encodedToken) {
        localStorage.setItem(
          "login",
          JSON.stringify(response.data.encodedToken)
        );
        setToken(true);
        navigate("/");
      }
    } catch (e) {
      setError(true);
      navigate("/login");
    }
  };
  return (
    <div className="grid-container">
      <div className="form">
        <div className="form-data">
          {error && <h3>Wrong credentials</h3>}
          <h2 className="margin-b">Login</h2>
          <form onSubmit={HandleLogin}>
            <div className="input input-labeled outlined margin">
              <label className="label">Enter Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="freshbuy@gmail.com"
              />
            </div>
            <div className="input input-labeled outlined margin">
              <label className="label">Enter Password</label>
              <input type="password" name="password" placeholder="******" />
            </div>
            <section className="handle">
              <label className="text-md">
                <input type="checkbox" className="margin-r" name="remember" />
                Remember me
              </label>
              <Link
                to="/forgot"
                className="text-md forgot-pwd text-primary margin-l"
              >
                Forgot password?
              </Link>
            </section>
            <input
              type="submit"
              className="btn btn-solid-primary auth-btn margin margiin-l-3-5"
              value="Login"
            />
          </form>
          <button
            className="btn btn-solid-primary auth-btn margin"
            onClick={() => TestLogin()}
          >
            Test User Login
          </button>
          <p className="text-lg">
            <Link to="/signup" className=" link-style-none">
              Create New Account?
              <i className="fa fa-angle-right margin-l"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
