import React, { Component } from 'react'
import "../assets/css/menuItem.css";

class Barang extends Component {

    constructor(props) {
        super(props)

    }



    render() {
        const {
            id,
            title,
            image,
            category,
            price,
            description,
            tambah
        } = this.props
        // console.log('dua ', handleClick);
        return (
            <div className="col">
                <div className="card menuCard"
                    key={id}
                    style={{ "width": "18rem", }} >
                    <img
                        src={this.props.image}
                        className="card-img-top"
                        alt="Maaf data tidak tampil"
                        style={{ "maxHeight": "200px" }}
                        width="200px" />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                      
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Title : {title}
                        </li>
                        <li className="list-group-item">
                            Category : {category}
                        </li>
                        <li className="list-group-item">
                            Prices : {parseFloat(price)}
                        </li>
                        <li className="list-group-item  desc">
                            Description : {description}
                        </li>
                        <li className="list-group-item">
                            <button
                                id={id}
                                className="btn"
                                style={{
                                    "background": "white",
                                    "border": "none"
                                }}
                                onClick={tambah}
                            >
                                <i

                                    className="fa fa-shopping-basket"
                                    style={{
                                        "color": "rgb(247,73,125)",
                                        "fontSize": "36px",
                                        "cursor": "pointer"
                                    }}>
                                    Add To Cart
                                </i>
                            </button>
                        </li>

                    </ul>
                </div>
            </div >
        )
    }
}
export default Barang;