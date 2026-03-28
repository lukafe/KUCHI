import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { FONT_FAMILY, VIDEO_WIDTH, VIDEO_HEIGHT, DASH_BG, DASH_ACCENT, DASH_TEXT, DASH_MUTED, VIOLET, PURPLE } from "../styles/constants";
import { PhoneMockup } from "../components/PhoneMockup";

export const Scene5Dashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const phoneEnter = spring({ frame, fps, config: { damping: 22, stiffness: 90 } });
  const phoneY = interpolate(phoneEnter, [0, 1], [120, 0]);
  const phoneOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [5, 18], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [5, 18], [-24, 0], { extrapolateRight: "clamp" });
  const s1o = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const s1x = interpolate(frame, [20, 35], [60, 0], { extrapolateRight: "clamp" });
  const s2o = interpolate(frame, [32, 47], [0, 1], { extrapolateRight: "clamp" });
  const s2x = interpolate(frame, [32, 47], [60, 0], { extrapolateRight: "clamp" });
  const s3o = interpolate(frame, [44, 59], [0, 1], { extrapolateRight: "clamp" });
  const s3x = interpolate(frame, [44, 59], [60, 0], { extrapolateRight: "clamp" });
  const chartOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });
  const barProgress = interpolate(frame, [65, 100], [0, 1], { extrapolateRight: "clamp" });
  const weekData = [0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.75];
  const weekLabels = ["S","T","Q","Q","S","S","D"];
  const MAX_BAR_H = 70;
  const floatY = Math.sin(frame * 0.07) * 5;
  const statStyle = (o: number, x: number) => ({ opacity: o, transform: `translateX(${x}px)`, backgroundColor: "#fff", borderRadius: 16, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 3px 14px rgba(102,126,234,0.1)" });
  const iconStyle = (bg: string) => ({ width: 46, height: 46, borderRadius: "50%", backgroundColor: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 as const });
  return (
    <div style={{ width: VIDEO_WIDTH, height: VIDEO_HEIGHT, background: "linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", gap: 48, position: "relative" }}>
      <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, borderRadius: "50%", background: `linear-gradient(135deg, ${VIOLET}22, ${PURPLE}22)`, pointerEvents: "none" }} />
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, fontFamily: FONT_FAMILY, fontSize: 54, fontWeight: 800, color: "#2d3436", textAlign: "center", padding: "0 60px", lineHeight: 1.2 }}>
        Acompanhe cada <span style={{ color: DASH_ACCENT }}>progresso</span>
      </div>
      <div style={{ opacity: phoneOpacity, transform: `translateY(${phoneY + floatY}px)` }}>
        <PhoneMockup scale={0.72} frameColor="#2a2a3a">
          <div style={{ width: "100%", height: "100%", backgroundColor: DASH_BG, display: "flex", flexDirection: "column", padding: "70px 20px 24px", boxSizing: "border-box", gap: 16, overflowY: "hidden" as const }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div>
                <div style={{ fontFamily: FONT_FAMILY, fontSize: 26, fontWeight: 800, color: DASH_TEXT }}>Lucas, 6 anos 👋</div>
                <div style={{ fontFamily: FONT_FAMILY, fontSize: 18, color: DASH_MUTED, fontWeight: 500 }}>Esta semana</div>
              </div>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${VIOLET}, ${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>🦁</div>
            </div>
            <div style={statStyle(s1o, s1x)}><div style={iconStyle("#EEF2FF")}>📚</div><div style={{ fontFamily: FONT_FAMILY }}><div style={{ fontSize: 26, fontWeight: 800, color: DASH_TEXT }}>42 palavras</div><div style={{ fontSize: 18, color: DASH_MUTED, fontWeight: 500 }}>em inglês aprendidas</div></div></div>
            <div style={statStyle(s2o, s2x)}><div style={iconStyle("#FFF3E0")}>⏱️</div><div style={{ fontFamily: FONT_FAMILY }}><div style={{ fontSize: 26, fontWeight: 800, color: DASH_TEXT }}>3h 20min</div><div style={{ fontSize: 18, color: DASH_MUTED, fontWeight: 500 }}>conteúdo educativo</div></div></div>
            <div style={statStyle(s3o, s3x)}><div style={iconStyle("#E8F5E9")}>⭐</div><div style={{ fontFamily: FONT_FAMILY }}><div style={{ fontSize: 26, fontWeight: 800, color: DASH_TEXT }}>12 quizzes</div><div style={{ fontSize: 18, color: DASH_MUTED, fontWeight: 500 }}>completados</div></div></div>
            <div style={{ opacity: chartOpacity, backgroundColor: "#fff", borderRadius: 16, padding: "16px 18px", boxShadow: "0 3px 14px rgba(102,126,234,0.1)" }}>
              <div style={{ fontFamily: FONT_FAMILY, fontSize: 18, fontWeight: 700, color: DASH_TEXT, marginBottom: 12 }}>Progresso semanal</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: MAX_BAR_H + 24 }}>
                {weekData.map((val, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", height: val * MAX_BAR_H * barProgress, background: `linear-gradient(180deg, ${VIOLET}, ${PURPLE})`, borderRadius: 4, minHeight: 4 }} />
                    <div style={{ fontFamily: FONT_FAMILY, fontSize: 14, color: DASH_MUTED, fontWeight: 600 }}>{weekLabels[i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </div>
  );
};
