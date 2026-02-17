import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { siteConfig, aboutText, pressQuotes } from "@/data/content";

const headshots = ["/photos/IMG_3184.JPG", "/photos/DSC_3136.JPG", "/photos/DSC_3132.JPG"];

const Press = () => (
  <Layout>
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Media</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12 text-center">Press & Media Kit</h1>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-4">Biography</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Short Bio:</strong> {aboutText.short}</p>
              <p><strong className="text-foreground">Extended Bio:</strong> {aboutText.long}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Headshots */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">Headshots</h2>
            <div className="grid grid-cols-3 gap-4">
              {headshots.map((src, i) => (
                <a key={i} href={src} download className="group relative overflow-hidden">
                  <img src={src} alt={`${siteConfig.name} headshot ${i + 1}`} className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={24} className="text-primary" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Press Quotes */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">Press Quotes</h2>
            <div className="space-y-6">
              {pressQuotes.map((q, i) => (
                <blockquote key={i} className="border-l-2 border-primary pl-6">
                  <p className="text-foreground font-serif text-lg italic mb-1">"{q.quote}"</p>
                  <cite className="text-muted-foreground text-sm not-italic">— {q.source}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Media Kit Download */}
        <ScrollReveal>
          <div className="text-center border border-border p-12">
            <h2 className="font-serif text-2xl text-foreground mb-4">Download Media Kit</h2>
            <p className="text-muted-foreground mb-6">High-res photos, logos, bio text, and technical rider.</p>
            <Button size="lg" className="tracking-[0.15em] uppercase text-xs px-8">
              <Download size={16} className="mr-2" /> Download PDF
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Press;
