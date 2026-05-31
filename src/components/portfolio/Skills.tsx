import { motion } from "motion/react";
import { Section } from "./Section";

const groups = [
  {
    k: "Testing & QA",
    level: 85,
    v: ["Manual Testing", "Regression", "Bug Reporting", "Test Case Design"],
  },
  { k: "API & Tools", level: 75, v: ["Git", "VS Code", "Postman"] },
  { k: "Languages", level: 80, v: ["PHP", "JavaScript", "HTML", "CSS"] },
  { k: "Databases", level: 78, v: ["MySQL", "MSSQL", "PostgreSQL"] },
  { k: "Soft Skills", level: 90, v: ["Attention to Detail", "Analytical Thinking", "Team Work"] },
];

const education = [
  {
    d: "BSc in Computer Science and Engineering",
    s: "Canadian University of Bangladesh",
    p: "01/2024 — Present",
  },
  {
    d: "Diploma in Computer Technology",
    s: "National Polytechnic Institute",
    p: "01/2019 — 12/2023",
  },
];

const certs = [
  "The Complete 2026 Software Testing Bootcamp — Udemy",
  "Industrial Attachment Certificate — Creative IT Institute (PHP & Laravel)",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Toolkit" title="Skills, education & credentials.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="glass-strong rounded-2xl p-6 hover:shadow-gold transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-display text-2xl text-foreground">{g.k}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold-deep">{g.level}%</div>
              </div>
              <div className="relative h-1 rounded-full bg-secondary overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 bg-gradient-gold"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {g.v.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-secondary/70 text-foreground/80 border border-border/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4">
              Education
            </div>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.d}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-strong rounded-2xl p-6 relative overflow-hidden group hover:shadow-gold transition-all"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
                  <div className="font-display text-xl">{e.d}</div>
                  <div className="text-gold-deep text-sm mt-1">{e.s}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {e.p} · Dhaka, Bangladesh
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4">
              Certifications
            </div>
            <ul className="space-y-3">
              {certs.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-strong rounded-2xl p-5 text-sm flex gap-3 items-start"
                >
                  <span className="text-gold mt-0.5">✦</span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4">
              Languages
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-strong rounded-2xl p-5">
                <div className="font-display text-lg">English</div>
                <div className="text-xs text-muted-foreground">Intermediate</div>
              </div>
              <div className="glass-strong rounded-2xl p-5">
                <div className="font-display text-lg">Bengali</div>
                <div className="text-xs text-muted-foreground">Native</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
