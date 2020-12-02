import React, { Component } from 'react'
import "../assets/css/sidebar.css";

class MenuCartList extends Component {
    render() {

        let { title, price, image, description } = this.props;
        console.log('ogutaq ', price);
        console.log('image ', image);
        return (
            <div className="data" >
                <li style={{ "justify-content": "center" }}>
                    <img src={image} style={{ "width": "80px", "height": "80px" }} />
                </li>
                <li style={{ "fontSize": "16px" }}>
                    <span>
                        {title}   <i
                            onClick={{}}
                            className="fa fa-trash"
                            style={{ "color": "white", "fontSize": "33px" }} />
                    </span></li>
                <li><span className="gaji">$ {price}</span></li>
                <li style={{ "fontSize": "14px", "maxHeight": "120px", "overflow": "hidden" }}>
                    Description: {description}</li>
            </div>
        )
    }
}
export default MenuCartList