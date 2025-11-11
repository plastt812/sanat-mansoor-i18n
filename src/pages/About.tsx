import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Factory,
  BadgeCheck,
  Handshake,
  Award,
  Users,
  Clock,
  Rocket,
  ArrowRight,
  Wrench,
  Cog,
  Plug,
  Hammer,
  Gauge,
  CheckCircle,
} from "lucide-react";
import { Phone, Mail, MapPin , ChevronDown } from "lucide-react";
import { Calendar } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const values = [
    { icon: BadgeCheck, titleKey: "about.value1Title", descKey: "about.value1Desc" },
    { icon: Handshake, titleKey: "about.value2Title", descKey: "about.value2Desc" },
    { icon: Rocket, titleKey: "about.value3Title", descKey: "about.value3Desc" },
    { icon: Award, titleKey: "about.value4Title", descKey: "about.value4Desc" },
  ];

  const milestones = [
    { year: "1948", note: "Founded with a single workshop and a bold vision." },
    { year: "1974", note: "Expanded to high-precision industrial manufacturing." },
    { year: "1998", note: "Global clients across 3 continents." },
    { year: "2015", note: "ISO certifications and digital transformation." },
    { year: "2024", note: "1,000+ projects delivered across seven product segments." },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Nav */}
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
              <a href="/about" className="text-foreground font-medium">{t('nav.about')}</a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.contact')}</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.catalogs')}</a>
              <Button onClick={() => navigate("/contact")} className="ml-2">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero - cleaner and more focused */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[56vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/2bbcab05-180d-460f-b184-519c9f98ac09"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/30" />
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative z-10 px-6 text-center max-w-3xl"
          >
            <Badge variant="secondary" className="mb-4">{t('nav.about')}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {t('about.heroTitle')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are + Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Who we are */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="lg:col-span-7"
          >
            <div className="max-w-2xl flex flex-col gap-4">
              <Badge variant="secondary" className="mb-1">{t('about.whoWeAreBadge')}</Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                {t('about.whoWeAreTitle')}
              </h2>
              <p className="text-base text-muted-foreground">
                {t('about.whoWeAreSubtitle')}
              </p>

              {/* Editorial rail */}
              <div className="mt-6 border-l pl-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t('about.whoWeArePara1')}
                </p>
                <p>
                  {t('about.whoWeArePara2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Key metrics */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            className="lg:col-span-5 h-full"
          >
            {/* New compact metrics stack with refined alignment */}
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t('about.keyMetrics')}
                </h3>
              </div>

              {/* Card grid - make it fill remaining height and cards equal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 lg:mt-2 h-full content-start">
                {/* Since 1948 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur ring-1 ring-border p-6 flex flex-col items-center text-center justify-center min-h-[150px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-2">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold leading-tight">{t('about.since')}</div>
                  <div className="text-2xl font-bold tracking-tight">1948</div>
                  <div className="text-xs text-muted-foreground mt-1">{t('about.heritageExcellence')}</div>
                </motion.div>

                {/* Team */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur ring-1 ring-border p-6 flex flex-col items-center text-center justify-center min-h-[150px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-2">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold leading-tight">{t('about.team')}</div>
                  <div className="text-2xl font-bold tracking-tight">{t('about.teamCount')}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t('about.integratedEng')}</div>
                </motion.div>

                {/* On‑Time Delivery */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur ring-1 ring-border p-6 flex flex-col items-center text-center justify-center min-h-[150px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-2">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold leading-tight">{t('about.onTimeDelivery')}</div>
                  <div className="text-2xl font-bold tracking-tight">98.7%</div>
                  <div className="text-xs text-muted-foreground mt-1">{t('about.reliability')}</div>
                </motion.div>

                {/* Projects */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur ring-1 ring-border p-6 flex flex-col items-center text-center justify-center min-h-[150px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/40" />
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-2">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold leading-tight">{t('about.projects')}</div>
                  <div className="text-2xl font-bold tracking-tight">1000+</div>
                  <div className="text-xs text-muted-foreground mt-1">{t('about.provenOutcomes')}</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Legacy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden">
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/c750e4c6-3f16-4d0f-b8ad-89d9006d4740"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('about.legacyTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('about.legacyDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                <Gauge className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('about.legacyPill1')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border">
                <Cog className="h-5 w-5 text-primary" />
                <span className="text-sm">{t('about.legacyPill2')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects (replaces: Our Capabilities + Our Brands) */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-3">{t('about.featuredProjectsTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.featuredProjectsDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <Card className="h-full rounded-xl border bg-background/60 backdrop-blur-md ring-1 ring-border hover:ring-primary/40 transition-all shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{t('about.project1Title')}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('about.project1Desc')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project1Item1')}</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project1Item2')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
            >
              <Card className="h-full rounded-xl border bg-background/60 backdrop-blur-md ring-1 ring-border hover:ring-primary/40 transition-all shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Plug className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{t('about.project2Title')}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('about.project2Desc')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project2Item1')}</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project2Item2')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.12 }}
            >
              <Card className="h-full rounded-xl border bg-background/60 backdrop-blur-md ring-1 ring-border hover:ring-primary/40 transition-all shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Gauge className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{t('about.project3Title')}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('about.project3Desc')}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project3Item1')}</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5" /> {t('about.project3Item2')}</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ x: -18, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t('about.industriesTitle')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('about.industriesDesc')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <span className="px-6 py-3 rounded-full border bg-background/90 shadow-sm inline-flex items-center justify-center gap-3">
                  <span className="text-2xl">🏭</span>
                  <span className="text-lg font-semibold">{t('home.steelProduction')}</span>
                </span>
                <span className="px-6 py-3 rounded-full border bg-background/90 shadow-sm inline-flex items-center justify-center gap-3">
                  <span className="text-2xl">⛏️</span>
                  <span className="text-lg font-semibold">{t('home.mining')}</span>
                </span>
                <span className="px-6 py-3 rounded-full border bg-background/90 shadow-sm inline-flex items-center justify-center gap-3">
                  <span className="text-2xl">🛢️</span>
                  <span className="text-lg font-semibold">{t('home.oilGas')}</span>
                </span>
                <span className="px-6 py-3 rounded-full border bg-background/90 shadow-sm inline-flex items-center justify-center gap-3">
                  <span className="text-2xl">🔋</span>
                  <span className="text-lg font-semibold">{t('home.powerGeneration')}</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 18, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.06 }}
              className="lg:col-span-6"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/f3606006-bd0d-4bac-bd45-c1bdf47d7b12"
                  alt="Industrial operations"
                  className="h-full w-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">{t('about.coreValuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.titleKey}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -3, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 18 } }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: i * 0.06 }}
              >
                <Card className="h-full rounded-xl border bg-background/60 backdrop-blur-md ring-1 ring-border hover:ring-primary/40 transition-all shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-6 rounded-full" />
                    <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
                      <v.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{t(v.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(v.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision for the Future */}
      <section className="py-20 relative">
        {/* Background image */}
        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/da3d46b7-b07a-49d9-bf79-91a6f3cbec4c"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('about.visionTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.visionDesc')}
            </p>
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
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
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

            {/* Our Brands */}
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

            {/* Contact */}
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

          {/* Divider */}
          <div className="my-10 h-px bg-border" />

          {/* Bottom bar */}
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