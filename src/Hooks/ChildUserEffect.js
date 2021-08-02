import React, { useEffect, useState } from "react";

export default function ChildUserEffect(props) {
  let [number, setNumber] = useState(1);
  console.log("render ChildUserEffect");
  useEffect(() => {
    // Viết cho didupdate
    console.log("didupdate");
    return () => {
      console.log("willunmount!");
    };
  }, [number]);
  return (
    <div>
      <textarea></textarea> <br />
      <br />
      <button class="btn btn-success">Sent</button>
    </div>
  );
}
