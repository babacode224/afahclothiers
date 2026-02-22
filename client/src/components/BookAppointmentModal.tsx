import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * BookAppointmentModal Component
 * Stitch Design - Modal form for booking appointments
 */
export default function BookAppointmentModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sessionDate: "",
    selectedEtiquette: "",
    fabricPreferences: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for booking an appointment! We will contact you soon.");
    setFormData({ fullName: "", email: "", sessionDate: "", selectedEtiquette: "", fabricPreferences: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Commission Your Couture</h2>
          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-primary transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <p className="text-slate-600 text-sm leading-relaxed">
            Share your vision with us. Our design team will contact you within 24 hours to schedule your initial consultation.
          </p>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Session Date */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Preferred Session Date
            </label>
            <input
              type="date"
              name="sessionDate"
              value={formData.sessionDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          {/* Etiquette Selection */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Selected Etiquette
            </label>
            <select
              name="selectedEtiquette"
              value={formData.selectedEtiquette}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            >
              <option value="">Select an option</option>
              <option value="abaya">Abaya</option>
              <option value="kaftan">Kaftan</option>
              <option value="modest-suit">Modest Suit</option>
              <option value="gown">Evening Gown</option>
              <option value="bridal">Bridal</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Fabric Preferences */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Fabric & Design Preferences
            </label>
            <textarea
              name="fabricPreferences"
              value={formData.fabricPreferences}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              placeholder="Describe your dream garment, fabric preferences, colors, and any special requirements..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all"
          >
            Submit Inquiry
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By submitting this form, you agree to be contacted by our design team to discuss your bespoke commission.
          </p>
        </form>
      </div>
    </div>
  );
}
