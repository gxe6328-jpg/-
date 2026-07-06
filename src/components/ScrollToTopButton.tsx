import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10"
        >
          <button
            onClick={scrollToTop}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-brand-slate flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-brand-slate/10 transition-all active:scale-95"
            aria-label="Наверх"
          >
            <ArrowUp className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
