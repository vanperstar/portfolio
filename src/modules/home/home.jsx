import Header from "../../components/header/header";
import Selers from "../models/selers/selers";
import LetestPosts from "../models/posts/post";
import Comments from "../models/comments/comment";
import "./home.css";
import Footer from "../../components/footer/footer";
import home_1 from "./img/home_1.png";
import home_2 from "./img/home_2.png";
import home_3 from "./img/home_3.png";
import home_4 from "./img/home_4.png";
import home_5 from "./img/home_5.png";
import home_6 from "./img/home_6.png";

function Home() {

  // if(!window.localStorage.getItem('token')){
  //   window.location.href = '/login'
  // }

  return (
    <div className="container">
      <Header />
      <div className="home">
        <div className="home_world">
          <div>
            <h2>Flowers, 🌻 what the world needs </h2>
            <p>Browse between hounders of flowers</p>
            <button>Browse</button>
          </div>
          <div className="home_img">
            <img src={home_1} alt="" />
            <img src={home_2} alt="" />
            <img src={home_3} alt="" />
            <img src={home_4} alt="" />
            <img src={home_5} alt="" />
            <img src={home_6} alt="" />
          </div>
        </div>
        <div className="best_selers">
          <h2>Best selers</h2>
          <Selers />
        </div>

        <div className="let_post">
          <h2>Latest posts</h2>
          <LetestPosts />
        </div>

        <div className="comments">
          <h2>Comments</h2>
            <Comments />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
