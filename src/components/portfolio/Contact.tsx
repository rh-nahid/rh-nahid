import { motion } from "motion/react";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden shadow-luxe"
        >
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full bg-gold/20 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-gold-soft/30 blur-3xl"
          />

          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.5em] text-gold-deep mb-6">Let's Connect</div>
            <h2 className="text-5xl md:text-8xl font-light leading-[1.02]">
              Looking for a <br className="hidden md:block" />
              <span className="italic gradient-gold-text">dedicated SQA?</span>
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed">
              I'm currently open to SQA internship roles and freelance testing opportunities.
              Reach out — I respond to every message personally.
            </p>
            <a
              href="mailto:rakibulhasannahid7@gmail.com"
              className="shine group inline-flex items-center gap-3 mt-12 pl-8 pr-3 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all"
            >
              <Mail className="w-5 h-5" />
              rakibulhasannahid7@gmail.com
              <span className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </span>
            </a>

            <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="flex items-center gap-2 hover:text-gold-deep transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a>
              <a href="tel:+8801818961859" className="flex items-center gap-2 hover:text-gold-deep transition-colors"><Phone className="w-4 h-4" /> +880 1818 961859</a>
              <a href="mailto:rakibulhasannahid7@gmail.com" className="flex items-center gap-2 hover:text-gold-deep transition-colors"><Mail className="w-4 h-4" /> Email</a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© 2026 Rakibul Hasan Nahid · Crafted with care in Dhaka.</div>
          <div className="uppercase tracking-[0.4em]">Quality · Detail · Craft</div>
        </footer>
      </div>
    </section>
  );
}
