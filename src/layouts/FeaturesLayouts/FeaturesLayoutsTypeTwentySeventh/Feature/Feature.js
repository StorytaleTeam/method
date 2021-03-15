import React from "react";
import classes from "./Feature.module.css"
import { Container, Col, Row } from "reactstrap";

import TextButton from "../../../../components/Text-Button/Text-Button";
import Frame from "../../../../components/Frame/Frame";
import { RightArrow } from "../../../../components/Icons/Icons";


const Feature = (props) => {
  return (
    <div className={`${classes.feature} ${props.dark ? `${classes.dark}` : ''}`}>
    <h3>{props.title}</h3>
    <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default Feature