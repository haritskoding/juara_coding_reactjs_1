import React, { Component } from 'react'
import MenuItem from './components/MenuItem';
import Sidebar from './components/Sidebar';

import "./App.css"
import Barang from './components/Barang';


class App extends Component {

  constructor(props) {
    super(props);
    // this.search = this.search.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      datas: [],
      id: 0,
      title: '',
      category: '',
      description: '',
      price: 0,
      totalPrice: 0,
      image: '',
      counter: 0,
      getData: []
    }
  }

  handleData = (e) => {
    e.preventDefault();
    let dataId = e.currentTarget.id;
    console.log('data-r ', this.state.datas[dataId]);
    this.setState({
      id: dataId,
      title: this.state.datas[dataId].title
    })
  }

  tambah = (e) => {
    let dataId = e.currentTarget.id;
    e.preventDefault();
    let counter = this.state.counter + 1;
    let totalPrice = 0;
    totalPrice += parseFloat(this.state.datas[dataId - 1].price);


    const newData = {
      id: e.currentTarget.id,
      title: this.state.datas[dataId - 1].title,
      price: this.state.datas[dataId - 1].price,
      category: this.state.datas[dataId - 1].category,
      description: this.state.datas[dataId - 1].description,
      image: this.state.datas[dataId - 1].image,
      getData: this.state.getData,
      totalPrice: totalPrice
    }

    const updateItems = [...this.state.getData, newData];

    this.setState({
      getData: updateItems,
      counter: counter,
      price: this.state.price,
      totalPrice: this.state.totalPrice + this.state.datas[dataId - 1].price,
    })

    console.log('getData', this.state.getData);
    console.log('image ', this.state.image);

  }

  componentDidMount() {
    this.getData()
  }

  loopData(dataLoop) {
    let kem = [];
    for (let b = 0; b < dataLoop.length; dataLoop++) {
      kem.push(dataLoop[b])
    }
    return kem;
  }

  getData() {
    let api_endpoint_search = "https://fakestoreapi.com/products";
    fetch(api_endpoint_search)
      .then(response => {

        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }

      }).then(response => {
        this.setState({
          datas: response,
        });

      }).catch((reject) => {
        alert(reject);
      });
  }


  render() {
    const {
      title,
      category,
      price,
      totalPrice,
      description,
      getData,
      datas,
      key,
      image
    } = this.state;

    const tambah = this.tambah;

    return (
      <div className="row">
        <div className="col-9 mt-5">
          <h1 className="mb-4" style={{ "zIndex": "1000" }}>Menu Item</h1>


          <h5>&copy; Teguh M Harits</h5>
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
                tambah={tambah}
              />
            ))}
          </div>

        </div>
        <div className="col-4">
          <Sidebar
            datas={datas}
            getData={getData}
            title={title}
            key={key}
            price={price}
            tambah={tambah}
            totalPrice={totalPrice}
            handleData={this.handleData}
            counter={this.state.counter}
            description={description}
            image={image}
          />
        </div>

      </div>
    )
  }
}
export default App;