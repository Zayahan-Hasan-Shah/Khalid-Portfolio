import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { Users, Calendar, BookOpen, Briefcase, Laptop, Target } from "lucide-react";
import professionalPhoto from "../assets/PIC.jpg";

const leftservices = [
  {
    icon: Users,
    title: "PR & Communications",
    desc: "Press release writing\nNewsletter production (Mailchimp)\nMedia & influencer relations\nMedia monitoring & coverage\nStakeholder communications",
  },
  {
    icon: Calendar,
    title: "Events & Coordination",
    desc: "Corporate event coordination\nEnd-to-end roadshow management\nOn-ground logistics\nScheduling & stakeholder liaison\nCross-functional collaboration",
  },
  {
    icon: BookOpen,
    title: "Editorial & Journalism",
    desc: "Feature writing & book reviews\nSub-editing & proofreading\nGeopolitics & current affairs coverage\nEditorial planning",
  },
];

const rightServices = [
  {
    icon: Briefcase,
    title: "Industry Experience",
    desc: "Travel & hospitality\nAviation & trade representation\nGovernment & NGO campaigns\nInternational trade events",
  },
  {
    icon: Laptop,
    title: "Tools & Platforms",
    desc: "Mailchimp\nCanva\nWordPress\nWorkplace (Meta)\nMS Office Suite",
  },
  {
    icon: Target,
    title: "Campaign Management",
    desc: "End-to-end campaign design\nDigital rights & advocacy\nGovernment road safety comms\nBrand consistency & reporting\nContent & narrative development",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Marketing, PR & Communications Professional focusing on strategic communications and creative execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 space-y-6 mb-6"
        >
          <h3 className="text-lg md:text-xl font-heading font-semibold text-coral mb-6 text-center uppercase tracking-wide">
            Syed Khalid Hassan — Marketing, PR & Communications Professional
          </h3>

          <p className="text-sm text-center leading-relaxed text-muted-foreground first-letter:text-4xl first-letter:font-heading first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-foreground">
            I'm a BS Media Sciences graduate with hands-on experience across public relations, campaign management, editorial publishing, and corporate event coordination. My work sits at the intersection of strategic communications and creative execution, and I bring both to every project I take on.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            My industry experience is rooted in travel, hospitality, and aviation. Through two internships with AVIAREPS, representing clients including the Brazilian Trade Commission, I coordinated international trade events, managed media and influencer relations, drafted press releases, and produced newsletters that reached professional audiences across the region. These roles sharpened my ability to manage multiple stakeholders, maintain brand consistency under pressure, and deliver polished communications in fast-moving environments.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            Beyond PR, I have led end-to-end advocacy and awareness campaigns for government bodies and NGOs, including a national digital rights campaign and a road safety initiative for the National Highways and Motorways Police. Both required cross-functional coordination, narrative development, and results-driven reporting.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            My editorial background adds another dimension to my work. As a sub-editor and writer for SouthAsia Magazine, I wrote features, book reviews, and contributed to editorial planning for a professional publication covering geopolitics and current affairs. That experience gave me a strong command of tone, accuracy, and audience-aware writing that I carry into every brief.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            I am comfortable working across Mailchimp, Canva, WordPress, and Workplace, and I am equally at home coordinating an on-ground event or crafting a long-form communications strategy.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            If you are looking for someone who combines journalism instincts with PR discipline and marketing sensibility, I would love to connect.
          </p>

          <div className="pt-4 border-t  text-center border-border">
            <p className="font-heading font-semibold text-lg text-foreground">
              Syed Khalid Hassan
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Marketing, PR & Communications Professional
            </p>
            <p className="font-heading italic text-lg text-foreground/50 mt-3">
              Syed Khalid Hassan
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {leftservices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="w-60 h-80 md:w-72 md:h-96 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src={professionalPhoto}
                  alt="Syed Khalid Hassan - Marketing & PR Professional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center blob-shape-2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-coral">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {rightServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
