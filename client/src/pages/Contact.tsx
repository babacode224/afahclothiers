import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            We'd love to hear from you. Reach out with any questions or inquiries
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📧",
                title: "Email",
                content: "hello@ahahclothiers.com",
                description: "Send us an email anytime",
              },
              {
                icon: "📱",
                title: "Phone",
                content: "+234 (0) 123 456 7890",
                description: "Call us during business hours",
              },
              {
                icon: "📍",
                title: "Location",
                content: "Lagos, Nigeria",
                description: "Visit our studio by appointment",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-muted p-8 rounded-lg border border-border text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{item.content}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center" style={{ fontFamily: "Playfair Display, serif" }}>
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+234 (0) 123 456 7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="bespoke">Bespoke Service</option>
                  <option value="bridal">Bridal Inquiry</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                Send Message
              </Button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-6">
              We typically respond within 24-48 hours. Thank you for reaching out!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does a bespoke order take?",
                a: "Bespoke orders typically take 8-12 weeks from consultation to final delivery, depending on complexity and customization.",
              },
              {
                q: "Do you offer international shipping?",
                a: "Yes, we ship internationally. Shipping costs and delivery times vary by location. Contact us for specific details.",
              },
              {
                q: "What is your return policy?",
                a: "Custom bespoke pieces are non-returnable. Ready-to-wear items can be returned within 30 days in original condition.",
              },
              {
                q: "Can I customize ready-to-wear pieces?",
                a: "Yes! We offer alterations and customizations on ready-to-wear items. Contact us to discuss your needs.",
              },
              {
                q: "What fabrics do you use?",
                a: "We use premium, high-quality fabrics sourced from reputable suppliers. We prioritize comfort, durability, and elegance.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options for bespoke orders. Contact us to discuss payment arrangements.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-3 text-primary">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              Business Hours
            </h2>

            <div className="bg-muted p-8 rounded-lg border border-border">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="font-semibold text-primary">Monday - Friday:</span>
                  <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-primary">Saturday:</span>
                  <span className="text-muted-foreground">11:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-primary">Sunday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                By appointment only. Please contact us to schedule a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
            Connect With Us
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Follow us on social media for style inspiration, behind-the-scenes content, and exclusive updates
          </p>
          <div className="flex justify-center gap-6">
            {[
              { name: "Instagram", icon: "📷" },
              { name: "Facebook", icon: "f" },
              { name: "Twitter", icon: "𝕏" },
              { name: "LinkedIn", icon: "in" },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-accent text-white flex items-center justify-center transition-colors duration-300 font-bold"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
