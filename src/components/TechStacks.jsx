"use client";
import React from "react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import {
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiFigma,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

export default function TechStacks() {
  const stacks = [
    // Row 1 — 3 items
    [
      { icon: <SiReact style={{ color: "#61DAFB" }} className="h-8 w-8" />, text: "React Native", delay: 0.1 },
      { icon: <SiNextdotjs style={{ color: "#ffffff" }} className="h-8 w-8" />, text: "Next.js", delay: 0.2 },
      { icon: <SiFlutter style={{ color: "#54C5F8" }} className="h-8 w-8" />, text: "FlutterFlow", delay: 0.3 },
    ],
    // Row 2 — 2 items (middle)
    [
      { icon: <SiNodedotjs style={{ color: "#83CD29" }} className="h-8 w-8" />, text: "n8n / Node", delay: 0.4 },
      { icon: <SiFigma style={{ color: "#F24E1E" }} className="h-8 w-8" />, text: "Figma", delay: 0.5 },
    ],
    // Row 3 — 3 items
    [
      { icon: <SiJavascript style={{ color: "#F7DF1E" }} className="h-8 w-8" />, text: "JavaScript", delay: 0.6 },
      { icon: <SiTailwindcss style={{ color: "#38BDF8" }} className="h-8 w-8" />, text: "Tailwind", delay: 0.7 },
      { icon: <SiFirebase style={{ color: "#FFCA28" }} className="h-8 w-8" />, text: "Firebase", delay: 0.8 },
    ],
  ];

  return (
    <section id="techstacks" className="section-padding">
      <div className="reveal-up">
        {/* Section header */}
        <div className="relative mb-8">
          <div className="text-[10rem] md:text-[14rem] text-[rgba(255,255,255,0.02)] absolute -top-16 md:-top-20 -left-6 md:-left-8 leading-none font-medium font-mono pointer-events-none">
            02
          </div>
          <div className="text-[0.9rem] uppercase tracking-[4px] border-b border-white/30 text-white inline-block pb-2 mt-12 relative z-10">
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-6xl mt-6 font-hero leading-tight font-bold">
            Built With
          </h2>
          <p className="text-[1.15rem] text-muted mt-4 max-w-[550px] leading-[1.8]">
            The tools and technologies I rely on to ship world-class products.
          </p>
        </div>

        {/* Radar + Icons */}
        <div className="relative flex h-[420px] md:h-[480px] w-full flex-col items-center justify-center space-y-6 overflow-hidden">
          {/* Row 1 */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="flex w-full items-center justify-center gap-12 md:justify-between">
              {stacks[0].map((s) => (
                <IconContainer key={s.text} icon={s.icon} text={s.text} delay={s.delay} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="mx-auto w-full max-w-sm">
            <div className="flex w-full items-center justify-center gap-20 md:justify-between">
              {stacks[1].map((s) => (
                <IconContainer key={s.text} icon={s.icon} text={s.text} delay={s.delay} />
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="flex w-full items-center justify-center gap-12 md:justify-between">
              {stacks[2].map((s) => (
                <IconContainer key={s.text} icon={s.icon} text={s.text} delay={s.delay} />
              ))}
            </div>
          </div>

          {/* Radar */}
          <Radar className="absolute bottom-[-3rem]" />

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
