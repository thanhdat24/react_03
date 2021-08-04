import React, { useReducer } from "react";

export const context = React.createContext();

const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_cart": {
      let cartUpdate = JSON.parse(JSON.stringify(state));

      let index = cartUpdate.findIndex(
        (itemCart) => itemCart.id === action.item.id
      );
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        cartUpdate.push({ ...action.item, quantity: 1 });
      }
      return cartUpdate;
    }
    default:
      break;
  }
  return [...state];
};
export default function ContextProvider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);
  // Dùng context bao bọc tất cả component bên trong (cụ thể là App)

  // store giống như rootReducer
  const store = {
    cartReducer: [cart, dispatch],
  };
  return (
    <div>
      <context.Provider value={store}>{props.children}</context.Provider>
    </div>
  );
}
