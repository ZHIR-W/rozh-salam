import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { videos, videoCategories } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageContext";

const categoryKeyMap: Record<string, string> = {
  All: "videos.cat.all",
  Street: "videos.cat.street",
  Stage: "videos.cat.stage",
  Mentalism: "videos.cat.mentalism",
  TV: "videos.cat.tv",
  Shorts: "videos.cat.shorts",
  Interview: "videos.cat.interview",
};

const Videos = () => {
  const [filter, setFilter] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { t } = useLanguage();

  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);
  const featured = videos.find((v) => v.featured);

  useEffect(() => {
    const isTV = filter === "TV";
    const title = isTV
      ? "TV Appearances — Rozh Salam | Magician & Mentalist on Television"
      : "Videos — Rozh Salam | Stage, Street, TV & Mentalism";
    const description = isTV
      ? "Watch Rozh Salam's television appearances and TV specials — cinematic close-up magic and mentalism broadcast across Kurdistan and the Middle East."
      : "Watch Rozh Salam perform cinematic close-up magic and mentalism — stage shows, street magic, TV appearances, interviews, and shorts.";
    const url = `${window.location.origin}/videos`;
    const ogImage =
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/079aa1e7-658f-4bd3-9bf4-6dc91c5988d6/id-preview-8c985af9--2d01a5f8-9ce0-4f85-b04b-437eaa30cf51.lovable.app-1771338032942.png";

    document.title = title;

    const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "video.other");
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [filter]);

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">{t("videos.label")}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 text-center">{t("videos.title")}</h1>
          </ScrollReveal>

          {/* Featured Reel */}
          {featured && (
            <ScrollReveal>
              <div
                className="relative aspect-video mb-16 cursor-pointer group overflow-hidden"
                onClick={() => setActiveVideo(featured.embedUrl)}
              >
                <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ms-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 start-6">
                  <p className="text-xs text-primary uppercase tracking-wider">{t("videos.featured")}</p>
                  <p className="text-foreground font-serif text-2xl">{featured.title}</p>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {videoCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                    filter === c
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {t(categoryKeyMap[c] || c)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 0.1}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo(v.embedUrl)}
                >
                  <div className="relative aspect-video overflow-hidden mb-3">
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={40} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-primary uppercase tracking-wider">{v.category}</p>
                  <p className="text-foreground font-medium">{v.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center p-6" onClick={() => setActiveVideo(null)}>
          <button className="absolute top-6 end-6 text-foreground hover:text-primary transition-colors" onClick={() => setActiveVideo(null)}>
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe src={activeVideo} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen title="Video" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Videos;
