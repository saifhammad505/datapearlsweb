// PredictiveAnalytics Page Component
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
  FlaskConical,
  Sparkles,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/PredictiveAnalysisPage.png";

const PredictiveAnalytics = () => {
  const features = [
    {
      title: "Problem Definition",
      icon: Target,
      gradient: "from-rose-500/20 to-orange-500/20",
      iconColor: "text-rose-400",
      items: [
        "Predict churn, sales, demand, risk, fraud, etc.",
        "Define target variables & business objectives",
      ],
    },
    {
      title: "Data Preparation",
      icon: FlaskConical,
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
      items: [
        "Feature engineering",
        "Missing value handling",
        "Outlier treatment",
      ],
    },
    {
      title: "Model Development",
      icon: Brain,
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      items: [
        "Classification, regression, clustering",
        "Random Forest, XGBoost, LightGBM, SVM",
        "Hyperparameter tuning",
      ],
    },
    {
      title: "Model Explainability",
      icon: Lightbulb,
      gradient: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400",
      items: [
        "SHAP values",
        "Feature importance reports",
        "Scenario simulations",
      ],
    },
    {
      title: "Deployment (Optional)",
      icon: Activity,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      items: [
        "Streamlit apps",
        "FastAPI endpoints",
        "Integration with BI dashboards",
      ],
    },
  ];

  const benefits = [
    { text: "Predict future outcomes before they happen", icon: TrendingUp, gradient: "from-cyan-500 to-blue-500" },
    { text: "Reduce churn & improve customer retention", icon: Target, gradient: "from-rose-500 to-pink-500" },
    { text: "Increase revenue through forecasting", icon: LineChart, gradient: "from-emerald-500 to-teal-500" },
    { text: "Detect risks & fraud early", icon: Activity, gradient: "from-amber-500 to-orange-500" },
    { text: "Smarter resource allocation", icon: BarChart3, gradient: "from-violet-500 to-purple-500" },
  ];

  const useCases = [
    { industry: "HR", use: "Attrition prediction", icon: Brain, gradient: "from-pink-500/20 to-rose-500/20" },
    { industry: "Sales", use: "Forecasting & lead scoring", icon: TrendingUp, gradient: "from-cyan-500/20 to-blue-500/20" },
    { industry: "Healthcare", use: "Disease risk prediction", icon: Activity, gradient: "from-emerald-500/20 to-teal-500/20" },
    { industry: "Retail", use: "Demand forecasting", icon: LineChart, gradient: "from-amber-500/20 to-yellow-500/20" },
    { industry: "Finance", use: "Fraud detection", icon: Target, gradient: "from-violet-500/20 to-purple-500/20" },
  ];

  const deliverables = [
    { text: "Trained ML model", icon: Brain, gradient: "from-cyan-500 to-blue-500" },
    { text: "Insight report & what-if analysis", icon: Lightbulb, gradient: "from-amber-500 to-yellow-500" },
    { text: "Deployment-ready ML app", icon: Activity, gradient: "from-emerald-500 to-teal-500" },
    { text: "Executive presentation", icon: BarChart3, gradient: "from-violet-500 to-purple-500" },
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
                <span className="text-sm text-primary font-medium">Machine Learning Solutions</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Predictive{" "}
                <span className="bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Leverage machine learning to predict future outcomes and enable proactive,
                data-driven decision-making across your organization.
              </p>

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
                alt="Predictive Analytics Illustration"
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
              End-to-end machine learning solutions from problem definition to deployment
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
                  <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-300">
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

        <div className="container relative mx-auto px-6 max-w-5xl">
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

          <div className="grid md:grid-cols-2 gap-6">
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
                  <span className="text-xl text-slate-300">{item.text}</span>
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

export default PredictiveAnalytics;
