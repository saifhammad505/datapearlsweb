import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import biimage from "@/assets/PredictiveAnalysisPage.png";

const Hero = () => {
  return (
        
          <section className="relative min-h-[90vh] bg-background overflow-hidden">
  
  {/* 1. Absolute dark base (insurance layer) */}
  <div className="absolute inset-0 bg-slate-950" />

  {/* 2. Atmospheric radial */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />

  {/* 3. Accent glows */}
  <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />

  {/* 4. Texture */}
  <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

  {/* 5. Content */}
  <div className="relative z-10 container ..."/>


      <div className="container relative mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — CONTENT */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Decision Intelligence Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="block text-white">
                See Clearly.
              </span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">
                Act Decisively.
              </span>
              <span className="block text-slate-200">
                Scale Confidently.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
            >
              DataPearls operates as your decision intelligence function — giving
              leadership absolute clarity, control, and confidence to drive growth
              in complex environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
              >
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-accent px-8 h-12"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-secondary/25 blur-3xl rounded-full" />

            <img
              src={biimage}
              alt="Decision Intelligence Dashboards"
              className="relative w-full max-w-xl mx-auto rounded-xl shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
