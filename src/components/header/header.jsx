import { Link } from "react-router-dom";
import "./header.css";
import acount from "./img/acount.png";
import korzina from "./img/korzina.png";

function Header() {
  return (
    <div className="header">
      <div className=" container">
        <div className="nav">
          <Link to={'/'} style={{textDecoration: "none"}} className="logo">
            <span>Flower</span> Shop
          </Link>

          <ul className="navbar">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>

          <ul className="navbar">
            <li>
              <Link to={'/login'}>
                <img src={acount} alt="account" />
              </Link>
            </li>
            <li>
              <Link to={'/cart'}>
                <img src={korzina} alt="korzina" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
