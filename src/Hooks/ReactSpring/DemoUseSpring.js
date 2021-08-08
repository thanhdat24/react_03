import { animated, useSpring } from "react-spring";

import React from "react";
import { useState } from "react";

export default function DemoUseSpring(props) {
  const propsAnim = useSpring({
    color_text: "red",
    from: { color_text: "green" },
    config: { duration: 1000 },
  });

  const propsAnimNumber = useSpring({
    number: 200,
    color: "red",
    from: { number: 10, color: "black" },
    config: { duration: 3000 },
  });
  const [flip, set] = useState(false);
  const words = ["We", "came.", "We", "saw.", "We", "kicked", "its", "ass."];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });
  return (
    <div>
      <animated.h1>Change color text</animated.h1>
      <animated.div style={{ color: propsAnim.color_text }}>
        I will fade in
      </animated.div>
      <animated.h1 style={{ color: propsAnimNumber.color }}>
        {propsAnimNumber.number}
      </animated.h1>
      <animated.p style={{ fontSize: propsAnimNumber.number }}>1</animated.p>
      <animated.div
        style={{
          position: "relative",
          width: "100%",
          height: 60,
          overflow: "auto",
          fontSize: "1rem",
        }}
        scrollTop={scroll}
      >
        {words.map((word, i) => (
          <div
            key={`${word}_${i}`}
            style={{ width: "100%", height: 50, textAlign: "center" }}
          >
            {word}
          </div>
        ))}
      </animated.div>
    </div>
  );
}
