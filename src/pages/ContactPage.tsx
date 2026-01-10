import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@datapearls.com",
    link: "mailto:contact@datapearls.com",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+1 (555) 123-4567",
    link: "https://wa.me/15551234567",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote-First, Global",
    link: null,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    link: null,
    gradient: "from-amber-500 to-orange-500",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your data into actionable insights? 
              We'd love to hear from you and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                    <p className="text-slate-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-slate-800/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-slate-800/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-300">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-slate-800/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">
                      How can we help?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your data challenges or goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-slate-800/50 border-slate-700 focus:border-primary text-white placeholder:text-slate-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Other Ways to Reach Us
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Prefer a different channel? No problem. Reach out through any of
                  these methods and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-primary/30 transition-all"
                        >
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">{item.title}</p>
                            <p className="text-lg text-white font-medium group-hover:text-primary transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/50">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">{item.title}</p>
                            <p className="text-lg text-white font-medium">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-3">
                  Need a Quick Response?
                </h3>
                <p className="text-slate-400 mb-5">
                  Book a free 30-minute strategy call and let's discuss your data needs directly.
                </p>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Schedule a Call →
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;