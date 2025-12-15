import { motion } from "framer-motion";
import { ExternalLink, Github,Activity, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  problem: string;
  approach: string;
  stack: string[];
  decisions: string;
  learned: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  variant?: "software" | "science";
}

export function ProjectCard({
  title,
  problem,
  approach,
  stack,
  decisions,
  learned,
  githubUrl,
  liveUrl,
  index,
  variant = "software",
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group p-6 md:p-8 bg-card rounded-2xl border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 ${
        variant === "science" ? "hover:border-science/30" : "hover:border-accent/30"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="View on GitHub"
              >
                <Rocket size={18} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="View live"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Problem</span>
            <p className="text-muted-foreground mt-1">{problem}</p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Approach</span>
            <p className="text-muted-foreground mt-1">{approach}</p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Key Decisions</span>
            <p className="text-muted-foreground mt-1">{decisions}</p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">What I Learned</span>
            <p className="text-muted-foreground mt-1">{learned}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
          {stack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                variant === "science"
                  ? "bg-science/10 text-science"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
