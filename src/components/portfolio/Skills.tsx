import { motion } from "motion/react";
import { Section } from "./Section";

const groups = [
  { k: "Testing & QA", v: ["Manual Testing", "Regression", "Bug Reporting", "Test Case Design"] },
  { k: "API & Tools", v: ["Git", "VS Code", "Postman"] },
  { k: "Languages", v: ["PHP", "JavaScript", "HTML", "CSS"] },
  { k: "Databases", v: ["MySQL", "MSSQL", "PostgreSQL"] },
  { k: "Soft Skills", v: ["Attention to Detail", "Analytical Thinking", "Team Work"] },
];

const education = [
  { d: "BSc in Computer Science and Engineering", s: "Canadian University of Bangladesh", p: "01/2024 — Present" },
  { d: "Diploma in Computer Technology", s: "National Polytechnic Institute", p: "01/2019 — 12/2023" },
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="md:w-1/3 font-display text-xl text-gold">{g.k}</div>
              <div className="flex flex-wrap gap-2">
                {g.v.map((s) => (
                  <span key={s} className="text-sm px-3 py-1 rounded-full bg-secondary/60 text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Education</div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.d} className="glass rounded-2xl p-6">
                  <div className="font-display text-xl">{e.d}</div>
                  <div className="text-gold/80 text-sm mt-1">{e.s}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.p} · Dhaka, Bangladesh</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Certifications</div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="glass rounded-2xl p-5 text-sm flex gap-3">
                  <span className="text-gold">✦</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Languages</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5">
                <div className="font-display text-lg">English</div>
                <div className="text-xs text-muted-foreground">Intermediate</div>
              </div>
              <div className="glass rounded-2xl p-5">
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
