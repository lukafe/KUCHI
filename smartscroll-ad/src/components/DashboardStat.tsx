import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { FONT_FAMILY, DASH_ACCENT, DASH_MUTED, DASH_TEXT } from "../styles/constants";

interface DashboardStatProps {
  icon: string;
  value: string;
  label: string;
  delay?: number;
  color?: string;
}

export const DashboardStat: React.FC<DashboardStatProps> = ({ icon, value, label, delay = 0, color = DASH_ACCENT }) => {
  const frame = useCurrentFrame();
  const animFrame = Math.max(0, frame - delay);
  const opacity = interpolate(animFrame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const translateX = interpolate(animFrame, [0, 20], [60, 0], { extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, opacity, transform: `translateX(${translateX}px)`, backgroundColor: "#fff", borderRadius: 18, padding: "20px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{icon}</div>
      <div style={{ fontFamily: FONT_FAMILY }}>
        <div style={{ fontSize: 30, fontWeight: 800, color: DASH_TEXT, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: DASH_MUTED, marginTop: 4 }}>{label}</div>
      </div>
    </div>
  );
};
