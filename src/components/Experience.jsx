export default function Experience() {
  return (
    <section id="experience" className="relative z-10 section-padding">
      <div className="mb-8 reveal-up">
        <div className="font-mono text-muted text-xs uppercase tracking-[4px] border-b border-white/20 inline-block pb-2 mb-6">
          Journey Done</div>
        <h2 className="text-4xl md:text-6xl mt-4 font-hero leading-tight font-bold">Professional Experience</h2>
      </div>
      
      <div className="relative pl-8 md:pl-16 mt-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-white/50 before:to-transparent">
        
        {/* Entry 1 */}
        <div className="timeline-item relative mb-24 opacity-0 translate-x-[50px] group">
          <div className="timeline-dot absolute -left-[2.4rem] md:-left-[4.4rem] top-2 w-3 h-3 bg-black border-2 border-white/50 rounded-full z-10 transition-all duration-500 shadow-[0_0_0_4px_#000] group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4),0_0_0_4px_#000]"></div>
          
          <div className="flex items-center flex-wrap gap-6 mb-4">
            <h3 className="text-3xl font-hero tracking-wide">React Native | FlutterFlow Developer</h3>
            <span className="text-base text-muted tracking-[2px] uppercase font-mono">TEGAIN PRIVATE LIMITED</span>
            <span className="glass-panel text-white px-5 py-1.5 text-xs rounded-full border border-white/20 uppercase tracking-[2px] font-mono">Current Role</span>
          </div>
          
          <span className="text-[0.95rem] text-muted mb-8 block font-mono">May 2024 – Present · Dubai, UAE</span>
          
          <ul className="m-0 p-0 text-[1.1rem] text-[#BBB] space-y-5">
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">5 Apps Shipped</strong> — cross-platform to iOS & Android, 98% Figma compliance
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">30% Faster Launch</strong> — refactored state management, code splitting, lazy loading
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">60% Fewer Merge Conflicts</strong> — GitLab branching strategy, 6-person team
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">Zero Critical Bugs</strong> — LiveKit + Agora real-time teleconsultation (3 months production)
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">Faster Integrations</strong> — reusable API wrapper for Razorpay + Crisp SDKs
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">100% Design Fidelity</strong> — pixel-perfect Figma-to-mobile, zero QA rejections
            </li>
          </ul>
        </div>

        {/* Entry 2 */}
        <div className="timeline-item relative mb-0 opacity-0 translate-x-[50px] group">
          <div className="timeline-dot absolute -left-[2.4rem] md:-left-[4.4rem] top-2 w-3 h-3 bg-black border-2 border-white/50 rounded-full z-10 transition-all duration-500 shadow-[0_0_0_4px_#000] group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4),0_0_0_4px_#000]"></div>
          
          <div className="flex items-center flex-wrap gap-6 mb-4">
            <h3 className="text-3xl font-hero tracking-wide">Full Stack Developer Intern</h3>
            <span className="text-base text-muted tracking-[2px] uppercase font-mono">STEYP PRIVATE LIMITED</span>
          </div>
          
          <span className="text-[0.95rem] text-muted mb-8 block font-mono">May 2023 – May 2024</span>
          
          <ul className="m-0 p-0 text-[1.1rem] text-[#BBB] space-y-5">
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">25% Faster Queries</strong> — Django schema redesign, eliminated N+1 patterns
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">3 Web Apps Built</strong> — React.js + DRF + Bootstrap, Agile sprints
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">60% → 90% Feature Parity</strong> — React Native companion app for existing web platform
            </li>
            <li className="relative pl-8 leading-relaxed before:content-['→'] before:absolute before:left-0 before:text-white/30 before:font-light before:font-mono">
              <strong className="text-white font-medium">4 Projects</strong> — full API lifecycle ownership (auth, CRUD, third-party)
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
