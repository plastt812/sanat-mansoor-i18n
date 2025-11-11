import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, ChevronDown, Cog, Wrench, Droplet, CircleDot, Mountain, Layers, Zap, Settings, Factory } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Samie() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const capabilities = [
    {
      titleKey: "samie.cap1Title",
      descKey: "samie.cap1Desc",
      icon: Cog
    },
    {
      titleKey: "samie.cap2Title",
      descKey: "samie.cap2Desc",
      icon: Settings
    },
    {
      titleKey: "samie.cap3Title",
      descKey: "samie.cap3Desc",
      icon: Droplet
    },
    {
      titleKey: "samie.cap4Title",
      descKey: "samie.cap4Desc",
      icon: Wrench
    },
    {
      titleKey: "samie.cap5Title",
      descKey: "samie.cap5Desc",
      icon: Zap
    },
    {
      titleKey: "samie.cap6Title",
      descKey: "samie.cap6Desc",
      icon: Mountain
    },
    {
      titleKey: "samie.cap7Title",
      descKey: "samie.cap7Desc",
      icon: Factory
    }
  ];

  const solutions = [
    {
      titleKey: "samie.sol1Title",
      descKey: "samie.sol1Desc",
      icon: CircleDot
    },
    {
      titleKey: "samie.sol2Title",
      descKey: "samie.sol2Desc",
      icon: Wrench
    },
    {
      titleKey: "samie.sol3Title",
      descKey: "samie.sol3Desc",
      icon: Droplet
    },
    {
      titleKey: "samie.sol4Title",
      descKey: "samie.sol4Desc",
      icon: Cog
    },
    {
      titleKey: "samie.sol5Title",
      descKey: "samie.sol5Desc",
      icon: Mountain
    },
    {
      titleKey: "samie.sol6Title",
      descKey: "samie.sol6Desc",
      icon: Layers
    },
    {
      titleKey: "samie.sol7Title",
      descKey: "samie.sol7Desc",
      icon: Zap
    },
    {
      titleKey: "samie.sol8Title",
      descKey: "samie.sol8Desc",
      icon: Settings
    },
    {
      titleKey: "samie.sol9Title",
      descKey: "samie.sol9Desc",
      icon: Factory
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
              <LanguageToggle />
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.home')}</a>
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                  {t('nav.brands')}
                  <ChevronDown className="h-4 w-4" />
                </span>
                <div className="absolute left-0 top-full mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/brands/samie" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">{t('nav.samie')}</div>
                      <div className="text-xs text-muted-foreground">{t('nav.samieDesc')}</div>
                    </a>
                    <a href="/brands/powerman" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">{t('nav.powerman')}</div>
                      <div className="text-xs text-muted-foreground">{t('nav.powermanDesc')}</div>
                    </a>
                    <a href="/brands/samee" className="block px-4 py-3 text-sm hover:bg-muted transition-colors">
                      <div className="font-semibold">{t('nav.samee')}</div>
                      <div className="text-xs text-muted-foreground">{t('nav.sameeDesc')}</div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.about')}</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.contact')}</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.catalogs')}</a>
              <Button onClick={() => navigate("/contact")} className="ml-4">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/eeab124b-fc35-4bde-9ad9-be875244e457"
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
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2">{t('samie.badge')}</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            {t('samie.heroTitle')}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('samie.heroSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Engineering Excellence - Editorial Layout */}
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
                {t('samie.capabilitiesLabel')}
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {t('samie.capabilitiesTitle')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                {t('samie.capabilitiesDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/af0da33a-2751-4c3c-91a0-3ccfec6e59ab"
                alt="Engineering capabilities"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="space-y-0">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.titleKey}
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
                          {t(cap.titleKey)}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        {t(cap.descKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              {t('samie.solutionsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('samie.solutionsDesc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 rounded-2xl overflow-hidden"
          >
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/22db10ff-c21d-4982-87a5-966a801a682f"
              alt="Industrial solutions"
              className="w-full h-[350px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.titleKey}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-2 flex-1 bg-gradient-to-r from-primary to-primary/40 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">{t(solution.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(solution.descKey)}</p>
                  </div>
                </motion.div>
              );
            })}
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
            {t('samie.ctaTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            {t('samie.ctaDesc')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={() => navigate("/contact")} className="text-lg px-10 py-7 rounded-full shadow-lg">
              {t('samie.ctaButton')}
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
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t('nav.home')}
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

            <div>
              <h4 className="font-semibold mb-3">{t('footer.ourBrands')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/brands/samie" className="hover:text-foreground transition-colors">
                    {t('footer.samieLink')}
                  </a>
                </li>
                <li>
                  <a href="/brands/powerman" className="hover:text-foreground transition-colors">
                    {t('footer.powermanLink')}
                  </a>
                </li>
                <li>
                  <a href="/brands/samee" className="hover:text-foreground transition-colors">
                    {t('footer.sameeLink')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t('footer.contact')}</h4>
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
            <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.company')}
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.support')}
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