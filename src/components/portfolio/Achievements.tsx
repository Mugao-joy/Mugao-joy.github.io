import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Equity Leaders Program Scholar",
    description: "Selected as an Equity Leaders Program scholar for top academic achievement and leadership potential. Admitted into a highly competitive national program that develops high-performing Kenyan students through leadership training, ethics, and professional development, with access to mentorship and internship opportunities.",
    year: "ongoing",
  },
  {
    icon: Star,
    title: "Hackathon Winner  CHAI (Connecting Humans with AI)",
    description: "First place winner in the CHAI 2-month global hackathon, competing across 8 verticals against 700+ participants from 54 countries.I Led a team of 5 women to build 8 winning AI solutions, later showcased at UN COP30 in Brazil.",
    year: "2025",
  },
  {
    icon: Star,
    title: "2nd Runners-Up  Girl Code × Absa Bank Hackathon",
    description: "Placed 2nd runners-up for designing and building a fintech solution enabling gig economy workers to access banking, insurance, and SACCO services through a financial passport tailored to irregular and non-linear income patterns.",
    year: "2025",
  },
  {
    icon: Users,
    title: "Tech Community Leader  Tech Sister Kenya",
    description: "Served as Software Engineering Technical Coordinator, mentoring 2,000+ women across different stages of their tech journeys. Led curriculum guidance, coordinated mentorship workshops with Google, and facilitated access to scholarships at Moringa School and internship opportunities.",
    year: "2023-Present",
  },
  {
    icon: Award,
    title: "Google Top 40 Women in Software Engineering — Kenya",
    description: "Recognized as one of Google’s Top 40 Women in Software Engineering in Kenya for innovation and impact in distributed systems.",
    year: "2024",
  },
  // {
  //   icon: Users,
  //   title: "Mentorship Program",
  //   description: "Mentored 15+ junior developers through open-source contributions",
  //   year: "Ongoing",
  // },
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
