const words = [
  "Quality Assurance",
  "Manual Testing",
  "Laravel",
  "PHP",
  "MySQL",
  "Bug Hunting",
  "Test Design",
  "Postman",
  "JavaScript",
  "Attention to Detail",
];

export function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="relative py-10 border-y border-border/60 overflow-hidden bg-gradient-to-r from-transparent via-secondary/30 to-transparent">
      <div className="marquee flex gap-16 whitespace-nowrap will-change-transform">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-16 font-display text-3xl md:text-4xl text-foreground/70">
            {w}
            <span className="text-gold text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
