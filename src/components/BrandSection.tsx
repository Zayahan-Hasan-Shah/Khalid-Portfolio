import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import brand1 from "../assets/Logos of companies ive worked in/AVIAREPS LOGO.png";
import brand2 from "../assets/Logos of companies ive worked in/Capital Travels Maldives.jpg";
import brand3 from "../assets/Logos of companies ive worked in/Media Matters For Democracy.jpg";
import brand4 from "../assets/Logos of companies ive worked in/National Highway Police.jpg";
import brand5 from "../assets/Logos of companies ive worked in/PG.jpg";
import brand6 from "../assets/Logos of companies ive worked in/South Asia Magazine.png";
import brand7 from "../assets/Logos of companies ive worked in/Trendz-International-media-logo.png";

// Brand logos from internet (placeholder images)
const brandImages = [
    {
        id: 1,
        name: "AVIAREPS",
        url: brand1,
        alt: "AVIAREPS"
    },
    {
        id: 2,
        name: "Capital Travels Maldives",
        url: brand2,
        alt: "Capital Travels Maldives"
    },
    {
        id: 3,
        name: "Media Matters For Democracy",
        url: brand3,
        alt: "Media Matters For Democracy"
    },
    {
        id: 4,
        name: "National Highway Police",
        url: brand4,
        alt: "National Highway Police"
    },
    {
        id: 5,
        name: "PG",
        url: brand5,
        alt: "PG"
    },
    {
        id: 6,
        name: "South Asia Magazine",
        url: brand6,
        alt: "South Asia Magazine"
    },
    {
        id: 7,
        name: "Trendz International Media",
        url: brand7,
        alt: "Trendz International Media"
    },
];

const BrandSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    // Duplicate the array for seamless infinite scroll
    const duplicatedBrands = [...brandImages, ...brandImages];

    return (
        <section className="section-padding bg-cream-light border-y border-border" ref={ref}>
            <div className="container-narrow">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        Companies I've worked with
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Proud to have work with industry leaders and innovative companies
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-cream-light to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-cream-light to-transparent z-10" />

                    {/* Scrolling Carousel */}
                    <motion.div
                        className="flex gap-8 md:gap-16"
                        animate={{
                            x: [0, -50 * brandImages.length] // Adjust based on item width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 10, // Speed of animation
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedBrands.map((brand, index) => (
                            <motion.div
                                key={`${brand.id}-${index}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                                    <img
                                        src={brand.url}
                                        alt={brand.alt}
                                        className="h-8 md:h-12 lg:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Additional decorative elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="mt-16 flex justify-center gap-2"
                >
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-border/40"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandSection;