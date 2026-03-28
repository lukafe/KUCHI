import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FONT_FAMILY, DARK_BG, DARK_TEXT, VIDEO_WIDTH, VIDEO_HEIGHT } from "../styles/constants";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slamProgress = spring({ frame, fps, config: { damping: 14, stiffness: 200, mass: 0.8 } });
  const scale = interpolate(slamProgress, [0, 1], [1.4, 1]);
  const opacity = interpolate(frame, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  const shakeIntensity = interpolate(frame, [0, 6, 20, 30], [0, 8, 4, 0], { extrapolateRight: "clamp" });
  const shakeX = frame < 30 ? Math.sin(frame * 2.1) * shakeIntensity : 0;
  const shakeY = frame < 30 ? Math.cos(frame * 1.7) * shakeIntensity : 0;
  const grainSeed = frame % 60;
  const line2Opacity = interpolate(frame, [8, 18], [0, 1], { extrapolateRight: "clamp" });
  const line3Opacity = interpolate(frame, [18, 28], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: `radial-gradient(ellipse at 50% 50%, #1a1a2e 0%, ${DARK_BG} 70%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", transform: `translate(${shakeX}px, ${shakeY}px)` }}>
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={3} seed={grainSeed} result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" />
          </filter>
        </defs>
      </svg>
      <div style={{ position: "absolute", inset: 0, filter: "url(#grain)", opacity: 0.06, backgroundColor: "#fff", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 80, left: "10%", right: "10%", height: 3, background: "linear-gradient(90deg, transparent, #ff4444, transparent)", opacity: interpolate(frame, [5, 20], [0, 0.8], { extrapolateRight: "clamp" }) }} />
      <div style={{ opacity, transform: `scale(${scale})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "0 60px" }}>
        <div style={{ fontSize: 92, fontWeight: 900, fontFamily: FONT_FAMILY, color: DARK_TEXT, textAlign: "center", lineHeight: 1.05, textTransform: "uppercase", letterSpacing: -3 }}>Seu filho</div>
        <div style={{ opacity: line2Opacity, fontSize: 100, fontWeight: 900, fontFamily: FONT_FAMILY, color: "#FF4444", textAlign: "center", lineHeight: 1.05, textTransform: "uppercase", letterSpacing: -4 }}>scrolla 2h</div>
        <div style={{ opacity: line3Opacity, fontSize: 92, fontWeight: 900, fontFamily: FONT_FAMILY, color: DARK_TEXT, textAlign: "center", lineHeight: 1.05, textTransform: "uppercase", letterSpacing: -3 }}>por dia.</div>
      </div>
      <div style={{ position: "absolute", bottom: 80, left: "10%", right: "10%", height: 3, background: "linear-gradient(90deg, transparent, #ff4444, transparent)", opacity: interpolate(frame, [5, 20], [0, 0.8], { extrapolateRight: "clamp" }) }} />
    </div>
  );
};
