import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

// Campaign / Experience assets
import aviarepsImg from "../assets/Gulffood Green Brazil picture.jpeg";
import NHMPImg from "../assets/Creatives and Campaigns/Awareness Pakistan/1.png";
import gilgitImg from "../assets/Journalism/Article Gilgit.jpeg";
import imsraImg from "../assets/Creatives and Campaigns/Imsra/product photography 3.jpg";

const experiences = [
  {
    role: "PR Intern",
    company: "AVIAREPS",
    location: "Dubai, UAE",
    description: "Communications and liaison for international trade events including the Brazilian Trade Commission at Gulfood Green and the AviaReps Roadshow. Drafted press releases, produced newsletters via Mailchimp, managed media and influencer relations, and coordinated on-ground logistics across all stakeholder communications.",
  },
  {
    role: "Campaign Manager",
    company: "Media Matters for Democracy",
    location: "Karachi, PK",
    description: "Designed and led a national advocacy campaign on digital rights in Pakistan, working alongside a media watchdog NGO focused on fact-checking and monitoring. Managed cross-functional coordination and produced all campaign content and reporting.",
  },
  {
    role: "Campaign Manager",
    company: "National Highways & Motorways Police",
    location: "Karachi, PK",
    description: "Created and executed a government road safety communications campaign that achieved coverage across multiple media channels and publications. Coordinated with government stakeholders.",
  },
  {
    role: "Sub-Editor & Writer",
    company: "SouthAsia Magazine",
    location: "Pakistan",
    description: "Wrote features and book reviews for a professional publication covering geopolitics and current affairs. Contributed to editorial planning and maintained accuracy and quality standards across issues.",
  },
  {
    role: "Content Writer",
    company: "ProperGaanda",
    location: "Pakistan",
    description: "Produced digital content and managed editorial output across Canva and WordPress.",
  },
  {
    role: "Administration & Media",
    company: "Travel Trendz Magazine",
    location: "Dubai, UAE",
    description: "Supported administrative and data entry operations at Al Jasar Printing Publications while attending press and media events across the travel, hospitality, and aviation industry in the UAE. Had an article published in Travel Trendz Magazine.",
  },
];

const campaignImages = [
  { src: aviarepsImg, alt: "Gulfood Green Trade Event PR", caption: "Gulfood Green PR Event" },
  { src: NHMPImg, alt: "National Highway Police Road Safety Campaign", caption: "NHMP Safety Campaign" },
  { src: gilgitImg, alt: "Gilgit Travel Journalism Feature", caption: "Travel Editorial Feature" },
  { src: imsraImg, alt: "Brand Product Photography Campaign", caption: "Product Photography Work" },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
              <Briefcase size={16} className="text-coral" />
              <span className="text-xs font-heading tracking-[0.22em] uppercase text-muted-foreground">
                Work History
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Where I've Worked
            </h2>

            {/* Scrollable list of jobs to keep page layout compact yet detailed */}
            <div className="mt-8 space-y-6 max-h-[680px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="group relative bg-background/60 hover:bg-background border border-border/80 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-sm border-l-4 hover:border-l-coral border-l-transparent"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-coral transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-foreground/80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/40 px-2.5 py-1 rounded-md">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Campaign Assets */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -top-6 -left-6 w-28 h-28 rounded-full bg-coral/15 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-secondary/25 blur-2xl" />

              <div className="grid grid-cols-12 gap-4">
                {campaignImages.map((img, i) => {
                  const span =
                    i === 0
                      ? "col-span-7 row-span-2"
                      : i === 1
                        ? "col-span-5 row-span-1"
                        : i === 2
                          ? "col-span-5 row-span-1"
                          : "col-span-7 row-span-2";

                  return (
                    <motion.div
                      key={img.alt}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className={`${span} group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft ${
                        i === 0 || i === 3
                          ? "min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]"
                          : "min-h-[110px] sm:min-h-[116px]"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      
                      {/* Interactive overlay caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                        <span className="text-white text-xs font-heading font-medium tracking-wide">
                          {img.caption}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-background/90 backdrop-blur px-4 py-3 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-coral" />
                  <p className="text-xs text-muted-foreground">Portfolio Showcase</p>
                </div>
                <p className="mt-1 font-heading font-semibold text-foreground">Campaigns • PR Events • Editorial</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
