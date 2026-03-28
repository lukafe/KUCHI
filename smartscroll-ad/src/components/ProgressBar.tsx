import React from "react";

interface ProgressBarProps {
  progress: number;
  width?: number;
  height?: number;
  trackColor?: string;
  fillColor?: string;
  radius?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width = 300,
  height = 8,
  trackColor = "rgba(255,255,255,0.25)",
  fillColor = "#FFD700",
  radius = 4,
}) => {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return (
    <div style={{ width, height, backgroundColor: trackColor, borderRadius: radius, overflow: "hidden", position: "relative" }}>
      <div style={{ width: `${clampedProgress * 100}%`, height: "100%", backgroundColor: fillColor, borderRadius: radius }} />
    </div>
  );
};
