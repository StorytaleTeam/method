import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import classes from "./MenuLayoutsTypeThird.module.css";
import {Fade} from "react-awesome-reveal";
import Header from "./Header/Header";
import placeholder from "../../../img/placeholder-gray.png";
import {Drawer} from "antd";
import Product from "./Product/Product";
import Aside from "./Aside/Aside";


// const dataNew = [
//     {
//         title: "Our Favorites",
//         href: "example/1"
//     },
//     {
//         title: "New Arrivals",
//         href: "example/2"
//     },
//     {
//         title: "New Collections",
//         href: "example/3"
//     },
//     {
//         title: "At Home Comfort",
//         href: "example/4"
//     },
//     {
//         title: "Join the party",
//         href: "example/5"
//     },
//     {
//         title: "New Names at Neiman's",
//         href: "example/6"
//     },
//     {
//         title: "Luxe Essentials",
//         href: "example/7"
//     },
//     {
//         title: "Exclusives",
//         href: "example/8"
//     }
// ];
//
// const dataClothing = [
//     {
//         title: "Coats",
//         href: "example/1"
//     },
//     {
//         title: "Suits & Jackets",
//         href: "example/2"
//     },
//     {
//         title: "Dresses and jumpsuits",
//         href: "example/3"
//     },
//     {
//         title: "Cardigans and sweaters",
//         href: "example/4"
//     },
//     {
//         title: "Sweatshirts",
//         href: "example/5"
//     },
//     {
//         title: "T-shirts and tops",
//         href: "example/6"
//     },
//     {
//         title: "Jumpsuits & Rompers",
//         href: "example/7"
//     },
//     {
//         title: "Pants & Shorts",
//         href: "example/8"
//     }
// ];
//
// const dataAccessories = [
//     {
//         title: "Jewelry",
//         href: "example/1"
//     },
//     {
//         title: "Wallets and cases",
//         href: "example/2"
//     },
//     {
//         title: "Neckscarves",
//         href: "example/3"
//     },
//     {
//         title: "Hats and gloves",
//         href: "example/4"
//     },
//     {
//         title: "Face masks",
//         href: "example/5"
//     }
// ];
//
// const dataOccasions = [
//     {
//         title: "Casual Weekend",
//         href: "example/1"
//     },
//     {
//         title: "Work From Home",
//         href: "example/2"
//     },
//     {
//         title: "Wedding Guest",
//         href: "example/3"
//     },
//     {
//         title: "Staycation",
//         href: "example/4"
//     },
//     {
//         title: "Virtual Date Night",
//         href: "example/5"
//     }
// ];
//
//
// const menu = (
//     <Container className={classes.menuContainer}>
//         <Row>
//             <Col lg={3} md={6} sm={6}>
//                 <List
//                     header={
//                         <div className={classes.listTitle}>New</div>
//                     }
//                     itemLayout="horizontal"
//                     dataSource={dataNew}
//                     renderItem={(item) => (
//                         <List.Item>
//                             <List.Item.Meta
//                                 title={
//                                     <a className={classes.listItem} href={item.href}>{item.title}</a>
//                                 }
//                             />
//                         </List.Item>
//                     )}
//                 />
//             </Col>
//             <Col lg={3} md={6} sm={6}>
//                 <List
//                     header={
//                         <div className={classes.listTitle}>Clothing</div>
//                     }
//                     itemLayout="horizontal"
//                     dataSource={dataClothing}
//                     renderItem={(item) => (
//                         <List.Item>
//                             <List.Item.Meta
//                                 title={
//                                     <a className={classes.listItem} href={item.href}>{item.title}</a>
//                                 }
//                             />
//                         </List.Item>
//                     )}
//                 />
//             </Col>
//             <Col lg={3} md={6} sm={6}>
//                 <List
//                     header={
//                         <div className={classes.listTitle}>Accessories</div>
//                     }
//                     itemLayout="horizontal"
//                     dataSource={dataAccessories}
//                     renderItem={(item) => (
//                         <List.Item>
//                             <List.Item.Meta
//                                 title={
//                                     <a className={classes.listItem} href={item.href}>{item.title}</a>
//                                 }
//                             />
//                         </List.Item>
//                     )}
//                 />
//             </Col>
//             <Col lg={3} md={6} sm={6}>
//                 <List
//                     header={
//                         <div className={classes.listTitle}>Accessories</div>
//                     }
//                     itemLayout="horizontal"
//                     dataSource={dataOccasions}
//                     renderItem={(item) => (
//                         <List.Item>
//                             <List.Item.Meta
//                                 title={
//                                     <a className={classes.listItem} href={item.href}>{item.title}</a>
//                                 }
//                             />
//                         </List.Item>
//                     )}
//                 />
//             </Col>
//         </Row>
//     </Container>
// );



class  MenuLayoutsTypeThird extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            products: [
                {
                    id: "1",
                    name: 'Nike Air Force',
                    cover: placeholder,
                    size: 'US 10.5',
                    color: 'Vast Grey',
                    quantity: 1,
                    priceForOne: '190.00'
                },
                {
                    id: "2",
                    name: 'Nike Zoom Pegasus Turbo',
                    cover: placeholder,
                    size: 'US 9.5',
                    color: 'Gray Fog',
                    quantity: 1,
                    priceForOne: '160.00'
                }
            ]
        }

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.findTotal = this.findTotal.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    decrease = (id) => {
        const { products } = this.state;
        const productsClone = [...products];

        let itemId = productsClone.find(item => item.id === id);

        let product = Object.assign({}, itemId);
        if (product.quantity > 0) {
            product.quantity = product.quantity - 1;
        }

        let position = productsClone.indexOf(itemId);
        productsClone[position] = product;

        this.setState({
            products: productsClone
        });
    }

    increase = (id) => {

        const { products } = this.state;
        const productsClone = [...products];

        let itemId = productsClone.find(item => item.id === id);

        let product = Object.assign({}, itemId);
        product.quantity = product.quantity + 1;

        let position = productsClone.indexOf(itemId);
        productsClone[position] = product;

        this.setState({
            products: productsClone
        });
    }

    findTotal() {
        const card = [...this.state.products];

        let initialValue = 0;
        let sum = card.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.quantity * currentValue.priceForOne);
        }, initialValue);

        return sum.toFixed(2);
    }

    onDelete(id) {

        const { products } = this.state;
        const productsClone = [...products];


        let itemId = productsClone.find(item => item.id === id);
        let position = productsClone.indexOf(itemId);

        if (itemId) {
            productsClone.splice(position, 1);

            this.setState({
                products: productsClone
            });
        }
    }

    showDrawer() {
        this.setState({
            visible: true
        });
    }

    onClose() {
        this.setState({
            visible: false
        });
    }

    render() {

        const {products} = this.state;

        return (
            <React.Fragment>
                <section className={`${classes.menu} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Header
                                trigger={this.showDrawer}
                                dark={this.props.dark ? true : false}
                                count={products.length}
                            />
                        </Container>
                        <Container>
                            <Row>
                                <Col>
                                    <Drawer
                                        title="Cart"
                                        placement="right"
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={this.state.visible}
                                        className={`${classes.drawer} ${(this.props.dark) ? `${classes.dark}` : ''}`}
                                        closable={true}
                                        mask={false}
                                    >
                                        <div className={classes.products}>
                                            {products.map((item, index) => {
                                                return (
                                                    <Product
                                                        key={index}
                                                        dark={this.props.dark ? true : false}
                                                        index={item.id}
                                                        cover={item.cover}
                                                        title={item.name}
                                                        description={`Size: ${item.size} Color: ${item.color}`}
                                                        quantity={item.quantity}
                                                        priceForOne={item.priceForOne}
                                                        increase={this.increase}
                                                        decrease={this.decrease}
                                                        onDelete={this.onDelete}
                                                    >
                                                    </Product>
                                                )
                                            })}
                                        </div>
                                        <Aside
                                            subtotal={this.findTotal()}
                                            dark={this.props.dark ? true : false}
                                        />
                                    </Drawer>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default MenuLayoutsTypeThird