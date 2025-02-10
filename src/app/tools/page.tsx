'use client';

import { motion } from 'framer-motion';
import PageTemplate from '../components/PageTemplate';
import { ToolsHeader } from './components/ToolsHeader';
import { ToolsGrid } from './components/ToolsGrid';
import { FeaturedTool } from './components/FeaturedTool';
import type { Tool } from './types';

const tools: Tool[] = [
  {
    icon: "⚡",
    title: "JSON Validator",
    description: "Validasi dan format data JSON Anda dengan mudah",
    link: "/tools/json",
    status: "Available"
  },
  {
    icon: "🎨",
    title: "Color Palette",
    description: "Buat kombinasi warna yang menarik untuk proyek Anda",
    link: "/tools/color-palette",
    status: "Available"
  },
  {
    icon: "📝",
    title: "Markdown Editor",
    description: "Edit dan preview markdown dengan fitur real-time",
    link: "/tools/markdown",
    status: "Available"
  },
  {
    icon: "🔄",
    title: "Format Converter",
    description: "Konversi berbagai format data dengan mudah",
    link: "/tools/converter",
    status: "Available"
  },
  {
    icon: "💻",
    title: "Code Generator",
    description: "Generate kode boilerplate untuk berbagai framework",
    link: "/tools/code-generator",
    status: "Available"
  },
  {
    icon: "🔍",
    title: "Regex Tester",
    description: "Uji dan validasi ekspresi reguler Anda",
    link: "/tools/regex",
    status: "Coming Soon"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function ToolsPage() {
  return (
    <PageTemplate>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <ToolsHeader />

        {/* Featured Tool */}
        <FeaturedTool />

        {/* Tools Grid */}
        <section className="mt-20">
          <motion.h2 
            className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Semua Tools
          </motion.h2>
          <ToolsGrid tools={tools} />
        </section>

        {/* Categories Section */}
        <motion.section 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#442781]/5 to-[#61459C]/5 dark:from-[#442781]/10 dark:to-[#61459C]/10 rounded-2xl p-8">
            <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-8">
              Kategori
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Formatting", count: 3 },
                { name: "Conversion", count: 2 },
                { name: "Generation", count: 2 },
                { name: "Validation", count: 1 },
                { name: "Testing", count: 1 },
                { name: "Utilities", count: 3 }
              ].map((category) => (
                <motion.div
                  key={category.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="font-rubik text-sm text-[#442781] dark:text-[#61459C]">
                    {category.count} tools
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          className="mt-20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
            <h2 className="font-raleway font-bold text-2xl text-gray-800 dark:text-white mb-4">
              Dapatkan Update Tools Terbaru
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan informasi tentang tools dan fitur baru
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
              />
              <button className="px-6 py-2 bg-[#442781] hover:bg-[#61459C] text-white rounded-lg transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </PageTemplate>
  );
} 