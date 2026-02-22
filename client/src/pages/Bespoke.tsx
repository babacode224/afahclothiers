import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lightbulb, Sparkles, Ruler, Scissors, Award } from "lucide-react";

export default function Bespoke() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full px-4 md:px-20 py-8 lg:py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Exclusively Crafted</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary leading-tight md:leading-[1.1] tracking-tight">
                  Artistry in <br />Every Stitch
                </h1>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                  Bespoke Modest Couture Tailored to Your Essence. Discover the pinnacle of personalized luxury, where modesty meets master craftsmanship.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-lg transition-all w-full sm:w-auto">
                  Start Your Journey
                </Button>
                <Button variant="outline" className="border border-primary text-primary px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-primary/5 transition-all w-full sm:w-auto">
                  View Atelier
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div
                className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden"
                style={{ backgroundImage: "url('/a12.jpeg')" }}
              ></div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Guaranteed Fit</p>
                    <p className="text-xs text-slate-500">Master Tailor Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white dark:bg-slate-900/50 py-16 md:py-24 px-4 md:px-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 md:mb-20 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">The Bespoke Experience</h2>
              <p className="text-slate-500 max-w-2xl mx-auto px-2">From the first sketch to the final hand-finish, our process is a journey of collaboration and precision.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
              <div className="flex flex-col gap-6 relative group">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Discovery</h3>
                  <p className="text-slate-600 dark:text-slate-400">Initial consultation and silhouette conceptualization. We explore your vision, lifestyle, and aesthetic preferences.</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 relative group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Selection</h3>
                  <p className="text-slate-600 dark:text-slate-400">Sourcing the finest silks, laces, and embellishments from our exclusive global library of premium fabrics.</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 relative group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Ruler className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Precision</h3>
                  <p className="text-slate-600 dark:text-slate-400">Meticulous body mapping and multiple toile fittings to ensure a silhouette that fits like a second skin.</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 relative group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Scissors className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Creation</h3>
                  <p className="text-slate-600 dark:text-slate-400">Hand-finished construction by our master female artisans, taking hundreds of hours to achieve perfection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atelier Showcase */}
        <section className="py-16 md:py-24 px-4 md:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div
                className="aspect-video rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('/a9.jpeg')" }}
              ></div>
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="aspect-square rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/a13.jpeg')" }}
                ></div>
                <div
                  className="aspect-square rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/a10.jpeg')" }}
                ></div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-6 md:p-10 flex flex-col justify-center text-white">
              <Award className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Inside the Atelier</h2>
              <p className="text-white/80 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our atelier is a sanctuary for modesty and craftsmanship. Every piece is an original, designed specifically for the woman who wears it. We celebrate the intersection of heritage techniques and contemporary modest silhouettes.
              </p>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                  <span className="font-bold text-2xl">01</span>
                  <span className="font-medium">Hand-applied beadwork</span>
                </div>
                <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                  <span className="font-bold text-2xl">02</span>
                  <span className="font-medium">Heritage silk lining</span>
                </div>
                <div className="flex items-center gap-4 pb-4">
                  <span className="font-bold text-2xl">03</span>
                  <span className="font-medium">Female-led craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="bg-primary/5 py-16 md:py-24 px-4 md:px-20">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-16 shadow-xl border border-slate-100">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">Commission Your Couture</h2>
              <p className="text-slate-500 text-sm md:text-base px-2">Share your vision with us. Our design team will contact you within 48 hours to schedule your initial consultation.</p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Full Name</label>
                <input className="w-full h-12 rounded-lg border-slate-300 bg-background-light px-4 focus:ring-primary focus:border-primary" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input className="w-full h-12 rounded-lg border-slate-300 bg-background-light px-4 focus:ring-primary focus:border-primary" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Occasion Date</label>
                <input className="w-full h-12 rounded-lg border-slate-300 bg-background-light px-4 focus:ring-primary focus:border-primary" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Desired Silhouette</label>
                <select className="w-full h-12 rounded-lg border-slate-300 bg-background-light px-4 focus:ring-primary focus:border-primary">
                  <option>A-Line Gown</option>
                  <option>Royal Kaftan</option>
                  <option>Modern Abaya</option>
                  <option>Tailored Suit</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-primary">Fabric & Design Preferences</label>
                <textarea className="w-full rounded-lg border-slate-300 bg-background-light px-4 py-3 focus:ring-primary focus:border-primary" placeholder="Describe your dream garment..." rows={4}></textarea>
              </div>
              <div className="sm:col-span-2 mt-2">
                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded-lg shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all" type="submit">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
