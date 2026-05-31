import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, ArrowDown, MapPin, Phone, Mail, Sparkles, Download, Linkedin } from "lucide-react";
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
      className: "fixed top-3 left-0 right-0 z-50 px-6 py-3",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between glass-strong rounded-full pl-6 pr-3 py-2.5 shadow-soft", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "font-display text-xl tracking-tight flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground italic font-display text-sm", children: "N" }),
          /* @__PURE__ */ jsx("span", { className: "gradient-gold-text font-medium", children: "RHN" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "." })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: l.href,
            className: "relative text-sm text-muted-foreground hover:text-foreground transition-colors group",
            children: [
              l.label,
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform" })
            ]
          },
          l.href
        )) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:rakibulhasannahid7@gmail.com",
            className: "shine group inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-gradient-gold text-primary-foreground pl-5 pr-2 py-2 rounded-full hover:shadow-gold transition-all",
            children: [
              "Hire Me",
              /* @__PURE__ */ jsx("span", { className: "w-7 h-7 rounded-full bg-white/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }) })
            ]
          }
        )
      ] })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden noise grain-fine", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 90, repeat: Infinity, ease: "linear" },
        className: "absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full border border-gold/25"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { rotate: -360 },
        transition: { duration: 120, repeat: Infinity, ease: "linear" },
        className: "absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-gold/15"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { rotate: -360 },
        transition: { duration: 100, repeat: Infinity, ease: "linear" },
        className: "absolute -bottom-72 -left-48 w-[780px] h-[780px] rounded-full border border-gold/15"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none", children: /* @__PURE__ */ jsx("span", { className: "font-display text-[28rem] leading-none text-gold/[0.04] italic", children: "N" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "flex items-center gap-3 mb-8",
            children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-gold/60" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-gold-deep font-medium", children: "Aspiring SQA Engineer · Portfolio '26" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("h1", { className: "text-6xl md:text-8xl lg:text-[9.5rem] font-light leading-[0.92]", children: [
          "Rakibul".split("").map((c, i) => /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 60 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "inline-block",
              children: c
            },
            i
          )),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 60 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              className: "gradient-gold-text italic font-display inline-block",
              children: "Hasan Nahid."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.1, duration: 0.8 },
            className: "mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed",
            children: [
              "Crafting software quality through meticulous testing and full-stack development. Passionate about delivering flawless digital experiences with ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "test case design, defect tracking, and quality analysis" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.25 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#projects",
                  className: "shine group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all",
                  children: [
                    "View Selected Work",
                    /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-all",
                  children: "Get in Touch"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.4 },
            className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-gold" }),
                " Dhaka, Bangladesh"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gold" }),
                " +880 1818 961859"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gold" }),
                " rakibulhasannahid7@gmail.com"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.6, duration: 1 },
          className: "lg:col-span-4 relative",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] rounded-[2rem] overflow-hidden glass-strong shadow-luxe ring-gold", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-gold/25 via-gold-soft/10 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: 360 },
                    transition: { duration: 40, repeat: Infinity, ease: "linear" },
                    className: "absolute w-72 h-72 rounded-full border border-dashed border-gold/40"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-display italic text-[14rem] leading-none gradient-gold-text", children: "N" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-7", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-2", children: "Available For" }),
                /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-foreground leading-tight", children: "SQA Intern Roles" }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm mt-1", children: "& Full-Stack Projects" })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -8, 0] },
                  transition: { duration: 4, repeat: Infinity },
                  className: "absolute top-5 right-5 w-14 h-14 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gold shadow-soft",
                  children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.5 },
                className: "absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-3 shadow-soft",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Status" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Open to work" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.8 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground",
        children: [
          "Scroll",
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { y: [0, 8, 0] },
              transition: { duration: 1.8, repeat: Infinity },
              className: "w-px h-10 bg-gradient-to-b from-gold to-transparent"
            }
          )
        ]
      }
    )
  ] });
}
function Section({
  id,
  eyebrow,
  title,
  children
}) {
  const num = eyebrow.split(" — ")[0];
  return /* @__PURE__ */ jsxs("section", { id, className: "relative px-6 py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-10 right-4 md:right-12 pointer-events-none select-none", children: /* @__PURE__ */ jsx("span", { className: "font-display italic text-[12rem] md:text-[18rem] leading-none text-gold/[0.06]", children: num }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.8 },
          className: "mb-16 grid md:grid-cols-12 gap-8 items-end",
          children: [
            /* @__PURE__ */ jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold/60" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-gold-deep font-medium", children: eyebrow })
            ] }) }),
            /* @__PURE__ */ jsx("h2", { className: "md:col-span-8 text-5xl md:text-7xl font-light leading-[1.02]", children: title })
          ]
        }
      ),
      children
    ] })
  ] });
}
const stats = [
  { v: "5+", l: "Years Studying Tech" },
  { v: "2", l: "Major Projects" },
  { v: "10+", l: "Tools Mastered" },
  { v: "100%", l: "Quality Focus" }
];
function About() {
  return /* @__PURE__ */ jsx(Section, { id: "about", eyebrow: "01 — About", title: "Detail-driven engineer building reliable software.", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "I hold a Diploma in Computer Technology and am currently pursuing a BSc in Computer Science and Engineering. My passion lies in software quality and testing, complemented by hands-on experience in web application development with ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "PHP, MySQL, and JavaScript" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "I am dedicated to leveraging my analytical skills and attention to detail as I embark on a career as an SQA Engineer intern — focusing on quality assurance and software development that holds up under real-world pressure." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-5 grid grid-cols-2 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "glass rounded-2xl p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-5xl gradient-gold-text", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-2", children: s.l })
        ]
      },
      s.l
    )) })
  ] }) });
}
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
      "Gained hands-on exposure to real-world database-driven systems and Agile team workflows"
    ]
  }
];
function Experience() {
  return /* @__PURE__ */ jsx(Section, { id: "experience", eyebrow: "02 — Experience", title: "Where craft met production.", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: items.map((it, i) => /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "group glass rounded-3xl p-8 md:p-12 hover:border-gold/40 transition-all",
      children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-gold", children: it.period }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl mt-3", children: it.role }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground mt-1", children: it.company }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground/70 mt-1", children: it.location })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "md:col-span-8 space-y-4", children: it.points.map((p, j) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold mt-2", children: "—" }),
          /* @__PURE__ */ jsx("span", { children: p })
        ] }, j)) })
      ] })
    },
    i
  )) }) });
}
const projects = [
  {
    no: "01",
    title: "Portfolio Website with Admin Panel",
    period: "01/2023 — 12/2023",
    desc: "A personal portfolio website showcasing skills and projects, featuring a complete admin panel for content management.",
    points: [
      "Built a dynamic portfolio system using PHP, MySQL, HTML, CSS, and JavaScript with admin authentication and content CRUD operations",
      "Performed self-QA by designing test scenarios for user authentication flows, form validation, and content CRUD operations",
      "Tested cross-browser rendering and validated database-driven page updates for consistency"
    ],
    tags: ["PHP", "MySQL", "JavaScript", "QA"]
  },
  {
    no: "02",
    title: "Blog Management System",
    period: "01/2023 — 12/2023",
    desc: "A blogging platform allowing user interactions and content management with role-based access.",
    points: [
      "Developed a blog platform using Laravel and MySQL featuring relational database design, post management, user authentication, and MVC architecture",
      "Created manual test cases covering registration, login, post creation/editing/deletion, and role-based access",
      "Used Postman to test API endpoints for post and user management, validating request/response payloads and HTTP status codes"
    ],
    tags: ["Laravel", "MySQL", "Postman", "MVC"]
  }
];
function Projects() {
  return /* @__PURE__ */ jsx(Section, { id: "projects", eyebrow: "03 — Selected Work", title: "Projects engineered with intent.", children: /* @__PURE__ */ jsx("div", { className: "space-y-10", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
      className: "group relative glass-strong rounded-[2rem] p-8 md:p-12 overflow-hidden hover:shadow-gold transition-all duration-700",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-12 gap-8", children: [
          /* @__PURE__ */ jsx("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsx("div", { className: "font-display italic text-6xl gradient-gold-text", children: p.no }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-3", children: p.period }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl mb-4 leading-tight group-hover:gradient-gold-text transition-all", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: p.desc }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-muted-foreground/90", children: p.points.map((pt, j) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 leading-relaxed", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gold mt-1.5 text-xs", children: "◆" }),
              /* @__PURE__ */ jsx("span", { children: pt })
            ] }, j)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex flex-col justify-between items-end gap-6", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { rotate: 45, scale: 1.1 },
                className: "w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all",
                children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-6 h-6" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "w-full aspect-[4/3] rounded-xl glass overflow-hidden relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 h-7 bg-secondary/40 flex items-center gap-1.5 px-3", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-gold/40" }),
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-gold/30" }),
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-gold/20" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 top-7 bottom-0 p-4 space-y-2", children: [
                /* @__PURE__ */ jsx("div", { className: "h-2 w-2/3 rounded bg-gold/30" }),
                /* @__PURE__ */ jsx("div", { className: "h-2 w-1/2 rounded bg-foreground/10" }),
                /* @__PURE__ */ jsx("div", { className: "h-2 w-3/4 rounded bg-foreground/10" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-1.5 mt-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "aspect-square rounded bg-gold/20" }),
                  /* @__PURE__ */ jsx("div", { className: "aspect-square rounded bg-foreground/10" }),
                  /* @__PURE__ */ jsx("div", { className: "aspect-square rounded bg-gold/15" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-end", children: p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "text-xs px-3 py-1 rounded-full border border-gold/30 text-gold-deep bg-white/40 backdrop-blur-sm", children: t }, t)) })
          ] })
        ] })
      ]
    },
    p.no
  )) }) });
}
const groups = [
  { k: "Testing & QA", level: 85, v: ["Manual Testing", "Regression", "Bug Reporting", "Test Case Design"] },
  { k: "API & Tools", level: 75, v: ["Git", "VS Code", "Postman"] },
  { k: "Languages", level: 80, v: ["PHP", "JavaScript", "HTML", "CSS"] },
  { k: "Databases", level: 78, v: ["MySQL", "MSSQL", "PostgreSQL"] },
  { k: "Soft Skills", level: 90, v: ["Attention to Detail", "Analytical Thinking", "Team Work"] }
];
const education = [
  { d: "BSc in Computer Science and Engineering", s: "Canadian University of Bangladesh", p: "01/2024 — Present" },
  { d: "Diploma in Computer Technology", s: "National Polytechnic Institute", p: "01/2019 — 12/2023" }
];
const certs = [
  "The Complete 2026 Software Testing Bootcamp — Udemy",
  "Industrial Attachment Certificate — Creative IT Institute (PHP & Laravel)"
];
function Skills() {
  return /* @__PURE__ */ jsx(Section, { id: "skills", eyebrow: "04 — Toolkit", title: "Skills, education & credentials.", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: groups.map((g, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.07, duration: 0.6 },
        className: "glass-strong rounded-2xl p-6 hover:shadow-gold transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-foreground", children: g.k }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs uppercase tracking-[0.3em] text-gold-deep", children: [
              g.level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative h-1 rounded-full bg-secondary overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: `${g.level}%` },
              viewport: { once: true },
              transition: { duration: 1.2, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
              className: "absolute inset-y-0 left-0 bg-gradient-gold"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: g.v.map((s) => /* @__PURE__ */ jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-secondary/70 text-foreground/80 border border-border/60", children: s }, s)) })
        ]
      },
      g.k
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4", children: "Education" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: education.map((e, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "glass-strong rounded-2xl p-6 relative overflow-hidden group hover:shadow-gold transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-xl", children: e.d }),
              /* @__PURE__ */ jsx("div", { className: "text-gold-deep text-sm mt-1", children: e.s }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                e.p,
                " · Dhaka, Bangladesh"
              ] })
            ]
          },
          e.d
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4", children: "Certifications" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: certs.map((c, i) => /* @__PURE__ */ jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "glass-strong rounded-2xl p-5 text-sm flex gap-3 items-start",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-gold mt-0.5", children: "✦" }),
              c
            ]
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-4", children: "Languages" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg", children: "English" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Intermediate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg", children: "Bengali" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Native" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative px-6 py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "relative glass-strong rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden shadow-luxe",
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: [0, 60, 0], y: [0, -40, 0] },
              transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              className: "absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full bg-gold/20 blur-3xl"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: [0, -50, 0], y: [0, 40, 0] },
              transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              className: "absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-gold-soft/30 blur-3xl"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.5em] text-gold-deep mb-6", children: "Let's Connect" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-5xl md:text-8xl font-light leading-[1.02]", children: [
              "Looking for a ",
              /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("span", { className: "italic gradient-gold-text", children: "dedicated SQA?" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed", children: "I'm currently open to SQA internship roles and freelance testing opportunities. Reach out — I respond to every message personally." }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:rakibulhasannahid7@gmail.com",
                className: "shine group inline-flex items-center gap-3 mt-12 pl-8 pr-3 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
                  "rakibulhasannahid7@gmail.com",
                  /* @__PURE__ */ jsx("span", { className: "w-9 h-9 rounded-full bg-white/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:rotate-45 transition-transform" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/cv/Rakibul_Hasan_Nahid_CV.pdf",
                download: true,
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-all",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  "Download CV"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2 hover:text-gold-deep transition-colors", children: [
                /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
                " LinkedIn"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "tel:+8801818961859", className: "flex items-center gap-2 hover:text-gold-deep transition-colors", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                " +880 1818 961859"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "mailto:rakibulhasannahid7@gmail.com", className: "flex items-center gap-2 hover:text-gold-deep transition-colors", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                " Email"
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("footer", { className: "mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2026 Rakibul Hasan Nahid · Crafted with care in Dhaka." }),
      /* @__PURE__ */ jsx("div", { className: "uppercase tracking-[0.4em]", children: "Quality · Detail · Craft" })
    ] })
  ] }) });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX, transformOrigin: "0%" },
      className: "fixed top-0 left-0 right-0 h-[2px] bg-gradient-gold z-[60]"
    }
  );
}
const words = [
  "Quality Assurance",
  "Manual Testing",
  "PHP",
  "MySQL",
  "Bug Hunting",
  "Test Design",
  "Postman",
  "JavaScript",
  "Attention to Detail"
];
function Marquee() {
  const loop = [...words, ...words];
  return /* @__PURE__ */ jsx("div", { className: "relative py-10 border-y border-border/60 overflow-hidden bg-gradient-to-r from-transparent via-secondary/30 to-transparent", children: /* @__PURE__ */ jsx("div", { className: "marquee flex gap-16 whitespace-nowrap will-change-transform", children: loop.map((w, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-16 font-display text-3xl md:text-4xl text-foreground/70", children: [
    w,
    /* @__PURE__ */ jsx("span", { className: "text-gold text-2xl", children: "✦" })
  ] }, i)) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Index as component
};
