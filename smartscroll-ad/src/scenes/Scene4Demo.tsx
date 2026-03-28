import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { FONT_FAMILY, VIDEO_WIDTH, VIDEO_HEIGHT, VIOLET, PURPLE, PHONE_SCREEN_HEIGHT } from "../styles/constants";
import { PhoneMockup } from "../components/PhoneMockup";
import { FlashCard, QuizCard, VideoCard } from "../components/AppCard";

const PHONE_SCALE = 0.72;
const CARD_HEIGHT_FULL = PHONE_SCREEN_HEIGHT * PHONE_SCALE;

export const Scene4Demo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scroll1 = spring({ frame: Math.max(0, frame - 80), fps, config: { damping: 20, stiffness: 80, mass: 1.2 } });
  const scroll2 = spring({ frame: Math.max(0, frame - 155), fps, config: { damping: 20, stiffness: 80, mass: 1.2 } });
  const scrollOffset = scroll1 * CARD_HEIGHT_FULL + scroll2 * CARD_HEIGHT_FULL;
  const showQuizAnswer = frame > 120 && frame < 165;
  const videoProgress = interpolate(frame, [165, 240], [0, 0.55], { extrapolateRight: "clamp" });
  const phoneEnter = spring({ frame, fps, config: { damping: 22, stiffness: 100 } });
  const phoneScale = interpolate(phoneEnter, [0, 1], [0.85, 1]);
  const phoneOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const textOpacity = interpolate(frame, [6, 20], [0, 1], { extrapolateRight: "clamp" });
  const floatY = Math.sin(frame * 0.05) * 6;
  const activeCard = frame < 90 ? 0 : frame < 165 ? 1 : 2;
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: `linear-gradient(135deg, ${VIOLET} 0%, ${PURPLE} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", gap: 50, position: "relative" }}>
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -150, left: -150, width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ opacity: textOpacity, fontFamily: FONT_FAMILY, fontSize: 44, fontWeight: 700, color: "rgba(255,255,255,0.95)", textAlign: "center", padding: "0 60px", textShadow: "0 2px 12px rgba(0,0,0,0.2)", letterSpacing: -0.5 }}>
        Conteúdo feito para a <span style={{ color: "#FFE66D" }}>mente deles</span>
      </div>
      <div style={{ opacity: phoneOpacity, transform: `scale(${phoneScale}) translateY(${floatY}px)` }}>
        <PhoneMockup scale={PHONE_SCALE} frameColor="#2a1a4e">
          <div style={{ position: "absolute", top: -scrollOffset, left: 0, right: 0 }}>
            <div style={{ height: CARD_HEIGHT_FULL, overflow: "hidden" }}><FlashCard /></div>
            <div style={{ height: CARD_HEIGHT_FULL, overflow: "hidden" }}><QuizCard showAnswer={showQuizAnswer} /></div>
            <div style={{ height: CARD_HEIGHT_FULL, overflow: "hidden" }}><VideoCard progress={videoProgress} /></div>
          </div>
          <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", opacity: interpolate(frame, [60, 80], [0.8, 0], { extrapolateRight: "clamp" }), display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)" }}>↑</div>
            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", fontFamily: FONT_FAMILY, fontWeight: 600 }}>próximo</div>
          </div>
        </PhoneMockup>
      </div>
      <div style={{ display: "flex", gap: 12, opacity: interpolate(frame, [6, 20], [0, 1], { extrapolateRight: "clamp" }) }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: activeCard === i ? 28 : 10, height: 10, borderRadius: 5, backgroundColor: activeCard === i ? "#FFE66D" : "rgba(255,255,255,0.4)" }} />
        ))}
      </div>
    </div>
  );
};
