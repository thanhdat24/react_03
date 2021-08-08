import { animated, useSprings } from "react-spring";

import React from "react";

export default function Ex3UseSpring(props) {
  let arrOpacity = [
    {
      opacity: 0.1,
      color: "red",
      content: "FullStack",
      num: "100",
    },
    {
      opacity: 0.3,
      color: "green",
      content: "BackEnd",
      num: "200",
    },
    {
      opacity: 0.5,
      color: "blue",
      content: "FrontEnd",
      num: "300",
    },
    {
      opacity: 0.7,
      color: "yellow",
      content: "ReactJS",
      num: "400",
    },
    {
      opacity: 1,
      color: "orange",
      content: "NodeJS",
      num: "500",
    },
  ];
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        content: item.content,
        num: item.num,
        from: { opacity: 0, color: "black", num: "0" },
        config: { duration: 2000 },
      };
    })
  );
  let renderContent = (propsAnim) => {
    // let resultAnim = [
    //   <animated.span style={propsAnim}>{propsAnim.content}</animated.span>,
    //   <animated.h1 style={propsAnim}>{propsAnim.num}</animated.h1>,
    // ];

    let resultAnim = [];
    for (let key in propsAnim) {
      if (key === "content" || key === "num") {
        resultAnim.push(
          <animated.h1 style={propsAnim}>{propsAnim[key]}</animated.h1>
        );
      }
    }
    return resultAnim;
  };
  return (
    <div>
      {propsAnimationUseSprings.map((propsAnim, item) => {
        return <div>{renderContent(propsAnim)}</div>;
      })}
    </div>
  );
}
