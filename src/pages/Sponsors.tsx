import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { sponsors, siteConfig } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

const Sponsors = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">{t("sponsors.label")}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">{t("sponsors.pageTitle")}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("sponsors.pageIntro")}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsors.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05}>
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block aspect-video bg-secondary/30 border border-border/50 hover:border-primary/40 transition-colors flex items-center justify-center p-8"
                >
                  <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </a>
              ) : (
                <div className="aspect-video bg-secondary/30 border border-border/50 flex items-center justify-center p-8">
                  <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain opacity-70" loading="lazy" />
                </div>
              )}
              <p className="text-center text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3">{s.name}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">{t("sponsors.becomeTitle")}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("sponsors.becomeDesc")}</p>
            <Button asChild size="lg" className="tracking-[0.15em] uppercase text-xs px-10">
              <Link to="/booking"><Mail size={16} className="me-2" />{t("sponsors.contactBtn")}</Link>
            </Button>
            <p className="text-muted-foreground text-sm mt-6">{siteConfig.email}</p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
