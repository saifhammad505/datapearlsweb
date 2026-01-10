import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Managed Business Intelligence", href: "/services/managed-bi", highlight: true },
  { name: "Decision-Ready Dashboards", href: "/services/dashboards" },
  { name: "Data Foundation & Warehousing", href: "/services/data-foundation" },
  { name: "Performance & Operations Analytics", href: "/services/performance-analytics" },
  { name: "Advanced Decision Intelligence", href: "/services/advanced-intelligence" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <nav className="relative container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
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
            <span className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
              DataPearls
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-4 w-72"
                      >
                        <div className="glass-card p-2 shadow-xl">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                                service.highlight
                                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                              }`}
                            >
                              {service.name}
                              {service.highlight && (
                                <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                  Flagship
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
