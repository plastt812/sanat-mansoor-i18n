import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/LanguageToggle";
import { 
  Factory, 
  Shield, 
  Zap, 
  Globe, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Plug,
  FileText,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('home.durability'),
      description: t('home.durabilityDesc')
    },
    {
      icon: Wrench,
      title: t('home.precision'),
      description: t('home.precisionDesc')
    },
    {
      icon: Zap,
      title: t('home.innovation'),
      description: t('home.innovationDesc')
    },
    {
      icon: Users,
      title: t('home.partnership'),
      description: t('home.partnershipDesc')
    }
  ];

  const stats = [
            { number: "50+", label: t('home.yearsExperience') },
            { number: "1000+", label: t('home.projects') },
            { number: "200+", label: t('home.experts') },
            { number: "99.9%", label: t('home.qualityRating') }
  ];

  const services = [
    {
      emoji: "🏭",
      title: t('home.steelProduction'),
      description: t('home.steelDesc'),
    },
    {
      emoji: "🛢️",
      title: t('home.mining'),
      description: t('home.miningDesc'),
    },
    {
      emoji: "⛏️",
      title: t('home.oilGas'),
      description: t('home.oilGasDesc'),
    },
    {
      emoji: "⚡",
      title: t('home.powerGeneration'),
      description: t('home.powerDesc'),
    },
  ];

  // Add capabilities list
  const capabilities = [
    { title: t('home.machining'), description: t('home.machiningDesc') },
    { title: t('home.casting'), description: t('home.castingDesc') },
    { title: t('home.welding'), description: t('home.weldingDesc') },
    { title: t('home.reverseEng'), description: t('home.reverseEngDesc') },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50"
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/dc635b40-fb4a-48bf-bbfe-9fb32de3c6b3" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">Sanat Mansoor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <LanguageToggle />
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                  {t('nav.brands')}
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
              <Button 
                onClick={() => navigate("/contact")}
                className="ml-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="p-0">
        <div className="w-full">
          <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-50 select-none pointer-events-none"
            />
            <div className="relative z-10 px-6 flex flex-col items-center justify-center text-center">
              
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                {t('home.heroSubtitle')}
              </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-6"
              >
                {t('home.startProject')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6"
                // Smooth scroll to the Capabilities section
                onClick={() =>
                  document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t('home.viewCapabilities')}
              </Button>
            </motion.div>
          </div>
            </div>
          </div>
        </div>
      </section>




      {/* Stats Section */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Features Section (moved: now Our Brands) */}
      <section className="py-20 relative" id="services">
        {/* Background image for Our Brands section */}
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/c750e4c6-3f16-4d0f-b8ad-89d9006d4740"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Animate section header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              {t('home.ourBrands')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.brandsDesc')}
            </p>
          </motion.div>

          {/* Stagger cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 320, damping: 18 } }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/e7220248-19c5-4689-8607-7b0341910b7e"
                    alt="SAMIE logo"
                    className="h-12 w-auto mb-4 mx-auto object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">{t('nav.samie')}</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                    <li>• {t('home.samieItem1')}</li>
                    <li>• {t('home.samieItem2')}</li>
                    <li>• {t('home.samieItem3')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 320, damping: 18 } }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/710bd358-735e-4966-b819-effdc9610938"
                    alt="POWERMAN logo"
                    className="h-12 w-auto mb-4 mx-auto object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">{t('nav.powerman')}</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                    <li>• {t('home.powermanItem1')}</li>
                    <li>• {t('home.powermanItem2')}</li>
                    <li>• {t('home.powermanItem3')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02, transition: { type: "spring", stiffness: 320, damping: 18 } }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/3a72f77b-550f-4ecc-a660-ecb8d3851593"
                    alt="SAMEE logo"
                    className="h-12 w-auto mb-4 mx-auto object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">{t('nav.samee')}</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                    <li>• {t('home.sameeItem1')}</li>
                    <li>• {t('home.sameeItem2')}</li>
                    <li>• {t('home.sameeItem3')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section moved here ----------------------------------------------------------------------------------*/}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              {t('home.industriesServe')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('home.industriesDesc')}
            </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-xl leading-6">{service.emoji}</span>
                    <p className="text-lg leading-6">
                      <span className="font-semibold">{service.title}</span>{" "}
                      — <span className="text-muted-foreground">{service.description}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/aa6ce926-4b60-4467-8030-6d8c769b00a8"
                  alt="Industrial operations"
                  className="h-full w-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Choose Sanat Mansoor (duplicate) ----------------------------------------------------------------------------*/}
      <section className="py-20" >



        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              {t('home.whyChoose')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.whyChooseDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: index * 0.06 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-24 w-24 text-primary mb-6 mx-auto" />
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Stats Section -------------------------------------------------------------------------------------*/}
      <section className="py-1 bg-muted/80">
          
            


            {/* Our Capabilities Section --------------------------------------------------------------------------------------*/}
      <section className="py-20 relative" id="capabilities">
        {/* Background image and subtle overlay */}
        

        {/* image */}


        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              {t('home.capabilities')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('home.capabilitiesDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-base">
                  <span className="font-semibold">{c.title}</span>
                  <span className="text-muted-foreground"> — {c.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



        
      </section>



      


      {/* About Section -----------------------------------------------------------------------------------------------*/}
      <section className="py-20 relative" id="about">
        {/* Background image and overlay for About section */}
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/c801284e-0bf5-4f1e-bcb6-6e11ecef4a99"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                {t('home.aboutTitle')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('home.aboutText1')}
                </p>
                <p>
                  {t('home.aboutText2')}
                </p>
                <p>
                  {t('home.aboutText3')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <FileText className="h-16 w-16 text-primary mb-6 mx-auto" />
                  <h3 className="text-xl font-bold mb-4">Catalogs & Downloads</h3>
                  <p className="text-muted-foreground mb-6">
                    Explore our latest catalogs to learn more about our products and services.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/catalogs")}>
                    View Catalogs
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Contact Section --------------------------------------------------------------------------------------------*/}
      <section className="py-20 relative" id="contact">
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/ced5ac2e-ca71-439e-8241-8bb5230ffd64"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Section intro animations */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              {t('home.readyStart')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.readyStartDesc')}
            </p>
          </motion.div>

          {/* Staggered cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">



          
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.02 }}
            >
              <Card className="h-full border border-white/20 bg-background/70 backdrop-blur-mda">
                <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                  <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">{t('home.callUs')}</h3>
                  <div className="text-muted-foreground text-lg">
                    <div>+98 (31) 3760 9171</div>
                    <div>+98 (31) 3760 9168</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>




            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.12 }}
            >
              <Card className="h-full border border-white/20 bg-background/70 backdrop-blur-mda">
                <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                  <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">{t('home.emailUs')}</h3>
                  <p className="text-muted-foreground text-lg">info@smansoor.com</p>
                </CardContent>
              </Card>
            </motion.div>




            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.22 }}
            >
              <Card className="h-full border border-white/20 bg-background/70 backdrop-blur-mda">
                <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">{t('home.visitUs')}</h3>
                  <p className="text-muted-foreground text-lg">#78, 9th Street, Oshtorjan Industrial City, Isfahan Province, Iran</p>
                </CardContent>
              </Card>
            </motion.div>



          </div>

          {/* CTA button with interaction */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-6"
              >
                {t('home.getStartedToday')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand + Description */}
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
                {t('home.footerDesc')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">{t('home.quickLinks')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('home.home')}
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('nav.contact')}
                  </a>
                </li>
                <li>
                  <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('nav.catalogs')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h4 className="font-semibold mb-3">{t('home.ourBrandsFooter')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/brands/samie" className="hover:text-foreground transition-colors">
                    SAMIE
                  </a>
                </li>
                <li>
                  <a href="/brands/powerman" className="hover:text-foreground transition-colors">
                    POWERMAN
                  </a>
                </li>
                <li>
                  <a href="/brands/samee" className="hover:text-foreground transition-colors">
                    SAMEE
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">{t('home.contactFooter')}</h4>
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

          {/* Divider */}
          <div className="my-10 h-px bg-border" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
            <p className="text-sm text-muted-foreground">{t('home.copyright')}</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('home.company')}
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('home.support')}
              </a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.catalogs')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}