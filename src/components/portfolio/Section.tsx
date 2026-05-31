import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const num = eyebrow.split(" — ")[0];
  return (
    <section id={id} className="relative px-6 py-32 overflow-hidden">
      {/* Giant background numeral */}
      <div className="absolute -top-10 right-4 md:right-12 pointer-events-none select-none">
        <span className="font-display italic text-[12rem] md:text-[18rem] leading-none text-gold/[0.06]">
          {num}
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-xs uppercase tracking-[0.4em] text-gold-deep font-medium">
                {eyebrow}
              </span>
            </div>
          </div>
          <h2 className="md:col-span-8 text-5xl md:text-7xl font-light leading-[1.02]">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
