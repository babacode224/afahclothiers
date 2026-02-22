import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Home Page - Stitch Design
 * Hero section with featured collections, bespoke section, and heritage showcase
 * All 13 product images displayed strategically throughout
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    "/a9.jpeg",
    "/a10.jpeg",
    "/a11.jpeg",
    "/a12.jpeg",
    "/a13.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredCollections = [
    {
      id: 1,
      name: "Midnight Silk Abaya",
      description: "Premium Silk • Relaxed Fit",
      image: "/a1.jpeg",
      price: "$249.00",
    },
    {
      id: 2,
      name: "Evening Couture",
      description: "Satin Finish • Full Coverage",
      image: "/a2.jpeg",
      price: "$420.00",
    },
    {
      id: 3,
      name: "Embroidered Forest Kaftan",
      description: "Linen Cotton • Intricate Detail",
      image: "/a3.jpeg",
      price: "$195.00",
    },
  ];

  const allProductImages = [
    "/a1.jpeg",
    "/a2.jpeg",
    "/a3.jpeg",
    "/a4.jpeg",
    "/a5.jpeg",
    "/a6.jpeg",
    "/a7.jpeg",
    "/a8.jpeg",
    "/a9.jpeg",
    "/a10.jpeg",
    "/a11.jpeg",
    "/a12.jpeg",
    "/a13.jpeg",
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Featured Image */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-primary">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Blurred background to fill empty space aesthetically */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
              style={{ backgroundImage: `url('${slide}')` }}
            />
            {/* Main image fully visible */}
            <div className="absolute inset-0 w-full h-full flex justify-end">
              <img
                src={slide}
                alt="Modest fashion piece"
                className="w-full lg:w-3/4 h-full object-contain object-right"
              />
            </div>
            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          </div>
        ))}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block">
              Established 2024
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
              The Art of <br />
              <span className="italic font-black">Modesty</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Timeless elegance redefined. Fusing modern architectural silhouettes with centuries of traditional heritage.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/collections">
                <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-all flex items-center gap-2 group cursor-pointer">
                  Explore Collection →
                </Button>
              </Link>
              <Button
                className="border border-white/30 hover:border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-lg backdrop-blur-sm transition-all cursor-pointer"
                variant="outline"
              >
                Book Atelier
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white text-2xl">
          ↓
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Featured Collections</h2>
              <p className="text-slate-600 text-sm">
                Our curated selection of premium modest wear, handpicked for contemporary African women
              </p>
            </div>
            <Link href="/collections">
              <div className="text-accent font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors cursor-pointer">
                View All Collections →
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-80 bg-slate-100">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{collection.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{collection.description}</p>
                <p className="text-sm font-bold text-primary mb-4">{collection.price}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all">
                  Place Order
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section with Image */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Exclusively Crafted
              </span>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Afah Bespoke:<br />
                <span className="text-accent">Crafted For You</span>
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                For the discerning woman seeking exclusivity. Our bespoke collection works with you to create a couture piece that's uniquely yours. From initial consultation to final fitting, we ensure every stitch reflects your vision and heritage.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Bespoke Consultation</h4>
                    <p className="text-sm text-slate-300">Personalized styling and design session</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Made to Measure</h4>
                    <p className="text-sm text-slate-300">Perfect fit tailored to your body</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Premium Fabrics</h4>
                    <p className="text-sm text-slate-300">Sourced from the finest mills worldwide</p>
                  </div>
                </div>
              </div>
              <Link href="/bespoke">
                <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
                  Book Your Consultation
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={allProductImages[4]}
                alt="Bespoke Couture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Gallery of All Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Heritage in Every Stitch</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              At Afah Clothiers, we honor the legacy of modest fashion while embracing contemporary design. Every piece tells a story of craftsmanship, cultural pride, and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">Hand Crafted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24hr</div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">Consultation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">Timeless Design</p>
            </div>
          </div>

          {/* Display all 13 product images in masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProductImages.slice(5, 13).map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Product ${idx + 6}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Additional row for remaining images */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {allProductImages.slice(0, 3).map((img, idx) => (
              <div key={`extra-${idx}`} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Product ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Product Images */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Customer Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Amina Hassan",
                role: "Fashion Entrepreneur",
                quote: "Afah Clothiers transformed how I see modest fashion. Every piece is a masterpiece.",
                image: allProductImages[1],
              },
              {
                name: "Zainab Ahmed",
                role: "Creative Director",
                quote: "The quality and attention to detail is unmatched. I feel confident and beautiful.",
                image: allProductImages[3],
              },
              {
                name: "Fatima Okafor",
                role: "Business Executive",
                quote: "Finally, elegant modest wear that doesn't compromise on style or comfort.",
                image: allProductImages[6],
              },
              {
                name: "Layla Ibrahim",
                role: "Artist & Designer",
                quote: "Afah celebrates African beauty and heritage in every design. Absolutely stunning.",
                image: allProductImages[9],
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-primary mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Afah Circle</h2>
          <p className="text-slate-200 text-lg mb-8">
            Join our community of modern modest women who celebrate elegance, culture, and authenticity.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
              Join Our Circle
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
