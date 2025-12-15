import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Dna, FlaskConical, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Building robust, scalable systems with modern best practices",
  },
  {
    icon: Dna,
    title: "Bioinformatics",
    description: "Analyzing genomic data and biological sequences",
  },
  {
    icon: FlaskConical,
    title: "Cheminformatics",
    description: "Computational chemistry and molecular modeling",
  },
  {
    icon: Lightbulb,
    title: "Drug Discovery",
    description: "Applying technology to advance medicine",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">software engineer</span> who 
              builds with purpose. My work sits at the intersection of 
              <span className="text-accent font-medium"> robust software systems</span> and 
              <span className="text-science font-medium"> life sciences</span>—developing tools 
              that help researchers understand biology and accelerate drug discovery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I approach every problem with an <span className="text-foreground font-medium">engineering mindset</span>: 
              understanding the domain deeply, designing for correctness and scale, and building 
              systems that are reproducible and maintainable. Whether it's a REST API, a genomics 
              pipeline, or a molecular analysis workflow, the principles remain the same.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to bridge the gap between <span className="text-foreground font-medium">code and biology</span>, 
              creating technology that matters—systems that help scientists make discoveries that 
              improve human health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-card rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
