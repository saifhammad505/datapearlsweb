import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Zap,
  Brain,
  LineChart,
  Workflow,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "BI-as-a-Service",
      description:
        "Your dedicated BI department — developing data warehouse, dashboards, KPIs, insights, and ongoing support without hiring a full-time team.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/biaas",
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description:
        "Turn raw data into actionable insights. Sales analysis, customer segmentation, financial forecasting, and performance optimization.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/data-analytics",
    },
    {
      icon: Database,
      title: "BI Dashboards",
      description:
        "Custom Power BI dashboards with real-time visibility. Executive-level reporting, operational KPIs, and mobile-optimized views.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/bi-dashboards",
    },
    {
      icon: Zap,
      title: "Data Engineering",
      description:
        "Build modern, automated data architectures. SQL warehouses, ETL pipelines, API integrations, and medallion architecture implementation.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/data-engineering",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate reporting and approval workflows. Python, Power Automate, WhatsApp Business API, and automated report distribution.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/workflow-automation",
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description:
        "Move from reactive to proactive with ML models. Employee churn prediction, sales forecasting, fraud detection, and risk analysis.",
      gradient: "from-primary/20 to-primary/5",
      link: "/services/predictive-analytics",
    },
  ];

  return (
    <section id="services" className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of services to transform your data landscape and
            empower intelligent business decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 cursor-pointer h-full">
                    <CardContent className="p-8 space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
