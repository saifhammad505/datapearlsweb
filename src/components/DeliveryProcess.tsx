import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Headphones, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategic Alignment",
    description:
      "Align business goals, KPIs, and decision needs by reviewing systems, data sources, and reporting gaps.",
    icon: Search,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "Design scalable data models, architecture, dashboards, and workflows aligned with industry best practices.",
    icon: PenTool,
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    number: "03",
    title: "Build & Deliver",
    description:
      "Develop dashboards, pipelines, automations, and data models with a strong focus on accuracy and performance.",
    icon: Code,
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    number: "04",
    title: "Enablement & Optimization",
    description:
      "Training, documentation, performance tuning, and continuous optimization to drive adoption and long-term value.",
    icon: Headphones,
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

const DeliveryProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_50%)]" />
      
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
            <span className="text-sm text-slate-300 tracking-wide">How We Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Delivery
              </span>
              <span className="absolute -inset-1 bg-cyan-500/20 blur-xl -z-10" />
            </span>{" "}
            Process
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            A simple, structured approach that turns data into decisions — fast, scalable, and reliable.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
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
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-violet-500/30 opacity-0 blur-lg transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : ''
                  }`}
                />
                
                <div className="relative h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-slate-600/50">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <span className="text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} border ${step.borderColor} transition-all duration-300 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-50 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Connector Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight className="w-6 h-6 text-slate-600" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-400">Continuous improvement & iteration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
