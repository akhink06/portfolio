import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Footer() {
  return (
    <footer className="py-24 px-[5%] border-t border-white/5 bg-black relative overflow-hidden">
      <div className="w-full">
        <div id="contact" className="mb-20">
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            className="bg-black/40 backdrop-blur-xl border-white/10 rounded-3xl overflow-hidden"
            contactInfo={[
              {
                icon: Mail,
                label: 'Email',
                value: 'akhinkakhin@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+971567589697',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: 'Dubai, UAE',
                className: 'col-span-2',
              }
            ]}
          >
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID_HERE" 
              method="POST"
              className="w-full space-y-4"
            >
              <div className="flex flex-col gap-2 text-left">
                <Label className="text-white/70">Name</Label>
                <Input name="name" type="text" className="bg-white/5 border-white/10 text-white focus:border-white/30 transition-all" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <Label className="text-white/70">Email</Label>
                <Input name="email" type="email" className="bg-white/5 border-white/10 text-white focus:border-white/30 transition-all" placeholder="your@email.com" required />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <Label className="text-white/70">Phone</Label>
                <Input name="phone" type="tel" className="bg-white/5 border-white/10 text-white focus:border-white/30 transition-all" placeholder="+971..." />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <Label className="text-white/70">Message</Label>
                <Textarea name="message" className="bg-white/5 border-white/10 text-white min-h-[100px] focus:border-white/30 transition-all" placeholder="Tell us about your project..." required />
              </div>
              <Button className="w-full bg-white text-black hover:bg-white/90 font-bold transition-all py-6" type="submit">
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <a 
              href="https://www.linkedin.com/in/akhin-k-146107235/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted hover:text-white transition-all duration-300 group"
            >
              <FaLinkedin className="text-xl group-hover:text-[#0077B5]" />
              <span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/akhink06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted hover:text-white transition-all duration-300 group"
            >
              <SiGithub className="text-xl group-hover:text-white" />
              <span className="font-mono text-xs uppercase tracking-widest">GitHub</span>
            </a>
            <a 
              href="mailto:akhinkakhin@gmail.com" 
              className="flex items-center gap-3 text-muted hover:text-white transition-all duration-300 group"
            >
              <SiGmail className="text-xl group-hover:text-[#EA4335]" />
              <span className="font-mono text-xs uppercase tracking-widest">Email</span>
            </a>
            <a 
              href="/assets/projects/resume/AKHIN K Developer.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-muted hover:text-white transition-all duration-300 group"
            >
              <HiDocumentDownload className="text-xl group-hover:text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest">Resume</span>
            </a>
          </div>
          
          <div className="text-center">
            <div className="font-mono text-[0.7rem] text-muted tracking-[2px] uppercase opacity-50">
              &copy; 2024 Akhin K. All rights reserved.
            </div>
            <div className="font-mono text-[0.6rem] text-muted tracking-[1px] uppercase opacity-30 mt-2">
              Built with Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
