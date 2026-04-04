import { 
  Smartphone, 
  MonitorPlay, 
  Server, 
  Link2, 
  Zap, 
  LayoutTemplate, 
  PenTool, 
  KanbanSquare 
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Mobile Dev",
    date: "May 2024",
    content: "Native performance across iOS and Android.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [2, 3],
    status: "completed",
    energy: 98,
    tools: ["React Native", "FlutterFlow", "UI/UX"]
  },
  {
    id: 2,
    title: "Frontend Web",
    date: "Jan 2023",
    content: "Pixel-perfect, interactive web applications.",
    category: "Frontend",
    icon: MonitorPlay,
    relatedIds: [1, 5],
    status: "in-progress",
    energy: 90,
    tools: ["React.js", "Next.js", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Backend API",
    date: "Aug 2023",
    content: "Scalable server-side logic and databases.",
    category: "Backend",
    icon: Server,
    relatedIds: [2],
    status: "completed",
    energy: 85,
    tools: ["Python", "Django", "Node.js"]
  },
  {
    id: 4,
    title: "Integrations",
    date: "Mar 2024",
    content: "Seamless third-party service connections.",
    category: "SDK",
    icon: Link2,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
    tools: ["Agora", "LiveKit", "Stripe"]
  },
  {
    id: 5,
    title: "Automation",
    date: "Jun 2024",
    content: "Workflow automation and LLM integrations.",
    category: "AI",
    icon: Zap,
    relatedIds: [2, 3],
    status: "in-progress",
    energy: 88,
    tools: ["n8n", "Claude API", "Prompt Eng."]
  },
  {
    id: 6,
    title: "No-Code",
    date: "Dec 2022",
    content: "Rapid prototyping and CMS setups.",
    category: "Tools",
    icon: LayoutTemplate,
    relatedIds: [1, 2],
    status: "completed",
    energy: 92,
    tools: ["WixStudio", "WordPress"]
  },
  {
    id: 7,
    title: "Tooling",
    date: "Ongoing",
    content: "Version control and developer experience.",
    category: "Tools",
    icon: PenTool,
    relatedIds: [3, 4],
    status: "completed",
    energy: 90,
    tools: ["Git", "GitLab", "Docker"]
  },
  {
    id: 8,
    title: "Management",
    date: "Ongoing",
    content: "Agile methodologies and sprint planning.",
    category: "Management",
    icon: KanbanSquare,
    relatedIds: [1, 2, 3],
    status: "in-progress",
    energy: 85,
    tools: ["Jira", "Taiga", "Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 section-padding overflow-hidden">
      <div className="mb-0 reveal-up">
        <div className="text-[0.9rem] uppercase tracking-[4px] border-b border-white/30 text-white inline-block pb-2">02 · What I Know</div>
        <h2 className="text-4xl md:text-6xl mt-4 font-hero leading-tight font-bold">Technical Arsenal</h2>
      </div>
      
      {/* 
        We use negative margins or a full width container so the orbital timeline 
        can comfortably rotate without being tightly squeezed by section-padding.
      */}
      <div className="w-full h-full flex items-center justify-center -mt-10 md:-mt-20">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
