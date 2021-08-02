import React, { useEffect, useState } from "react";

import ChildUserEffect from "./ChildUserEffect";

export default function DemoHookUseEffect(props) {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);
  // useEffect là hàm chạy sau khi giao diện render thay cho didupdate và didmount trong mọi trường hợp
  //   useEffect(() => {
  //     console.log("didmount");
  //     console.log("didupdate");
  //   });

  // cách viết thay thế cho componentdidMount, chi chạy 1 lần,  setState sẽ kh chạy lại
  useEffect(() => {
    console.log("didmount");
  }, []);

  // cách viết thay thế cho componentdidUpdate, chạy khi giá trị thay đổi
  useEffect(() => {
    console.log("didupdate khi number thay đổi");
  }, [number]); // những biến nào thay đổi sẽ chạy didupdate thì liệt kê ở đây
  console.log("render");
  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };
  return (
    <div className="m-5">
      {" "}
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        Like
      </button>
      <div className="card text-left">
        <img
          style={{ width: 250, height: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }} className="card-text">
            {number} ❤
          </p>
        </div>
      </div>
      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
      {like === 1 ? <ChildUserEffect /> : ""}
    </div>
  );
}
