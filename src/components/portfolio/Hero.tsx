import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden noise">
      {/* Floating ornaments */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-gold/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full border border-gold/5"
      />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Aspiring SQA Engineer
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95]">
            {"Rakibul".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.04, duration: 0.6 }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="gradient-gold-text italic font-display"
            >
              Hasan Nahid
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Crafting software quality through meticulous testing and full-stack
            development. Passionate about delivering flawless digital experiences
            with PHP, Laravel, MySQL, and JavaScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Dhaka, Bangladesh</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +880 1818 961859</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> rakibulhasannahid7@gmail.com</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="lg:col-span-4 relative"
        >
          <div className="relative aspect-[3/4] rounded-2xl glass shadow-luxe overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/5" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Available For</div>
              <div className="font-display text-3xl">SQA Intern Roles</div>
              <div className="text-muted-foreground text-sm mt-1">& Full-Stack Projects</div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center text-gold font-display text-2xl"
            >
              ✦
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
