import Login from "./modules/login/login";
import Register from "./modules/register/register";
import Home from "./modules/home/home";
import Shop from "./modules/shop/shop";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Cart from "./modules/models/cart/cart";
import AdminPage from "./modules/admins/admin_page";
import AdminLogin from "./modules/admins/admin_login/admin_login";

function App() {
  // const token = localStorage.getItem('token')

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin/page" element={<AdminPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}

export default App;
