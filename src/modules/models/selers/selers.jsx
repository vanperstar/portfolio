import { Link } from "react-router-dom";
// import axios from "../../../api/axios";
import "./selers.css";
import daisy from "./img/daisy.png";
import korzina from "./img/korzina.png";
import sun_flower from "./img/sun_flower.png";
import white_rose from "./img/white_rose.png";
import periwinkle from "./img/periwinkle.png";

function Selers() {

  // const getFlower = async ()

  return (
      <div className="sler_cards">
        <div className="best_card">
          <img src={daisy} alt="" />
          <h4>Daisy</h4>
          <div>
            <p>5$</p>
            <Link className="link" to={"/cart"}>
              <img className="korzina" src={korzina} alt="" />
              Add to cart
            </Link>
          </div>
        </div>
        <div className="best_card">
          <img src={sun_flower} alt="" />
          <h4>Sun flower</h4>
          <div>
            <p>5$</p>
            <Link className="link" to={"/cart"}>
              <img className="korzina" src={korzina} alt="" />
              Add to cart
            </Link>
          </div>
        </div>
        <div className="best_card">
          <img src={white_rose} alt="" />
          <h4>White Rose</h4>
          <div>
            <p>5$</p>
            <Link className="link" to={"/cart"}>
              <img className="korzina" src={korzina} alt="" />
              Add to cart
            </Link>
          </div>
        </div>
        <div className="best_card">
          <img src={periwinkle} alt="" />
          <h4>Periwinkle</h4>
          <div>
            <p>5$</p>
            <Link className="link" to={"/cart"}>
              <img className="korzina" src={korzina} alt="" />
              Add to cart
            </Link>
          </div>
        </div>
      </div>
  );
}


export default Selers