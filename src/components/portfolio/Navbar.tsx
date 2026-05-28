import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-3 left-0 right-0 z-50 px-6 py-3"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between glass-strong rounded-full pl-6 pr-3 py-2.5 shadow-soft">
        <a href="#" className="font-display text-xl tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground italic font-display text-sm">N</span>
          <span className="gradient-gold-text font-medium">RHN</span>
          <span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>
        <a
          href="mailto:rakibulhasannahid7@gmail.com"
          className="shine group inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-gradient-gold text-primary-foreground pl-5 pr-2 py-2 rounded-full hover:shadow-gold transition-all"
        >
          Hire Me
          <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </motion.header>
  );
}
