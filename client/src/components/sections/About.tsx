import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4" />
            <img 
              src="https://pixabay.com/get/g9548e5e6e9aa2233a9fd546b482c009627905d4ebec82b083dd018c6d6dcd1d02159aaf8f9d87e5d62e35050143374deec15cacf57e8ead5e2da92f9277d1af1_1280.jpg" 
              alt="Sound Engineer working" 
              className="relative rounded-2xl w-full h-auto shadow-2xl z-10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              30+ Years of <br />
              <span className="text-primary">Sonic Excellence</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in the early 90s, Electro Sound Machine (ESM) started with a simple mission: to bring professional-grade audio experiences to local events.
              </p>
              <p>
                Three decades later, we've grown into a premier production house, trusted by wedding planners, corporate event managers, and festival organizers alike. We don't just rent equipment; we engineer atmospheres.
              </p>
              <p>
                Whether it's the thumping bass of a dance floor or the crystal-clear clarity of a keynote speech, our team treats every event with the same passion and precision that got us started 30 years ago.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">30+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Years Exp.</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">5k+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Events</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Reliability</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
