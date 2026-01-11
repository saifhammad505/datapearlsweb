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
  Sparkles,
  Zap,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardIllustration from "@/assets/BISaasPage.png";

const capabilities = [
  {
    icon: Database,
    title: "Data Foundation & Warehousing",
    description: "Centralized, governed data infrastructure serving as a single source of truth.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Gauge,
    title: "KPI Framework & Governance",
    description: "Standardized metrics aligned with leadership priorities.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: LineChart,
    title: "Executive & Operational Dashboards",
    description: "Decision-ready views focused on what matters most.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Shield,
    title: "Data Quality & Security",
    description: "Continuous monitoring for accuracy, reliability, and control.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support & Enhancements",
    description: "Proactive improvements aligned with evolving business needs.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: BarChart3,
    title: "Strategic Insights & Advisory",
    description: "Regular insight sessions connecting data to outcomes.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
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
      
      {/* PREMIUM HERO */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.08),transparent_50%)]" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" 
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Flagship Service
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
                Managed Business
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
                Your Dedicated BI & Analytics Function
              </p>

              <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
                We operate as your internal analytics function — owning data,
                dashboards, KPIs, and insights — so leadership always makes decisions
                with confidence, not assumptions.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Database className="w-3.5 h-3.5 inline mr-2" />
                  Data Warehousing
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <BarChart3 className="w-3.5 h-3.5 inline mr-2" />
                  Executive Dashboards
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Settings className="w-3.5 h-3.5 inline mr-2" />
                  Ongoing Management
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationDialog>
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0 px-8 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ConsultationDialog>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-800 hover:text-white h-14 px-8 text-lg"
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* RIGHT: IMAGE with Premium Effects */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-[60px] rounded-full scale-90" />
              
              {/* Image Container with Glass Effect */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-4 shadow-2xl">
                <img
                  src={dashboardIllustration}
                  alt="Business Intelligence Dashboard"
                  className="relative w-full rounded-2xl"
                />
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">60-80%</p>
                      <p className="text-sm text-slate-400">Cost Savings</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT THIS IS - Premium Glass Cards */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Managed Business{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Intelligence
              </span>{" "}
              Means
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="group backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white text-lg leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-slate-950 to-secondary/5" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need for enterprise-grade analytics, delivered as a service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${cap.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{cap.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT COLUMN */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                A Smarter Way to Run{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Analytics
                </span>
              </motion.h2>

              <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
                Managed Business Intelligence is built for leaders who want
                enterprise-grade analytics without the cost, delay, and risk of
                building an internal BI team.
              </p>

              {/* Premium Engagement Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 mb-10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <div className="relative">
                  <div className="text-sm text-primary font-semibold mb-2 tracking-wide uppercase">
                    Engagement Model
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Monthly Retainer Partnership
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    3–6 month minimum. Designed for sustained impact, not short-term delivery.
                  </p>
                </div>
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
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-slate-200 leading-relaxed">{item}</span>
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
                className="text-2xl md:text-3xl font-bold mb-10 text-white"
              >
                Why This Model{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                    className="group relative backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-3xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-slate-950 to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industries We{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <ind.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-sm text-slate-400">{ind.example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What You{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Receive
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:border-primary/30 transition-all"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-slate-950 to-secondary/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready for a Dedicated{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Analytics Partner?
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Let's discuss how Managed BI can transform decision-making in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationDialog>
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground border-0 px-10 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-800 hover:text-white h-14 px-10 text-lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedBI;
