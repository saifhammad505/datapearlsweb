import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, CheckCircle2 } from "lucide-react";

// Images (update paths)
import opsImg from "@/assets/portfolio-ops.png";
import workforceImg from "@/assets/portfolio-employee-kpi.png";
import reportingHubImg from "@/assets/portfolio-reportinghub.png";

const projects = [
  {
    domain: "Enterprise BI Platforms",
    title: "Enterprise Reporting Hub",
    summary:
      "A centralized reporting portal enabling unlimited internal and external users to securely access dashboards without BI licensing constraints.",
    outcome: "£12,000 annual savings on BI licenses",
    impact: "80% increase in organizational data accessibility",
    features: [
      "Centralized analytics gateway",
      "Role-based access control (RLS)",
      "Secure external client access",
      "Automated daily refresh & monitoring",
    ],
    image: reportingHubImg,
    link: "/case-study/reporting-hub",
    accentColor: "cyan",
  },
  {
    domain: "Operations Analytics",
    title: "Real-Time Operations Dashboard",
    summary:
      "A multi-layer operational intelligence solution delivering real-time visibility into service performance, turnaround times, confirmations, and bottlenecks.",
    outcome: "Reduced manual reporting time by 40%",
    impact: "Live KPI visibility for operations and leadership teams",
    features: [
      "End-to-end operational KPI monitoring",
      "Real-time TAT, cancellations & volume tracking",
      "Segmentation by region, service & team",
      "Automated operational insights",
    ],
    image: opsImg,
    link: "/case-study/operations-dashboard",
    accentColor: "violet",
  },
  {
    domain: "Workforce Analytics",
    title: "Workforce Performance Intelligence",
    summary:
      "A standardized performance management system enabling transparent KPI tracking, staff evaluation, and productivity insights across departments.",
    outcome: "Standardized performance measurement across teams",
    impact: "Improved leadership visibility & accountability",
    features: [
      "KPI scoring engine aligned to targets",
      "Department & individual performance trends",
      "Attendance & punctuality intelligence",
      "Automated commission calculations",
    ],
    image: workforceImg,
    link: "/case-study/workforce-performance",
    accentColor: "emerald",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
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
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-slate-300 tracking-wide">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Portfolio
              </span>
              <span className="absolute -inset-1 bg-violet-500/20 blur-xl -z-10" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Explore premium analytics solutions designed to improve visibility, performance, and decision-making across organizations.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: project.accentColor === 'cyan' 
                    ? 'linear-gradient(to right, rgba(34,211,238,0.2), rgba(59,130,246,0.2))'
                    : project.accentColor === 'violet'
                    ? 'linear-gradient(to right, rgba(139,92,246,0.2), rgba(168,85,247,0.2))'
                    : 'linear-gradient(to right, rgba(52,211,153,0.2), rgba(20,184,166,0.2))'
                }}
              />
              
              <div className="relative rounded-3xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-slate-600/50">
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Domain Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border ${
                        project.accentColor === 'cyan' 
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                          : project.accentColor === 'violet'
                          ? 'bg-violet-500/10 border-violet-500/30 text-violet-300'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      }`}>
                        {project.domain}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Metrics */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 uppercase tracking-wide">Outcome</span>
                          <p className="text-sm text-slate-300 mt-0.5">{project.outcome}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/30">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex-shrink-0">
                          <Target className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 uppercase tracking-wide">Impact</span>
                          <p className="text-sm text-slate-300 mt-0.5">{project.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a 
                      href={project.link}
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link ${
                        project.accentColor === 'cyan' 
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : project.accentColor === 'violet'
                          ? 'text-violet-400 hover:text-violet-300'
                          : 'text-emerald-400 hover:text-emerald-300'
                      }`}
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  project.accentColor === 'cyan' 
                    ? 'via-cyan-500/50'
                    : project.accentColor === 'violet'
                    ? 'via-violet-500/50'
                    : 'via-emerald-500/50'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
