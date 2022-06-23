import "./Card.css";
import React from "react";

const Card = (props) => {
    const classes = "card " + props.className;  //? Defines any className adding to the keyword "card"
    return <div className={classes}>{props.children}</div>
}

export default Card;