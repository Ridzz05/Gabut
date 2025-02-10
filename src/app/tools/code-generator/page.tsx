'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const templates = {
  react: `import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}`,
  nextjs: `export default function Page() {
  return (
    <div>
      <h1>Next.js Page</h1>
    </div>
  );
}`,
  typescript: `interface Props {
  name: string;
}

export function greet({ name }: Props): string {
  return \`Hello, \${name}!\`;
}`
};

export default function CodeGeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('react');
  const [generatedCode, setGeneratedCode] = useState(templates.react);

  return (
    <ToolPageTemplate
      title="Code Generator"
      description="Generate boilerplate code for various frameworks and languages"
    >
      <div className="space-y-6">
        {/* Template Selection */}
        <div className="flex flex-wrap gap-3">
          {Object.keys(templates).map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? 'primary' : 'secondary'}
              onClick={() => {
                setSelectedTemplate(template);
                setGeneratedCode(templates[template as keyof typeof templates]);
              }}
              className="min-w-[120px] sm:min-w-[150px] justify-center"
            >
              {template.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Generated Code */}
        <div className="relative">
          <pre className="w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-x-auto min-h-[300px] sm:min-h-[400px]">
            <code className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">
              {generatedCode}
            </code>
          </pre>
          
          {/* Copy Button - Floating */}
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigator.clipboard.writeText(generatedCode)}
              className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow"
              icon={<Icon type="external" />}
            >
              Copy
            </Button>
          </div>
        </div>

        {/* Additional Options */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setGeneratedCode('')}
              className="whitespace-nowrap"
            >
              Clear Code
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setGeneratedCode(templates[selectedTemplate as keyof typeof templates])}
              className="whitespace-nowrap"
            >
              Reset Template
            </Button>
          </div>
          
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {generatedCode.length} characters
            </span>
          </div>
        </div>

        {/* Template Info */}
        <div className="p-4 bg-[#442781]/5 dark:bg-[#442781]/10 rounded-lg">
          <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-2">
            About this template
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {selectedTemplate === 'react' && 'A basic React functional component with TypeScript support.'}
            {selectedTemplate === 'nextjs' && 'A Next.js page component with built-in routing capabilities.'}
            {selectedTemplate === 'typescript' && 'A TypeScript function with interface definition and string manipulation.'}
          </p>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 