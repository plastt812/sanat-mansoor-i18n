import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

export default function Powerman() {
  const navigate = useNavigate();

  const collections = [
    {
      title: "Industrial Tools",
      description: "Designed for maximum strength and durability. Pullers, Punchers, and Pex are the most commonly used."
    },
    {
      title: "Connection Technology",
      description: "Dedicated tools for a wide range of operations used in connection technology. The most common applications are Crimping, Cutting, and Punching."
    },
    {
      title: "Bolting Tools",
      description: "Hydraulic nut splitters, and a variety of mechanical and hydraulic spreading tools."
    }
  ];

  const features = [
    {
      title: "High-Power Hydraulic Solutions",
      description: "700-1,500 bar pressure for precise force application in demanding environments."
    },
    {
      title: "Lightweight & Portable",
      description: "Corrosion-resistant coatings with heavy-duty spring returns and safety valves."
    },
    {
      title: "Push-Pull Versatility",
      description: "Cylinders offer flexible operation for various industrial applications."
    },
    {
      title: "Two-Speed Operation",
      description: "Pumps include efficient two-speed systems for optimal performance."
    },
    {
      title: "Leak-Free Connections",
      description: "Quick couplers and accessories ensure secure, reliable connections."
    },
    {
      title: "High Capacity Range",
      description: "Support for capacities up to 500 tons with various stroke options."
    },
    {
      title: "Reduced Maintenance",
      description: "Enhanced operational uptime with minimal maintenance requirements."
    },
    {
      title: "Energy Savings",
      description: "Efficient designs reduce energy consumption and operational costs."
    }
  ];

  const applications = [
    {
      industry: "Oil & Gas",
      description: "Explosion-proof air pumps for refineries, ensuring safety in hazardous environments."
    },
    {
      industry: "Mining",
      description: "Portable gasoline pumps for remote sites, delivering reliable power where needed."
    },
    {
      industry: "Construction",
      description: "Nut splitters for quick maintenance, reducing downtime and improving efficiency."
    }
  ];

  return (
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[50vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/710bd358-735e-4966-b819-effdc9610938"
              alt="POWERMAN logo"
              className="h-20 w-auto mb-6 mx-auto object-contain"
            />
            <Badge variant="secondary" className="mb-4">Industrial Hydraulic Equipment</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Cylinders, Pumps & Tools
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reliable, Durable, and Safe High-Pressure Hydraulic Equipment for any application requiring applied force.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Powerman Tool Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An extensive range of tools to ensure that even your most demanding application can be undertaken with the highest degree of safety and accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="font-bold text-xl mb-4">{collection.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{collection.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Key Features and Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-power hydraulic solutions designed for precision, portability, and maximum operational uptime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering energy savings and reduced downtime in hazardous environments across multiple industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.industry}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-primary">{app.industry}</h3>
                    <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Need High-Pressure Hydraulic Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our POWERMAN team to explore hydraulic tools and equipment for your specific application.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" onClick={() => navigate("/contact")} className="text-lg px-8 py-6">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
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
                  <MapPin className="h-9 w-9 text-primary mt-0.5" />
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
