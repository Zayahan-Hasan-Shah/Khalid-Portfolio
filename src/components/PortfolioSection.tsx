import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/Creatives and Campaigns/FYP/Beige Minimalist Creative Agency Website Desktop Prototype_20250105_190355_0000.png";
import img2 from "../assets/Creatives and Campaigns/FYP/Blue and Green Recycling Today Illustrated Presentation_20250105_212648_0000.png";
import img3 from "../assets/Creatives and Campaigns/FYP/E-commerce Workshop_20250105_183246_0000.jpg";
import img4 from "../assets/Creatives and Campaigns/FYP/E-commerce Workshop_20250117_153342_0000.png";
import img5 from "../assets/Creatives and Campaigns/FYP/Orange Modern Attractive YouTube Thumbnail_20250105_191536_0000.png";
import img6 from "../assets/Creatives and Campaigns/FYP/White Modern E-Commerce flyer_20250105_201134_0000.png";

const projects = [
  {
    image: img1,
    category: "Agency Work",
    title: "Creative Agency Branding & Presentation",
    desc: "Complete branding and digital agency setup design, focusing on minimalism and modern layout systems for media campaigns.",
  },
  {
    image: img2,
    category: "Sustainability",
    title: "Recycling & Green Waste Management",
    desc: "An educational presentation and public design system created for environmental and waste management awareness campaigns.",
  },
  {
    image: img3,
    category: "E-Commerce",
    title: "Workshop & Strategy Interactive Landing",
    desc: "Designed UI and visual assets for e-commerce workshops, guiding businesses on digital transformations.",
  },
  {
    image: img4,
    category: "Workshop Content",
    title: "Visual Assets & Digital Graphics",
    desc: "Branding materials and custom banners for social media and online workshops, optimized for audience conversion.",
  },
  {
    image: img5,
    category: "Content Creation",
    title: "Creative YouTube Production Thumbnails",
    desc: "High-impact visual thumbnails designed to optimize CTR (Click-Through Rate) and increase digital video engagement.",
  },
  {
    image: img6,
    category: "Digital Flyer",
    title: "Interactive E-Commerce Promotion Flyer",
    desc: "A stylized promo flyer designed for digital marketing campaigns, boosting product awareness across social platforms.",
  },
];

const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((p) => (p + 1) % projects.length);
  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Campaign Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Explore my recent campaigns showcasing creativity, innovation and results-driven design solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                <div className="aspect-[9/8] overflow-hidden">
                  <img
                    src={projects[current].image}
                    alt={projects[current].title}
                    className="w-full h-full object-fir"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-foreground mb-4 w-fit">
                    {projects[current].category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                    {projects[current].title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {projects[current].desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-coral transition-colors group"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-foreground w-6" : "bg-border"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
