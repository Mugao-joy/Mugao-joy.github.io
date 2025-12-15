import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const softwareProjects = [
  {
    title: "Distributed Task Queue System",
    problem: "High-latency job processing in a monolithic architecture causing user-facing delays.",
    approach: "Designed an event-driven microservice with Redis-backed queues and worker pools.",
    stack: ["Python", "Redis", "FastAPI", "Docker", "PostgreSQL"],
    decisions: "Chose Redis for speed over RabbitMQ complexity; implemented dead-letter queues for reliability.",
    learned: "Deep understanding of backpressure handling and graceful degradation patterns.",
    githubUrl: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    problem: "Stakeholders lacked visibility into system metrics and KPIs in real-time.",
    approach: "Built a React dashboard with WebSocket connections to a Go backend aggregating metrics.",
    stack: ["React", "TypeScript", "Go", "WebSocket", "InfluxDB"],
    decisions: "Used InfluxDB for time-series data; implemented client-side sampling for performance.",
    learned: "Balancing real-time updates with browser performance and data freshness.",
    githubUrl: "#",
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
