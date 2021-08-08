import { animated, useSpring } from "react-spring";

import React from "react";

export default function Ex2UseSpring() {
  let propsUseSpring = useSpring({
    color: [131, 111, 255],
    from: {
      color: [238, 99, 99],
    },
    config: { duration: 2000, delay: 0 },
  });

  // Tăng font chữ tăng độ dài
  let propAnimation = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
    },
    to: async (next, cancel) => {
      await next({ width: "100%", height: "100%", fontSize: "50px" });
      await next({ width: "50%", height: "50%", fontSize: "10px" });
      await next({ width: "100%", height: "100", fontSize: "30px" });
    },
    config: { duration: 1000 },
  });
  return (
    <div>
      <animated.div
        style={{
          color: propsUseSpring.color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        Hello Dev
      </animated.div>
      <animated.h1 style={propAnimation}>
        <span>hello Dat</span>
      </animated.h1>
    </div>
  );
}
