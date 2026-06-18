import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Download, ExternalLink, BookOpen } from "lucide-react";

// PDF Asset Imports
import amongMyOwnPdf from "../assets/Journalism/Amoung My Own.pdf";
import poorPeoplePdf from "../assets/Journalism/Poor People to Fly With.pdf";
import powerOfCinemaPdf from "../assets/Journalism/Power of Cinema.pdf";
import gilgitArticleImg from "../assets/Journalism/Article Gilgit.jpeg";

const publications = [
  {
    title: "Poor People to Fly With",
    category: "Investigative Feature",
    description: "A thought-provoking and deep social commentary on socio-economic class divisions, customer treatment, and perspectives on modern aviation and passenger travel.",
    fileUrl: poorPeoplePdf,
    fileName: "Poor People to Fly With.pdf",
    type: "pdf",
    readTime: "6 min read",
    date: "Published Work",
  },
  {
    title: "Power of Cinema",
    category: "Media Analysis & Research",
    description: "An analytical study exploring how film and cinema act as powerful tools of social influence, shaping cultural narratives, public opinions, and societal behaviors in Pakistan and globally.",
    fileUrl: powerOfCinemaPdf,
    fileName: "Power of Cinema.pdf",
    type: "pdf",
    readTime: "5 min read",
    date: "Media Research",
  },
  {
    title: "Among My Own",
    category: "Feature Journalism",
    description: "An evocative feature article looking at community identity, personal stories, and local cultural dynamics with deep empathy and observation.",
    fileUrl: amongMyOwnPdf,
    fileName: "Amoung My Own.pdf",
    type: "pdf",
    readTime: "4 min read",
    date: "Feature Story",
  },
  {
    title: "Article Gilgit",
    category: "Travel Journalism",
    description: "A visually engaging travel feature capturing the rich landscapes, heritage, and stories from Gilgit-Baltistan, highlighting local tourism and regional culture.",
    fileUrl: gilgitArticleImg,
    fileName: "Article Gilgit.jpeg",
    type: "image",
    readTime: "3 min read",
    date: "Travel Editorial",
  },
];

const JournalismSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journalism" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Journalism & Publications
          </h2>
          <div className="w-20 h-1 bg-coral mx-auto my-4 rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Explore my investigative reporting, published articles, and research pieces analyzing media and society.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative bg-secondary/20 hover:bg-secondary/40 border border-border/60 hover:border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Card Header Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-cream-dark/50 text-foreground/80 rounded-md">
                    {pub.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {pub.readTime}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-coral transition-colors">
                  {pub.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pub.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
                <span className="text-xs font-medium text-foreground/60 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-coral" />
                  {pub.date}
                </span>

                <div className="flex items-center gap-3">
                  {/* View Button */}
                  <a
                    href={pub.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-foreground text-primary-foreground hover:bg-coral hover:text-white transition-all duration-200"
                    title={`Read ${pub.title}`}
                  >
                    Read
                    <ExternalLink size={12} />
                  </a>

                  {/* Download Button (Only for PDFs) */}
                  {pub.type === "pdf" && (
                    <a
                      href={pub.fileUrl}
                      download={pub.fileName}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-200"
                      title="Download PDF"
                    >
                      Download
                      <Download size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalismSection;
