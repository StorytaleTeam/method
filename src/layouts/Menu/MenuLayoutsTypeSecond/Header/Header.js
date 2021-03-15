import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {MethodLogotype, FavoriteBorder, User, Cart, UserBordered, Menu } from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import Socials from "../Socials/Socials";
import { Input, Badge } from 'antd';
const { Search } = Input;

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Navbar collapseOnSelect expand="lg" className="p-0">
                <a onClick={props.triggerMenu}>
                    <Menu/>
                </a>
                <div className={classes.wrapper}>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/>
                        </Navbar.Brand>
                    <div className={classes.search}>
                        <a onClick={props.triggerCart}>
                            <Badge dot>
                                <Cart/>
                            </Badge>
                        </a>
                    </div>
                </div>
                    <Navbar>
                        <div className={classes.active}>
                            <a>
                                <FavoriteBorder/>
                            </a>
                            <a>
                                <User/>
                            </a>
                            <a onClick={props.triggerCart}>
                                <Badge dot>
                                    <Cart/>
                                </Badge>
                            </a>
                        </div>
                    </Navbar>
            </Navbar>
        </section>
    )
}

export default Header