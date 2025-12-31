import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, AlertTriangle, CheckCircle2 } from "lucide-react";

const items = [
  {
    problem: {
      title: "Fragmented Data",
      description:
        "Critical data lives across multiple systems, making unified reporting slow and inconsistent.",
    },
    solution: {
      title: "Unified Data Platform",
      description:
        "A centralized, integrated data environment delivering a single source of truth for the entire organisation.",
    },
  },
  {
    problem: {
      title: "Manual Reporting",
      description:
        "Teams waste hours maintaining spreadsheets, increasing errors and delaying insights.",
    },
    solution: {
      title: "Automated Insights",
      description:
        "Automated workflows deliver accurate reports instantly, eliminating manual effort entirely.",
    },
  },
  {
    problem: {
      title: "Delayed KPIs",
      description:
        "Leadership receives outdated KPIs, resulting in reactive instead of proactive decisions.",
    },
    solution: {
      title: "Real-Time Dashboards",
      description:
        "Live KPI monitoring ensures decisions are timely, informed, and aligned with business performance.",
    },
  },
  {
    problem: {
      title: "Inefficient Workflows",
      description:
        "Bottlenecks are hard to detect, leading to missed opportunities and slow execution.",
    },
    solution: {
      title: "Insight-Driven Automation",
      description:
        "Automated triggers notify teams when KPIs move unexpectedly, unlocking fast corrective action.",
    },
  },
  {
    problem: {
      title: "No Standardization",
      description:
        "Different teams measure performance differently, creating reporting conflicts and misalignment.",
    },
    solution: {
      title: "Data Quality & Governance",
      description:
        "Standardized KPI definitions and governed data ensure consistent, trusted reporting across all teams.",
    },
  },
  {
    problem: {
      title: "Surface-Level Dashboards",
      description:
        "Dashboards exist, but insights don't translate into meaningful actions.",
    },
    solution: {
      title: "Actionable Intelligence",
      description:
        "Guided insights and automated recommendations help teams understand exactly what to do next.",
    },
  },
];

const ProblemSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="problemsolution" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]" />
      
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
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-300 tracking-wide">Our Approach</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforming{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Problems
              </span>
              <span className="absolute -inset-1 bg-red-500/20 blur-xl -z-10" />
            </span>{" "}
            Into{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Solutions
              </span>
              <span className="absolute -inset-1 bg-cyan-500/20 blur-xl -z-10" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            We decode your challenges and turn them into scalable, data-driven outcomes.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/50 to-violet-500/50 opacity-0 blur-lg transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}
              />
              
              <div className="relative h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-slate-600/50">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Problem Section */}
                <div className="relative space-y-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                      {item.problem.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-[52px]">
                    {item.problem.description}
                  </p>
                </div>

                {/* Animated Connector */}
                <div className="relative flex justify-center py-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-cyan-500 rounded-full blur-md opacity-50" />
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-10 h-10 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center"
                    >
                      <ArrowDown className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="relative space-y-3 mt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      {item.solution.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-[52px]">
                    {item.solution.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
