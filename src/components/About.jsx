"use client";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const ROBOT_SCENE_URL = "https://prod.spline.design/mmjq5TxSSC19maqu/scene.splinecode";

export default function About() {
  return (
    <section id="about" className="section-padding">
      {/* Section label */}
      <div className="relative mb-12">
        <div className="text-[10rem] md:text-[14rem] text-[rgba(255,255,255,0.02)] absolute -top-16 md:-top-20 -left-6 md:-left-8 leading-none font-medium font-mono pointer-events-none">
          01
        </div>
        <div className="text-[0.9rem] uppercase tracking-[4px] border-b border-white/30 text-white inline-block pb-2 mt-12 relative z-10">
          About
        </div>
      </div>

      {/* Two-column layout: Robot left, Content right */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 reveal-up">
        
        {/* Left: Robot — contained, reduced size */}
        <div className="w-full md:w-[340px] lg:w-[400px] h-[340px] lg:h-[400px] flex-shrink-0 relative">
          <InteractiveRobotSpline
            scene={ROBOT_SCENE_URL}
            className="w-full h-full"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl mb-10 font-hero leading-tight font-bold">Who I Am</h2>
          <p className="text-[1.15rem] text-muted mb-8 max-w-[750px] leading-[1.8]">
            Frontend developer shipping apps users love — React Native + FlutterFlow, 5 apps live on both iOS and Android.
          </p>
          <p className="text-[1.15rem] text-muted mb-8 max-w-[750px] leading-[1.8]">
            Background in Mechanical Engineering — built a systems-thinking mindset that now drives performance optimization in code.
          </p>
          <p className="text-[1.15rem] text-muted mb-8 max-w-[750px] leading-[1.8]">
            Currently bridging the gap between AI automation (n8n, Claude API) and frontend engineering — building smarter, faster, leaner products.
          </p>

          <div className="flex flex-wrap gap-8 mt-12">
            <div className="glass-panel p-8 flex-1 min-w-[160px] rounded-xl relative overflow-hidden group transition-all duration-500 hover:border-white/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl text-white mb-2 font-hero">5+</div>
              <div className="text-[0.8rem] tracking-[2px] uppercase text-muted font-mono relative z-10">Apps Shipped</div>
            </div>
            <div className="glass-panel p-8 flex-1 min-w-[160px] rounded-xl relative overflow-hidden group transition-all duration-500 hover:border-white/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl text-white mb-2 font-hero">3</div>
              <div className="text-[0.8rem] tracking-[2px] uppercase text-muted font-mono relative z-10">Years Experience</div>
            </div>
            <div className="glass-panel p-8 flex-1 min-w-[160px] rounded-xl relative overflow-hidden group transition-all duration-500 hover:border-white/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-5xl text-white mb-2 font-hero">98%</div>
              <div className="text-[0.8rem] tracking-[2px] uppercase text-muted font-mono relative z-10">Requirement Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
