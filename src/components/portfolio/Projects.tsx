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
      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.no}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-gold transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative grid md:grid-cols-12 gap-8">
              <div className="md:col-span-1 font-display text-5xl text-gold/40">{p.no}</div>
              <div className="md:col-span-7">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">{p.period}</div>
                <h3 className="font-display text-4xl mb-4 group-hover:gradient-gold-text transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-6">{p.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground/90">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3"><span className="text-gold">·</span>{pt}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between items-end gap-6">
                <ArrowUpRight className="w-8 h-8 text-gold opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                <div className="flex flex-wrap gap-2 justify-end">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold/90">
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
