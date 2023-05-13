import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./selers.css";
import korzina from "./img/korzina.png";
import axios from "../../../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

function Selers() {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const fetchData = await axios.get("/products");
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getProducts);
    return () => {
      window.removeEventListener("load", getProducts);
    };
  }, [data]);

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={4}
      // freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="sler_cards"
    >
      {data.map((res) => {
        return (
          <SwiperSlide style={{width: '0px'}} key={res.id}>
            <div className="best_card">
            <img src={"http://localhost:5000/" + res.img_link} alt="" />
            <h4>{res.name}</h4>
            <div>
              <p>{res.price}</p>
              <Link className="link" to={"/cart"}>
                <img className="korzina" src={korzina} alt="" />
                Add to cart
              </Link>
            </div>
          </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Selers;

{
  /* <div className="best_card">
          <img src={daisy} alt="" />
          <h4>{res.name}</h4>
          <div>
            <p>price</p>
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
        </div> */
}
