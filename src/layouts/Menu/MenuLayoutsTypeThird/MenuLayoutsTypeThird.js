import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import classes from "./MenuLayoutsTypeThird.module.css"
import {Fade} from "react-awesome-reveal";
import { List, Dropdown } from "antd";


const dataNew = [
    {
        title: "Our Favorites",
        href: "example/1"
    },
    {
        title: "New Arrivals",
        href: "example/2"
    },
    {
        title: "New Collections",
        href: "example/3"
    },
    {
        title: "At Home Comfort",
        href: "example/4"
    },
    {
        title: "Join the party",
        href: "example/5"
    },
    {
        title: "New Names at Neiman's",
        href: "example/6"
    },
    {
        title: "Luxe Essentials",
        href: "example/7"
    },
    {
        title: "Exclusives",
        href: "example/8"
    }
];

const dataClothing = [
    {
        title: "Coats",
        href: "example/1"
    },
    {
        title: "Suits & Jackets",
        href: "example/2"
    },
    {
        title: "Dresses and jumpsuits",
        href: "example/3"
    },
    {
        title: "Cardigans and sweaters",
        href: "example/4"
    },
    {
        title: "Sweatshirts",
        href: "example/5"
    },
    {
        title: "T-shirts and tops",
        href: "example/6"
    },
    {
        title: "Jumpsuits & Rompers",
        href: "example/7"
    },
    {
        title: "Pants & Shorts",
        href: "example/8"
    }
];

const dataAccessories = [
    {
        title: "Jewelry",
        href: "example/1"
    },
    {
        title: "Wallets and cases",
        href: "example/2"
    },
    {
        title: "Neckscarves",
        href: "example/3"
    },
    {
        title: "Hats and gloves",
        href: "example/4"
    },
    {
        title: "Face masks",
        href: "example/5"
    }
];

const dataOccasions = [
    {
        title: "Casual Weekend",
        href: "example/1"
    },
    {
        title: "Work From Home",
        href: "example/2"
    },
    {
        title: "Wedding Guest",
        href: "example/3"
    },
    {
        title: "Staycation",
        href: "example/4"
    },
    {
        title: "Virtual Date Night",
        href: "example/5"
    }
];


const menu = (
    <Container className={classes.menuContainer}>
        <Row>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>New</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataNew}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Clothing</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataClothing}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataAccessories}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataOccasions}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </Container>
);



class  MenuLayoutsTypeThird extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <React.Fragment>
                <section className={`${classes.menu} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                                    <Dropdown overlay={menu} overlayClassName={classes.dropdown}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            Hover me
                                        </a>
                                    </Dropdown>,

                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default MenuLayoutsTypeThird