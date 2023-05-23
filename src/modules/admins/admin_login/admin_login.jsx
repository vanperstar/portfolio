import { useRef } from "react";
import axios from "../../../api/axios";
import home from "./img/home.png";
import login from "./img/login.png";
import { Link } from "react-router-dom";
import './admin_login.css'

function AdminLogin() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const adminLog = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post("/admins", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("token", userData.data.data.token);
      localStorage.setItem("username", usernameRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
      // console.log(userData.data.data.token);
      if (window.localStorage.getItem("token")) {
          window.location.href = "/admin/page";
        }
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div className="login">
      <div className="container">
        <div className="admin_log_home">
          <div className="admin_log_main">
            <div className="admin_log_more">
              <div>
                <h2>Admin Login</h2>
                <p>Admin Login and have more fun</p>
              </div>
              <Link className="admin_home_link" to={"/admin/page"}>
                <img className="admin_link_img" src={home} alt="" /> Back to home
              </Link>
            </div>
            <form onSubmit={adminLog}>
              <input
                required
                ref={usernameRef}
                type="text"
                name="Username"
                placeholder="Username"
              />
              <input
                required
                ref={passwordRef}
                type="password"
                name="Password"
                placeholder="Password"
              />
              <button type="submit">Login</button>
            </form>
            <p>
              dont have an account?
            </p>
          </div>
          <img className="admin_login_img" src={login} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
