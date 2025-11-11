import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight , ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Contact() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    toast(t("contact.send"), {
      description: `Thanks ${data.get("name") || "there"} — we'll get back to you shortly.`,
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

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
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
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
              <a href="/contact" className="text-foreground font-medium">{t('nav.contact')}</a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.catalogs')}</a>
              <Button onClick={() => navigate("/")} className="ml-2">
                {t('nav.backToHome')}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="p-0">
        <div className="relative overflow-hidden min-h-[40vh] flex items-center justify-center">
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/ced5ac2e-ca71-439e-8241-8bb5230ffd64"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 px-6 text-center">
            <Badge variant="secondary" className="mb-4">{t("nav.contact")}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>



            {/*
            <h3 className="text-xl font-semibold mt-6">Contact Information by Department</h3>
            <p className="text-muted-foreground">
              To ensure your inquiry is handled efficiently, please get in touch with the relevant department.
            </p>
            */}


          </motion.div>
        </div>


        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="lg:col-span-2 self-start"
          >
            <Card className="border-0">
              <CardContent className="p-8">
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-2 block">{t("contact.name")}</label>
                    <Input name="name" placeholder={t("contact.name")} required />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
                    <Input name="email" type="email" placeholder={t("contact.email")} required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-2 block">{t("contact.phone")}</label>
                    <Input name="company" placeholder={t("contact.phone")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-2 block">{t("contact.message")}</label>
                    <Textarea
                      name="message"
                      placeholder={t("contact.message")}
                      rows={8}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  

                  <div className="sm:col-span-2">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                      <Button type="submit" className="px-8">
                        {t("contact.send")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 self-start"
          >
            <Card className="border-0">
              <CardContent className="p-6 text-md">
                <div className="flex items-start gap-3">
                  <Phone className="h-10 w-10 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">{t("contact.phone_label")}</div>
                    <div className="text-muted-foreground">+98 (31) 3760 9171<br />+98 (31) 3760 9168</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-md">
                <div className="flex items-start gap-3">
                  <Mail className="h-10 w-10 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">{t("contact.email_label")}</div>
                    <div className="text-muted-foreground">info@smansoor.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0">
              <CardContent className="p-6 text-md">
                <div className="flex items-start gap-3">
                  <MapPin className="h-15 w-15 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">{t("contact.address")}</div>
                    <div className="text-muted-foreground">
                      #78, 9th Street, Oshtorjan Industrial City, Isfahan Province, Iran
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-8 mt-12 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-2xl font-bold tracking-tight">{t("contact.address")}</h2>
            <p className="text-muted-foreground">
              {t("contact.hoursDesc")}
            </p>
          </motion.div>

          
          <Card className="border-0 overflow-hidden paddi">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Sanat Mansoor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.278927552167!2d51.47626018876107!3d32.46523047664455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc250155b9cc25%3A0x3191bf5648209a7a!2sSanat%20Mansoor%20Co.!5e0!3m2!1sen!2sde!4v1759210998979!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>
          </Card>
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
                Engineering durable, high‑performance industrial solutions across heavy equipment,
                hydraulics, and electrical systems—trusted since 1948.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">{t("home.quickLinks")}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("home.home")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("nav.contact")}
                  </a>
                </li>
                <li>
                  <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("nav.catalogs")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h4 className="font-semibold mb-3">{t("home.ourBrandsFooter")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/brands/samie" className="hover:text-foreground transition-colors">
                    {t("nav.samie")} — {t("nav.samieDesc")}
                  </a>
                </li>
                <li>
                  <a href="/brands/powerman" className="hover:text-foreground transition-colors">
                    {t("nav.powerman")} — {t("nav.powermanDesc")}
                  </a>
                </li>
                <li>
                  <a href="/brands/samee" className="hover:text-foreground transition-colors">
                    {t("nav.samee")} — {t("nav.sameeDesc")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">{t("home.contactFooter")}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">+98 (31) 3760 9171 / +98 (31) 3760 9168</span>
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
            <p className="text-sm text-muted-foreground">{t("home.copyright")}</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("home.company")}
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("home.support")}
              </a>
              <a href="/catalogs" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.catalogs")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}