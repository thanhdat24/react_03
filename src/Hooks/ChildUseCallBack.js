import React, { memo } from "react";

function ChildUseCallBack(props) {
  let title = "LeThanhDat";
  let obj = { id: 1, name: "Dat" };

  console.log("title: ", title);
  console.log("obj: ", obj);
  console.log("re-render");
  return (
    <div>
      <small> {props.renderNotify()}</small>
      <textarea></textarea> <br />
      <br />
      <button className="btn btn-success">Sent</button>
    </div>
  );
}

export default memo(ChildUseCallBack);
