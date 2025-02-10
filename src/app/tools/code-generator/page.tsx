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
        <div className="flex gap-4">
          {Object.keys(templates).map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? 'primary' : 'secondary'}
              onClick={() => {
                setSelectedTemplate(template);
                setGeneratedCode(templates[template as keyof typeof templates]);
              }}
            >
              {template.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Generated Code */}
        <div>
          <pre className="w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">
              {generatedCode}
            </code>
          </pre>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => navigator.clipboard.writeText(generatedCode)}
            icon={<Icon type="external" />}
          >
            Copy to Clipboard
          </Button>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 