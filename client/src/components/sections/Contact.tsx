import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Plan Your <br />
              <span className="text-primary">Next Event</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to take your event to the next level? Reach out to us directly via phone or email. We're here to help make it happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/5 rounded-2xl p-8 text-center hover-elevate"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Phone</h3>
              <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 rounded-2xl p-8 text-center hover-elevate"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Email</h3>
              <p className="text-muted-foreground text-lg">bookings@electrosound.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-white/5 rounded-2xl p-8 text-center hover-elevate"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Location</h3>
              <p className="text-muted-foreground text-lg">Serving Greater Metro Area</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
