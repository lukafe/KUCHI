import React from "react";
import { useCurrentFrame } from "remotion";

const BLOCK_COLORS = ["#b0b0c0","#9090a0","#c0c0d0","#a0a0b0","#8080a0","#b8b8c8","#d0d0e0","#7878a0"];

export const ScrollFeed: React.FC<{ speed?: number }> = ({ speed = 1.8 }) => {
  const frame = useCurrentFrame();
  const offsetY = (frame * speed) % 220;
  const blocks = Array.from({ length: 10 });
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#2a2a3a", position: "relative" }}>
      <div style={{ position: "absolute", top: -offsetY, left: 0, right: 0 }}>
        {blocks.map((_, i) => (
          <div key={i} style={{ width: "100%", height: 90 + (i % 3) * 30, backgroundColor: BLOCK_COLORS[i % BLOCK_COLORS.length], marginBottom: 6, display: "flex", alignItems: "center", padding: "0 16px", gap: 12, boxSizing: "border-box", filter: "blur(2px) saturate(0.3)", opacity: 0.7 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ height: 10, backgroundColor: "rgba(255,255,255,0.4)", borderRadius: 5, width: `${55 + (i * 17) % 40}%` }} />
              <div style={{ height: 8, backgroundColor: "rgba(255,255,255,0.25)", borderRadius: 4, width: `${35 + (i * 23) % 35}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #2a2a3a 0%, transparent 18%, transparent 80%, #2a2a3a 100%)", pointerEvents: "none" }} />
    </div>
  );
};
