import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Blog Page
 * Design: Editorial layout showcasing articles about fashion, culture, and empowerment
 */
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Modest Fashion: Elegance Without Compromise",
      excerpt: "Discover how modest fashion has evolved to become a powerful form of self-expression and cultural pride.",
      date: "February 15, 2026",
      author: "Aisha Hamzah",
      category: "Fashion",
      image: "/a1.jpeg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Celebrating African Heritage Through Contemporary Design",
      excerpt: "Explore how Afah Clothiers blends traditional African aesthetics with modern fashion sensibilities.",
      date: "February 10, 2026",
      author: "Aisha Hamzah",
      category: "Culture",
      image: "/a2.jpeg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Empowering Women Through Fashion Choices",
      excerpt: "How choosing modest wear can be a powerful statement of personal values and cultural identity.",
      date: "February 5, 2026",
      author: "Aisha Hamzah",
      category: "Empowerment",
      image: "/a3.jpeg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Craftsmanship Behind Every Piece",
      excerpt: "An inside look at our meticulous design and production process that ensures quality in every garment.",
      date: "January 30, 2026",
      author: "Aisha Hamzah",
      category: "Craftsmanship",
      image: "/a5.jpeg",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Sustainable Fashion: Our Commitment to the Planet",
      excerpt: "Learn about our ethical practices and sustainable production methods that respect our environment.",
      date: "January 25, 2026",
      author: "Aisha Hamzah",
      category: "Sustainability",
      image: "/a6.jpeg",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Styling Tips: Creating Your Perfect Modest Wardrobe",
      excerpt: "Practical advice on building a versatile wardrobe with Afah Clothiers pieces that work together seamlessly.",
      date: "January 20, 2026",
      author: "Aisha Hamzah",
      category: "Style",
      image: "/a7.jpeg",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Fashion", "Culture", "Empowerment", "Craftsmanship", "Sustainability", "Style"];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Stories, insights, and inspiration from the world of modest fashion
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Featured Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {blogPosts[0].category}
                </span>
                <span className="text-muted-foreground text-sm">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold">{blogPosts[0].author}</p>
                  <p>{blogPosts[0].date}</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-border">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "All" ? "default" : "outline"}
                className={cat === "All" ? "bg-primary hover:bg-primary/90" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden bg-muted aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary line-clamp-2" style={{ fontFamily: "Playfair Display, serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      <p className="font-semibold">{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Read →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest stories, style tips, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Inspired by Our Stories?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our collections and find the perfect piece that resonates with your style
          </p>
            <Link href="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Shop Now
              </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
