import React from "react";
import {
  PHONE_WIDTH,
  PHONE_HEIGHT,
  PHONE_RADIUS,
  PHONE_BORDER,
  PHONE_SCREEN_WIDTH,
  PHONE_SCREEN_HEIGHT,
} from "../styles/constants";

interface PhoneMockupProps {
  children?: React.ReactNode;
  frameColor?: string;
  scale?: number;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  frameColor = "#1c1c1e",
  scale = 1,
}) => {
  return (
    <div
      style={{
        width: PHONE_WIDTH * scale,
        height: PHONE_HEIGHT * scale,
        borderRadius: PHONE_RADIUS * scale,
        backgroundColor: frameColor,
        boxShadow: `0 ${40 * scale}px ${80 * scale}px rgba(0,0,0,0.6), inset 0 0 0 ${2 * scale}px rgba(255,255,255,0.08)`,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "absolute", right: -PHONE_BORDER * scale - 4 * scale, top: 160 * scale, width: 6 * scale, height: 60 * scale, backgroundColor: "#3a3a3c", borderRadius: 3 * scale }} />
      <div style={{ position: "absolute", left: -PHONE_BORDER * scale - 4 * scale, top: 130 * scale, width: 6 * scale, height: 40 * scale, backgroundColor: "#3a3a3c", borderRadius: 3 * scale }} />
      <div style={{ position: "absolute", left: -PHONE_BORDER * scale - 4 * scale, top: 190 * scale, width: 6 * scale, height: 60 * scale, backgroundColor: "#3a3a3c", borderRadius: 3 * scale }} />
      <div
        style={{
          position: "absolute",
          top: PHONE_BORDER * scale,
          left: PHONE_BORDER * scale,
          width: PHONE_SCREEN_WIDTH * scale,
          height: PHONE_SCREEN_HEIGHT * scale,
          borderRadius: (PHONE_RADIUS - PHONE_BORDER) * scale,
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14 * scale,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110 * scale,
            height: 30 * scale,
            backgroundColor: frameColor,
            borderRadius: 20 * scale,
            zIndex: 10,
          }}
        />
        <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
          {children}
        </div>
      </div>
    </div>
  );
};
