import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-display font-semibold text-foreground">
                DataPearls
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Decision intelligence for leaders who need clarity, confidence, and control over their data.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/managed-bi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Managed Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/dashboards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Decision-Ready Dashboards
                </Link>
              </li>
              <li>
                <Link to="/services/data-foundation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Foundation
                </Link>
              </li>
              <li>
                <Link to="/services/advanced-intelligence" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Advanced Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to transform your decision-making?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Book a Consultation →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DataPearls. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Decision Intelligence for Modern Leaders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
