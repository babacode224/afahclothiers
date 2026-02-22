import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, ShieldCheck, Zap, Award, Users, Leaf } from "lucide-react";

/**
 * About Page
 * Design: Editorial layout with rich storytelling
 * Showcases Aisha Hamzah's journey and brand philosophy
 */
export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            A journey of elegance, cultural pride, and the art of modest fashion
          </p>
        </div>
      </section>

      {/* About Aisha Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-lg aspect-square overflow-hidden shadow-xl">
              <img
                src="/a1.jpeg"
                alt="Aisha Hamzah Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Meet Aisha Hamzah
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am Aisha Hamzah, Creative Director of Afah Clothiers. As a Nigerian Muslim woman, I have always been passionate about creating beautiful, high-quality modest wear that celebrates the contemporary African woman's identity, elegance, and confidence.
                </p>
                <p>
                  My journey began with a simple observation: there was a significant gap in the fashion industry for modest, elegant clothing that didn't compromise on style, quality, or cultural authenticity. Too many women felt forced to choose between their personal values and their desire to express themselves through fashion.
                </p>
                <p>
                  With a deep appreciation for African heritage, Islamic principles, and modern design aesthetics, I founded Afah Clothiers to bridge this gap. Every piece we create is a testament to the belief that modesty and elegance are not mutually exclusive—they are, in fact, the perfect complement to one another.
                </p>
                <p>
                  My mission is to empower women across Africa and beyond to feel confident, comfortable, and absolutely beautiful in their own skin, without ever compromising their personal or religious standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
              At Afah Clothiers, our mission is to create elegant, high-quality modest dresses that make the contemporary African woman feel confident, comfortable, and beautiful without compromising her personal or religious standards. We believe that every woman deserves fashion that celebrates her values, respects her choices, and elevates her presence.
            </p>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Through meticulous craftsmanship, thoughtful design, and an unwavering commitment to excellence, we craft pieces that tell stories of heritage, pride, and modern sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Our vision is to become a leading modest fashion brand known for timeless designs, exceptional craftsmanship, and inspiring women across Africa and beyond to express themselves confidently through modest styles. We aspire to be the go-to destination for women who refuse to compromise between their values and their style.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We envision a world where modest fashion is celebrated as a powerful form of self-expression, where cultural heritage and modern design coexist beautifully, and where every woman feels seen, valued, and empowered by the clothes she wears.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Elegance */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Elegance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true elegance transcends trends. Every piece we create is designed to be timeless, sophisticated, and effortlessly beautiful.
              </p>
            </div>

            {/* Authenticity */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Authenticity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate African heritage and cultural identity. Our designs honor traditional aesthetics while embracing contemporary sensibilities.
              </p>
            </div>

            {/* Empowerment */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Empowerment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower women to express themselves confidently, honoring their values while celebrating their unique beauty and individuality.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence is non-negotiable. We use premium fabrics, meticulous craftsmanship, and rigorous quality control in every piece.
              </p>
            </div>

            {/* Inclusivity */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Inclusivity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We celebrate diversity and welcome women from all backgrounds, faiths, and cultures who share our vision of elegant, modest fashion.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-8 rounded-lg border border-border flex flex-col items-center text-center hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                Sustainability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to ethical practices, responsible sourcing, and sustainable production methods that respect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Join the Afah Community
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our collections and experience the elegance of modest fashion that celebrates who you are
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Explore Collections
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
