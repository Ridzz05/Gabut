'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Definisikan posisi bintang secara statis
const starPositions = [
  { top: "20%", left: "20%" },
  { top: "30%", left: "70%" },
  { top: "50%", left: "40%" },
  { top: "70%", left: "80%" },
  { top: "80%", left: "30%" },
  { top: "40%", left: "60%" },
];

export default function ThemeToggle() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#442781] to-[#61459C] shadow-lg"
      onClick={toggleTheme}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden"
        initial={false}
        animate={isDark ? "dark" : "light"}
      >
        {/* Sun */}
        <motion.svg
          key="sun"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{
            scale: isDark ? 0.5 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-yellow-500"
        >
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 1V3M12 21V23M3.6 3.6L5.2 5.2M18.8 18.8L20.4 20.4M1 12H3M21 12H23M3.6 20.4L5.2 18.8M18.8 5.2L20.4 3.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Moon */}
        <motion.svg
          key="moon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
          animate={{
            scale: isDark ? 1 : 0.5,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-blue-300"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Stars */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {starPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full"
              style={position}
              initial={{ scale: 0 }}
              animate={
                isHovered
                  ? {
                      scale: [0, 1, 0],
                      transition: { 
                        repeat: Number.POSITIVE_INFINITY, 
                        duration: 1.5, 
                        delay: i * 0.2 
                      },
                    }
                  : { scale: 0 }
              }
            />
          ))}
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 0.2 : 0,
            background: isDark 
              ? "radial-gradient(circle, rgba(147,197,253,0.3) 0%, rgba(0,0,0,0) 70%)"
              : "radial-gradient(circle, rgba(252,211,77,0.3) 0%, rgba(0,0,0,0) 70%)" 
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.button>
  );
} 