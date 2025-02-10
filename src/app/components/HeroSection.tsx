'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';

// Animasi untuk teks
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  }
};

const AnimatedText = ({ text }: { text: string }) => (
  <div className="flex justify-center overflow-hidden">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </div>
);

// Gunakan salah satu cara export:
// Cara 1: Named export
export function HeroSection() {
  return (
    <motion.div 
      className="text-center mb-20"
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/logo.svg"
            alt="K.A Tech Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </motion.div>
      </div>
      
      <div className="mb-6">
        <AnimatedText text="Welcome to K.A Tech" />
      </div>

      <motion.p 
        className="font-rubik text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
        variants={textVariants}
      >
        Your one-stop platform for developer tools, streaming services, and technical insights
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        variants={textVariants}
      >
        <Button
          variant="primary"
          size="lg"
          href="/tools"
          icon={<Icon type="arrow-right" />}
        >
          Explore Tools
        </Button>
        <Button
          variant="outline"
          size="lg"
          href="/about"
        >
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}

// ATAU

// Cara 2: Default export
// export default function HeroSection() {
//   return (
//     <motion.div 
//       className="text-center mb-20"
//       variants={textContainerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="mb-8">
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src="/icons/logo.svg"
//             alt="K.A Tech Logo"
//             width={120}
//             height={120}
//             className="mx-auto"
//           />
//         </motion.div>
//       </div>
//       
//       <div className="mb-6">
//         <AnimatedText text="Welcome to K.A Tech" />
//       </div>

//       <motion.p 
//         className="font-rubik text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
//         variants={textVariants}
//       >
//         Your one-stop platform for developer tools, streaming services, and technical insights
//       </motion.p>

//       <motion.div 
//         className="flex flex-wrap justify-center gap-4"
//         variants={textVariants}
//       >
//         <Button
//           variant="primary"
//           size="lg"
//           href="/tools"
//           icon={<Icon type="arrow-right" />}
//         >
//           Explore Tools
//         </Button>
//         <Button
//           variant="outline"
//           size="lg"
//           href="/about"
//         >
//           Learn More
//         </Button>
//       </motion.div>
//     </motion.div>
//   );
// }

