import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Gallery Page - Stitch Design
 * Masonry layout with all 13 product images and filter buttons
 */
export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const galleryItems = [
    { id: 1, image: "/a1.jpeg", category: "abayas", title: "Midnight Silk Abaya" },
    { id: 2, image: "/a2.jpeg", category: "evening", title: "Evening Couture" },
    { id: 3, image: "/a3.jpeg", category: "kaftans", title: "Embroidered Kaftan" },
    { id: 4, image: "/a4.jpeg", category: "gowns", title: "Champagne Gown" },
    { id: 5, image: "/a5.jpeg", category: "abayas", title: "Cloud Grey Abaya" },
    { id: 6, image: "/a6.jpeg", category: "suits", title: "Executive Suit" },
    { id: 7, image: "/a7.jpeg", category: "accessories", title: "Emerald Hijab" },
    { id: 8, image: "/a8.jpeg", category: "abayas", title: "Ivory Lace Abaya" },
    { id: 9, image: "/a9.jpeg", category: "kaftans", title: "Burgundy Kaftan" },
    { id: 10, image: "/a10.jpeg", category: "dresses", title: "Blush Pink Dress" },
    { id: 11, image: "/a11.jpeg", category: "gowns", title: "Teal Embroidered Gown" },
    { id: 12, image: "/a12.jpeg", category: "abayas", title: "Black Minimalist Abaya" },
    { id: 13, image: "/a13.jpeg", category: "premium", title: "Premium Collection" },
  ];

  const filters = ["All Visions", "Abayas", "Evening Wear", "Kaftans", "Gowns", "Suits", "Accessories"];

  const filteredItems = selectedFilter === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => {
        const filterMap: { [key: string]: string[] } = {
          "Abayas": ["abayas"],
          "Evening Wear": ["evening", "gowns"],
          "Kaftans": ["kaftans"],
          "Gowns": ["gowns"],
          "Suits": ["suits"],
          "Accessories": ["accessories"],
        };
        return filterMap[selectedFilter]?.includes(item.category) || false;
      });

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="py-16 px-6 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block mb-4">
            Editorial Showcase
          </span>
          <h1 className="text-5xl font-bold text-primary mb-6">The Editorial Gallery</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Discover our curated gallery featuring luxury silhouettes, intricate hand-beaded embroidery, and the finest silks from our latest high-fashion collections. All 13 pieces showcasing the art of modesty.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => setSelectedFilter("all")}
            className={`px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-full transition-all ${
              selectedFilter === "all"
                ? "bg-primary text-white border-primary"
                : "border-primary text-primary hover:bg-primary/10 bg-transparent"
            }`}
          >
            All Visions
          </Button>
          {filters.slice(1).map((filter) => (
            <Button
              key={filter}
              variant="outline"
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-full transition-all ${
                selectedFilter === filter
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary/10 bg-transparent"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid - Masonry Layout */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  idx === 1 || idx === 4 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden bg-slate-100 ${idx === 1 || idx === 4 ? "h-96" : "h-64"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg w-full">
                      <h3 className="text-white font-bold text-sm">{item.title}</h3>
                      <p className="text-white/80 text-xs capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Inspired by Our Collection?</h2>
          <p className="text-slate-200 text-lg mb-8">
            Explore our full range or book a consultation to create your perfect bespoke piece.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
              Shop Now
            </Button>
            <Button className="border border-white/30 hover:border-white text-white px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
