import React, { useContext } from "react";

import { context } from "./Context/ContextProvider";

let arrProducts = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "iphone-X", price: 5000 },
  { id: 3, name: "iphone-ProMax", price: 12000 },
];
export default function DemoHookUseContext(props) {
  //   let store = useContext(context);
  //   let cartReducer = store.cartReducer;
  let { cartReducer } = useContext(context);
  let [cart, dispatch] = cartReducer;
  console.log(cartReducer);
  console.log("cart", cart);
  // giỏ hàng
  const addToCart = (itemClick) => {
    const action = {
      type: "add_cart",
      item: itemClick,
    };

    dispatch(action);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {arrProducts.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card text-left">
                  <img
                    className="card-img-top"
                    src="https://picsum.photos/200/200"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.gia}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="text-center mt-5">Giỏ Hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{(product.price * product.quantity).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-primary mr-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
