import React, { useMemo, useState } from "react";

import ChildUseMemo from "./ChildUseMemo";

export default function DemoHookUseMeno(props) {
  let [like, setLike] = useState(1);
  //   let cart = [
  //     { id: 1, name: "iphone", price: 1000 },
  //     { id: 2, name: "iphone-X", price: 2000 },
  //     { id: 3, name: "samsung-A51", price: 3000 },
  //   ];
  const renderCart = () => {
    let cart = [
      { id: 1, name: "iphone", price: 1000 },
      { id: 2, name: "iphone-X", price: 2000 },
      { id: 3, name: "samsung-A51", price: 3000 },
    ];
    return cart;
  };

  const cartMemo = useMemo(renderCart, []); // muốn thay đổi giá trị thì bỏ vào đây
  return (
    <div className="m-5">
      Like: {like} ❤
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: "35px" }}
        onClick={() => {
          setLike(like + 1);
        }}
        s
      >
        ❤
      </span>
      <br />
      <ChildUseMemo cart={cartMemo} />
    </div>
  );
}
