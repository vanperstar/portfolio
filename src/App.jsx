import Login from "./modules/login/login";
import Register from "./modules/register/register";
import Home from "./modules/home/home";
import Shop from "./modules/shop/shop";
import { Routes, Route } from 'react-router-dom'

function App() {

  // const token = localStorage.getItem('token')

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/shop" element={<Shop/>}/>

    </Routes>
    </>
  );
}

export default App;