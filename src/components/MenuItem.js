import React, { Component } from 'react'
import "../assets/css/menuItem.css";
import Barang from './Barang';

class MenuItem extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        // console.log('judul ', title);
        // console.log('cat ', category);
        const { datas, handleClick } = this.props
        console.log(handleClick);
        return (
            <>
                <div className="menuItem">
                    <div className="row">
                        {datas.map(element => (
                            <Barang
                                key={element.id}
                                id={element.id}
                                title={element.title}
                                image={element.image}
                                price={element.price}
                                category={element.category}
                                description={element.description}
                                handleClick={element.handleClick}
                            />
                        ))}

                    </div>
                </div>
            </>
        )
    }
}
export default MenuItem