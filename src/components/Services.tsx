import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Crown,
  TrendingUp,
  Brain,
  LineChart,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Managed Business Intelligence",
    description:
      "Your dedicated BI & analytics function — ensuring leadership always has a clear, trusted view of performance and priorities.",
    link: "/services/BiaaS",
    gradient: "from-cyan-500 to-blue-500",
    glow: "cyan",
    flagship: true,
  },
  {
    icon: BarChart3,
    title: "Decision-Ready Dashboards",
    description:
      "Purpose-built dashboards designed around leadership decisions — providing immediate clarity on performance, risks, and priorities.",
    link: "/services/BIDashboards",
    gradient: "from-violet-500 to-purple-500",
    glow: "violet",
    flagship: false,
  },
  {
    icon: Database,
    title: "Data Foundation & Warehousing",
    description:
      "A centralized, governed data foundation that ensures every team works from a single, trusted source of truth.",
    link: "/services/DataEngineering",
    gradient: "from-emerald-500 to-teal-500",
    glow: "emerald",
    flagship: false,
  },
  {
    icon: TrendingUp,
    title: "Performance & Operations Analytics",
    description:
      "Deep operational and financial analysis to uncover inefficiencies, cost leakage, and execution bottlenecks.",
    link: "/services/DataAnalytics",
    gradient: "from-amber-500 to-orange-500",
    glow: "amber",
    flagship: false,
  },
  {
    icon: Brain,
    title: "Advanced Decision Intelligence",
    description:
      "Advanced decision systems that enable proactive planning, risk prevention, and intelligent automation at scale.",
    link: "/services/advanced-intelligence",
    gradient: "from-indigo-500 to-blue-500",
    glow: "indigo",
    flagship: false,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate manual, repetitive processes to save time, reduce errors, and increase efficiency across your organization.",
    link: "/services/WorkflowAutomation",
    gradient: "from-rose-500 to-pink-500",
    glow: "rose",
    flagship: false,
  },
];



const glowColors: Record<string, string> = {
  cyan: "rgba(6, 182, 212, 0.4)",
  violet: "rgba(139, 92, 246, 0.4)",
  emerald: "rgba(16, 185, 129, 0.4)",
  amber: "rgba(245, 158, 11, 0.4)",
  rose: "rgba(244, 63, 94, 0.4)",
  indigo: "rgba(99, 102, 241, 0.4)",
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-300 tracking-wide">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400">
                Core Services
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-xl -z-10" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive suite of services to transform your data landscape and
            empower intelligent business decisions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link key={index} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative h-full"
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl blur-xl transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${glowColors[service.glow]}, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                  
                  <div className="relative h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-slate-600/80">
                    {/* Top gradient line */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    {/* Flagship badge */}
                    {service.flagship && (
  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                    <Crown className="w-3 h-3" />
      Flagship Service
    </span>
  </div>
)}

                    
                    {/* Corner accent */}
                    <div 
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative space-y-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px]`}
                      >
                        <div className="w-full h-full rounded-xl bg-slate-900/90 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </motion.div>

                      {/* Title with arrow */}
                      <div className="flex items-center justify-between pt-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                          {service.title}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-5 h-5 text-slate-400" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Bottom link indicator */}
                      <div className="pt-2">
                        <span className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          Learn more →
                        </span>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
