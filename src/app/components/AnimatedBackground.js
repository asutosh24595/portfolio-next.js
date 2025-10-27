'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 250;
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * width,
      radius: Math.random() * 1.2 + 0.5,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Space-like gradient background (deep blues and purples)
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
      gradient.addColorStop(0, '#0d0d26'); // deep purple
      gradient.addColorStop(0.5, '#050d1a'); // dark blue
      gradient.addColorStop(1, '#000010');   // almost black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.z -= 0.5;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }

        const sx = ((star.x - width / 2) * (width / star.z)) + width / 2;
        const sy = ((star.y - height / 2) * (width / star.z)) + height / 2;

        const dx = (mouseX - width / 2) * 0.002 * star.z;
        const dy = (mouseY - height / 2) * 0.002 * star.z;

        ctx.beginPath();
        ctx.arc(sx + dx, sy + dy, star.radius * (width / star.z), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'blur(0.8px)',
      }}
    />
  );
}
