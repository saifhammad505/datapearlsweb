import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Crown, BarChart3, Database, TrendingUp, Brain } from "lucide-react";
import Logo from "@/assets/logo/Lockup-LightblueIcon and Text.svg";
import ConsultationDialog from "./ConsultationDialog";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Crown,
    title: "Managed Business Intelligence",
    description: "Your dedicated BI & analytics function",
    link: "/services/BIaaS",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Decision-Ready Dashboards",
    description: "Purpose-built dashboards for leadership",
    link: "/services/BIDashboards",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Data Foundation & Warehousing",
    description: "Centralized, governed data foundation",
    link: "/services/DataEngineering",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Performance & Operations Analytics",
    description: "Deep operational and financial analysis",
    link: "/services/DataAnalytics",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Advanced Decision Intelligence",
    description: "Predictive planning & risk detection",
    link: "/services/advanced-intelligence",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsServicesOpen(false);
    if (isServicesOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isServicesOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    }
  };

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state && (location.state as { scrollTo?: string }).scrollTo) {
      const sectionId = (location.state as { scrollTo: string }).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-primary/5 border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <motion.img
              src={Logo}
              alt="DataPearls Logo"
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 relative group rounded-lg hover:bg-slate-800/50"
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="flex items-center gap-1 px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800/50"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-primary/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={index}
                            to={service.link}
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/70 transition-all duration-200"
                          >
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} p-[1px] flex-shrink-0`}
                            >
                              <div className="w-full h-full rounded-lg bg-slate-900/80 flex items-center justify-center group-hover:bg-slate-900/50 transition-colors">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                                {service.title}
                              </h4>
                              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick("/#portfolio")}
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 relative group rounded-lg hover:bg-slate-800/50"
            >
              Portfolio
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </button>

            <Link
              to="/about"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 relative group rounded-lg hover:bg-slate-800/50"
            >
              About
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 relative group rounded-lg hover:bg-slate-800/50"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>

            <div className="pl-4">
              <ConsultationDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-medium px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  Get Started
                </Button>
              </ConsultationDialog>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="space-y-2 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50">
                <Link
                  to="/"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={index}
                              to={service.link}
                              className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm">{service.title}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => handleNavClick("/#portfolio")}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  Portfolio
                </button>

                <Link
                  to="/about"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-2">
                  <ConsultationDialog>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90"
                    >
                      Get Started
                    </Button>
                  </ConsultationDialog>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;