import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suhaliha",
    role: "Client",
    initials: "S",
    text: "Very professional media specialist. Khalid is a great motivator and seemed genuinely passionate about visual storytelling.",
  },
  {
    name: "Talha",
    role: "Client",
    initials: "T",
    text: "Khalid and team provided excellent campaign strategy and photography services with great customer care. Highly recommend!",
  },
  {
    name: "Sameer Magsi",
    role: "Client",
    initials: "SM",
    text: "I’ve been working with him for the past 6 years, and he’s truly a genuine and inspiring media professional. His positive nature, optimism, and passion for creativity shine through in every campaign he designs. A talented professional and a great person to work with.",
  },
  {
    name: "Anum",
    role: "Client",
    initials: "A",
    text: "It has been a really smooth experience with you and your team! I loved your work but more than that, we absolutely lovedddd the campaign teasers and promo!!!! Such a good job. Hope to work with you guys in the future as well! Keep up the good work, best wishes",
  },
  {
    name: "Dua",
    role: "Client",
    initials: "D",
    text: "I just wanted to thank you for the amazing work you did Khalid. The campaign assets turned out absolutely beautiful. You captured every moment so perfectly that made the day so special. We are happy with the results and would definitely recommend you to others",
  },
  {
    name: "Aun Ali",
    role: "Client",
    initials: "AA",
    text: "Very professional to work with & understands the vision clearly. Delivers quality photos and marketing assets on time with great attention to detail. Smooth communication and a reliable campaign director overall.",
  },
  {
    name: "Abiha",
    role: "Client",
    initials: "AB",
    text: "Needed a professional to execute my campaign shoot at Expo Karachi and I got one. This is why you’re a professional. The shoot really shows off all your skills. Looking forward to more projects. Highly recommended!",
  },
  {
    name: "Maliha",
    role: "Client",
    initials: "M",
    text: "Khalid is a true professional. Not only is he an incredibly skilled creative director, but he is also polite and highly cooperative. Throughout the project, he felt like a member of the family. Keep up the great work, and I wish you continued success!",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              What My Customers
              <br />
              Says About Me
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              I take pride in delivering exceptional design solutions that exceed client expectations.
              Here's what some of my clients have to say about working with me.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center mt-6 px-6 py-2.5 rounded-full border border-coral text-coral text-sm font-medium hover:bg-coral hover:text-accent-foreground transition-all duration-300"
            >
              Become Our Customer
            </a>
          </motion.div>

          {/* Right - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border relative"
              >
                <Quote className="text-secondary w-10 h-10 mb-4" strokeWidth={1} />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center text-charcoal font-semibold text-lg">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonials[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-3 mt-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
