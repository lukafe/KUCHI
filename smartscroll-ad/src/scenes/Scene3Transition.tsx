import React from "react";
import { useCurrentFrame, interpolate, useVideoConfig } from "remotion";
import { FONT_FAMILY, VIDEO_WIDTH, VIDEO_HEIGHT, GOLD } from "../styles/constants";
import { PhoneMockup } from "../components/PhoneMockup";
import { ScrollFeed } from "../components/ScrollFeed";
import { FlashCard } from "../components/AppCard";

export const Scene3Transition: React.FC = () => {
  const frame = useCurrentFrame();
  const bgProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const flipProgress = interpolate(frame, [10, 45], [0, 180], { extrapolateRight: "clamp" });
  const isFlipped = flipProgress > 90;
  const glowOpacity = interpolate(Math.abs(flipProgress - 90), [0, 30], [0.9, 0], { extrapolateRight: "clamp" });
  const textOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [50, 70], [40, 0], { extrapolateRight: "clamp" });
  const r = Math.round(10 + (102 - 10) * bgProgress);
  const g = Math.round(10 + (126 - 10) * bgProgress);
  const b = Math.round(20 + (234 - 20) * bgProgress);
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: `linear-gradient(135deg, rgb(${r},${g},${b}) 0%, rgb(${Math.round(118 * bgProgress)},${Math.round(75 * bgProgress)},${Math.round(162 * bgProgress)}) 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", gap: 60, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#fff", opacity: glowOpacity, pointerEvents: "none" }} />
      <div style={{ perspective: 1200, transformStyle: "preserve-3d" }}>
        <div style={{ transform: `rotateY(${flipProgress}deg)`, transformStyle: "preserve-3d", position: "relative" }}>
          <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            {!isFlipped && <PhoneMockup scale={0.72} frameColor="#1c1c2e"><ScrollFeed speed={2} /></PhoneMockup>}
          </div>
          <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", position: isFlipped ? "relative" : "absolute", top: 0, left: 0 }}>
            {isFlipped && <PhoneMockup scale={0.72} frameColor="#2a1a4e"><FlashCard /></PhoneMockup>}
          </div>
        </div>
      </div>
      <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)`, padding: "0 60px", textAlign: "center" }}>
        <div style={{ fontFamily: FONT_FAMILY, fontSize: 62, fontWeight: 800, color: "#fff", lineHeight: 1.25, textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          E se o mesmo scroll ensinasse <span style={{ color: GOLD, textShadow: `0 0 30px ${GOLD}80` }}>inglês</span>?
        </div>
      </div>
    </div>
  );
};
