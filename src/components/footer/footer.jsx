import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className=" container">
        <div className="foot">
          <div className="footer_logo">
            <h2 className="logo">
              <span>Flower</span> Shop
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              doloribus quia minus, at mollitia facere minima, nostrum,
              voluptatem culpa sit delectus possimus? Ratione itaque distinctio
              molestiae voluptas eaque quo ad?
            </p>
          </div>

          <ul className="footer_nav">
            <h4>Links</h4>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>

            
          <ul className="footer_nav">
            <h4>Contact</h4>
            <li>
              <a href="#">26985 Brighton Lane, Lake Forest, CA</a>
            </li>
            <li>
              <a href="#">support@Flowers.com</a>
            </li>
            <li>
              <a href="#">+1 236 5489</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
