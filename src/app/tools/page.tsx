import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    icon: "⚡",
    title: "Code Generator",
    description: "Generate boilerplate code for various programming languages",
    link: "/tools/code-generator",
    status: "Available"
  },
  {
    icon: "🎨",
    title: "Color Palette",
    description: "Create and explore beautiful color combinations",
    link: "/tools/color-palette",
    status: "Coming Soon"
  },
  {
    icon: "📝",
    title: "Markdown Editor",
    description: "Write and preview markdown in real-time",
    link: "/tools/markdown",
    status: "Available"
  },
  {
    icon: "🔄",
    title: "Format Converter",
    description: "Convert between different data formats",
    link: "/tools/converter",
    status: "Coming Soon"
  },
  {
    icon: "📊",
    title: "JSON Validator",
    description: "Validate and format JSON data",
    link: "/tools/json",
    status: "Available"
  },
  {
    icon: "🔍",
    title: "Regex Tester",
    description: "Test and debug regular expressions",
    link: "/tools/regex",
    status: "Coming Soon"
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-raleway font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Developer Tools & Utilities
          </h1>
          <p className="font-rubik text-gray-600 max-w-2xl mx-auto">
            A collection of useful tools to help streamline your development workflow. 
            Choose from our variety of utilities designed to make your work easier.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    tool.status === "Available" 
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <h3 className="font-raleway font-semibold text-xl text-gray-800 mb-2">
                  {tool.title}
                </h3>
                <p className="font-rubik text-sm text-gray-600 mb-4">
                  {tool.description}
                </p>
                <Link
                  href={tool.link}
                  className={`inline-flex items-center text-sm font-medium ${
                    tool.status === "Available"
                      ? "text-[#442781] hover:text-[#61459C]"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Try it now
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      tool.status === "Available" ? "text-[#442781]" : "text-gray-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#442781]/0 to-[#442781]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="font-raleway font-semibold text-2xl text-gray-800 mb-4">
            More Tools Coming Soon
          </h2>
          <p className="font-rubik text-gray-600">
            We're constantly working on new tools to help improve your development experience.
            Stay tuned for updates!
          </p>
        </div>
      </main>
    </div>
  );
} 