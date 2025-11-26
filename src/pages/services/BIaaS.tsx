import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database, BarChart3, Shield, Headphones, Lightbulb, TrendingUp, Activity, ShoppingCart, Building2, DollarSign, Zap, Target, Users, FileCheck , HeartPulse, ShoppingBag, Workflow, CreditCard} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import {
  CheckCircle,
  Settings,
  LineChart,
  LayoutDashboard,
  ShieldCheck,
  ClipboardCheck,
  RefreshCcw,
  Sparkles,
  Layers,
  Network,
  Cpu,
  BarChart,
} from "lucide-react";


// 1) IMPORT YOUR IMAGE
import presentationImage from "@/assets/BISaasPage.png";

const BIaaS = () => {
  // 2) DATA ARRAYS – SAFE TO KEEP HERE
 const features = [
  {
    title: "Data Platform Development",
    icon: Database,
    items: [
      "Build SQL/Cloud data warehouses",
      "Define data models, facts, dimensions",
      "Create scalable ETL/ELT pipelines",
    ],
  },
  {
    title: "Dashboard Development & Maintenance",
    icon: LayoutDashboard,
    items: [
      "Build executive, operational, financial, and departmental dashboards",
      "Maintain and enhance existing reports",
      "Standardize metrics, KPIs, and definitions",
    ],
  },
  {
    title: "Data Governance & Quality",
    icon: ShieldCheck,
    items: [
      "Apply best practices for naming conventions",
      "Data validation and continuous monitoring",
      "Implement role-based security",
    ],
  },
  {
    title: "Ongoing BI Support",
    icon: RefreshCcw,
    items: [
      "Regular enhancements & new KPIs",
      "Query optimization",
      "Monthly or weekly meetings with stakeholders",
      "Automated data refresh & issue resolution",
    ],
  },
  {
    title: "Strategic Insights & Advisory",
    icon: Sparkles,
    items: [
      "Provide monthly insights report",
      "Recommend process improvements",
      "Conduct root-cause analysis",
    ],
  },
];


  const benefits = [
    { text: "Lower BI Costs by 60–80% vs hiring a full team", icon: DollarSign },
    { text: "Always-on support from BI & Data Engineering experts", icon: Headphones },
    { text: "Consistency across KPIs → no more conflicting numbers", icon: Target },
    { text: "Faster decision making with real-time dashboards", icon: Zap },
    { text: "Future-proof analytics aligned with industry best practices", icon: TrendingUp },
  ];

  const useCases = [
  { industry: "Healthcare", use: "Patient wait-time analytics, OT utilization", icon: HeartPulse },
  { industry: "Retail", use: "Sales forecasting, customer journeys", icon: ShoppingBag },
  { industry: "Operations", use: "Staffing, SLA adherence, logistics", icon: Workflow },
  { industry: "Finance", use: "Budgeting, expense control, profitability", icon: CreditCard },
];


  const deliverables = [
  { text: "Fully managed data warehouse", icon: Database },
  { text: "Enterprise-grade dashboards", icon: LayoutDashboard },
  { text: "KPI standardization document", icon: ClipboardCheck },
  { text: "Monthly BI insights report", icon: BarChart },
  { text: "Automated workflows & refresh", icon: RefreshCcw },
];


  // 3) EVERYTHING BELOW THIS LINE IS JSX INSIDE RETURN  ✅
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BI-as-a-Service{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                (BIaaS)
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your outsourced BI department — delivering everything from data
              warehousing to dashboards, analysis, and ongoing support.
            </p>
            <ConsultationDialog>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
          </motion.div>
        </div>
      </section>

      {/* 🔥 PREMIUM IMAGE + TEXT SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-card/80 border border-border/60 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT: TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Small badge / pill */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  Fully managed BI department
                </span>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Transform your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    analytics foundation
                  </span>{" "}
                  with BI-as-a-Service
                </h2>

                <p className="text-lg text-muted-foreground">
                  We design, build, and maintain your entire BI ecosystem —
                  data platform, dashboards, KPIs, and workflows — so your
                  team always makes decisions based on real-time, reliable
                  data instead of manual spreadsheets.
                </p>

                {/* Mini-benefits list */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Single source of truth for your data",
                    "Standardized KPIs across departments",
                    "No in-house BI hiring required",
                    "Continuous improvements, not one-off builds",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <ConsultationDialog>
                  <Button size="lg" className="group mt-2">
                    Book a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ConsultationDialog>
              </motion.div>

              {/* RIGHT: IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Soft glow behind image */}
                <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-full opacity-60" />
                <img
                  src={presentationImage}
                  alt="BI-as-a-Service illustration"
                  className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-50">
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Service Features</h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            
  {features.map((feature, index) => {
    const Icon = feature.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
        </div>

        <ul className="space-y-2">
          {feature.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  })}
</motion.div>


          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 bg-primary/5 rounded-lg p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Service Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
  const Icon = benefit.icon; // extract component
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition"
    >
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-lg">{benefit.text}</span>
    </motion.div>
  );
})}
            </div>
          </motion.div>

          {/* USE CASES */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Industry Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {useCases.map((useCase, index) => {
    const Icon = useCase.icon;
    return (
      <motion.div
        key={index}
        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary">{useCase.industry}</h3>
        </div>

        <p className="text-muted-foreground">{useCase.use}</p>
      </motion.div>
    );
  })}
</div>

          </motion.div>

          {/* DELIVERABLES */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Deliverables
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
  {deliverables.map((item, index) => {
    const Icon = item.icon;
    return (
      <motion.div
        key={index}
        className="flex items-center gap-3 bg-background/50 border border-border rounded-lg p-4"
      >
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span>{item.text}</span>
      </motion.div>
    );
  })}
</div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BIaaS;
