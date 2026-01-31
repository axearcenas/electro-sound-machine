import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    // Wedding reception dancefloor with purple lighting
    url: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1000&auto=format&fit=crop",
    category: "Weddings",
    title: "Elegant Receptions"
  },
  {
    // Live concert stage blue lights
    url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
    category: "Concerts",
    title: "Live Performances"
  },
  {
    // Corporate event stage
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
    category: "Corporate",
    title: "Conferences & Galas"
  },
  {
    // DJ setup close up
    url: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1000&auto=format&fit=crop",
    category: "Parties",
    title: "Private Events"
  },
  {
    // Outdoor festival stage
    url: "https://images.unsplash.com/photo-1470229722913-7ea051c24efc?q=80&w=1000&auto=format&fit=crop",
    category: "Festivals",
    title: "Outdoor Sound"
  },
  {
    // Band performing
    url: "https://images.unsplash.com/photo-1459749411177-8c29142af41e?q=80&w=1000&auto=format&fit=crop",
    category: "Live Music",
    title: "Band Support"
  }
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into the memorable experiences we've helped create over the last 30 years.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                  {image.category}
                </span>
                <h3 className="text-white font-display text-xl font-bold">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
