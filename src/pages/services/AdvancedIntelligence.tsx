import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Brain,
  LineChart,
  BarChart3,
  Target,
  Lightbulb,
  Activity,
  TrendingUp,
  Shield,
  AlertTriangle,
  Sparkles,
  Zap,
  Bot,
  FileText,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/PredictiveAnalysisPage.png";

const AdvancedIntelligence = () => {
  const features = [
    {
      title: "Predictive Planning & Forecasting",
      icon: TrendingUp,
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      items: [
        "Demand forecasting for inventory and resource planning",
        "Sales & revenue projections with confidence intervals",
        "Workforce planning & capacity predictions",
        "Scenario modeling for strategic decisions",
      ],
    },
    {
      title: "Risk & Anomaly Detection",
      icon: Shield,
      gradient: "from-rose-500/20 to-orange-500/20",
      iconColor: "text-rose-400",
      items: [
        "Fraud detection & prevention systems",
        "Anomaly detection in financial transactions",
        "Operational risk identification & alerting",
        "Quality control & defect prediction",
      ],
    },
    {
      title: "Automated Intelligence & Reporting",
      icon: Bot,
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
      items: [
        "AI-generated narrative insights & summaries",
        "Automated root cause analysis reports",
        "Smart alerting with contextual recommendations",
        "Self-updating dashboards with predictive KPIs",
      ],
    },
    {
      title: "Machine Learning Models",
      icon: Brain,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      items: [
        "Classification, regression & clustering models",
        "Customer churn & lifetime value prediction",
        "Lead scoring & conversion optimization",
        "Custom ML solutions for domain-specific problems",
      ],
    },
    {
      title: "Model Explainability & Governance",
      icon: Lightbulb,
      gradient: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400",
      items: [
        "SHAP values & feature importance reports",
        "What-if scenario simulations",
        "Model performance monitoring & drift detection",
        "Compliance-ready documentation",
      ],
    },
  ];

  const benefits = [
    { text: "Make decisions before problems occur — not after", icon: TrendingUp, gradient: "from-cyan-500 to-blue-500" },
    { text: "Detect fraud, anomalies & risks in real-time", icon: Shield, gradient: "from-rose-500 to-pink-500" },
    { text: "Automate repetitive analysis & reporting tasks", icon: Bot, gradient: "from-violet-500 to-purple-500" },
    { text: "Improve forecast accuracy by 30-50%", icon: LineChart, gradient: "from-emerald-500 to-teal-500" },
    { text: "Enable data-driven planning across all departments", icon: BarChart3, gradient: "from-amber-500 to-orange-500" },
  ];

  const useCases = [
    { industry: "Finance", use: "Fraud detection & credit risk scoring", icon: Shield, gradient: "from-rose-500/20 to-pink-500/20" },
    { industry: "Retail", use: "Demand forecasting & inventory optimization", icon: TrendingUp, gradient: "from-cyan-500/20 to-blue-500/20" },
    { industry: "Operations", use: "Predictive maintenance & capacity planning", icon: Activity, gradient: "from-emerald-500/20 to-teal-500/20" },
    { industry: "HR", use: "Attrition prediction & workforce planning", icon: Brain, gradient: "from-violet-500/20 to-purple-500/20" },
    { industry: "Sales", use: "Lead scoring & revenue forecasting", icon: Target, gradient: "from-amber-500/20 to-yellow-500/20" },
    { industry: "Healthcare", use: "Patient risk stratification & resource planning", icon: AlertTriangle, gradient: "from-indigo-500/20 to-blue-500/20" },
  ];

  const deliverables = [
    { text: "Production-ready ML models with API endpoints", icon: Brain, gradient: "from-cyan-500 to-blue-500" },
    { text: "Automated intelligence dashboards", icon: BarChart3, gradient: "from-violet-500 to-purple-500" },
    { text: "Risk & anomaly detection systems", icon: Shield, gradient: "from-rose-500 to-pink-500" },
    { text: "Predictive insights & forecast reports", icon: TrendingUp, gradient: "from-emerald-500 to-teal-500" },
    { text: "Model explainability documentation", icon: FileText, gradient: "from-amber-500 to-yellow-500" },
    { text: "Executive presentation with ROI analysis", icon: Lightbulb, gradient: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">AI-Powered Decision Systems</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Advanced{" "}
                <span className="bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent">
                  Decision Intelligence
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Advanced decision systems that enable proactive planning, risk prevention, 
                and intelligent automation at scale — powered by machine learning.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                  <Zap className="w-3.5 h-3.5 inline mr-1.5" />
                  Predictive Planning
                </span>
                <span className="px-3 py-1.5 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                  <Shield className="w-3.5 h-3.5 inline mr-1.5" />
                  Risk Detection
                </span>
                <span className="px-3 py-1.5 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                  <Bot className="w-3.5 h-3.5 inline mr-1.5" />
                  Automated Intelligence
                </span>
              </div>

              <ConsultationDialog>
                <Button size="lg" className="text-lg px-8 py-6 group bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-3xl blur-3xl opacity-40" />
              <img
                src={dashboardIllustration}
                alt="Advanced Decision Intelligence Illustration"
                className="relative w-full max-w-lg drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Core <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              End-to-end intelligent decision systems from prediction to automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-slate-900/30 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Key <span className="text-primary">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-300 leading-relaxed self-center">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Industry <span className="text-primary">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-slate-400">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              What You <span className="text-primary">Receive</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-300">{item.text}</span>
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

export default AdvancedIntelligence;