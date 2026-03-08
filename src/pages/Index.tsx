import { Link } from "react-router-dom";
import { Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig, aboutText, videos, shows, pressQuotes } from "@/data/content";
import Layout from "@/components/Layout";

const Index = () => {
  const featuredVideos = videos.slice(0, 3);
  const featuredShows = shows.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/photos/IMG_3184.JPG)" }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-8xl tracking-[0.15em] text-foreground mb-4">
              {siteConfig.name.toUpperCase()}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-10">
              {siteConfig.tagline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="tracking-[0.15em] uppercase text-xs px-8">
                <Link to="/videos"><Play size={16} className="mr-2" />Watch Reel</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="tracking-[0.15em] uppercase text-xs px-8 border-foreground/30 text-foreground hover:bg-foreground/10">
                <Link to="/booking"><Calendar size={16} className="mr-2" />Book Now</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src="/photos/IMG_4156.JPG" alt="Rozh Salam portrait" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">About</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">The Performer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{aboutText.short}</p>
            <p className="text-muted-foreground leading-relaxed">{aboutText.long}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Videos</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredVideos.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 0.15}>
                <Link to="/videos" className="group block">
                  <div className="relative aspect-video overflow-hidden mb-3">
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={40} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-primary uppercase tracking-wider">{v.category}</p>
                  <p className="text-foreground font-medium">{v.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="tracking-[0.15em] uppercase text-xs border-foreground/30 text-foreground hover:bg-foreground/10">
                <Link to="/videos">View All Videos</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Signature</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Shows & Acts</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredShows.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.15}>
                <Link to="/shows" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-3">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-foreground font-serif text-lg">{s.title}</p>
                      <p className="text-muted-foreground text-sm mt-1">{s.shortDesc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="tracking-[0.15em] uppercase text-xs border-foreground/30 text-foreground hover:bg-foreground/10">
                <Link to="/shows">View All Shows</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Press</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">What They Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {pressQuotes.map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <blockquote className="border-l-2 border-primary pl-6">
                  <p className="text-foreground font-serif text-lg italic mb-2">"{q.quote}"</p>
                  <cite className="text-muted-foreground text-sm not-italic">— {q.source}</cite>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Make Your Event Unforgettable</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Available for private events, corporate functions, weddings, and television appearances worldwide.
            </p>
            <Button asChild size="lg" className="tracking-[0.15em] uppercase text-xs px-10">
              <Link to="/booking"><Calendar size={16} className="mr-2" />Book Rozh Salam</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
