import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, ChevronDown, Plug, Cable, Siren, Zap } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Samee() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
              <LanguageToggle />
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
          src="https://harmless-tapir-303.convex.cloud/api/storage/d319642c-0e49-43a2-987e-3573443c7899"
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
            src="https://harmless-tapir-303.convex.cloud/api/storage/3a72f77b-550f-4ecc-a660-ecb8d3851593"
            alt="SAMEE logo"
            className="h-24 w-auto mb-8 mx-auto object-contain drop-shadow-2xl"
          />
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">{t('samee.badge')}</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            {t('samee.heroTitle')}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('samee.heroSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Product Categories - Editorial Layout */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
            >
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {t('samee.categoriesLabel')}
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {t('samee.categoriesTitle')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                {t('samee.categoriesDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/70120535-0c79-49c7-b81f-b6146b726723"
                alt="SAMEE electrical equipment"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="space-y-0">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  className="group border-b border-border/50 py-10 hover:bg-muted/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0 text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors leading-none pt-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              {t('samee.featuresTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('samee.featuresDesc')}
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

      {/* Applications Section - Masonry Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {t('samee.applicationsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('samee.applicationsDesc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 rounded-2xl overflow-hidden"
          >
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/4dcaf9d1-24d7-4098-a26e-5295fbe0a447"
              alt="Industrial applications"
              className="w-full h-[350px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.industry}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="mb-6">
                    <div className="h-2 w-20 bg-gradient-to-r from-primary to-primary/40 rounded-full" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">{app.industry}</h3>
                  <p className="text-muted-foreground leading-relaxed">{app.description}</p>
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
          className="absolute inset-0 h-full w-full object-cover opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/5 to-background/0" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {t('samee.ctaTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            {t('samee.ctaDesc')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={() => navigate("/contact")} className="text-lg px-10 py-7 rounded-full shadow-lg">
              {t('samee.ctaButton')}
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
                  <div className="text-muted-foreground">
                    <div>+98 (31) 3760 9171</div>
                    <div>+98 (31) 3760 9168</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">info@smansoor.com</span>
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