import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden noise grain-fine">
      {/* Floating ornaments */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -top-48 -right-48 w-[680px] h-[680px] rounded-full border border-gold/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full border border-gold/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-72 -left-48 w-[780px] h-[780px] rounded-full border border-gold/15"
      />

      {/* Big background monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[28rem] leading-none text-gold/[0.04] italic">N</span>
      </div>

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold-deep font-medium">
              Aspiring SQA Engineer · Portfolio '26
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-light leading-[0.92]">
            {"Rakibul".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-gold-text italic font-display inline-block"
            >
              Hasan Nahid.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Crafting software quality through meticulous testing and full-stack development.
            Passionate about delivering flawless digital experiences with{" "}
            <span className="text-foreground font-medium">
              test case design, defect tracking, and quality analysis
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-gold transition-all"
            >
              View Selected Work
              <ArrowDown className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" /> Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" /> +880 1818 961859
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" /> rakibulhasannahid7@gmail.com
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="lg:col-span-4 relative"
        >
          {/* Portrait / monogram card */}
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden glass-strong shadow-luxe ring-gold">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/25 via-gold-soft/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 rounded-full border border-dashed border-gold/40"
              />
              <span className="font-display italic text-[14rem] leading-none gradient-gold-text">
                N
              </span>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold-deep mb-2">
                Available For
              </div>
              <div className="font-display text-3xl text-foreground leading-tight">
                SQA Intern Roles
              </div>
              <div className="text-muted-foreground text-sm mt-1">& Full-Stack Projects</div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gold shadow-soft"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-3 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Status
                </div>
                <div className="text-sm font-medium">Open to work</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
