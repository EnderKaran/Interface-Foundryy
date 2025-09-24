"use client";
import React, { useEffect, useState, useRef } from "react";
// DEĞİŞİKLİK BURADA: .js uzantısını ekledik.
import { cn } from "../../lib/utils"; 

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    particleColor,
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    speed = 1,
  } = props;

  // ... component'in geri kalan kodu (hiçbir değişiklik yok)
  const canvasRef = useRef(null);
  const [animations, setAnimations] = useState([]);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const context = canvas.getContext("2d");
      if (context) {
        context.scale(dpr, dpr);
        setCtx(context);
      }
    }
  }, []);

  useEffect(() => {
    if (ctx && canvasRef.current) {
      const sparks = [];
      const count = Math.floor((canvasRef.current.offsetWidth / 100) * particleDensity / 10);
      for (let i = 0; i < count; i++) {
        sparks.push({
          x: Math.random() * canvasRef.current.offsetWidth,
          y: Math.random() * canvasRef.current.offsetHeight,
          size: minSize + Math.random() * (maxSize - minSize),
          alpha: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 2 * speed + 0.5 * speed,
        });
      }
      setAnimations(sparks);
    }
  }, [ctx, particleDensity, minSize, maxSize, speed]);

  useEffect(() => {
    if (ctx && animations.length > 0) {
      let animationFrameId;
      const render = () => {
        if (!canvasRef.current) return;
        ctx.clearRect(0, 0, canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
        animations.forEach((spark) => {
          spark.y -= spark.speed;
          if (spark.y < 0) {
            spark.y = canvasRef.current.offsetHeight;
            spark.x = Math.random() * canvasRef.current.offsetWidth;
          }
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.size, 0, 2 * Math.PI);
          const r = parseInt(particleColor.slice(1, 3), 16);
          const g = parseInt(particleColor.slice(3, 5), 16);
          const b = parseInt(particleColor.slice(5, 7), 16);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${spark.alpha})`;
          ctx.fill();
        });
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [ctx, animations, particleColor]);

  return (
    <div className={cn("absolute inset-0 h-full w-full", className)}>
      <canvas
        id={id}
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: background,
        }}
      />
    </div>
  );
};