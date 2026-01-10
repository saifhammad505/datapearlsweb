import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import {
  BarChart3,
  Database,
  Shield,
  Gauge,
  LineChart,
  HeadphonesIcon,
  ArrowRight,
  Check,
  Building2,
  ShoppingCart,
  Heart,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardIllustration from "@/assets/BISaasPage.png"

const capabilities = [
  {
    icon: Database,
    title: "Data Foundation & Warehousing",
    description: "Centralized, governed data infrastructure serving as a single source of truth.",
  },
  {
    icon: Gauge,
    title: "KPI Framework & Governance",
    description: "Standardized metrics aligned with leadership priorities.",
  },
  {
    icon: LineChart,
    title: "Executive & Operational Dashboards",
    description: "Decision-ready views focused on what matters most.",
  },
  {
    icon: Shield,
    title: "Data Quality & Security",
    description: "Continuous monitoring for accuracy, reliability, and control.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support & Enhancements",
    description: "Proactive improvements aligned with evolving business needs.",
  },
  {
    icon: BarChart3,
    title: "Strategic Insights & Advisory",
    description: "Regular insight sessions connecting data to outcomes.",
  },
];

const impacts = [
  "Faster, more confident decisions",
  "Elimination of conflicting numbers",
  "Reduced manual reporting effort",
  "Improved operational visibility",
  "Analytics that scale with growth",
];

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    example: "Patient flow and capacity optimization.",
  },
  {
    icon: Building2,
    name: "Operations & Logistics",
    example: "Service levels, throughput, and delivery performance.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    example: "Inventory planning and customer behavior insights.",
  },
  {
    icon: Briefcase,
    name: "Finance",
    example: "Cash flow visibility and risk monitoring.",
  },
];

const deliverables = [
  "Managed data warehouse",
  "Enterprise dashboards",
  "KPI definitions & governance",
  "Monthly insights review",
  "Automated refresh & monitoring",
];

const ManagedBI = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
  <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />

  <div className="container relative mx-auto px-6">
    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT: TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-slate-300">Flagship Service</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Managed Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Intelligence
          </span>
        </h1>

        <p className="text-xl text-slate-300 mb-4">
          Your Dedicated BI & Analytics Function
        </p>

        <p className="text-lg text-slate-400 max-w-3xl mb-10 leading-relaxed">
          We operate as your internal analytics function — owning data,
          dashboards, KPIs, and insights — so leadership always makes decisions
          with confidence, not assumptions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <ConsultationDialog>
                <Button size="lg" className="group bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white border-0 px-8 py-6 text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
        
        </div>
      </motion.div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative hidden md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-3xl rounded-full" />
        <img
          src={dashboardIllustration}
          alt="Dashboards Illustration"
          className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
        />
      </motion.div>

    </div>
  </div>
</section>


      {/* WHAT THIS IS */}
<section className="py-28 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />

  <div className="container mx-auto px-6 relative z-10 max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        What Managed Business{" "}
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Intelligence
        </span>{" "}
        Means
      </h2>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
        This is not a one-time project. Managed BI means continuous ownership
        of analytics delivery, reliability, and improvement.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "One accountable BI partner",
        "Standardized KPIs across the organization",
        "Always-on analytics",
        "Continuous insight, not static dashboards",
      ].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30">
              <Check className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-slate-300 text-lg leading-relaxed">
              {item}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


   
{/* ENGAGEMENT MODEL */}
<section className="py-28 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-cyan-950/20 to-violet-950/30" />

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT COLUMN */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-6"
        >
          A Smarter Way to Run{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Analytics
          </span>
        </motion.h2>

        <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
          Managed Business Intelligence is built for leaders who want
          enterprise-grade analytics without the cost, delay, and risk of
          building an internal BI team.
        </p>

        {/* Engagement Card */}
        <motion.div
          whileHover={{ y: -6 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 hover:border-white/20 transition-all"
        >
          <div className="text-sm text-violet-300 mb-2 tracking-wide">
            Engagement Model
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Monthly Retainer Partnership
          </h3>
          <p className="text-slate-400 leading-relaxed">
            3–6 month minimum. Designed for sustained impact, not short-term delivery.
          </p>
        </motion.div>

        {/* Operating Model List */}
        <ul className="space-y-5">
          {[
            "Dedicated BI capacity aligned to your business priorities",
            "Monthly leadership alignment on KPIs, risks, and opportunities",
            "Continuous delivery instead of stop–start projects",
            "Proactive issue detection before problems reach leadership",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30">
                <Check className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-slate-300 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-10"
        >
          Why This Model{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Outperforms Hiring
          </span>
        </motion.h3>

        <div className="space-y-6">

          {[
            {
              title: "ROI Through Better Decisions",
              text: "BI directly impacts pricing, cost control, execution speed, and risk management. Even small improvements across these areas typically generate returns far exceeding the monthly BI investment.",
            },
            {
              title: "10× Cost Efficiency",
              text: "An in-house BI team typically costs $500k–$800k annually before benefits, tools, and overhead. DataPearls delivers broader capability at a fraction of that cost.",
            },
            {
              title: "Zero Hiring Friction",
              text: "No recruitment cycles, onboarding delays, or attrition risk. Leadership works with one accountable BI partner focused on outcomes — not headcount.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-24 text-center bg-slate-900/30">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready for a Dedicated Analytics Partner?
        </h2>
        <p className="text-lg text-slate-400 mb-10">
          Let’s discuss how Managed BI can transform decision-making.
        </p>
        <ConsultationDialog>
                <Button size="lg" className="group bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white border-0 px-8 py-6 text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
      </section>
      <Footer />
    </div>
  );
};

export default ManagedBI;
