import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookAppointmentModal from "@/components/BookAppointmentModal";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Bespoke from "@/pages/Bespoke";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

/**
 * App Component
 * Design Philosophy: Stitch Design - Navy Blue (#010052), Gold (#E4C580), Manrope font
 * All pages wrapped with Header and Footer for consistent branding
 */
function Router({ isBookAppointmentOpen, setIsBookAppointmentOpen }: { isBookAppointmentOpen: boolean; setIsBookAppointmentOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onBookAppointment={() => setIsBookAppointmentOpen(true)} />
      <main className="flex-grow">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/shop"} component={Shop} />
          <Route path={"/services"} component={Services} />
          <Route path={"/bespoke"} component={Bespoke} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/about"} component={About} />
          <Route path={"/blog"} component={Blog} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {isBookAppointmentOpen && (
        <BookAppointmentModal onClose={() => setIsBookAppointmentOpen(false)} />
      )}
    </div>
  );
}

function App() {
  const [isBookAppointmentOpen, setIsBookAppointmentOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router isBookAppointmentOpen={isBookAppointmentOpen} setIsBookAppointmentOpen={setIsBookAppointmentOpen} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
