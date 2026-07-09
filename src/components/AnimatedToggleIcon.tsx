import { motion } from "motion/react";

interface AnimatedToggleIconProps {
  isOpen: boolean;
  size?: "xs" | "sm" | "md";
}

export default function AnimatedToggleIcon({ isOpen, size = "sm" }: AnimatedToggleIconProps) {
  const lineSize = size === "md" ? "w-4 h-[1.5px]" : size === "xs" ? "w-2.5 h-[1.2px]" : "w-3 h-[1.5px]";
  const vertSize = size === "md" ? "w-[1.5px] h-4" : size === "xs" ? "w-[1.2px] h-2.5" : "w-[1.5px] h-3";

  return (
    <div className={`relative ${size === "md" ? "w-4 h-4" : size === "xs" ? "w-2.5 h-2.5" : "w-3 h-3"} flex items-center justify-center`}>
      {/* Horizontal line (always present, forms the minus) */}
      <div className={`absolute ${lineSize} bg-current rounded-full`} />
      
      {/* Vertical line (shrinks/grows to create smooth toggle) */}
      <motion.div
        className={`absolute ${vertSize} bg-current rounded-full`}
        initial={false}
        animate={{ 
          scaleY: isOpen ? 0 : 1, 
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
