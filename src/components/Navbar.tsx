import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageNames } from "@/i18n/translations";

const navLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.videos", path: "/videos" },
  { key: "nav.shows", path: "/shows" },
  { key: "nav.gallery", path: "/gallery" },
  { key: "nav.press", path: "/press" },
  { key: "nav.booking", path: "/booking" },
];

const languages: Language[] = ["en", "ku", "ar"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl tracking-[0.2em] text-foreground hover:text-primary transition-colors">
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ms-4 border-s border-border ps-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs px-2 py-1 transition-colors ${
                  language === lang
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === l.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(l.key)}
                </Link>
              ))}
              {/* Mobile language switcher */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-sm px-3 py-1 transition-colors ${
                      language === lang
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
