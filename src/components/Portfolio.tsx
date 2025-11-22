import { Card, CardContent } from "@/components/ui/card";
import employeeKPI from "@/assets/portfolio-employee-kpi.png";
import uberAnalytics from "@/assets/portfolio-uber-analytics.png";
import salesDashboard from "@/assets/portfolio-sales-dashboard.png";
import attendanceReport from "@/assets/portfolio-attendance-report.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Operational Dashboard - Interpreter Bookings",
      description:
        "Comprehensive Power BI dashboard for high-volume interpreter bookings. Real-time Fill Rate trends, No-Show insights, TAT monitoring, and Conversion Rate tracking with automated SQL Server integration.",
      image: "/case-studies/operational-dashboard.jpg",
      tags: ["Power BI", "SQL Server", "Operations", "Real-time Analytics"],
      link: "#case-studies",
    },
    {
      title: "Monthly Campaign Performance Report",
      description:
        "Interactive multi-channel marketing analytics tracking Paid Search, Social Media, Email Marketing, and Display Ads performance with comprehensive KPIs and ROI analysis.",
      image: "/case-studies/campaign-performance.jpg",
      tags: ["Marketing Analytics", "Multi-Channel", "Performance Tracking"],
      link: "/case-studies/campaign-performance-report.html",
    },
    {
      title: "Employee Performance Dashboard",
      description:
        "Comprehensive KPI tracking system with collaboration, communication, and dependability metrics. Real-time performance monitoring and feedback analysis.",
      image: employeeKPI,
      tags: ["Power BI", "HR Analytics", "KPI Tracking"],
    },
    {
      title: "Uber Rides Analytics",
      description:
        "Advanced ride-sharing analytics with success rates, customer cancellations, and revenue analysis. Distance-based insights and vehicle type performance.",
      image: uberAnalytics,
      tags: ["Power BI", "Operations", "Revenue Analysis"],
    },
    {
      title: "Live Sales Dashboard",
      description:
        "Real-time automotive sales tracking across multiple countries and product lines. Interactive filters, trend analysis, and profit margin monitoring.",
      image: salesDashboard,
      tags: ["Power BI", "Sales Analytics", "Executive Dashboard"],
    },
    {
      title: "Attendance & Punctuality Report",
      description:
        "Workforce management dashboard tracking attendance patterns, leave types, and punctuality trends with detailed insights and recommendations.",
      image: attendanceReport,
      tags: ["Power BI", "HR Analytics", "Workforce Management"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects showcasing powerful data visualization
            and business intelligence solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link
              ? { href: project.link, ...(project.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
              : {};

            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50"
              >
                <CardWrapper {...cardProps} className={project.link ? "block" : ""}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </CardWrapper>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
