import emily from "./img/emily.png";
import home_emily from "./img/home_emily.png";
import like from "./img/like.png";
import seen from "./img/seen.png";
import flower_emily from "./img/flower_emily.png";
import butterfly_emily from "./img/butterfly_emily.png";
import './post.css';


function LetestPosts() {
  return (
    <div className="letest_card">
      <div className="let_card">
        <div className="card_own">
          <h4>
            <img src={emily} alt="" /> Emily
          </h4>
          <p>2022/22/8</p>
        </div>
        <div className="card_home">
          <img src={home_emily} alt="" />
          <h4>Best flowers for inside home</h4>
          <p>
            All the flowers are best for your lovly house just get the one you
            love the most 😊
          </p>
        </div>
        <div className="card_like">
          <div>
            <p>
              <img src={like} alt="" /> 15
            </p>
            <p>
              <img src={seen} alt="" /> 2001
            </p>
          </div>
          <h4>Read more</h4>
        </div>
      </div>
      <div className="let_card">
        <div className="card_own">
          <h4>
            <img src={emily} alt="" /> Emily
          </h4>
          <p>2022/22/8</p>
        </div>
        <div className="card_home">
          <img src={flower_emily} alt="" />
          <h4>Best flowers for inside home</h4>
          <p>
            All the flowers are best for your lovly house just get the one you
            love the most 😊
          </p>
        </div>
        <div className="card_like">
          <div>
            <p>
              <img src={like} alt="" /> 15
            </p>
            <p>
              <img src={seen} alt="" /> 2001
            </p>
          </div>
          <h4>Read more</h4>
        </div>
      </div>
      <div className="let_card">
        <div className="card_own">
          <h4>
            <img src={emily} alt="" /> Emily
          </h4>
          <p>2022/22/8</p>
        </div>
        <div className="card_home">
          <img src={butterfly_emily} alt="" />
          <h4>Best flowers for inside home</h4>
          <p>
            All the flowers are best for your lovly house just get the one you
            love the most 😊
          </p>
        </div>
        <div className="card_like">
          <div>
            <p>
              <img src={like} alt="" /> 15
            </p>
            <p>
              <img src={seen} alt="" /> 2001
            </p>
          </div>
          <h4>Read more</h4>
        </div>
      </div>
    </div>
  );
}


export  default LetestPosts