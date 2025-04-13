import React from "react";
import { motion } from "framer-motion";

export type ButtonVariant = "primary" | "secondary" | "shimmer" | "luxury";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  size = "md",
}) => {
  const baseClasses =
    "relative overflow-hidden group rounded-lg font-bold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-subtle";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-btb-gold via-yellow-400 to-btb-gold bg-[length:200%_100%] hover:bg-[position:100%_0] border-2 border-btb-gold/50 text-black",
    secondary:
      "border-2 border-btb-gold text-btb-gold hover:bg-gradient-to-r hover:from-btb-gold hover:via-yellow-400 hover:to-btb-gold hover:text-black",
    shimmer: "bg-[#1A1A1A] border-2 border-btb-gold/30 text-btb-gold",
    luxury:
      "bg-gradient-to-r from-btb-gold to-yellow-400 text-black border-2 border-btb-gold/50",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <span className="relative z-10 animate-pulse whitespace-nowrap">
        {children}
      </span>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast" />

      {/* Sparkles effect */}
      <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-30 animate-sparkle" />

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-btb-gold/20 to-transparent animate-shine" />
    </motion.button>
  );
};

export default Button;
