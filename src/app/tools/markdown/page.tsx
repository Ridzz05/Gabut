'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditorPage() {
  const [markdown, setMarkdown] = useState('');

  return (
    <ToolPageTemplate
      title="Markdown Editor"
      description="Write and preview markdown in real-time with our interactive editor"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div>
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
            Markdown Input:
          </label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-[500px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
            placeholder="Write your markdown here..."
          />
        </div>

        {/* Preview */}
        <div>
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
            Preview:
          </label>
          <div className="w-full h-[500px] p-4 overflow-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg prose dark:prose-invert max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 