'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const defaultMarkdown = `# Welcome to Markdown Editor

## Basic Syntax

### Headers
# H1
## H2
### H3

### Emphasis
*italic* or _italic_
**bold** or __bold__
***bold italic*** or ___bold italic___

### Lists
1. First item
2. Second item
3. Third item

- Unordered item
- Another item
- And another

### Links
[Visit our website](https://example.com)

### Code
\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

### Blockquotes
> This is a blockquote
> Multiple lines
`;

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/tools"
          className="inline-flex items-center text-[#442781] hover:text-[#61459C] mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-rubik">Back to Tools</span>
        </Link>

        <div className="mb-8">
          <h1 className="font-raleway font-bold text-3xl text-gray-800 mb-4">
            Markdown Editor
          </h1>
          <p className="font-rubik text-gray-600">
            Write and preview markdown in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-raleway font-semibold text-lg mb-4">Editor</h2>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-[600px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442781] font-mono text-sm resize-none"
              placeholder="Write your markdown here..."
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-raleway font-semibold text-lg mb-4">Preview</h2>
            <div className="prose max-w-none h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 