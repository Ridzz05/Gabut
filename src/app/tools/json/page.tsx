'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

export default function JSONValidatorPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [result, setResult] = useState<{ valid: boolean; formatted?: string; error?: string }>({ valid: true });

  const validateJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setResult({
        valid: true,
        formatted: JSON.stringify(parsed, null, 2)
      });
    } catch (error) {
      setResult({
        valid: false,
        error: (error as Error).message
      });
    }
  };

  return (
    <ToolPageTemplate
      title="JSON Validator"
      description="Validate and format your JSON data with our powerful JSON validator tool"
    >
      <div className="space-y-6">
        {/* Input Section */}
        <div>
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
            Enter JSON:
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
            placeholder="Paste your JSON here..."
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={validateJSON}
            icon={<Icon type="play" />}
          >
            Validate & Format
          </Button>
          <Button
            variant="secondary"
            onClick={() => setJsonInput('')}
          >
            Clear
          </Button>
        </div>

        {/* Result Section */}
        {(result.formatted || result.error) && (
          <div className={`mt-6 p-4 rounded-lg ${
            result.valid 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <h3 className={`font-raleway font-semibold mb-2 ${
              result.valid
                ? 'text-green-800 dark:text-green-400'
                : 'text-red-800 dark:text-red-400'
            }`}>
              {result.valid ? 'Valid JSON' : 'Invalid JSON'}
            </h3>
            <pre className={`font-mono text-sm whitespace-pre-wrap ${
              result.valid
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}>
              {result.formatted || result.error}
            </pre>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
} 