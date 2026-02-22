import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Stitch Design
 * Navy Blue (#010052) with Gold (#E4C580) accents
 * Manrope font, sticky navigation with search and icons
 */
export default function Header({ onBookAppointment }: { onBookAppointment: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
            <img src="/aclogo.jpeg" alt="Afah Logo" className="h-10 md:h-16 object-contain rounded-md" />
            <h1 className="text-primary text-base sm:text-lg md:text-2xl font-extrabold tracking-widest uppercase">Afah Clothiers</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/shop">
            <div className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer">
              Collections
            </div>
          </Link>
          <Link href="/bespoke">
            <div className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer">
              Bespoke
            </div>
          </Link>
          <Link href="/about">
            <div className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer">
              Philosophy
            </div>
          </Link>
          <Link href="/gallery">
            <div className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer">
              Gallery
            </div>
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Premium Shopping Cart */}
          <button className="relative p-2 hover:text-accent transition-colors group">
            <svg className="w-6 h-6 text-primary group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-accent text-primary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Book Appointment Button */}
          <Button
            onClick={onBookAppointment}
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all"
          >
            Book Appointment
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/shop">
              <div
                className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </div>
            </Link>
            <Link href="/bespoke">
              <div
                className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Bespoke
              </div>
            </Link>
            <Link href="/about">
              <div
                className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Philosophy
              </div>
            </Link>
            <Link href="/gallery">
              <div
                className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors cursor-pointer py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </div>
            </Link>
            <Button
              onClick={() => {
                onBookAppointment();
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all mt-4"
            >
              Book Appointment
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
