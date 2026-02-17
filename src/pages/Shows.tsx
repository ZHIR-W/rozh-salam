import { useState } from "react";
import { X, Clock, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { shows } from "@/data/content";
import { AnimatePresence, motion } from "framer-motion";

type Show = (typeof shows)[number];

const Shows = () => {
  const [selected, setSelected] = useState<Show | null>(null);

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Signature</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 text-center">Shows & Acts</h1>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.1}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelected(s)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-3">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-foreground font-serif text-xl">{s.title}</p>
                      <p className="text-muted-foreground text-sm mt-1">{s.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <button className="fixed top-6 right-6 z-10 text-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="max-w-4xl mx-auto px-6 py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover mb-8" />
              <h2 className="font-serif text-3xl text-foreground mb-4">{selected.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{selected.longDesc}</p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  {selected.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} className="text-primary" />
                  {selected.eventTypes.join(", ")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selected.gallery.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-full aspect-video object-cover" loading="lazy" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Shows;
