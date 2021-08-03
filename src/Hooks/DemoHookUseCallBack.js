import React, { useCallback, useState } from "react";

import ChildUseCallBack from "./ChildUseCallBack";

export default function DemoHookUseCallBack(props) {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} ❤!`;
  };

  let callBackRenderNotify = useCallback(renderNotify, []); // truyền vào tham số nào mà bạn muốn render lại

  return (
    <div className="m-5">
      Like: {like} ❤
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: "35px" }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ❤
      </span>
      <br />
      <ChildUseCallBack renderNotify={callBackRenderNotify} />
    </div>
  );
}
