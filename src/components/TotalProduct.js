import React, { Component } from 'react'
import "../assets/css/total.css";

class TotalProduct extends Component {
    render() {
        const { counter, totalPrice } = this.props;
        return (

            <span className="total">
                <li>TOTAL :
                    <span>
                        {counter}
                    </span>
                </li>
                <li>Harga Total :
             <span>{totalPrice}
                    </span></li>
            </span>

        )
    }
}
export default TotalProduct