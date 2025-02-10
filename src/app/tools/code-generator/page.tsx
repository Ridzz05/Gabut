'use client';

import { useState } from 'react';
import Link from 'next/link';

const languages = ['JavaScript', 'TypeScript', 'Python', 'React Component'];
const templates = {
  JavaScript: `// JavaScript Function Template
function functionName(params) {
  // Your code here
  return;
}`,
  TypeScript: `// TypeScript Function Template
interface Params {
  // Define your params here
}

function functionName(params: Params): ReturnType {
  // Your code here
  return;
}`,
  Python: `# Python Function Template
def function_name(params):
    # Your code here
    return`,
  'React Component': `// React Component Template
import React from 'react';

interface Props {
  // Define your props here
}

export default function ComponentName({ }: Props) {
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`
};

export default function CodeGenerator() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [code, setCode] = useState(templates[languages[0]]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

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
            Code Generator
          </h1>
          <p className="font-rubik text-gray-600">
            Generate boilerplate code for various programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-raleway font-semibold text-lg mb-4">Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-rubik text-sm text-gray-600 mb-2">
                    Language
                  </label>
                  <select
                    value={selectedLang}
                    onChange={(e) => {
                      setSelectedLang(e.target.value);
                      setCode(templates[e.target.value]);
                    }}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442781] font-rubik text-sm"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-raleway font-semibold text-lg">Generated Code</h2>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#442781] text-white rounded-lg font-rubik text-sm hover:bg-[#61459C] transition-colors"
                >
                  Copy Code
                </button>
              </div>
              <div className="relative">
                <pre className="p-4 bg-gray-50 rounded-lg overflow-x-auto font-mono text-sm">
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 