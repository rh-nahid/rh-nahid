import { motion } from "motion/react";
import { Section } from "./Section";

const items = [
  {
    role: "Industrial Attachment Intern",
    company: "Creative IT Institute",
    period: "01/2023 — 12/2023",
    location: "Bangladesh",
    points: [
      "Tested web applications built with PHP and Laravel by performing functional and exploratory testing to identify defects and inconsistencies",
      "Documented and tracked bugs by writing clear, reproducible bug reports and communicating findings to developers",
      "Verified CRUD operations and relational database logic across multiple modules to ensure data integrity",
      "Gained hands-on exposure to real-world database-driven systems and Agile team workflows",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where craft met production.">
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group glass rounded-3xl p-8 md:p-12 hover:border-gold/40 transition-all"
          >
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-widest text-gold">{it.period}</div>
                <h3 className="font-display text-3xl mt-3">{it.role}</h3>
                <div className="text-muted-foreground mt-1">{it.company}</div>
                <div className="text-sm text-muted-foreground/70 mt-1">{it.location}</div>
              </div>
              <ul className="md:col-span-8 space-y-4">
                {it.points.map((p, j) => (
                  <li key={j} className="flex gap-4 text-muted-foreground leading-relaxed">
                    <span className="text-gold mt-2">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
