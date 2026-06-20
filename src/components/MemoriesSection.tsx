import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Video, Briefcase, Camera, Sparkles } from "lucide-react";

const CAROUSEL_GAP_PX = 24;
const CARD_W_PX = 350;

// Import all campaign and event images
import cinema1 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/1.jpeg";
import cinema2 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/2.jpeg";
import cinema3 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/3.jpeg";
import cinema4 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/4.jpeg";
import cinema5 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/5.jpeg";
import cinema6 from "../assets/Creatives and Campaigns/Futre of AI in Pakistan Cinema/6.jpeg";

import awareness1 from "../assets/Creatives and Campaigns/Awareness Pakistan/1.png";
import awareness2 from "../assets/Creatives and Campaigns/Awareness Pakistan/2.png";
import awareness3 from "../assets/Creatives and Campaigns/Awareness Pakistan/3.png";
import awareness4 from "../assets/Creatives and Campaigns/Awareness Pakistan/4.png";
import awarenessPress1 from "../assets/Creatives and Campaigns/Awareness Pakistan/Press coverage 1 .png";
import awarenessPress2 from "../assets/Creatives and Campaigns/Awareness Pakistan/Press coverage 2 .png";
import awarenessPress3 from "../assets/Creatives and Campaigns/Awareness Pakistan/Press coverage 3.png";

import product1 from "../assets/Creatives and Campaigns/Imsra/product photography 3.jpg";
import product2 from "../assets/Creatives and Campaigns/Imsra/website.jpg";

const memories = [
  {
    id: 1,
    category: "Media Gala — Event Manager & Host",
    description: "Led the end-to-end production of Media Gala, a panel discussion bringing together some of Pakistan's leading voices in cinema including actors, writers, and cinematographers. Managed the full logistics team, drove sponsorship acquisitions, and oversaw event coverage from start to finish. Also hosted the event on the day, guiding the conversation around the future of Pakistani cinema and the role of AI in the industry's evolution.",
    icon: Video,
    images: [cinema1, cinema2, cinema3, cinema4, cinema5, cinema6],
    color: "from-pink-500/20 to-pink-600/20",
    rotate: false
  },
  {
    id: 2,
    category: "National Highways & Motorways Police --Campaign Manager",
    description: "Created and executed a government road safety communications campaign that achieved coverage across multiple media channels and publications. Coordinated with government stakeholders and managed brand consistency throughout.",
    icon: Briefcase,
    images: [awareness1, awareness2, awareness3, awareness4, awarenessPress1, awarenessPress2, awarenessPress3],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    id: 3,
    category: "Product Photography & Creative Shoots",
    description: "Directed commercial product photography and visual layouts for creative campaigns. Managed set styling, creative direction, and digital branding assets, delivering high-impact aesthetics optimized for e-commerce and web platforms.",
    icon: Camera,
    images: [product1, product2],
    color: "from-purple-500/20 to-purple-600/20"
  }
];

const MemoriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="memories" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-coral animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-foreground via-coral to-coral-light bg-clip-text text-transparent">
              Memorable Moments
            </h2>
            <Sparkles className="w-8 h-8 text-coral animate-pulse" />
          </div>
        </motion.div>

        {/* Memory Categories */}
        <div className="space-y-24">
          {memories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-12"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {category.category}
                  </h3>
                  <div className="m-2 p-3">
                    {category.description}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      {category.images.length} Special Moments
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Image Carousel with Modern Layout */}
              <div className="relative overflow-hidden rounded-2xl">
                {(() => {
                  const travel = (CARD_W_PX + CAROUSEL_GAP_PX) * category.images.length;
                  const direction = categoryIndex % 2 === 0 ? -1 : 1;
                  const xFrames = direction === -1 ? [0, -travel] : [-travel, 0];

                  return (
                    <motion.div
                      initial={{ x: xFrames[0] }}
                      animate={{ x: xFrames }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: categoryIndex % 2 === 0 ? 15 : 18, // Different speeds for variety
                          ease: "linear"
                        }
                      }}
                      className="flex gap-6 will-change-transform"
                    >
                      {/* Duplicate images for seamless loop */}
                      {[...category.images, ...category.images].map((image, imageIndex) => (
                        <motion.div
                          key={`${category.id}-${imageIndex}`}
                          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                          animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                          transition={{
                            duration: 0.7,
                            delay: categoryIndex * 0.2 + 0.3 + imageIndex * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{
                            scale: 1.08,
                            rotateY: 8,
                            transition: { duration: 0.3 }
                          }}
                          className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                          style={{ width: `${CARD_W_PX}px`, height: "50vh" }}
                        >
                          {/* Image Container with Overlay */}
                          <div className="relative w-full h-full overflow-hidden rounded-2xl">
                            <img
                              src={image}
                              alt={`${category.category} memory ${imageIndex + 1}`}
                              className={`w-full h-full object-cover transition-transform duration-700 ${(category as any).rotate ? "rotate-90 scale-125 group-hover:scale-[1.35]" : "group-hover:scale-110"
                                }`}
                              loading="lazy"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating Badge */}
                            <motion.div
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              className="absolute top-4 right-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                            >
                              {imageIndex + 1}
                            </motion.div>

                            {/* Category Icon on Hover */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2"
                            >
                              <category.icon className="w-4 h-4 text-foreground" />
                            </motion.div>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-coral/20 animate-pulse" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-coral-light/30 animate-bounce" />
                        </motion.div>
                      ))}
                    </motion.div>
                  );
                })()}
              </div>

              {/* View More Button */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.8 }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-coral to-coral-light text-white font-heading font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All {category.category}
                </motion.button>
              </motion.div> */}
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex justify-center items-center gap-8"
        >
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="w-2 h-2 rounded-full bg-coral/40"
              />
            ))}
          </div>
          <Sparkles className="w-6 h-6 text-coral animate-spin" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default MemoriesSection;
