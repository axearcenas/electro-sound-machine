import { motion } from "framer-motion";
import { Speaker, Mic2, Zap, Music, Settings, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Speaker className="w-8 h-8" />,
    title: "Sound Systems",
    description: "Premium PA systems, line arrays, and subwoofers that deliver crystal clear audio for any venue size.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Intelligent Lighting",
    description: "Moving heads, lasers, and LED uplighting programmed to create immersive visual atmospheres.",
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Microphones",
    description: "Industry-standard wireless handhelds, lapels, and instrument mics for speeches and live bands.",
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "DJ Equipment",
    description: "Professional Pioneer CDJs, mixers, and controllers for seamless mixing and performance.",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Live Band Support",
    description: "Full backline support including drum kits, amplifiers, and stage monitoring systems.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Technical Support",
    description: "Experienced on-site technicians to ensure flawless operation throughout your entire event.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-primary">Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive audiovisual solutions tailored to your specific event needs, from intimate gatherings to large-scale productions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full glass-card hover:bg-white/5 transition-all duration-300 border-white/5 p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
