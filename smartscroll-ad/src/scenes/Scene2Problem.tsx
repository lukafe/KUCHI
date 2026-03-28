import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { FONT_FAMILY, VIDEO_WIDTH, VIDEO_HEIGHT } from "../styles/constants";
import { PhoneMockup } from "../components/PhoneMockup";
import { ScrollFeed } from "../components/ScrollFeed";

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const phoneEnter = spring({ frame, fps, config: { damping: 18, stiffness: 120, mass: 1 } });
  const phoneOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const phoneY = interpolate(phoneEnter, [0, 1], [100, 0]);
  const textOpacity = interpolate(frame, [20, 36], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [20, 36], [30, 0], { extrapolateRight: "clamp" });
  const floatY = Math.sin(frame * 0.08) * 8;
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: "linear-gradient(160deg, #0a0a14 0%, #16213e 50%, #0f3460 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", gap: 60, position: "relative" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,68,68,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ opacity: phoneOpacity, transform: `translateY(${phoneY + floatY}px)` }}>
        <PhoneMockup scale={0.72} frameColor="#1c1c2e"><ScrollFeed speed={2.2} /></PhoneMockup>
      </div>
      <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)`, padding: "0 60px", textAlign: "center" }}>
        <div style={{ fontFamily: FONT_FAMILY, fontSize: 66, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
          E o que ele <span style={{ color: "#FF6B6B" }}>aprende</span> com isso?
        </div>
      </div>
    </div>
  );
};
