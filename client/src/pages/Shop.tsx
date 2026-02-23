import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Collections/Shop Page - Figma "Shop - Ready to Wear" Design
 * Sidebar filters (category, size, color) + product grid with pagination
 * All 13 product images used throughout
 */
export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const allProducts = [
    {
      id: 1,
      name: "Midnight Silk Abaya",
      description: "Premium Silk • Relaxed Fit",
      image: "/a1.jpeg",
      price: "$249.00",
      category: "abayas",
      size: ["XS", "S", "M", "L", "XL"],
      color: "midnight",
      isNew: true,
    },
    {
      id: 2,
      name: "Evening Couture",
      description: "Satin Finish • Full Coverage",
      image: "/a2.jpeg",
      price: "$420.00",
      category: "gowns",
      size: ["S", "M", "L", "XL", "XXL"],
      color: "neutral",
    },
    {
      id: 3,
      name: "Embroidered Forest Kaftan",
      description: "Linen Cotton • Intricate Detail",
      image: "/a3.jpeg",
      price: "$195.00",
      category: "kaftans",
      size: ["S", "M", "L", "XL"],
      color: "forest",
    },
    {
      id: 4,
      name: "Champagne Evening Gown",
      description: "Silk Blend • Elegant Drape",
      image: "/a4.jpeg",
      price: "$385.00",
      category: "gowns",
      size: ["XS", "S", "M", "L"],
      color: "champagne",
    },
    {
      id: 5,
      name: "Cloud Grey Abaya",
      description: "Breathable Crepe • Minimalist",
      image: "/a5.jpeg",
      price: "$215.00",
      category: "abayas",
      size: ["S", "M", "L", "XL", "XXL"],
      color: "grey",
    },
    {
      id: 6,
      name: "Executive Blazing Suit",
      description: "Wool Blend • Tailored Fit",
      image: "/a6.jpeg",
      price: "$350.00",
      category: "suits",
      size: ["XS", "S", "M", "L", "XL"],
      color: "navy",
    },
    {
      id: 7,
      name: "Emerald Luxury Hijab",
      description: "Premium Silk • Soft Drape",
      image: "/a7.jpeg",
      price: "$85.00",
      category: "accessories",
      size: ["One Size"],
      color: "emerald",
    },
    {
      id: 8,
      name: "Ivory Lace Abaya",
      description: "Delicate Lace • Full Coverage",
      image: "/a8.jpeg",
      price: "$280.00",
      category: "abayas",
      size: ["S", "M", "L", "XL"],
      color: "ivory",
    },
    {
      id: 9,
      name: "Burgundy Silk Kaftan",
      description: "Premium Silk • Flowing",
      image: "/a9.jpeg",
      price: "$225.00",
      category: "kaftans",
      size: ["S", "M", "L", "XL", "XXL"],
      color: "burgundy",
    },
    {
      id: 10,
      name: "Blush Pink Dress",
      description: "Cotton Blend • Comfortable",
      image: "/a10.jpeg",
      price: "$165.00",
      category: "dresses",
      size: ["XS", "S", "M", "L"],
      color: "blush",
    },
    {
      id: 11,
      name: "Teal Embroidered Gown",
      description: "Silk • Hand-beaded",
      image: "/a11.jpeg",
      price: "$520.00",
      category: "gowns",
      size: ["S", "M", "L", "XL"],
      color: "teal",
      isNew: true,
    },
    {
      id: 12,
      name: "Black Minimalist Abaya",
      description: "Crepe • Modern Cut",
      image: "/a12.jpeg",
      price: "$189.00",
      category: "abayas",
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      color: "black",
    },
    {
      id: 13,
      name: "Premium Collection Piece",
      description: "Exclusive • Limited Edition",
      image: "/a13.jpeg",
      price: "$650.00",
      category: "premium",
      size: ["S", "M", "L"],
      color: "multi",
      isNew: true,
    },
    {
      id: 14,
      name: "Desert Rose Abaya",
      description: "Soft Crepe • Flowing Drape",
      image: "/pic11.jpeg",
      price: "$230.00",
      category: "abayas",
      size: ["S", "M", "L", "XL"],
      color: "neutral",
    },
    {
      id: 15,
      name: "Sapphire Evening Wear",
      description: "Rich Velvet • Hand-beaded",
      image: "/pic12.jpeg",
      price: "$450.00",
      category: "gowns",
      size: ["XS", "S", "M"],
      color: "navy",
      isNew: true,
    },
    {
      id: 18,
      name: "Onyx Tailored Suit",
      description: "Wool Blend • Sharp Silhouette",
      image: "/pic16.jpeg",
      price: "$340.00",
      category: "suits",
      size: ["XS", "S", "M", "L", "XL"],
      color: "black",
    },
    {
      id: 19,
      name: "Pearl Chiffon Hijab",
      description: "Premium Chiffon • Lightweight",
      image: "/pic17.jpeg",
      price: "$65.00",
      category: "accessories",
      size: ["One Size"],
      color: "neutral",
    },
    {
      id: 20,
      name: "Olive Draped Abaya",
      description: "Breathable Linen • Everyday Luxury",
      image: "/pic18.jpeg",
      price: "$195.00",
      category: "abayas",
      size: ["S", "M", "L", "XL"],
      color: "emerald",
    },
    {
      id: 21,
      name: "Amethyst Evening Dress",
      description: "Satin Finish • Flattering Cut",
      image: "/pic19.jpeg",
      price: "$310.00",
      category: "gowns",
      size: ["M", "L", "XL"],
      color: "multi",
    },
    {
      id: 23,
      name: "Emerald Lace Gown",
      description: "Intricate Lace • Full Skirt",
      image: "/pic21.jpeg",
      price: "$490.00",
      category: "gowns",
      size: ["XS", "S", "M"],
      color: "emerald",
      isNew: true,
    },
    {
      id: 24,
      name: "Signature Platinum Look",
      description: "Exclusive • Couture Finish",
      image: "/pic22.jpeg",
      price: "$580.00",
      category: "premium",
      size: ["S", "M", "L", "XL"],
      color: "grey",
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (!product.size.includes(selectedSize)) return false;
    if (selectedColor !== "all" && product.color !== selectedColor) return false;
    return true;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIdx, startIdx + itemsPerPage);

  const colors = [
    { name: "black", hex: "#000000" },
    { name: "navy", hex: "#010052" },
    { name: "grey", hex: "#808080" },
    { name: "emerald", hex: "#50C878" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-slate-200 text-sm text-slate-600">
        <span>HOME</span>
        <span className="mx-2">›</span>
        <span>SHOP</span>
        <span className="mx-2">›</span>
        <span className="text-primary font-semibold">THE MODEST COLLECTION</span>
      </div>

      {/* Page Header */}
      <section className="px-6 py-12 border-b border-slate-200">
        <h1 className="text-5xl font-bold text-primary mb-4">The Modest Collection</h1>
        <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
          Discover elegance and craftsmanship in our curated selection of premium modest attire. Every piece is designed for the modern woman who values sophistication and quality.
        </p>
      </section>

      {/* Main Content */}
      <div className="flex gap-8 px-6 py-12">
        {/* Sidebar Filters */}
        <div className="w-48 flex-shrink-0">
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Category</h3>
            <div className="space-y-3">
              {[
                { value: "all", label: "All Clothing" },
                { value: "abayas", label: "Abayas" },
                { value: "kaftans", label: "Kaftans" },
                { value: "suits", label: "Modest Suits" },
                { value: "gowns", label: "Gowns" },
              ].map((cat) => (
                <label key={cat.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat.value}
                    onChange={() => {
                      setSelectedCategory(cat.value);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-primary"
                  />
                  <span className="text-sm text-slate-700">{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-2 text-xs font-bold border rounded transition-all ${
                    selectedSize === size
                      ? "bg-primary text-white border-primary"
                      : "border-slate-300 text-slate-700 hover:border-primary"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Color Palette</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(selectedColor === color.name ? "all" : color.name);
                    setCurrentPage(1);
                  }}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name ? "border-primary scale-110" : "border-slate-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Header with Results Count and Sort */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="text-sm text-slate-600">
              Showing <span className="font-bold text-primary">{paginatedProducts.length}</span> results
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded text-sm text-slate-700 focus:outline-none focus:border-primary"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 h-80 bg-slate-100">
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded z-10">
                      New Arrival
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-primary mb-1">{product.name}</h3>
                <p className="text-xs text-slate-600 mb-3">{product.description}</p>
                <p className="text-sm font-bold text-primary mb-4">{product.price}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all">
                  Place Order
                </Button>
              </div>
            ))}
          </div>

          {/* Load More / Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-6">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
                Load More Pieces
              </Button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded font-bold transition-all ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
