"use client";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-[5%] py-6 z-[1000] transition-all duration-400 ${
          scrolled ? "bg-black/85 backdrop-blur-md border-b border-accent py-4" : ""
        }`}
      >
        <div className="font-hero text-3xl font-bold tracking-widest">
          <span className="text-accent">A</span>K
        </div>
        <div className="hidden md:flex gap-10 text-sm font-ui items-center">
          <Link href="#about" className="hover:text-accent transition-colors pb-2">About</Link>
          <Link href="#skills" className="hover:text-accent transition-colors pb-2">Skills</Link>
          <Link href="#experience" className="hover:text-accent transition-colors pb-2">Experience</Link>
          <Link href="#contact" className="hover:text-accent transition-colors pb-2">Contact</Link>
          <a 
            href="/assets/projects/resume/AKHIN K Developer.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-all duration-300 text-xs uppercase tracking-widest font-mono"
          >
            Resume
          </a>
        </div>
        <div className="flex md:hidden items-center gap-6 z-[1001]">
          <div className="flex flex-col gap-[6px] cursor-pointer" onClick={toggleMenu}>
            <div className={`w-[30px] h-[2px] bg-white transition-all duration-400 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></div>
            <div className={`w-[30px] h-[2px] bg-white transition-all duration-400 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-[30px] h-[2px] bg-white transition-all duration-400 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-[-100%] w-full h-screen bg-black z-[999] flex flex-col justify-center items-center gap-10 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? "right-0" : ""
        }`}
      >
        <Link href="#about" onClick={toggleMenu} className="font-hero text-4xl hover:text-accent transition-colors">About</Link>
        <Link href="#skills" onClick={toggleMenu} className="font-hero text-4xl hover:text-accent transition-colors">Skills</Link>
        <Link href="#experience" onClick={toggleMenu} className="font-hero text-4xl hover:text-accent transition-colors">Experience</Link>
        <Link href="#contact" onClick={toggleMenu} className="font-hero text-4xl hover:text-accent transition-colors">Contact</Link>
        <a 
          href="/assets/projects/resume/AKHIN K Developer.pdf" 
          onClick={toggleMenu}
          target="_blank" 
          rel="noopener noreferrer"
          className="font-hero text-4xl hover:text-accent transition-colors"
        >
          Resume
        </a>
      </div>
    </>
  );
}
