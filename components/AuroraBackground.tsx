"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AuroraBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rand = gsap.utils.random;

      gsap.to(blob1Ref.current, {
        y: () => rand(-100, 100),
        x: () => rand(-100, 100),
        duration: () => rand(8, 12),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        y: () => rand(-150, 150),
        x: () => rand(-150, 150),
        duration: () => rand(10, 15),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob3Ref.current, {
        scale: () => rand(0.8, 1.2),
        duration: () => rand(6, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const blob1Y = gsap.quickTo(blob1Ref.current, "y", { duration: 0.2, ease: "power2.out" });
      const blob2Y = gsap.quickTo(blob2Ref.current, "y", { duration: 0.2, ease: "power2.out" });
      const blob3Y = gsap.quickTo(blob3Ref.current, "y", { duration: 0.2, ease: "power2.out" });

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          blob1Y(progress * 200);
          blob2Y(progress * -150);
          blob3Y(progress * 100);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div ref={blob1Ref} className="aurora-blob aurora-blob-1" />
      <div ref={blob2Ref} className="aurora-blob aurora-blob-2" />
      <div ref={blob3Ref} className="aurora-blob aurora-blob-3" />
    </div>
  );
}
