import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const softwareProjects = [
  {
    title: "Zawadi — Anonymous Gifting & Wishlist Platform",
    problem: "Friends and families struggle to choose meaningful gifts, often resulting in duplicate purchases and spoiled surprises.",
    approach: "Built a full-stack web application that allows users to create wishlists with moodboards so the gifter is as lose as possible to gifting them exactly what they wanted,while enabling others to anonymously reserve items using atomic database constraints to prevent duplicates. Implemented private group flows for coordinated gifting and scheduled reminder jobs.",
    stack: ["React","Typescript", "Supabase", "Docker", "PostgreSQL"],
    decisions: "Server state management, caching, and data fetching using TanStack React Query 5",
    learned: "Designing privacy-preserving user flows, enforcing concurrency guarantees at the database layer, and balancing UX simplicity with backend data integrity in a social application.",
    githubUrl: "https://zawadiwishlist.vercel.app/",
  },
  {
    title: "Dodgy Dave — AI Stock Market Predictor Financial Analytics Platform",
    problem: "Understanding how to integrate and reason with large language models in real-world applications can be abstract and unintuitive for beginners in AI engineering.",
    approach: "Built a playful AI-powered stock ‘predictor’ persona (Dodgy Dave) to explore prompt engineering, OpenAI API integration, and response shaping. The system accepts stock-related inputs, constructs structured prompts, and returns probabilistic, disclaimer-aware predictions designed for learning rather than real trading.",
    stack: ["JavaScript", "OpenAI API", "Python","Render"],
    decisions: "Focused on prompt design, temperature tuning, and response constraints instead of model fine-tuning, keeping the system lightweight, interpretable, and safe for experimentation",
    learned: "How to design effective prompts, manage hallucinations with guardrails and disclaimers, structure AI outputs for consistency, and integrate LLMs into applications responsibly without overclaiming model capabilities.",
    githubUrl: "https://stock-predictor-app-8nqy.onrender.com/",
  },
  {
    title: "API Gateway & Auth Service",
    problem: "Multiple services duplicating authentication logic with inconsistent security.",
    approach: "Centralized auth with JWT tokens and a rate-limiting proxy layer.",
    stack: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL"],
    decisions: "Token refresh strategy with sliding expiration; Redis for session blacklisting.",
    learned: "Security trade-offs between stateless and stateful auth approaches.",
    githubUrl: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Software Engineering Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building reliable, scalable systems with modern engineering practices
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-8">
          {softwareProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} variant="software" />
          ))}
        </div>
      </div>
    </section>
  );
}
