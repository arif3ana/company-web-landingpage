import React from "react";
import "../../styles/picture.css";

const Picture = ({image, className}) => {
    return <img src={image} alt="Image Copyright By ProRent Company" className={className} loading="lazy"/>
}

export default Picture;