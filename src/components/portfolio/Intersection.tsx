import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code2, Dna, FlaskConical } from "lucide-react";

export function Intersection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Engineering Meets Science
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 md:gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Code2 className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Software</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-science/10 flex items-center justify-center">
                <Dna className="w-8 h-8 md:w-10 md:h-10 text-science" />
              </div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Biology</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-science/20 flex items-center justify-center">
                <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
              </div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Discovery</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border/50 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">The Intersection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern drug discovery is fundamentally a <span className="text-foreground font-medium">software problem</span>. 
                The data is too vast, the hypotheses too numerous, and the experiments too expensive 
                to rely on intuition alone. We need systems that are correct, reproducible, and scale 
                with the science.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border/50 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I build <span className="text-accent font-medium">scientific software</span> with the same 
                rigor as production systems: version-controlled pipelines, tested code, containerized 
                environments, and clear documentation. The goal isn't just working code—it's 
                <span className="text-science font-medium"> reproducible science</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 md:p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Why It Matters</h3>
            <p className="text-muted-foreground leading-relaxed">
              A molecule that cures cancer is useless if the pipeline that found it can't be validated. 
              A breakthrough analysis is worthless if it can't be reproduced. I bring 
              <span className="text-foreground font-medium"> engineering discipline</span> to scientific 
              computing because the stakes are too high for anything less. Every pipeline I build, 
              every analysis I run, is designed to be trusted and verified.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
