import atena from "./img/atena.png";
import './comment.css'

function Comments() {
  return (
    <div className="comment_cards">
      <div className="comment_own">
        <h4>
          <img src={atena} alt="" />
          Atena
        </h4>
        <p>
          i’m buying flower from them every weak, always fresh flowers and
          beutiful😍🌻... love’em so nuch..keep going 💯💯
        </p>
      </div>
      <div className="comment_own">
        <h4>
          <img src={atena} alt="" />
          Atena
        </h4>
        <p>
          i get flowers from them for my baby mama, she love them so much 🔥💯
        </p>
      </div>
      <div className="comment_own">
        <h4>
          <img src={atena} alt="" />
          Atena
        </h4>
        <p>
          Drip too hard, dont stand too close You gon fuck around and drown off
          this wave
        </p>
      </div>
    </div>
  );
}


export default Comments