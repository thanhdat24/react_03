import React, { Component } from "react";

import ChildComponent from "./ChildComponent";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      product: {
        id: 1,
        name: "samsung",
      },
    };
    console.log("constructor");
  }

  // Được gọi khi setState hoặc props
  shouldComponentUpdate(newProps, newState) {
    // return true thì chạy tiếp lifecycle còn lại, ngược lại return false thì sẽ dừng lại không chạy tiếp các lifecycle khác
    return true;
  }
  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number {this.state.number}</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ number: this.state.number });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            let newProduct = { ...this.state.product };
            newProduct.name = "Samsung A51";
            this.setState({ product: newProduct });
          }}
        >
          change Name Product
        </button>
        <h3>new Product parent: {this.state.product.name}</h3>
        <ChildComponent product={this.state.product} />
      </div>
    );
  }
  //Được gọi sau render và chỉ gọi 1 lần duy nhất (trang thái mounting)
  componentDidMount() {
    // console.log("componentDidUpdate");
    return null;
  }

  // Lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");
  }
}
