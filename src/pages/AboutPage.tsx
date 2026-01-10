import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import aboutImg from "@/assets/Digital presentation-amico (1).svg";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, ensuring alignment with your business goals.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in data quality, accuracy, and deliverables.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We constantly evolve our methods and technologies to stay ahead of the curve.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const capabilities = [
  "Enterprise BI dashboards & KPI systems",
  "Automated data pipelines & reporting workflows",
  "Predictive analytics & ML-driven insights",
  "Modern data stack: SQL, Python, Azure, Fabric, Redshift, BigQuery",
  "Data governance & quality management",
  "Strategic analytics advisory",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <span className="text-sm text-primary font-medium">About Us</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  DataPearls
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed">
                DataPearls is your strategic BI and analytics partner — delivering
                real-time visibility, automated reporting, and enterprise-grade
                insights that empower leaders to make confident, data-driven decisions.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed">
                We specialize in modern data platforms, dashboards, predictive models,
                and workflow automation built on top of SQL, Python, Power BI, Azure,
                and cloud data warehouses. Our solutions unify scattered data, reduce
                manual reporting, and unlock operational efficiency at scale.
              </p>

              <ConsultationDialog>
                <Button size="lg" className="text-lg px-8 py-6 group bg-primary hover:bg-primary/90">
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur-3xl opacity-50" />
              <img
                src={aboutImg}
                alt="About DataPearls"
                className="relative w-full rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To democratize business intelligence and advanced analytics, making 
                data-driven decision-making accessible to organizations of all sizes 
                through expert-led solutions and cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the trusted analytics partner for forward-thinking organizations, 
                enabling them to harness the full power of their data to drive innovation, 
                efficiency, and sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex gap-6 p-8 rounded-3xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-primary/5 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              What We <span className="text-primary">Deliver</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800/50"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;