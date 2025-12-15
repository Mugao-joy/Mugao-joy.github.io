import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Bash"],
    variant: "primary" as const,
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "FastAPI", "Node.js", "Express", "Django", "Flask"],
    variant: "primary" as const,
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "Redis", "MongoDB", "AWS", "Docker", "Kubernetes"],
    variant: "primary" as const,
  },
  {
    title: "Testing & DevOps",
    skills: ["pytest", "Jest", "CI/CD", "GitHub Actions", "Terraform", "Git"],
    variant: "primary" as const,
  },
  {
    title: "Scientific Computing",
    skills: ["NumPy", "pandas", "scikit-learn", "SciPy", "Matplotlib", "Jupyter"],
    variant: "science" as const,
  },
  {
    title: "Bioinformatics",
    skills: ["Biopython", "Snakemake", "Nextflow", "BLAST", "VEP", "samtools"],
    variant: "science" as const,
  },
  {
    title: "Cheminformatics",
    skills: ["RDKit", "OpenBabel", "AutoDock", "PyMOL", "SMILES/SDF", "PubChem API"],
    variant: "science" as const,
  },
  {
    title: "Machine Learning",
    skills: ["XGBoost", "Random Forest", "Deep Learning", "Feature Engineering", "Model Validation"],
    variant: "science" as const,
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border/50 shadow-md"
            >
              <h3
                className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                  category.variant === "science" ? "text-science" : "text-accent"
                }`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                      category.variant === "science"
                        ? "bg-science/10 text-science"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
