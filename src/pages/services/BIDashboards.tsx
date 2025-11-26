import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/ConsultationDialog";

import {
  ArrowRight,
  CheckCircle,
  Check,
  ListChecks,
  Database,
  Video,
  LayoutDashboard,
  Palette,
  BrainCircuit,
  Headphones,
  Target,
  Zap,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

import dashboardIllustration from "@/assets/BIDashboardPage.png"; // OPTIONAL (add your image)


const BIDashboards = () => {

  /* ---------------------- FEATURES ---------------------- */
  const features = [
    {
      title: "Requirement Workshops",
      icon: ListChecks,
      items: [
        "Understand KPIs, metrics, and user journeys",
        "Define success criteria for the dashboard",
      ],
    },
    {
      title: "Data Modeling",
      icon: Database,
      items: [
        "Build optimized DAX measures",
        "Create fact/dimension tables",
        "Improve refresh speed and performance",
      ],
    },
    {
      title: "Visual Design",
      icon: Palette,
      items: [
        "UI/UX best practices for BI",
        "Drill-through, bookmarks, mobile view",
        "Role-based access & security",
      ],
    },
    {
      title: "Implementation",
      icon: LayoutDashboard,
      items: [
        "Connect to SQL / APIs / Cloud / Excel",
        "Automate refresh schedules",
        "User training & detailed documentation",
      ],
    },
  ];

  /* ---------------------- BENEFITS ---------------------- */
  const benefits = [
    { text: "Instant visibility into performance", icon: Zap },
    { text: "Eliminate manual Excel reporting forever", icon: ClipboardCheck },
    { text: "Standardized KPIs across the entire business", icon: Target },
    { text: "Interactive insights (filters, drilldowns, segmentation)", icon: BrainCircuit },
    { text: "Decision-making powered by accurate, real-time data", icon: TrendingUp },
  ];

  /* ---------------------- USE CASES ---------------------- */
  const useCases = [
    { industry: "Call Centers", use: "Queue performance, agent KPIs, SLAs", icon: Headphones },
    { industry: "HR", use: "Attendance & punctuality, KPIs, headcount", icon: ListChecks },
    { industry: "Finance", use: "Revenue insights, profitability analysis", icon: BarChart3 },
    { industry: "Operations", use: "Supply chain visibility, turnaround tracking", icon: Database },
  ];

  /* ---------------------- DELIVERABLES ---------------------- */
  const deliverables = [
    { text: "Complete Power BI Dashboard", icon: LayoutDashboard },
    { text: "Documentation (KPI Dictionary + Data Model)", icon: ClipboardCheck },
    { text: "Training Video for Users", icon: Video },
    { text: "Source Files & Datasets Provided", icon: Database },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ------------------------------------------------------------
          HERO SECTION WITH OPTIONAL ILLUSTRATION
      ------------------------------------------------------------ */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Business Intelligence{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Dashboards
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Transform complex data into real-time insights.  
              We design premium Power BI dashboards for Operations, HR, Finance, Sales, and Customer Experience.
            </p>

            <ConsultationDialog>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
          </motion.div>

          {/* RIGHT: HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img
              src={dashboardIllustration}
              alt="Dashboards Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          FEATURES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-primary/5">
  <div className="container mx-auto px-6 max-w-6xl">

    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold mb-20 text-center tracking-tight"
    >
      Powerful <span className="text-primary">Features</span>
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 rounded-3xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary tracking-tight">
                {feature.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {feature.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-muted-foreground"
                >
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
          BENEFITS SECTION
      ------------------------------------------------------------ */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:shadow-lg transition"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          USE CASES
      ------------------------------------------------------------ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Industry Use Cases
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
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

        </div>
      </section>

      {/* ------------------------------------------------------------
          DELIVERABLES
      ------------------------------------------------------------ */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Deliverables
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl p-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span>{item.text}</span>
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


export default BIDashboards;
