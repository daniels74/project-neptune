import React from "react";
import "./Card.css";

const Card = (props) => {
  const [touch, setTouch] = React.useState(false);

  return (
    <div
      className={touch ? "card-touch" : "card"}
      onTouchStart={() => setTouch(!touch)}
    >
      <div className="card_body">
        <img className="card_img" src={`../images/${props.img}`} alt="" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <div className="card-btns">
        <a href={props.link}>
          <button className="card_btn">More</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
