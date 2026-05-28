import { motion } from "motion/react";

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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between glass rounded-full px-6 py-3">
        <a href="#" className="font-display text-xl tracking-tight">
          <span className="gradient-gold-text">RHN</span>
          <span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:rakibulhasannahid7@gmail.com"
          className="text-xs uppercase tracking-widest border border-gold/40 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-primary-foreground transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
