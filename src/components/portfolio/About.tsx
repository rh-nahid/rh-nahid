import { motion } from "motion/react";
import { Section } from "./Section";

const stats = [
  { v: "5+", l: "Years Studying Tech" },
  { v: "2", l: "Major Projects" },
  { v: "10+", l: "Tools Mastered" },
  { v: "100%", l: "Quality Focus" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Detail-driven engineer building reliable software.">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I hold a Diploma in Computer Technology and am currently pursuing a
            BSc in Computer Science and Engineering. My passion lies in software
            quality and testing, complemented by hands-on experience in web
            application development with <span className="text-foreground">PHP, MySQL, and JavaScript</span>.
          </p>
          <p>
            I am dedicated to leveraging my analytical skills and attention to
            detail as I embark on a career as an SQA Engineer intern — focusing
            on quality assurance and software development that holds up under
            real-world pressure.
          </p>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-5xl gradient-gold-text">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
