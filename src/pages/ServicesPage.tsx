import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Crown,
  BarChart3,
  Database,
  TrendingUp,
  Brain,
  Workflow,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Managed Business Intelligence",
    description:
      "Your outsourced BI department — delivering everything from data warehousing to dashboards, analysis, and ongoing support. Get enterprise-grade BI without hiring a full team.",
    link: "/services/BIaaS",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.4)",
    flagship: true,
  },
  {
    icon: BarChart3,
    title: "Decision-Ready Dashboards",
    description:
      "Purpose-built dashboards designed around leadership decisions — providing immediate clarity on performance, risks, and priorities. Interactive, real-time, and actionable.",
    link: "/services/BIDashboards",
    gradient: "from-violet-500 to-purple-500",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: Database,
    title: "Data Foundation & Warehousing",
    description:
      "Build robust data pipelines, unified data warehouses, and scalable architectures. A centralized, governed data foundation ensuring every team works from a single source of truth.",
    link: "/services/DataEngineering",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: TrendingUp,
    title: "Performance & Operations Analytics",
    description:
      "Turn raw data into clear insights, root-cause explanations, and data-backed strategic actions. Deep operational and financial analysis to uncover inefficiencies.",
    link: "/services/DataAnalytics",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  {
    icon: Brain,
    title: "Advanced Decision Intelligence",
    description:
      "Advanced decision systems powered by machine learning — enabling predictive planning, risk prevention, anomaly detection, and intelligent automation at scale.",
    link: "/services/advanced-intelligence",
    gradient: "from-indigo-500 to-blue-500",
    glow: "rgba(99, 102, 241, 0.4)",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate manual, repetitive processes to save time, reduce errors, and increase efficiency. Python scripts, Power Automate flows, and API integrations.",
    link: "/services/WorkflowAutomation",
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244, 63, 94, 0.4)",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive suite of data analytics services to transform your data landscape
              and empower intelligent business decisions across your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={service.link} className="block h-full group">
                    <div className="relative h-full p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-slate-600/80 transition-all duration-300 overflow-hidden">
                      {/* Glow effect */}
                      <div
                        className="absolute -inset-0.5 rounded-3xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-60"
                        style={{
                          background: `radial-gradient(circle, ${service.glow}, transparent 70%)`,
                        }}
                      />

                      {/* Top gradient line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      {/* Flagship badge */}
                      {service.flagship && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                            <Crown className="w-3 h-3" />
                            Flagship
                          </span>
                        </div>
                      )}

                      <div className="relative space-y-5">
                        {/* Icon */}
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}
                        >
                          <div className="w-full h-full rounded-2xl bg-slate-900/90 flex items-center justify-center group-hover:bg-slate-900/70 transition-colors">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-400 leading-relaxed">
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;