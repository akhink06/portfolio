import { motion } from "framer-motion";
import { SiNodedotjs, SiAnthropic, SiWix, SiShopify } from "react-icons/si";
import { HiLightningBolt, HiCursorClick, HiSparkles, HiShoppingBag } from "react-icons/hi";

const expertise = [
  {
    title: "AI Workflow Automation — n8n",
    icon: <SiNodedotjs className="text-[#FF6D5A]" />,
    badgeIcon: <HiLightningBolt className="text-[#FF6D5A]" />,
    desc: "Building multi-step automated workflows connecting APIs, webhooks, and third-party services. Self-hosting and managing production-like environments.",
    color: "from-[#FF6D5A]/20 to-transparent"
  },
  {
    title: "Vibe Coding — AI-Assisted",
    icon: <HiSparkles className="text-[#7C3AED]" />,
    badgeIcon: <HiCursorClick className="text-[#7C3AED]" />,
    desc: "Accelerating feature delivery using AI to scaffold components and debug logic. Critical review and integration of AI-generated code.",
    color: "from-[#7C3AED]/20 to-transparent"
  },
  {
    title: "Claude API Integration",
    icon: <SiAnthropic className="text-white" />,
    badgeIcon: <HiSparkles className="text-white" />,
    desc: "Powering intelligent features like context-aware chat and document summarisation. Creating automated AI-driven pipelines with n8n.",
    color: "from-white/10 to-transparent"
  },
  {
    title: "Low-Code & E-commerce",
    icon: <SiShopify className="text-[#96BF48]" />,
    badgeIcon: <HiShoppingBag className="text-[#96BF48]" />,
    desc: "Delivering custom logic on WixStudio (Velo JS) and Shopify theme customisation. Full lifecycle launch of digital products.",
    color: "from-[#96BF48]/20 to-transparent"
  }
];

export default function BeyondJob() {
  return (
    <section id="beyond" className="section-padding relative z-10">
      <div className="w-full">
        <div className="mb-16 reveal-up">
          <div className="font-mono text-muted text-xs uppercase tracking-[4px] border-b border-white/20 inline-block pb-2 mb-6">
            04 · Self-Initiated Growth
          </div>
          <h2 className="text-5xl md:text-7xl font-hero font-bold text-white tracking-tight">
            Expanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Expertise.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-full flex flex-col justify-between glass-panel p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-4xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[0.6rem] font-mono text-muted uppercase tracking-widest">
                    {item.badgeIcon}
                    Ongoing
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-hero font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#AAA] font-ui font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-[0.6rem] font-mono text-muted uppercase tracking-[2px]">
                  Self-Directed Learning
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
