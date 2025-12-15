import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-tight" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            I'm always interested in discussing software engineering, bio/cheminformatics, 
            and opportunities to build technology that advances medicine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90"
            >
              <a href="mailto:mugao.dev@gmail.com">
                <Mail className="mr-2" size={18} />
                mugao.dev@gmail.com
              </a>
            </Button>
            <Button
  variant="heroOutline"
  size="lg"
  asChild
  className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
>
  <a
    href="/JOYMUGAORESUME.pdf"
    download="JOYMUGAORESUME.pdf"
  >
    <Download className="mr-2" size={18} />
    Download Resume
  </a>
</Button>

          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Mugao-joy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/joymugao"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mugao.dev@gmail.com"
              className="p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
