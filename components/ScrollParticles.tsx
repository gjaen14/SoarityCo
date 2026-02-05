import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  phase: number;
}

export const ScrollParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollRef = useRef(0);

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particleCount = 800;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Create a sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 400 + Math.random() * 400; // Cloud radius

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x, y, z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 2 + 0.5,
        phase: Math.random() * Math.PI * 2
      });
    }
    particlesRef.current = particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.005;

      // Clear canvas
      ctx.fillStyle = '#0C0C0C';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Scroll factor affects rotation and zoom
      // We divide by window.innerHeight to normalize roughly
      const scrollFactor = scrollRef.current * 0.002;

      // Sort particles by Z for depth
      // We need to project them first to sort correctly, but for simple stars we can just draw
      // However, for atomic feel, connecting lines need proximity.

      // Let's update positions based on 3D rotation matrix driven by scroll
      const cosY = Math.cos(scrollFactor + time * 0.5);
      const sinY = Math.sin(scrollFactor + time * 0.5);
      const cosX = Math.cos(scrollFactor * 0.5);
      const sinX = Math.sin(scrollFactor * 0.5);

      particlesRef.current.forEach(p => {
        // Rotate around Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate around X
        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Zoom effect from scroll (Camera moves forward)
        const zoom = 1 + scrollRef.current * 0.0005;
        z2 = z2 * zoom;

        // Perspective projection
        // Camera distance
        const fov = 800;
        const scale = fov / (fov + z2 + 800); // 800 is camera z offset

        if (scale > 0) {
          const x2d = centerX + x1 * scale;
          const y2d = centerY + y1 * scale;

          // Draw particle
          ctx.beginPath();
          const alpha = Math.min(1, (scale * scale * scale) + 0.1);

          // brand-accent color (#B69E8A) with variation
          // Make some neutral light, some accent taupe
          if (p.phase > 3) {
            ctx.fillStyle = `rgba(182, 158, 138, ${alpha})`; // brand-accent
          } else {
            ctx.fillStyle = `rgba(230, 226, 222, ${alpha})`; // brand-neutral-light
          }

          ctx.arc(x2d, y2d, p.radius * scale, 0, Math.PI * 2);
          ctx.fill();

          // Add Glow
          if (p.radius > 2) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#B69E8A';
          } else {
            ctx.shadowBlur = 0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block" />
      {/* Vignette - centered and clear to keep animation visible */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0C0C0C_100%)] opacity-80"></div>
    </div>
  );
};