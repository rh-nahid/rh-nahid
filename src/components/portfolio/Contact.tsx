import { motion } from "motion/react";
import { Mail, Linkedin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-[2rem] p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Let's Build</div>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Have a project <span className="italic gradient-gold-text">in mind?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              I'm currently open to SQA internship roles and freelance development.
              Reach out — I respond to every message personally.
            </p>
            <a
              href="mailto:rakibulhasannahid7@gmail.com"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:shadow-gold transition-all"
            >
              <Mail className="w-5 h-5" /> rakibulhasannahid7@gmail.com
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Linkedin className="w-4 h-4" /> LinkedIn</a>
              <a href="tel:+8801818961859" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone className="w-4 h-4" /> +880 1818 961859</a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© 2026 Rakibul Hasan Nahid · Crafted with care in Dhaka.</div>
          <div className="uppercase tracking-[0.3em]">Quality · Detail · Craft</div>
        </footer>
      </div>
    </section>
  );
}
