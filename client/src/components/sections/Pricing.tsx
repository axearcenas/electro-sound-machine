import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const packages = [
  {
    name: "Basic",
    price: "$200",
    description: "Perfect for small parties and intimate gatherings.",
    features: [
      "2x Powered Speakers (1000W)",
      "1x 4-Channel Mixer",
      "1x Wired Microphone",
      "2x LED Par Lights",
      "All necessary cables",
      "Setup & Teardown"
    ]
  },
  {
    name: "Standard",
    price: "$500",
    description: "Our most popular choice for weddings and medium venues.",
    popular: true,
    features: [
      "2x High-End PA Speakers",
      "2x 18\" Subwoofers",
      "Wireless Microphone System",
      "4x Intelligent Moving Heads",
      "Fog Machine",
      "Digital Mixer",
      "Sound Technician"
    ]
  },
  {
    name: "Premium",
    price: "$1,000+",
    description: "Full concert-grade production for large events.",
    features: [
      "Line Array System",
      "Full Stage Monitoring",
      "Complete Light Show Design",
      "LED Video Wall options",
      "Trussing System",
      "Live Band Engineering",
      "2x On-site Engineers"
    ]
  }
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent packages to get you started. We can customize any package to fit your exact requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col p-8 glass-card transition-transform duration-300 hover:-translate-y-2 ${
                pkg.popular ? "border-primary/50 shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]" : "border-white/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">{pkg.price}</span>
                  <span className="text-muted-foreground">/day</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{pkg.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full ${pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-white/20 text-white hover:bg-white/5"}`}
              >
                Choose {pkg.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
