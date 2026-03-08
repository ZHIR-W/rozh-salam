import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { galleryPhotos } from "@/data/content";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { t } = useLanguage();

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + galleryPhotos.length) % galleryPhotos.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % galleryPhotos.length : null));

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">{t("gallery.label")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 text-center">{t("gallery.title")}</h1>
          </ScrollReveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                <div
                  className="break-inside-avoid cursor-pointer group overflow-hidden"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={photo}
                    alt={`Gallery photo ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 end-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <button className="absolute start-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={40} />
            </button>
            <button className="absolute end-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors" onClick={(e) => { e.stopPropagation(); next(); }}>
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={galleryPhotos[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
