import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Dynamically import all images from the Pictures folder
const localPicturesRaw = import.meta.glob("../../../Pictures/*.{jpeg,jpg,png,webp,avif}", { eager: true });
const localPictures = Object.values(localPicturesRaw).map((mod: any) => mod.default as string);

/**
 * Home Page - Stitch Design
 * Hero section with featured collections, bespoke section, and heritage showcase
 * All product images displayed strategically throughout
 */
export default function Home() {
  // We'll distribute the local pictures into 3 rows for the horizontal masonry effect
  const rows: string[][] = [[], [], []];
  localPictures.forEach((pic, index) => {
    rows[index % 3].push(pic);
  });


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
    {
      id: 4,
      name: "Desert Rose Abaya",
      description: "Soft Crepe • Flowing Drape",
      image: "/pic11.jpeg",
      price: "$230.00",
    },
    {
      id: 5,
      name: "Sapphire Evening Wear",
      description: "Rich Velvet • Hand-beaded",
      image: "/pic12.jpeg",
      price: "$450.00",
    }
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
    "/pic11.jpeg",
    "/pic12.jpeg",
    "/pic16.jpeg",
    "/pic17.jpeg",
    "/pic18.jpeg",
    "/pic19.jpeg",
    "/pic21.jpeg",
    "/pic22.jpeg",
  ];

  return (
    <div className="w-full">
      {/* Hero Section - 60/40 Split */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black flex flex-col md:flex-row">
        {/* Left Column - 60% */}
        <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 relative">
          <div className="max-w-xl space-y-6">
            <span className="text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm block">
              Established 2024
            </span>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold leading-[1.1] tracking-tight">
              The Art of <br />
              <span className="italic font-black">Modesty</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-md">
              Timeless elegance redefined. Fusing modern architectural silhouettes with centuries of traditional heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
              <Link href="/collections">
                <Button className="w-full sm:w-auto bg-white hover:bg-slate-200 text-black px-8 md:px-10 py-6 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer shadow-lg">
                  Explore Collection <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Button
                className="w-full sm:w-auto border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 md:px-10 py-6 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer"
                variant="outline"
              >
                Book Atelier
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - 40% (Masonry Infinity Scroll) */}
        <div className="w-full md:w-[40%] h-full relative overflow-hidden bg-black flex flex-col justify-evenly py-4 hidden sm:flex border-l border-white/10">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slideLeft {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .infinite-scroll-row {
              display: flex;
              gap: 1rem;
              width: max-content;
              animation: slideLeft 40s linear infinite;
            }
            .infinite-scroll-row:hover {
              animation-play-state: paused;
            }
            .scrolling-img-container {
              flex: 0 0 auto;
              height: 25vh;
              border-radius: 0.5rem;
              background-color: #111;
              overflow: hidden;
              border: 3px solid #fff;
              box-shadow: 0 10px 25px rgba(0,0,0,0.5);
              transition: transform 0.3s ease;
            }
            .scrolling-img-container:hover {
              transform: scale(1.05);
              z-index: 20;
            }
            .scrolling-img {
              height: 100%;
              width: auto;
              object-fit: cover;
            }
          `}} />

          {/* Render 3 horizontal scrolling rows to mimic masonry */}
          {rows.map((rowImages, rowIndex) => (
            <div key={rowIndex} className="flex relative items-center" style={{ height: "25vh", transform: `translateX(${rowIndex * -10}%)` }}>
              <div 
                className="infinite-scroll-row"
                style={{
                  animationDuration: `${35 + rowIndex * 10}s`,
                  animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse" 
                }}
              >
                {/* Duplicate the array to create seamless loop */}
                {[...rowImages, ...rowImages, ...rowImages].map((img, idx) => (
                  <div key={idx} className="scrolling-img-container">
                    <img src={img} alt="Gallery Image" className="scrolling-img" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Featured Collections</h2>
              <p className="text-slate-600 text-sm md:text-base">
                Our curated selection of premium modest wear, handpicked for contemporary African women
              </p>
            </div>
            <Link href="/collections">
              <div className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm hover:text-primary transition-colors cursor-pointer">
                View All Collections →
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs md:text-sm block mb-4">
                Exclusively Crafted
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Afah Bespoke:<br />
                <span className="text-accent">Crafted For You</span>
              </h2>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-8">
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
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden order-1 lg:order-2">
              <img
                src={allProductImages[4]}
                alt="Bespoke Couture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Gallery of All Products */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Heritage in Every Stitch</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              At Afah Clothiers, we honor the legacy of modest fashion while embracing contemporary design. Every piece tells a story of craftsmanship, cultural pride, and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="text-center bg-slate-50 p-6 rounded-lg sm:bg-transparent sm:p-0 sm:rounded-none">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-600">Hand Crafted</p>
            </div>
            <div className="text-center bg-slate-50 p-6 rounded-lg sm:bg-transparent sm:p-0 sm:rounded-none">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24hr</div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-600">Consultation</p>
            </div>
            <div className="text-center bg-slate-50 p-6 rounded-lg sm:bg-transparent sm:p-0 sm:rounded-none">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">∞</div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-600">Timeless Design</p>
            </div>
          </div>

          {/* Display a rich selection of product images in masonry grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {allProductImages.slice(3, 15).map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Product ${idx + 4}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Additional row for remaining images */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allProductImages.slice(15, 24).map((img, idx) => (
              <div key={`extra-${idx}`} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Product ${idx + 16}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Product Images */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">Customer Stories</h2>
          
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
      <section className="py-16 md:py-20 px-4 md:px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">The Afah Circle</h2>
          <p className="text-slate-200 text-base md:text-lg mb-8">
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
