import { useState } from "react";
import { Mail, Phone, Instagram, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";
import { siteConfig } from "@/data/content";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", eventType: "", date: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Booking Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCity: ${form.city}\nEvent: ${form.eventType}\nDate: ${form.date}\nBudget: ${form.budget}\n\n${form.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24 px-6 min-h-[60vh] flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center max-w-md mx-auto">
              <CheckCircle size={48} className="text-primary mx-auto mb-6" />
              <h2 className="font-serif text-3xl text-foreground mb-4">Thank You</h2>
              <p className="text-muted-foreground">Your email client should have opened with your booking details. If not, please email us directly at {siteConfig.email}.</p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6 tracking-[0.15em] uppercase text-xs border-foreground/30 text-foreground hover:bg-foreground/10">
                Send Another Inquiry
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 text-center">Contact</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-center">Book Rozh Salam</h1>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Available for private events, corporate functions, weddings, and television appearances worldwide.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                    <Input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                    <Input placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                    <Input placeholder="Country / City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                    <Select onValueChange={(v) => setForm({ ...form, eventType: v })}>
                      <SelectTrigger className="bg-secondary border-border text-foreground">
                        <SelectValue placeholder="Event Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Private Event", "Corporate", "Wedding", "Theatre", "Television", "Brand Activation", "Other"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input placeholder="Preferred Date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <Select onValueChange={(v) => setForm({ ...form, budget: v })}>
                    <SelectTrigger className="bg-secondary border-border text-foreground">
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Discuss"].map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Tell us about your event..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                  <Button type="submit" size="lg" className="w-full tracking-[0.15em] uppercase text-xs">
                    Send Inquiry
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Direct Contact</p>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-3">
                      <Mail size={18} className="text-primary" /> {siteConfig.email}
                    </a>
                    <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-3">
                      <Phone size={18} className="text-primary" /> {siteConfig.whatsapp}
                    </a>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Instagram size={18} className="text-primary" /> @rozhsalam
                    </a>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Response Time</p>
                    <p className="text-muted-foreground text-sm">We typically respond within 24–48 hours.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
