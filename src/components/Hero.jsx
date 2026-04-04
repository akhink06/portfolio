"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial entrance animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".name-char", { y: "0%", duration: 1.2, stagger: 0.04 }, 0.2)
      .to(".hero-subtitle", { opacity: 1, duration: 1 }, 0.8)
      .to(".pre-title", { opacity: 1, duration: 1 }, 0.6)
      .to(".hero-body", { opacity: 1, duration: 1 }, 1.0)
      .fromTo(".btn", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15 }, 1.2)
      .to(".hero-social", { opacity: 1, duration: 1 }, 1.4)
      .fromTo(".hero-spline", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 1.0);
  }, { scope: containerRef });

  const nameChars = "Akhin".split("");

  return (
    <section id="hero" ref={containerRef} className="flex flex-col md:flex-row items-center h-screen relative w-full overflow-hidden bg-black">
      
      <div className="hero-content w-full md:w-[50%] lg:w-[60%] relative z-10 pt-24 md:pt-16 px-[5%]">
        <div className="pre-title font-mono text-accent text-sm tracking-[3px] uppercase mb-6 opacity-0 shadow-lg text-shadow-black">
          Frontend Developer · Dubai, UAE
        </div>
        <h1 className="font-hero text-[clamp(3.5rem,8vw,7.5rem)] leading-none mb-6 font-bold drop-shadow-xl text-shadow-black">
          <div className="overflow-hidden flex pb-2 -mt-2">
            {nameChars.map((char, i) => (
              <span key={i} className="name-char inline-block translate-y-[110%]">{char}</span>
            ))}
          </div>
          <div className="overflow-hidden flex pb-2 -mt-[10px]">
            <span className="name-char inline-block translate-y-[110%]">K</span>
            <span className="name-char inline-block translate-y-[110%] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">.</span>
          </div>
        </h1>
        <h2 className="hero-subtitle font-mono text-muted text-lg mb-8 opacity-0 tracking-wide">
          Mobile & Web · React Native · FlutterFlow · AI Automation
        </h2>
        <p className="hero-body text-xl text-gradient max-w-xl leading-[1.8] mb-12 opacity-0 font-ui font-light">
          3 years shipping production apps across healthcare, fintech, and SaaS. From Figma to App Store — pixel-perfect, every time.
        </p>
        
        <div className="hero-cta flex flex-wrap gap-6 opacity-0">
          <Link href="#work" className="btn btn-primary glass-panel px-8 py-3 rounded-full text-white border border-white/20 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            View My Work
          </Link>
          <a 
            href="/assets/projects/resume/AKHIN K Developer.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-8 py-3 rounded-full bg-transparent text-muted border border-white/10 hover:text-white hover:border-white hover:-translate-y-1 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
        
        <div className="hero-social flex flex-wrap gap-10 mt-16 opacity-0">
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akhin-k-146107235/' },
            { name: 'GitHub', url: 'https://github.com/akhink06' },
            { name: 'Email', url: 'mailto:akhinkakhin@gmail.com' }
          ].map((social) => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted text-sm tracking-[2px] uppercase hover:text-accent transition-colors drop-shadow-md"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-spline hidden md:block absolute right-0 top-0 w-full md:w-[60%] lg:w-[50%] h-full z-0 opacity-0">
        <Spline scene="https://prod.spline.design/lsqgQd2L-RNaBbZP/scene.splinecode" />
      </div>
      
    </section>
  );
}
