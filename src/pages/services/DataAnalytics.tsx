import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Search,
  Database,
  LineChart,
  BarChart3,
  Workflow,
  ClipboardList,
  PieChart,
  Layers,
  TrendingUp,
  Filter,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/DataAnalysisPage.png"; // OPTIONAL (add your image)

const DataAnalytics = () => {

  /* ------------------------------------------------------------
      FEATURES WITH ICONS
  ------------------------------------------------------------ */
  const features = [
    {
      title: "Business Understanding",
      icon: Search,
      items: [
        "Identify KPIs, pain points, and decision needs",
        "Stakeholder interviews",
      ],
    },
    {
      title: "Data Collection",
      icon: Database,
      items: [
        "Pull data from SQL, Excel, CRM, ERP, APIs, and cloud systems",
      ],
    },
    {
      title: "Data Cleaning & Transformation",
      icon: Workflow,
      items: [
        "Fix missing data & inconsistencies",
        "Standardize fields & categories",
        "Transform into analysis-ready datasets",
      ],
    },
    {
      title: "Exploratory Analysis",
      icon: PieChart,
      items: [
        "Trend analysis & segmentation",
        "Cohort analysis",
        "Correlation & pattern detection",
      ],
    },
    {
      title: "Diagnostic Analysis",
      icon: LineChart,
      items: [
        "Identify root causes of performance changes",
        "Compare periods, categories, teams, products",
      ],
    },
    {
      title: "Insight Narratives",
      icon: ClipboardList,
      items: [
        "Storytelling-based insights",
        "Recommendations slide deck",
        "Executive summaries",
      ],
    },
  ];

  /* ------------------------------------------------------------
      BENEFITS WITH ICONS
  ------------------------------------------------------------ */
  const benefits = [
    { text: "Stronger decisions based on facts", icon: TrendingUp },
    { text: "Identify hidden risks & opportunities", icon: Search },
    { text: "Improve performance across teams", icon: BarChart3 },
    { text: "Reduce inefficiencies & cost leakages", icon: Filter },
    { text: "Enhance customer & operational understanding", icon: Layers },
  ];

  /* ------------------------------------------------------------
      USE CASES WITH ICONS
  ------------------------------------------------------------ */
  const useCases = [
    { industry: "Operations", use: "Identify delays, bottlenecks, excess capacity", icon: Workflow },
    { industry: "HR", use: "Attrition patterns, attendance trends", icon: PieChart },
    { industry: "Finance", use: "Variance analysis, spend optimization", icon: BarChart3 },
    { industry: "E-Commerce", use: "Funnel drop-offs, product performance", icon: LineChart },
    { industry: "Healthcare", use: "Appointment trends, service gaps", icon: Search },
  ];

  /* ------------------------------------------------------------
      DELIVERABLES WITH ICONS
  ------------------------------------------------------------ */
  const deliverables = [
    { text: "Clean, structured dataset", icon: Database },
    { text: "Analytical report (PDF/PPT)", icon: ClipboardList },
    { text: "Insight recommendations", icon: TrendingUp },
    { text: "Charts & visual summaries", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ------------------------------------------------------------
          HERO SECTION
      ------------------------------------------------------------ */}
      <section className="pt-32 pb-28 bg-gradient-to-b from-primary/5 to-background">
  <div className="container mx-auto px-6 max-w-7xl">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT — TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Data Analytics{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            (Descriptive + Diagnostic)
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
          Transform raw data into clear insights, trends, root-cause explanations, and 
          actionable strategies that drive business performance.
        </p>

        <ConsultationDialog>
          <Button size="lg" className="text-lg px-8 py-6 group">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ConsultationDialog>
      </motion.div>

      {/* RIGHT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <img
          src={dashboardIllustration}
          alt="Data Analytics Illustration"
          className="w-full max-w-lg md:max-w-xl drop-shadow-2xl"
        />
      </motion.div>

    </div>

  </div>
</section>
      {/* ------------------------------------------------------------
          PREMIUM FEATURES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center tracking-tight"
          >
            Analytics <span className="text-primary">Features</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 rounded-3xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary tracking-tight">
                      {feature.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                        <Check className="w-5 h-5 text-primary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM BENEFITS SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-primary/5">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Key <span className="text-primary">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 bg-card p-8 rounded-2xl border border-border/40 hover:shadow-lg transition"
                >
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xl leading-relaxed">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM USE CASES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Industry <span className="text-primary">Use Cases</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-14">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {useCase.industry}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {useCase.use}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM DELIVERABLES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            What You <span className="text-primary">Receive</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 bg-background p-6 rounded-2xl border border-border/40 shadow-sm"
                >
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xl">{item.text}</span>
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

export default DataAnalytics;
