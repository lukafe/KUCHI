import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  SCENE1_START, SCENE1_DURATION,
  SCENE2_START, SCENE2_DURATION,
  SCENE3_START, SCENE3_DURATION,
  SCENE4_START, SCENE4_DURATION,
  SCENE5_START, SCENE5_DURATION,
  SCENE6_START, SCENE6_DURATION,
} from "./styles/constants";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Transition } from "./scenes/Scene3Transition";
import { Scene4Demo } from "./scenes/Scene4Demo";
import { Scene5Dashboard } from "./scenes/Scene5Dashboard";
import { Scene6CTA } from "./scenes/Scene6CTA";

export const Video: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={SCENE1_START} durationInFrames={SCENE1_DURATION + 10}>
        <AbsoluteFill><Scene1Hook /></AbsoluteFill>
      </Sequence>
      <Sequence from={SCENE2_START} durationInFrames={SCENE2_DURATION + 10}>
        <AbsoluteFill><Scene2Problem /></AbsoluteFill>
      </Sequence>
      <Sequence from={SCENE3_START} durationInFrames={SCENE3_DURATION + 10}>
        <AbsoluteFill><Scene3Transition /></AbsoluteFill>
      </Sequence>
      <Sequence from={SCENE4_START} durationInFrames={SCENE4_DURATION + 10}>
        <AbsoluteFill><Scene4Demo /></AbsoluteFill>
      </Sequence>
      <Sequence from={SCENE5_START} durationInFrames={SCENE5_DURATION + 10}>
        <AbsoluteFill><Scene5Dashboard /></AbsoluteFill>
      </Sequence>
      <Sequence from={SCENE6_START} durationInFrames={SCENE6_DURATION}>
        <AbsoluteFill><Scene6CTA /></AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
