import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { FONT_FAMILY, VIDEO_WIDTH, VIDEO_HEIGHT, VIOLET, PURPLE, GOLD } from "../styles/constants";

export const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const headlineEnter = spring({ frame, fps, config: { damping: 18, stiffness: 120, mass: 0.9 } });
  const headlineScale = interpolate(headlineEnter, [0, 1], [0.88, 1]);
  const headlineOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [15, 28], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(frame, [15, 28], [24, 0], { extrapolateRight: "clamp" });
  const ctaOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [25, 40], [30, 0], { extrapolateRight: "clamp" });
  const pulseCycle = (frame % 30) / 30;
  const pulseScale = 1 + Math.sin(pulseCycle * Math.PI * 2) * 0.03;
  const glowOpacity = 0.5 + Math.sin(pulseCycle * Math.PI * 2) * 0.3;
  const logoOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: `linear-gradient(155deg, ${PURPLE} 0%, ${VIOLET} 40%, #4facfe 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", gap: 0 }}>
      <div style={{ position: "absolute", top: -300, left: -200, width: 800, height: 800, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 100, opacity: logoOpacity, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ fontSize: 64 }}>🚀</div>
        <div style={{ fontFamily: FONT_FAMILY, fontSize: 38, fontWeight: 900, color: "#fff", letterSpacing: 3, textTransform: "uppercase", opacity: 0.9 }}>SmartScroll</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48, padding: "0 60px", marginTop: 60 }}>
        <div style={{ opacity: headlineOpacity, transform: `scale(${headlineScale})`, fontFamily: FONT_FAMILY, fontSize: 96, fontWeight: 900, color: "#fff", textAlign: "center", lineHeight: 1.05, letterSpacing: -3, textShadow: "0 6px 30px rgba(0,0,0,0.25)" }}>
          Troque a culpa por <span style={{ color: GOLD, textShadow: `0 0 40px ${GOLD}80, 0 6px 30px rgba(0,0,0,0.25)` }}>aprendizado.</span>
        </div>
        <div style={{ opacity: subOpacity, transform: `translateY(${subY}px)`, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ fontFamily: FONT_FAMILY, fontSize: 42, fontWeight: 700, color: "rgba(255,255,255,0.9)", textAlign: "center" }}>Lista de espera aberta</div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 40, padding: "10px 30px", fontFamily: FONT_FAMILY, fontSize: 32, fontWeight: 600, color: "rgba(255,255,255,0.75)", border: "2px solid rgba(255,255,255,0.25)" }}>🔥 Vagas limitadas para o beta</div>
        </div>
        <div style={{ opacity: ctaOpacity, transform: `translateY(${ctaY}px)`, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 520 * pulseScale, height: 96 * pulseScale, borderRadius: 50, border: `3px solid rgba(255,220,0,${glowOpacity})`, pointerEvents: "none" }} />
            <div style={{ backgroundColor: GOLD, borderRadius: 50, padding: "28px 72px", fontFamily: FONT_FAMILY, fontSize: 40, fontWeight: 900, color: "#2d2d00", letterSpacing: -0.5, boxShadow: "0 12px 40px rgba(255,215,0,0.45)", transform: `scale(${pulseScale})`, whiteSpace: "nowrap" as const }}>Cadastre-se agora</div>
          </div>
          <div style={{ fontFamily: FONT_FAMILY, fontSize: 32, fontWeight: 600, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>Link na bio ↓</div>
        </div>
      </div>
    </div>
  );
};
