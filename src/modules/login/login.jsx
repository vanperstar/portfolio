import "./login.css";
import { useRef } from "react";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import home from "./img/home.png";
import login from "./img/login.png";
import { Link } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const contactRef = useRef();

  const logUser = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post("/login", {
        username: usernameRef.current.value,
        contact: contactRef.current.value,
      });
      console.log(userData);
      if (userData.data.data?.status != 200) {
        toast.error(userData.data?.message, {
          position: "top-center",
          theme: "colored",
        });
        localStorage.setItem("token", userData.data.data.token);
      }
      localStorage.setItem("username", usernameRef.current.value);
      localStorage.setItem("contact", contactRef.current.value);
      // if (window.localStorage.getItem("token")) {
      //   window.location.href = "/";
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="log_home">
          <div className="log_main">
            <div className="log_more">
              <div>
                <h2>Login</h2>
                <p>Login and have more fun</p>
              </div>
              <Link className="home_link" to={"/"}>
                <img src={home} alt="" /> Back to home
              </Link>
            </div>
            <form onSubmit={logUser}>
              <input
                required
                ref={usernameRef}
                type="text"
                name="Username"
                placeholder="Username"
              />
              <input
                required
                ref={contactRef}
                type="text"
                name="Contact"
                placeholder="Contact"
              />
              <label>
                <input type="checkbox" name="" />
                Remmebr me
              </label>
              <button type="submit">Login</button>
            </form>
            <ToastContainer/>
            <p>
              dont have an account? <Link to={"/register"}>Register</Link>
            </p>
          </div>
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
