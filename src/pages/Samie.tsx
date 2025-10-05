import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

export default function Samie() {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: "Engineered for Excellence",
      description: "Our team of highly qualified engineers leverages cutting-edge design principles and advanced software to create robust and efficient solutions that operate flawlessly under rigorous conditions."
    },
    {
      title: "Collaborative Engineering and Manufacturing",
      description: "Through strategic partnerships, like the Esfarayen Industrial Complex Special Consortium, we foster innovation in public-private collaborations for cutting-edge machinery."
    },
    {
      title: "Hydraulic Engineering and Manufacturing",
      description: "We design and manufacture hydraulic circuits, custom cylinders, and components for key industries. Our POWERMAN brand offers high-pressure (700 and 1,500 bar) tools and equipment."
    },
    {
      title: "Mechanical Structure Design and Manufacturing",
      description: "We create solid frameworks, precise actuation systems, and lightweight yet durable structures to withstand demanding conditions."
    },
    {
      title: "Precision and Large Piece Machining",
      description: "Using state-of-the-art CNC centers, we achieve exceptional accuracy in components of all sizes, reducing wear and extending lifespan."
    },
    {
      title: "Advanced Casting",
      description: "Via our Felez Taban subsidiary, we produce high-performance alloy components for mining, built to withstand extreme wear."
    },
    {
      title: "Advanced Welding Expertise",
      description: "Our certified technicians use cutting-edge techniques to ensure structural integrity, minimizing distortion and maximizing strength."
    }
  ];

  const solutions = [
    {
      title: "Journal Bearings & Chocks",
      description: "Over 700 backup chocks and 1,100+ bearings and bushings for Mobarakeh Steel Company, providing low-friction support for rotating shafts."
    },
    {
      title: "Liner Handler Machines",
      description: "Re-engineered models (1,000-5,000 kg lifting capacity) for streamlined liner replacement in industrial applications."
    },
    {
      title: "Oil & Gas Equipment",
      description: "Production of complex spare parts and equipment used in the Oil & Gas industry, Steel, Cement, and Compost companies, as well as Power Plants."
    },
    {
      title: "Bearings, Chocks, and Bushes",
      description: "Manufacturing & repairment of various Bearings, Chocks, and Bushes in different sizes."
    },
    {
      title: "Cone Crushers",
      description: "Manufacturing of Cone Crushers for mining and industrial applications."
    },
    {
      title: "Pickling and Recoiling Equipment",
      description: "Manufacturing of Machines, Frames, and Rollers for Pickling and Recoiling Lines."
    },
    {
      title: "High Pressure Grinding Rolls (HPGR)",
      description: "Over 80 enhanced units utilizing high pressure for efficient grinding, energy savings, and consistent output."
    },
    {
      title: "Special Duty Machines",
      description: "Custom-designed to meet unique industrial requirements."
    },
    {
      title: "Custom Production Lines",
      description: "Complete lines integrating with your infrastructure, like the reverse-engineered 2,500-ton rollers and equipment for Mobarakeh Steel's pickling and recoiling line."
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

      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
          alt=""
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/e7220248-19c5-4689-8607-7b0341910b7e"
            alt="SAMIE logo"
            className="h-24 w-auto mb-8 mx-auto object-contain drop-shadow-2xl"
          />
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">Industrial Projects</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            Machine Design & Fabrication
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Over 50 years of engineering excellence in complex machinery and equipment for the world's most demanding industries
          </p>
        </motion.div>
      </section>

      {/* Engineering Excellence - Clean List Layout */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Engineering Excellence for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From cutting-edge design to collaborative innovation and hydraulic mastery, we deliver robust solutions that stand the test of time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="relative p-8 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-l-xl" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Solutions - Masonry Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Flagship Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven industrial equipment and machinery designed for maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="h-2 w-16 bg-gradient-to-r from-primary to-primary/40 rounded-full mb-6" />
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with Background */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/c750e4c6-3f16-4d0f-b8ad-89d9006d4740"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Contact our SAMIE team to explore custom machinery solutions tailored to your industrial needs
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