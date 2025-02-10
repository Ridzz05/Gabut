import PageTemplate from '../components/PageTemplate';
import { ToolsHeader } from './components/ToolsHeader';
import { ToolsGrid } from './components/ToolsGrid';
import { FeaturedTool } from './components/FeaturedTool';
import type { Tool } from './types';

const tools: Tool[] = [
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
    status: "Available"
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
    status: "Available"
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
    status: "Available"
  }
];

export default function ToolsPage() {
  return (
    <PageTemplate>
      <ToolsHeader />
      <ToolsGrid tools={tools} />
      <FeaturedTool />
      
      {/* Coming Soon */}
      <div className="mt-16 text-center">
        <p className="font-rubik text-sm text-gray-600 dark:text-gray-400">
          More developer tools are on the way. Stay tuned for updates!
        </p>
      </div>
    </PageTemplate>
  );
} 