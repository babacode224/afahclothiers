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
  // Distribute all local pictures into 6 columns for the vertical/horizontal grid
  const numCols = 6;
  const cols: string[][] = Array.from({length: numCols}, () => []);
  localPictures.forEach((pic, index) => {
    cols[index % numCols].push(pic);
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
      <section className="relative min-h-[100svh] md:h-[90vh] w-full overflow-hidden bg-black flex flex-col md:flex-row pb-8 md:pb-0">
        {/* Left Column - 60% */}
        <div className="w-full md:w-[60%] flex-1 md:h-full flex flex-col justify-center items-center px-6 py-12 md:py-0 pt-20 md:px-16 lg:px-24 z-10 relative bg-black">
          <div className="max-w-xl space-y-6 flex flex-col items-center text-center">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold leading-[1.1] tracking-tight">
              The Art of Modesty
            </h1>
            <p className="text-white text-base md:text-xl font-sans font-light leading-relaxed max-w-md">
              Timeless elegance redefined. Fusing modern architectural silhouettes with centuries of traditional heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto justify-center">
              <Link href="/collections">
                <Button className="w-full sm:w-auto bg-white hover:bg-slate-200 text-black px-8 md:px-10 py-6 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  EXPLORE COLLECTION →
                </Button>
              </Link>
              <Button
                className="w-full sm:w-auto border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 md:px-10 py-6 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full backdrop-blur-sm transition-all duration-300"
                variant="outline"
              >
                BOOK ATELIER
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - 40% (Masonry Diagonal Infinity Scroll) */}
        <div className="w-full md:w-[40%] h-[50vh] md:h-full relative overflow-hidden bg-black flex border-t border-white/10 md:border-t-0 md:border-l group">
          {/* Gradient Overlays for smooth blending edges */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-30" />
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-30" />
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slideDiagonalX {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            @keyframes slideDiagonalY {
              from { transform: translateY(-50%); }
              to { transform: translateY(0); }
            }
            .scrolling-wrapper-x {
              display: flex;
              width: max-content;
              gap: 0;
              animation: slideDiagonalX 40s linear infinite;
              will-change: transform;
            }
            .scrolling-wrapper-y {
              display: flex;
              flex-direction: column;
              gap: 0;
              animation: slideDiagonalY 40s linear infinite;
              will-change: transform;
            }
            .group:hover .scrolling-wrapper-x,
            .group:hover .scrolling-wrapper-y {
              animation-play-state: paused;
            }
          `}} />

          {/* X-axis Wrapper */}
          <div className="scrolling-wrapper-x items-start">
            {/* Duplicate the array of columns to scroll horizontally seamlessly */}
            {[0, 1].map((xSet) => (
              <div key={`xSet-${xSet}`} className="flex flex-row gap-4 pr-4">
                {cols.map((colImages, colIndex) => (
                  /* Y-axis Wrapper per column */
                  <div key={`col-${colIndex}`} className="scrolling-wrapper-y w-32 md:w-48 lg:w-56">
                    {/* Duplicate the array of images to scroll vertically seamlessly */}
                    {[0, 1].map((ySet) => (
                      <div key={`ySet-${ySet}`} className="flex flex-col gap-4 pb-4">
                        {colImages.map((img, imgIdx) => (
                          <div key={`img-${imgIdx}`} className="w-full bg-slate-900 rounded-lg overflow-hidden border-4 border-white shadow-xl shadow-black hover:scale-105 transition-transform duration-300">
                            <img src={img} alt="Gallery Image" className="w-full h-auto object-cover block" loading="lazy" decoding="async" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
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
                    loading="lazy"
                    decoding="async"
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
