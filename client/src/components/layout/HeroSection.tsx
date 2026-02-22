import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BRAND_TAGLINE } from "@/lib/constants";

/**
 * Hero Section Component
 * Design: Full-width hero with background image, overlay, and centered text with CTA
 * This will be used on the homepage to create an immersive first impression
 */
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: string;
}

export default function HeroSection({
  title = "Afah Clothiers",
  subtitle = BRAND_TAGLINE,
  backgroundImage,
  ctaText = "Discover the Collection",
  ctaLink = "/shop",
  height = "h-screen",
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg" style={{fontFamily: "Playfair Display, serif"}}>
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-md font-light">
          {subtitle}
        </p>
        <Link href={ctaLink}>
          <a className="no-underline">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
}
