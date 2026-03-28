import React from "react";
import { FONT_FAMILY } from "../styles/constants";

export const FlashCard: React.FC = () => (
  <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #FFE66D 0%, #FF6B6B 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: FONT_FAMILY, gap: 16, paddingTop: 60 }}>
    <div style={{ backgroundColor: "rgba(255,255,255,0.35)", borderRadius: 20, padding: "6px 18px", fontSize: 22, fontWeight: 700, color: "#5a2d00", letterSpacing: 2, textTransform: "uppercase" }}>English</div>
    <div style={{ fontSize: 140, lineHeight: 1 }}>🍎</div>
    <div style={{ fontSize: 88, fontWeight: 900, color: "#fff", textShadow: "0 4px 20px rgba(0,0,0,0.25)", letterSpacing: -2 }}>APPLE</div>
    <div style={{ width: 60, height: 4, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 2 }} />
    <div style={{ fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Maçã</div>
  </div>
);

export const QuizCard: React.FC<{ showAnswer: boolean }> = ({ showAnswer }) => {
  const options = ["2", "4", "6"];
  const correctIndex = 1;
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: FONT_FAMILY, gap: 28, padding: "60px 32px 32px", boxSizing: "border-box" }}>
      <div style={{ backgroundColor: "rgba(255,255,255,0.25)", borderRadius: 20, padding: "6px 18px", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: 2, textTransform: "uppercase" }}>Quiz 🧠</div>
      <div style={{ fontSize: 38, fontWeight: 800, color: "#fff", textAlign: "center", lineHeight: 1.3, textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>Quantas patas tem um gato?</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, width: "100%" }}>
        {options.map((opt, i) => {
          const highlighted = showAnswer && i === correctIndex;
          return (
            <div key={opt} style={{ backgroundColor: highlighted ? "#2ECC71" : "rgba(255,255,255,0.25)", borderRadius: 16, padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", border: highlighted ? "3px solid #fff" : "3px solid rgba(255,255,255,0.2)" }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>{opt} patas</span>
              {highlighted && <span style={{ fontSize: 36 }}>✅</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const VideoCard: React.FC<{ progress: number }> = ({ progress }) => (
  <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #0a0a1a 0%, #1a1a4e 50%, #0d1b4e 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: FONT_FAMILY, gap: 24, padding: "60px 32px 48px", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
    {Array.from({ length: 30 }).map((_, i) => (
      <div key={i} style={{ position: "absolute", width: i % 5 === 0 ? 4 : 2, height: i % 5 === 0 ? 4 : 2, borderRadius: "50%", backgroundColor: "#fff", opacity: 0.4 + (i % 3) * 0.2, top: `${(i * 37 + 5) % 100}%`, left: `${(i * 53 + 10) % 100}%` }} />
    ))}
    <div style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", border: "3px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "20px 0 20px 36px", borderColor: "transparent transparent transparent #fff", marginLeft: 8 }} />
    </div>
    <div style={{ fontSize: 42, fontWeight: 900, color: "#fff", textAlign: "center", textShadow: "0 2px 20px rgba(0,0,0,0.5)", lineHeight: 1.2 }}>The Solar System 🌍</div>
    <div style={{ fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>Science • Ages 5-8</div>
    <div style={{ width: "85%", marginTop: 8 }}>
      <div style={{ width: "100%", height: 8, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${progress * 100}%`, height: "100%", background: "linear-gradient(90deg, #4facfe, #00f2fe)", borderRadius: 4 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 22, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}><span>0:00</span><span>2:34</span></div>
    </div>
  </div>
);
