import React from "react";
import classes from "./Portfolio.module.css"


const Portfolio = (props) => {

    return (
        <div className={`${classes.portfolio} ${props.custom === true && classes.custom}`}>
            <a href={props.link} className={classes.link}>
                {props.children}
            </a>
            <a href={props.link} className={classes.link}>
                <h3 className={classes.title}>
                    {props.name}
                </h3>
            </a>
        </div>
    )
}

export default Portfolio