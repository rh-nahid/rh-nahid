import { motion } from "motion/react";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "Portfolio Website with Admin Panel",
    period: "01/2023 — 12/2023",
    desc: "A personal portfolio website showcasing skills and projects, featuring a complete admin panel for content management.",
    points: [
      "Built a dynamic portfolio system using PHP, MySQL, HTML, CSS, and JavaScript with admin authentication and content CRUD operations",
      "Performed self-QA by designing test scenarios for user authentication flows, form validation, and content CRUD operations",
      "Tested cross-browser rendering and validated database-driven page updates for consistency",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "QA"],
  },
  {
    no: "02",
    title: "Blog Management System",
    period: "01/2023 — 12/2023",
    desc: "A blogging platform allowing user interactions and content management with role-based access.",
    points: [
      "Developed a blog platform using Laravel and MySQL featuring relational database design, post management, user authentication, and MVC architecture",
      "Created manual test cases covering registration, login, post creation/editing/deletion, and role-based access",
      "Used Postman to test API endpoints for post and user management, validating request/response payloads and HTTP status codes",
    ],
    tags: ["Laravel", "MySQL", "Postman", "MVC"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Selected Work" title="Projects engineered with intent.">
      <div className="space-y-10">
        {projects.map((p, i) => (
          <motion.article
            key={p.no}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative glass-strong rounded-[2rem] p-8 md:p-12 overflow-hidden hover:shadow-gold transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative grid md:grid-cols-12 gap-8">
              <div className="md:col-span-1">
                <div className="font-display italic text-6xl gradient-gold-text">{p.no}</div>
              </div>
              <div className="md:col-span-7">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-3">{p.period}</div>
                <h3 className="font-display text-4xl md:text-5xl mb-4 leading-tight group-hover:gradient-gold-text transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                <ul className="space-y-3 text-sm text-muted-foreground/90">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed">
                      <span className="text-gold mt-1.5 text-xs">◆</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between items-end gap-6">
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.div>

                {/* Decorative mock window */}
                <div className="w-full aspect-[4/3] rounded-xl glass overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-7 bg-secondary/40 flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-gold/40" />
                    <span className="w-2 h-2 rounded-full bg-gold/30" />
                    <span className="w-2 h-2 rounded-full bg-gold/20" />
                  </div>
                  <div className="absolute inset-x-0 top-7 bottom-0 p-4 space-y-2">
                    <div className="h-2 w-2/3 rounded bg-gold/30" />
                    <div className="h-2 w-1/2 rounded bg-foreground/10" />
                    <div className="h-2 w-3/4 rounded bg-foreground/10" />
                    <div className="grid grid-cols-3 gap-1.5 mt-3">
                      <div className="aspect-square rounded bg-gold/20" />
                      <div className="aspect-square rounded bg-foreground/10" />
                      <div className="aspect-square rounded bg-gold/15" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold-deep bg-white/40 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
