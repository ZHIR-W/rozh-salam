import { siteConfig } from "@/data/content";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => (
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
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
