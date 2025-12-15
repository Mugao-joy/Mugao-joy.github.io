import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Merit Scholarship Recipient",
    description: "Full academic scholarship for outstanding performance in Computer Science",
    year: "2023",
  },
  {
    icon: GraduationCap,
    title: "Honors Graduate",
    description: "Graduated with distinction in Bioinformatics and Computer Science",
    year: "2022",
  },
  {
    icon: Users,
    title: "Tech Community Leader",
    description: "Founded and led university coding club with 200+ active members",
    year: "2021-2023",
  },
  {
    icon: Star,
    title: "Hackathon Winner",
    description: "First place in regional health-tech hackathon for drug interaction checker",
    year: "2022",
  },
  {
    icon: Award,
    title: "Research Publication",
    description: "Co-authored paper on ML-based molecular property prediction",
    year: "2023",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Mentored 15+ junior developers through open-source contributions",
    year: "Ongoing",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Impact
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
