import { motion } from "motion/react";

interface AnimatedToggleIconProps {
  isOpen: boolean;
  size?: "sm" | "md";
}

export default function AnimatedToggleIcon({ isOpen, size = "sm" }: AnimatedToggleIconProps) {
  const lineSize = size === "md" ? "w-4 h-[1.5px]" : "w-3 h-[1.5px]";
  const vertSize = size === "md" ? "w-[1.5px] h-4" : "w-[1.5px] h-3";

  return (
    <div className={`relative ${size === "md" ? "w-4 h-4" : "w-3 h-3"} flex items-center justify-center`}>
      {/* Horizontal line (always present, forms the minus) */}
      <div className={`absolute ${lineSize} bg-current rounded-full`} />
      
      {/* Vertical line (shrinks/grows and rotates to create smooth toggle) */}
      <motion.div
        className={`absolute ${vertSize} bg-current rounded-full`}
        initial={false}
        animate={{ 
          scaleY: isOpen ? 0 : 1, 
          rotate: isOpen ? 90 : 0 
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
    </div>
  );
}
