"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const webProjects = [
  {
    title: "Hosface",
    link: "https://www.hosface.com/",
    image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/05-02-2026/hero.svg",
    role: "Frontend Developer",
    tech: ["Next.js", "React", "Tailwind", "GSAP"],
    year: "2024",
    desc: "A comprehensive digital platform for healthcare professionals and organizations, focusing on seamless medical networking and patient care.",
  },
  {
    title: "Steyp",
    link: "https://steyp.com/",
    image: "/assets/projects/steyp.png",
    role: "Fullstack Developer",
    tech: ["React", "Next.js", "Tailwind"],
    year: "2024",
    desc: "An advanced learning ecosystem empowering students and professionals to master future-ready skills through immersive tech education.",
  }
];

const mobileProjects = [
  {
    title: "Aidmak",
    images: [
      "/assets/projects/aidmak/slide1.png",
      "/assets/projects/aidmak/slide2.png",
      "/assets/projects/aidmak/slide3.png"
    ],
    role: "Mobile App Developer",
    tech: ["React Native", "Expo"],
    year: "2024",
    desc: "A personal costume customization app empowering you to add dresses to your virtual wardrobe and curate unique styles seamlessly.",
  },
  {
    title: "WiseTalkies",
    link: "https://wisetalkies.com/",
    image: "/assets/projects/wisetalkies.png",
    role: "Mobile App Developer",
    tech: ["React Native", "Firebase", "Redux"],
    year: "2024",
    desc: "A creative platform empowering users to engage in meaningful conversations and knowledge sharing through an intuitive mobile interface.",
  },
  {
    title: "Hosface Patient App",
    image: "/assets/projects/hosface_patient.png",
    role: "Mobile App Developer",
    tech: ["FlutterFlow", "Firebase"],
    year: "2024",
    desc: "A unified healthcare ecosystem providing patient-centric care, online consultations, and seamless medical record management.",
  },
  {
    title: "Steyp Parent",
    images: [
      "/assets/projects/steyp-parent/slide1.png",
      "/assets/projects/steyp-parent/slide2.png",
      "/assets/projects/steyp-parent/slide3.png"
    ],
    role: "Mobile App Developer",
    tech: ["React Native", "Firebase", "Redux"],
    year: "2024",
    desc: "A complete mobile companion app helping parents stay connected with their children's learning outcomes and educational progress.",
  }
];

function TiltCard({ project, type }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (project.images && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [project.images]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const CardContent = (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full rounded-2xl glass-panel p-8 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:border-white/40"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl group-hover:opacity-40 transition-opacity duration-500"
      />
      
      <div style={{ transform: "translateZ(75px)" }} className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-hero text-white tracking-wide">{project.title}</h3>
          <span className="text-muted font-mono text-sm border border-white/20 rounded-full px-4 py-1">
            {project.year}
          </span>
        </div>
        <p className="text-accent text-sm font-mono mb-6">{project.role}</p>
        
        {/* Project Image / Mockup */}
        <div className="w-full h-40 md:h-56 bg-black/40 border border-white/10 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors">
          {project.images ? (
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
              </motion.div>
            </AnimatePresence>
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
          ) : (
            <span className="text-muted font-mono">{type === 'web' ? 'Browser View' : 'App View'}</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>

      <div style={{ transform: "translateZ(60px)" }} className="relative z-10 flex flex-col justify-end">
        <p className="text-[#CCC] font-light leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono text-muted bg-white/5 py-1 px-3 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
            View Project <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative block w-full h-[450px] md:h-[500px] [perspective:1000px] no-underline"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="relative w-full h-[450px] md:h-[500px] [perspective:1000px]">
      {CardContent}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-padding relative z-10">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="font-mono text-muted text-sm tracking-[3px] uppercase block mb-4">
            Selected Work
          </span>
          <h2 className="font-hero text-5xl md:text-7xl text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Digital Reality.</span>
          </h2>
        </motion.div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-mono text-white uppercase tracking-widest">Web Applications</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {webProjects.map((project, i) => (
              <TiltCard key={i} project={project} type="web" />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-mono text-white uppercase tracking-widest">Mobile Applications</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {mobileProjects.map((project, i) => (
              <TiltCard key={i} project={project} type="mobile" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
