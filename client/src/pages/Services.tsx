import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Services Page
 * Design: Showcase the three main service offerings with detailed information
 */
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Made to Order",
      icon: "🛍️",
      description: "Curated ready-to-wear collections that celebrate contemporary African elegance.",
      details: [
        "Browse our carefully curated collections",
        "Choose from premium fabrics and colors",
        "Customizable sizing options available",
        "Quick turnaround time",
        "Affordable luxury pricing",
      ],
      features: "Perfect for those who want beautiful, ready-made pieces without the wait of custom tailoring.",
      cta: "View Collections",
      ctaLink: "/shop",
    },
    {
      id: 2,
      title: "Ready to Wear",
      icon: "👗",
      description: "Premium ready-made pieces crafted with meticulous attention to detail.",
      details: [
        "Timeless designs that transcend seasons",
        "Finest quality fabrics sourced globally",
        "Expertly tailored for comfort and elegance",
        "Available in multiple sizes",
        "Limited edition collections",
      ],
      features: "Ideal for women who appreciate quality craftsmanship and want to invest in pieces that last.",
      cta: "Shop Now",
      ctaLink: "/shop",
    },
    {
      id: 3,
      title: "Bespoke & Bridal",
      icon: "✨",
      description: "Exclusive custom creations tailored to your unique vision and measurements.",
      details: [
        "One-on-one consultation with our design team",
        "Unlimited design revisions",
        "Custom fabric selection",
        "Perfect fit guaranteed",
        "Heirloom quality craftsmanship",
      ],
      features: "For special occasions, weddings, and milestone moments—create a piece that's uniquely yours.",
      cta: "Start Your Journey",
      ctaLink: "/bespoke",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Three distinct ways to experience Afah Clothiers' elegant modest fashion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-muted rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Card */}
                <div className="p-8">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-3 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">What's Included</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <p className="text-sm text-muted-foreground italic mb-6 p-3 bg-white rounded border border-border">
                    {service.features}
                  </p>

                  {/* CTA */}
                  <Link href={service.ctaLink}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", description: "Discuss your vision, style preferences, and requirements" },
                { step: "2", title: "Design", description: "Our team creates custom designs tailored to your needs" },
                { step: "3", title: "Crafting", description: "Meticulous creation using premium materials and techniques" },
                { step: "4", title: "Delivery", description: "Perfect fit and timely delivery of your beautiful piece" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Afah */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
            Why Choose Afah Clothiers?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Exceptional Quality", description: "Premium fabrics and expert craftsmanship in every piece" },
              { title: "Cultural Pride", description: "Designs that celebrate African heritage and identity" },
              { title: "Personal Service", description: "Dedicated attention to your unique needs and preferences" },
              { title: "Timeless Elegance", description: "Pieces that transcend trends and last for years" },
              { title: "Ethical Practices", description: "Sustainable and responsible production methods" },
              { title: "Empowerment", description: "Fashion that honors your values and celebrates your beauty" },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Ready to Experience Afah?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Choose the service that fits your style and let us help you express yourself beautifully
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white hover:bg-white/90 text-accent font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
