import { siteConfig } from "@/data/content";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-serif text-lg tracking-[0.2em] text-foreground mb-2">{siteConfig.name.toUpperCase()}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
            </p>
            <p>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp: {siteConfig.whatsapp}
              </a>
            </p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" /></svg>
            </a>
            <a href={siteConfig.snapchat} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.17 2c3.07 0 5.02 2.05 5.32 5.43.04.48.03.96-.02 1.44a.6.6 0 00.34.63c.42.2.86.35 1.3.42.32.05.5.18.5.36 0 .2-.22.37-.65.45-.24.04-.48.1-.72.17-.56.17-.84.42-.84.75 0 .13.05.27.15.43.52.87 1.18 1.6 1.98 2.17.5.36.91.56 1.49.71.26.07.4.21.4.42 0 .26-.28.48-.83.63-.15.04-.43.1-.82.18l-.14.03c-.23.05-.36.16-.42.34-.08.26-.2.51-.37.74-.33.44-.77.67-1.33.67-.28 0-.56-.05-.83-.16a4.3 4.3 0 00-1.12-.25c-.14 0-.29.02-.44.05a4.5 4.5 0 01-.85.55c-.6.3-1.23.45-1.9.45s-1.3-.15-1.9-.45a4.5 4.5 0 01-.85-.55c-.15-.03-.3-.05-.44-.05-.4 0-.77.09-1.12.25-.27.11-.55.16-.83.16-.56 0-1-.23-1.33-.67-.17-.23-.29-.48-.37-.74-.06-.18-.19-.29-.42-.34l-.14-.03c-.39-.08-.67-.14-.82-.18-.55-.15-.83-.37-.83-.63 0-.21.14-.35.4-.42.58-.15.99-.35 1.49-.71.8-.57 1.46-1.3 1.98-2.17.1-.16.15-.3.15-.43 0-.33-.28-.58-.84-.75a5.3 5.3 0 01-.72-.17c-.43-.08-.65-.25-.65-.45 0-.18.18-.31.5-.36.44-.07.88-.22 1.3-.42a.6.6 0 00.34-.63 8.5 8.5 0 01-.02-1.44C6.98 4.05 8.93 2 12 2h.17z" /></svg>
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
