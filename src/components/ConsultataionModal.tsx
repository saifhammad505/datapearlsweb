import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-secondary w-full max-w-lg rounded-xl p-8 shadow-xl relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Book Your Free Consultation
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! (Connect to email API later)");
            onClose();
          }}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              required
              className="w-full mt-1 p-3 rounded-lg border bg-background"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              className="w-full mt-1 p-3 rounded-lg border bg-background"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              className="w-full mt-1 p-3 rounded-lg border bg-background"
              placeholder="+92 300 0000000"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={3}
              className="w-full mt-1 p-3 rounded-lg border bg-background"
              placeholder="Tell us briefly what you need..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-primary/90"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
