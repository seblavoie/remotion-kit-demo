import React from "react";
import { Composition, Easing, Sequence } from "remotion";
import { AnimatedElement, AnimatedText, presets } from "remotion-kit";

import "../styles.css";

const durationInSeconds = 3;
const durationInFrames = durationInSeconds * 30;

const lettersIn = [
  {
    ...presets["scaleIn"],
    durationInFrames: 20,
    ease: Easing.ease,
  },
  presets["fadeIn"],
];

const sequences = [
  {
    type: "element",
    in: [presets["fadeIn"], presets["scaleIn"]],
    out: [presets["fadeOut"], presets["scaleOut"]],
    durationInFrames: durationInFrames,
  },
  {
    type: "text",
    wordAnimation: {
      animation: [
        presets["fadeIn"],
        { ...presets["slideIn"], ease: Easing.elastic(2) },
      ],
      overlap: 0.5,
    },
    letterAnimation: {
      animation: presets["scaleIn"],
      overlap: 0.5,
    },
    durationInFrames: durationInFrames,
  },
];

import "../styles.css";

const DemoComposition: React.FC = () => {
  return (
    <div>
      {sequences.map((sequence, index) => {
        return (
          <Sequence
            from={index * durationInFrames}
            durationInFrames={durationInFrames}
            key={index}
          >
            {sequence.type === "element" ? (
              <AnimatedElement
                animationIn={sequence.in}
                animationOut={sequence.out}
                durationInFrames={durationInFrames}
                className="m-auto max-w-[720px]"
              >
                <img src="https://placehold.co/960x540?text=Fade+and+scale" />
              </AnimatedElement>
            ) : (
              <AnimatedText
                durationInFrames={durationInFrames}
                wordAnimation={sequence.wordAnimation}
                // letterAnimation={sequence.letterAnimation}
                className="m-auto max-w-[960px] text-center"
              >
                Staggered bouncy text example
              </AnimatedText>
            )}
          </Sequence>
        );
      })}
    </div>
  );
};

export const RemotionDemo: React.FC = () => {
  return (
    <Composition
      id="Demo"
      component={DemoComposition}
      durationInFrames={durationInFrames * sequences.length}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
