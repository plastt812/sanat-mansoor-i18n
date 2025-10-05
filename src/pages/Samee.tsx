import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, ChevronDown, Plug, Cable, Siren, Zap } from "lucide-react";

export default function Samee() {
  const navigate = useNavigate();

  const productCategories = [
    {
      title: "Sockets & Plugs",
      description: "Over 200 different models available from 10A to 125A, designed for industrial environments.",
      icon: Plug
    },
    {
      title: "Connectors",
      description: "Reliable connection solutions for high-load applications with IP-rated protection.",
      icon: Cable
    },
    {
      title: "Cable Festoon Systems",
      description: "Wire ropes and C-rails, including custom-designed systems for flexible power distribution.",
      icon: Zap
    },
    {
      title: "Alarm Sirens",
      description: "Durable sirens for industrial alerts, ensuring safety in challenging conditions.",
      icon: Siren
    }
  ];

  const features = [
    {
      title: "IP-Rated Protection",
      description: "Dust and water resistance for reliable operation in harsh environments."
    },
    {
      title: "Corrosion-Resistant Materials",
      description: "Built to withstand challenging industrial conditions and extend product lifespan."
    },
    {
      title: "Easy Installation",
      description: "Designed for quick and straightforward installation in high-load environments."
    },
    {
      title: "Panel-Mounted Solutions",
      description: "Secure sockets and plugs for reliable electrical connections."
    },
    {
      title: "Custom Cable Systems",
      description: "Flexible power distribution solutions tailored to your specific requirements."
    },
    {
      title: "High-Amperage Support",
      description: "Appliances rated up to 125A for demanding industrial applications."
    },
    {
      title: "Seamless Integration",
      description: "Products designed to integrate smoothly into complex industrial setups."
    },
    {
      title: "Adaptable Design",
      description: "Solutions that adapt to specific site requirements and operational needs."
    }
  ];

  const applications = [
    {
      industry: "Steel Production",
      description: "Durable sirens for alerts and weatherproof electrical connections in demanding production environments."
    },
    {
      industry: "Mining",
      description: "Weatherproof connectors for underground use, ensuring reliable power in harsh conditions."
    },
    {
      industry: "Power Generation",
      description: "Trolley systems for overhead lines, ensuring safety and operational uptime in power plants."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                  Brands
                  <ChevronDown className="h-4 w-4" />
                </span>
                <div className="absolute left-0 top-full mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/brands/samie" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">SAMIE</div>
                      <div className="text-xs text-muted-foreground">Heavy Industrial Equipment</div>
                    </a>
                    <a href="/brands/powerman" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">POWERMAN</div>
                      <div className="text-xs text-muted-foreground">High-Pressure Hydraulic Tools</div>
                    </a>
                    <a href="/brands/samee" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">SAMEE</div>
                      <div className="text-xs text-muted-foreground">Electrical Equipment</div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">Catalogs</a>
              <Button onClick={() => navigate("/contact")} className="ml-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Minimalist with centered content */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-8 text-center"
        >
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/3a72f77b-550f-4ecc-a660-ecb8d3851593"
            alt="SAMEE logo"
            className="h-20 w-auto mb-8 mx-auto object-contain"
          />
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">Industrial Electrical Equipment</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Outlets & Plugs, Cable Trolleys,<br />Alarm Sirens
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            SAMEE combines the widest selection of industrial sockets and plugs, sirens, and cable festoon systems with reliability, durability, and built-in safety.
          </p>
        </motion.div>
      </section>

      {/* Product Categories - Large Icon Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions designed to make it easy to find the right equipment for any application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group"
                >
                  <div className="h-full p-10 bg-background rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features - Compact List */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Key Features and Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Robust electrical solutions with IP-rated protection, corrosion resistance, and easy installation for high-load environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Wide Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ensuring safety and operational uptime in challenging industrial conditions across multiple sectors.
            </p>
          </motion.div>

          <div className="space-y-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.industry}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group"
              >
                <div className="p-8 bg-background rounded-2xl border-l-4 border-primary hover:border-primary/70 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {app.industry}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean and Simple */}
      <section className="py-32">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-4xl mx-auto px-8 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Need Industrial Electrical Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Contact our SAMEE team to explore electrical equipment and systems for your industrial facility.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={() => navigate("/contact")} className="text-lg px-10 py-7 rounded-full shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3"
                  alt="Logo"
                  className="h-9 w-9"
                />
                <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engineering durable, high‑performance industrial solutions across heavy equipment,
                hydraulics, and electrical systems—trusted since 1948.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Catalogs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Our Brands</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/brands/samie" className="hover:text-foreground transition-colors">
                    SAMIE — Heavy Industrial Equipment
                  </a>
                </li>
                <li>
                  <a href="/brands/powerman" className="hover:text-foreground transition-colors">
                    POWERMAN — High‑Pressure Hydraulic Tools
                  </a>
                </li>
                <li>
                  <a href="/brands/samee" className="hover:text-foreground transition-colors">
                    SAMEE — Electrical Equipment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">info@sanatmansoor.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">
                    #78, 9th Street, Oshtorjan Industrial City, Isfahan Province, Iran
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-10 h-px bg-border" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
            <p className="text-sm text-muted-foreground">© 2025 Sanat Mansoor. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                Company
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                Catalogs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}