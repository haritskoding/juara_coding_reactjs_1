import React, { Component } from 'react'

import Cart from './Cart';
import MenuCart from './MenuCart';
import TotalProduct from './TotalProduct';

import "../assets/css/sidebar.css";

class Sidebar extends Component {
    render() {
        const {
            tambah,
            counter,
            datas,
            getData,
            key,
            title,
            price,
            totalPrice,
            handleData,
            description,
            image
        } = this.props;

        return (
            <div className="sidebar">
                <Cart counter={counter} />
                <MenuCart
                    datas={datas}
                    getData={getData}
                    title={title}
                    price={price}
                    description={description}
                    handleData={handleData}
                    image={image}
                />
                <TotalProduct
                    counter={counter}
                    totalPrice={totalPrice} />

            </div >
        )
    }
}
export default Sidebar