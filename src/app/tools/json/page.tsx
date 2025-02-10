'use client';

import { useState } from 'react';
import Link from 'next/link';

const defaultJson = `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "gaming", "coding"]
}`;

export default function JsonValidator() {
  const [jsonInput, setJsonInput] = useState(defaultJson);
  const [error, setError] = useState('');
  const [formatted, setFormatted] = useState('');

  const validateAndFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setFormatted(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setFormatted('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatted || jsonInput);
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
            JSON Validator
          </h1>
          <p className="font-rubik text-gray-600">
            Validate and format JSON data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-raleway font-semibold text-lg">Input JSON</h2>
              <button
                onClick={validateAndFormat}
                className="px-4 py-2 bg-[#442781] text-white rounded-lg font-rubik text-sm hover:bg-[#61459C] transition-colors"
              >
                Validate & Format
              </button>
            </div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-[500px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#442781] font-mono text-sm resize-none"
              placeholder="Paste your JSON here..."
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-raleway font-semibold text-lg">Result</h2>
              <button
                onClick={handleCopy}
                className="px-4 py-2 border border-[#442781] text-[#442781] rounded-lg font-rubik text-sm hover:bg-[#442781] hover:text-white transition-colors"
              >
                Copy
              </button>
            </div>
            {error ? (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg font-mono text-sm">
                {error}
              </div>
            ) : formatted ? (
              <pre className="p-4 bg-gray-50 rounded-lg overflow-x-auto font-mono text-sm h-[500px]">
                {formatted}
              </pre>
            ) : (
              <div className="p-4 bg-gray-50 rounded-lg text-gray-500 font-rubik text-sm">
                Click "Validate & Format" to see the result
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 