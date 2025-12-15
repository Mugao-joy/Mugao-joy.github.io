import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const researchProjects = [
  {
    title: "Molecular Property Prediction Pipeline",
    problem: "Drug candidates fail late in trials due to poor ADMET property predictions.",
    approach: "Built an ML pipeline predicting solubility, toxicity, and bioavailability from SMILES.",
    stack: ["Python", "RDKit", "scikit-learn", "XGBoost", "pandas"],
    decisions: "Featurized molecules using Morgan fingerprints; ensemble models for robustness.",
    learned: "Domain-specific feature engineering is critical—chemical intuition improves ML.",
    githubUrl: "#",
  },
  {
    title: "Variant Annotation Pipeline",
    problem: "Researchers manually interpreting VCF files with inconsistent methodologies.",
    approach: "Automated pipeline annotating variants with clinical significance from ClinVar/gnomAD.",
    stack: ["Python", "Biopython", "Snakemake", "SQLite", "VEP"],
    decisions: "Snakemake for reproducibility; SQLite for portable local databases.",
    learned: "Reproducibility in bioinformatics requires strict version control of data and code.",
    githubUrl: "#",
  },
  {
    title: "Protein-Ligand Docking Workflow",
    problem: "Manual docking workflows are error-prone and don't scale for virtual screening.",
    approach: "Containerized AutoDock Vina workflow with automated result parsing and ranking.",
    stack: ["Python", "AutoDock Vina", "Docker", "Nextflow", "pandas"],
    decisions: "Nextflow for HPC compatibility; containerization ensures reproducibility.",
    learned: "Computational chemistry demands strict input validation—garbage in, garbage out.",
    githubUrl: "#",
  },
];

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding bg-secondary/20">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bioinformatics & Cheminformatics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Applying software engineering rigor to scientific computing
          </p>
          <div className="w-20 h-1 bg-science mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-8">
          {researchProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} variant="science" />
          ))}
        </div>
      </div>
    </section>
  );
}
