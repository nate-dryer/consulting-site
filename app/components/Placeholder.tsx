"use client";

import { useEffect, useRef } from "react";

interface PlaceholderProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const Placeholder = ({
  width,
  height,
  text = "Placeholder Image",
  bgColor = "#f3f4f6",
  textColor = "#6b7280",
}: PlaceholderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Draw text
    ctx.fillStyle = textColor;
    ctx.font = `${Math.max(16, Math.floor(width / 20))}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);

    // Draw border
    ctx.strokeStyle = "#d1d5db";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, width, height);
  }, [width, height, text, bgColor, textColor]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default Placeholder;
