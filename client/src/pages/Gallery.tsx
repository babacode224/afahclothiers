import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Dynamically import all images from the Pictures folder
const localPicturesRaw = import.meta.glob("../../../Pictures/*.{jpeg,jpg,png,webp,avif}", { eager: true });
const localPictures = Object.values(localPicturesRaw).map((mod: any) => mod.default as string);

/**
 * Gallery Page - Stitch Design
 * Masonry layout featuring all product images and filter buttons
 */
export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const baseGalleryItems = [
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
    { id: 14, image: "/pic11.jpeg", category: "abayas", title: "Desert Rose Abaya" },
    { id: 15, image: "/pic12.jpeg", category: "evening", title: "Sapphire Evening Wear" },
    { id: 18, image: "/pic16.jpeg", category: "suits", title: "Onyx Tailored Suit" },
    { id: 19, image: "/pic17.jpeg", category: "accessories", title: "Pearl Chiffon Hijab" },
    { id: 20, image: "/pic18.jpeg", category: "abayas", title: "Olive Draped Abaya" },
    { id: 21, image: "/pic19.jpeg", category: "evening", title: "Amethyst Evening Dress" },
    { id: 23, image: "/pic21.jpeg", category: "gowns", title: "Emerald Lace Gown" },
    { id: 24, image: "/pic22.jpeg", category: "premium", title: "Signature Platinum Look" },
  ];

  // Merge the base gallery items with newly discovered pictures from the folder.
  // We use the file name to avoid adding duplicates.
  const baseImageNames = baseGalleryItems.map(item => item.image.split("/").pop());
  const newPictures = localPictures.filter(pic => {
    const picName = pic.split("/").pop();
    return picName && !baseImageNames.includes(picName);
  });

  const categories = ["abayas", "evening", "gowns", "suits", "premium", "kaftans"];
  
  const additionalItems = newPictures.map((pic, idx) => ({
    id: 100 + idx,
    image: pic,
    category: categories[idx % categories.length],
    title: `Afah Exclusive Vol. ${idx + 1}`
  }));

  const galleryItems = [...baseGalleryItems, ...additionalItems];

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
            Discover our curated gallery featuring luxury silhouettes, intricate hand-beaded embroidery, and the finest silks from our latest high-fashion collections. Over 20 pieces showcasing the art of modesty.
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
      <section className="py-16 px-6 bg-[#f8f9fa]">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .gallery-item {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            break-inside: avoid;
            margin-bottom: 1.5rem;
          }
        `}} />

        <div className="max-w-[1400px] mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
                style={{ animationDelay: `${(idx % 12) * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                    <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</p>
                    <h3 className="text-white font-serif text-lg leading-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500 font-serif text-xl">No extraordinary pieces found in this category.</p>
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
