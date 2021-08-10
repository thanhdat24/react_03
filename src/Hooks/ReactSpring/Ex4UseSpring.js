import React, { useState } from "react";

import { useTrail } from "react-spring";

const items = [
  { title: "FrontEnd", content: "Onl" },
  { title: "BackEnd", content: "Off" },
  { title: "FullStack", content: "Full" },
];
export default function Ex4UseSpring() {
  let [status, setStatus] = useState(true);
  const propsUseTrail = useTrail();
  return <div>123</div>;
}
