import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Philosophy/About Us Page
 * Hero section with product image background + About Aisha, Mission, Vision content
 */
export default function Philosophy() {
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
      {/* Hero Section with Product Image Background */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-r from-primary/60 to-transparent">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(1, 0, 82, 0.7), rgba(1, 0, 82, 0.5)), url('${allProductImages[0]}')`,
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block">
              Our Story
            </span>
            <h1 className="text-white text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Aisha Hamzah:<br />
              <span className="text-accent italic">Creative Vision</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Redefining modest fashion for the contemporary African woman through elegance, quality, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* About Aisha Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Meet the Founder
              </span>
              <h2 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Aisha Hamzah
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                My name is Aisha Hamzah, Creative Director of Afah Clothiers. I am a Nigerian Muslim woman passionate about creating beautiful, high-quality modest wear for contemporary African women, blending elegance, comfort, and cultural identity in every piece.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                For years, I searched for modest fashion that didn't compromise on style or quality. The options were limited, and most didn't celebrate the beauty of African women. That's when Afah Clothiers was born—a vision to create timeless pieces that make every woman feel confident, beautiful, and true to herself.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every design, every stitch, every fabric choice is intentional. We believe that modest fashion is not about limitation—it's about liberation. It's about celebrating who you are while honoring your values.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={allProductImages[1]}
                alt="Aisha Hamzah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src={allProductImages[2]}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Our Purpose
              </span>
              <h2 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Afah Clothiers, our mission is to create elegant, high-quality modest dresses that make the contemporary African woman feel confident, comfortable, and beautiful without compromising on personal or religious standards.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We believe that fashion should be inclusive, accessible, and empowering. Every piece we create is designed with intention—to celebrate your individuality, honor your heritage, and make you feel like the best version of yourself.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Quality Craftsmanship</h4>
                    <p className="text-sm text-slate-600">Premium fabrics and meticulous attention to detail</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Cultural Pride</h4>
                    <p className="text-sm text-slate-600">Celebrating African heritage in every design</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Empowerment</h4>
                    <p className="text-sm text-slate-600">Making women feel confident and beautiful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Our Future
              </span>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Our Vision
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                Our vision is to become a leading modest fashion brand known for timeless designs, exceptional craftsmanship, and inspiring women across Africa and beyond to express themselves confidently through modest styles.
              </p>
              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                We envision a world where modest fashion is celebrated, where quality is never compromised, and where every woman—regardless of her background—has access to beautiful, empowering pieces that make her feel like herself.
              </p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Through Afah Clothiers, we're not just creating clothes. We're creating a movement. A movement that celebrates modesty, embraces diversity, and empowers women to be authentically themselves.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={allProductImages[3]}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Elegance",
                description: "Timeless beauty in every design",
                image: allProductImages[4],
              },
              {
                title: "Quality",
                description: "Premium fabrics and craftsmanship",
                image: allProductImages[5],
              },
              {
                title: "Authenticity",
                description: "Celebrating African heritage",
                image: allProductImages[6],
              },
              {
                title: "Empowerment",
                description: "Making women feel confident",
                image: allProductImages[7],
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Gallery */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Collections</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allProductImages.slice(8, 13).map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Collection ${idx + 9}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join the Afah Circle</h2>
          <p className="text-slate-200 text-lg mb-8">
            Discover our collections and be part of a community that celebrates elegance, culture, and authenticity.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/collections">
              <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
                Explore Collections
              </Button>
            </Link>
            <Button className="border border-white/30 hover:border-white text-white px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
