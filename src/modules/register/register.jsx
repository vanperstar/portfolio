import "./register.css";
import { useRef } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import home from "./img/home.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import register from "./img/register.png";

function Register() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const contactRef = useRef();
  const addUsers = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post("/register", {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        contact: contactRef.current.value,
      });
      if(userData.data.data?.status != 200) {
        toast.error(userData.data?.message, {
          position: "top-center",
          theme: "colored"
        })
        localStorage.setItem("token", userData.data.data.token);
      }
      localStorage.setItem("username", usernameRef.current.value);
      localStorage.setItem("contact", contactRef.current.value);
      if (window.localStorage.getItem("token")) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <div className="reg_home">
          <div className="reg_main">
            <div className="reg_more">
              <div>
                <h2>Register</h2>
                <p>Register and help us help you</p>
              </div>
              <Link className="home_link" to={"/"}>
                <img src={home} alt="" /> Back to home
              </Link>
            </div>
            <form onSubmit={addUsers}>
              <input
                ref={emailRef}
                type="email"
                name="Email"
                placeholder="Email"
              />
              <input
                ref={usernameRef}
                type="text"
                name="Username"
                placeholder="Username"
              />
              <input
                ref={passwordRef}
                type="password"
                name="Password"
                placeholder="Password"
              />
              <input
                ref={contactRef}
                type="text"
                name="Contact"
                placeholder="Contact"
              />
              <label>
                <p>
                  with registering your accepting our terms and privacy policy
                </p>
              </label>
              <button type="submit">Register</button>
            </form>
            <ToastContainer />
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <img src={register} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;

// flowers-shop-551@faithful-385709.iam.gserviceaccount.com
