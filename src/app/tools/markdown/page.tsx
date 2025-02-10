'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import ReactMarkdown from 'react-markdown';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const defaultMarkdown = `# Welcome to Markdown Editor

## Basic Syntax Guide

### Headers
# H1
## H2
### H3

### Emphasis
*italic* or _italic_
**bold** or __bold__
***bold and italic***

### Lists
1. First item
2. Second item
3. Third item

- Unordered item
- Another item
  - Sub-item
  - Another sub-item

### Links and Images
[Visit our website](https://example.com)
![Alt text](https://via.placeholder.com/150)

### Code
Inline \`code\` looks like this.

\`\`\`javascript
// Code block
function hello() {
  console.log('Hello, World!');
}
\`\`\`

### Blockquotes
> This is a blockquote
> It can span multiple lines

### Tables
| Header 1 | Header 2 |
|----------|----------|
| Cell 1    | Cell 2    |
| Cell 3    | Cell 4    |
`;

export default function MarkdownEditorPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
  };

  const handleClear = () => {
    setMarkdown('');
  };

  const handleReset = () => {
    setMarkdown(defaultMarkdown);
  };

  return (
    <ToolPageTemplate
      title="Markdown Editor"
      description="Write and preview markdown in real-time with our interactive editor"
    >
      <div className="space-y-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Toggle Buttons */}
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
            <button
              onClick={() => setIsPreviewMode(false)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2
                transition-colors duration-200
                ${!isPreviewMode 
                  ? 'bg-white dark:bg-gray-700 text-[#442781] dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
            >
              <Icon type="edit" className="w-4 h-4" />
              Editor
            </button>
            <button
              onClick={() => setIsPreviewMode(true)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2
                transition-colors duration-200
                ${isPreviewMode 
                  ? 'bg-white dark:bg-gray-700 text-[#442781] dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
            >
              <Icon type="eye" className="w-4 h-4" />
              Preview
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              icon={<Icon type="external" className="w-4 h-4" />}
            >
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClear}
              icon={<Icon type="trash" className="w-4 h-4" />}
            >
              Clear
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              icon={<Icon type="refresh" className="w-4 h-4" />}
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Editor/Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-300px)] min-h-[500px]">
          {/* Editor */}
          <div className={`${isPreviewMode ? 'hidden lg:block' : ''}`}>
            <div className="h-full flex flex-col">
              <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
                Markdown Input:
              </label>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="flex-1 w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent resize-none"
                placeholder="Write your markdown here..."
              />
            </div>
          </div>

          {/* Preview */}
          <div className={`${!isPreviewMode ? 'hidden lg:block' : ''}`}>
            <div className="h-full flex flex-col">
              <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
                Preview:
              </label>
              <div className="flex-1 w-full p-4 overflow-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg prose dark:prose-invert max-w-none prose-sm sm:prose-base">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        {/* Character Count */}
        <div className="text-right">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {markdown.length} characters
          </span>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 