import React, { Component } from 'react'
import "../assets/css/cart.css";

class Cart extends Component {
    render() {
        const { tambah, counter } = this.props;
        return (
            <div className="cart">
                <button
                    type="button"
                    className="btn"
                    style={{ "color": "white", "fontSize": "18px" }}>
                    <i className="fa fa-shopping-basket"
                        style={{ "color": "white", "fontSize": "36px" }}>
                        
                        </i>
                    <span className="badge badge-light">
                        <h4>
                            {counter}
                        </h4>
                    </span>
                </button>

            </div>
        )
    }
}
export default Cart;