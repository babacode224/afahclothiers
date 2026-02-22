/**
 * Product Data and Image URLs
 * All images hosted on CDN for optimal performance
 */

export interface Product {
  id: string;
  name: string;
  category: "made-to-order" | "ready-to-wear" | "bespoke";
  image: string;
  description: string;
  price?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Elegant Emerald Dress",
    category: "ready-to-wear",
    image: "/a1.jpeg",
    description: "A stunning ready-to-wear piece featuring rich emerald tones and sophisticated draping",
    price: "$250",
  },
  {
    id: "2",
    name: "Sapphire Collection",
    category: "ready-to-wear",
    image: "/a2.jpeg",
    description: "Premium ready-made dress with elegant sapphire blue fabric",
    price: "$280",
  },
  {
    id: "3",
    name: "Burgundy Elegance",
    category: "ready-to-wear",
    image: "/a3.jpeg",
    description: "Timeless burgundy piece perfect for any occasion",
    price: "$260",
  },
  {
    id: "4",
    name: "Bridal Masterpiece",
    category: "bespoke",
    image: "/a4.jpeg",
    description: "Exquisite custom bridal gown with intricate detailing",
    price: "Custom Quote",
  },
  {
    id: "5",
    name: "Sunset Harmony",
    category: "made-to-order",
    image: "/a5.jpeg",
    description: "Beautiful made-to-order dress with warm sunset hues",
    price: "$240",
  },
  {
    id: "6",
    name: "Forest Green Dress",
    category: "ready-to-wear",
    image: "/a6.jpeg",
    description: "Classic forest green ready-to-wear with elegant silhouette",
    price: "$255",
  },
  {
    id: "7",
    name: "Midnight Blue",
    category: "ready-to-wear",
    image: "/a7.jpeg",
    description: "Sophisticated midnight blue piece for evening elegance",
    price: "$270",
  },
  {
    id: "8",
    name: "Charcoal Sophistication",
    category: "ready-to-wear",
    image: "/a8.jpeg",
    description: "Versatile charcoal dress suitable for any season",
    price: "$245",
  },
  {
    id: "9",
    name: "Teal Treasure",
    category: "made-to-order",
    image: "/a9.jpeg",
    description: "Stunning teal made-to-order creation with custom fit",
    price: "$265",
  },
  {
    id: "10",
    name: "Pearl White Elegance",
    category: "bespoke",
    image: "/a10.jpeg",
    description: "Luxurious custom pearl white gown for special occasions",
    price: "Custom Quote",
  },
  {
    id: "11",
    name: "Plum Perfection",
    category: "ready-to-wear",
    image: "/a11.jpeg",
    description: "Rich plum-colored ready-to-wear with perfect draping",
    price: "$260",
  },
  {
    id: "12",
    name: "Blush Romance",
    category: "made-to-order",
    image: "/a12.jpeg",
    description: "Delicate blush-toned made-to-order dress for romantic occasions",
    price: "$235",
  },
  {
    id: "13",
    name: "Gold Luxury",
    category: "bespoke",
    image: "/a13.jpeg",
    description: "Premium custom gold-accented gown with luxurious fabrics",
    price: "Custom Quote",
  },
];

export const COLLECTIONS = [
  {
    id: "ready-to-wear",
    name: "Ready to Wear",
    description: "Premium ready-made pieces crafted with meticulous attention to detail",
    count: 8,
  },
  {
    id: "made-to-order",
    name: "Made to Order",
    description: "Curated collections with customizable sizing options",
    count: 3,
  },
  {
    id: "bespoke",
    name: "Bespoke & Bridal",
    description: "Exclusive custom creations tailored to your unique vision",
    count: 2,
  },
];
