import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Marquee } from "@/components/portfolio/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakibul Hasan Nahid — Aspiring SQA Engineer" },
      { name: "description", content: "Portfolio of Rakibul Hasan Nahid — SQA engineer & full-stack developer crafting reliable software with PHP, Laravel and meticulous testing." },
      { property: "og:title", content: "Rakibul Hasan Nahid — Aspiring SQA Engineer" },
      { property: "og:description", content: "SQA engineer & full-stack developer based in Dhaka, Bangladesh." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
