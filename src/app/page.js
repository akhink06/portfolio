"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStacks from "@/components/TechStacks";
import Experience from "@/components/Experience";
import BeyondJob from "@/components/BeyondJob";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOpts = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOpts);

    document.querySelectorAll(".reveal-up").forEach((el) => {
      gsap.set(el, { opacity: 0, y: 50 });
      revealObserver.observe(el);
    });

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target.querySelectorAll(".skill-group"), {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, observerOpts);

    const masonry = document.querySelector(".masonry-layout");
    if (masonry) staggerObserver.observe(masonry);

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, x: 0, duration: 1, ease: "power3.out" });
          timelineObserver.unobserve(entry.target);
        }
      });
    }, observerOpts);

    document.querySelectorAll(".timeline-item").forEach((el) => {
      gsap.set(el, { opacity: 0, x: 50 });
      timelineObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStacks />
        <Skills />
        <Experience />
        <BeyondJob />
      </main>
      <Footer />
    </>
  );
}
