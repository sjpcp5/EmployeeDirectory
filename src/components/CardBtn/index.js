import React from "react";
import "./style.scss";

function CardBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className={`card-btn ${props["data-value"]}`}
      {...props}
    />
  );
}

export default CardBtn;
