import React, { Component } from 'react'
import "../assets/css/sidebar.css";
import Barang from './Barang';
import MenuCartList from './MenuCartList';
import TotalProduct from './TotalProduct';

class MenuCart extends Component {
    render() {
        let {
            datas,
            getData,
            image
        }
            = this.props;
        console.log('der ', getData);
        return (
            <div className="menuK">
                <ul>
                    {
                        getData && getData.map(item => {
                            return (
                                <MenuCartList
                                    description={item.description}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                />
                            );
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default MenuCart