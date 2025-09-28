"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

// ✅ Define skills with icon + brand color
const SKILLS = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "white" },
  { name: "Node.js", icon: FaNodeJs, color: "#539E43" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export default function SkillsSection({ duration = 40 }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // animation refs
  const posRef = useRef(0);
  const lastTsRef = useRef(null);
  const rafRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const [repeat, setRepeat] = useState(2);

  // Build repeated items array
  const items = [];
  for (let r = 0; r < repeat; r++) {
    for (let s of SKILLS) items.push(s);
  }

  // Measure & adjust repeat count
  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const full = track.scrollWidth;
      const single = full / repeat;

      if (single < container.clientWidth && repeat < 32) {
        setRepeat((p) => p * 2);
        return;
      }

      setTrackWidth(single || 0);
      posRef.current = 0;
      if (track) track.style.transform = `translateX(0px)`;
    };

    const t = setTimeout(measure, 50);
    const ro = new ResizeObserver(() => {
      setTimeout(measure, 30);
    });
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("load", measure);

    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("load", measure);
    };
  }, [repeat]);

  // rAF animation
  useEffect(() => {
    if (!trackWidth || trackWidth <= 0) return;

    const pxPerMs = trackWidth / (duration * 1000);

    const step = (ts) => {
      if (paused) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (!lastTsRef.current) lastTsRef.current = ts;
      const delta = ts - lastTsRef.current;
      lastTsRef.current = ts;

      posRef.current -= pxPerMs * delta;

      if (posRef.current <= -trackWidth) {
        posRef.current += trackWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${Math.round(
          posRef.current
        )}px)`;
        trackRef.current.style.willChange = "transform";
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [trackWidth, duration, paused]);

  // pause/resume handlers
  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  return (
    <section className="relative w-full h-[100px] flex items-center bg-transparent">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-20 bg-gradient-to-r from-gray-900" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-20 bg-gradient-to-l from-gray-900" />

      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-6 pt-5 pb-5"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
        >
          {items.map((skill, i) => {
            const isDuplicate = Math.floor(i / SKILLS.length) > 0;
            const Icon = skill.icon;
            return (
              <button
                key={`${skill.name}-${i}`}
                aria-hidden={isDuplicate}
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onFocus={handlePause}
                onBlur={handleResume}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white/3 to-white/6 border border-white/6 backdrop-blur-sm shadow-md transform transition-transform hover:scale-105 focus:outline-none whitespace-nowrap"
                type="button"
              >
                <Icon className="w-8 h-8 flex-shrink-0" color={skill.color} />
                <span className="text-sm font-medium text-white select-none">
                  {skill.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
