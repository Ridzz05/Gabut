'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

type FormatType = 'json' | 'yaml' | 'xml' | 'csv' | 'base64';

interface ConversionOption {
  from: FormatType;
  to: FormatType;
}

const formatOptions: FormatType[] = ['json', 'yaml', 'xml', 'csv', 'base64'];

export default function FormatConverterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [conversion, setConversion] = useState<ConversionOption>({
    from: 'json',
    to: 'yaml'
  });
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      setError(null);
      // Implementasi dasar untuk demo
      let result = '';
      
      // Parse input berdasarkan format asal
      let parsedData;
      switch (conversion.from) {
        case 'json':
          parsedData = JSON.parse(input);
          break;
        case 'base64':
          parsedData = atob(input);
          break;
        default:
          throw new Error('Format konversi belum diimplementasikan');
      }

      // Convert ke format tujuan
      switch (conversion.to) {
        case 'json':
          result = JSON.stringify(parsedData, null, 2);
          break;
        case 'yaml':
          result = convertToYaml(parsedData);
          break;
        case 'base64':
          result = btoa(JSON.stringify(parsedData));
          break;
        default:
          throw new Error('Format konversi belum diimplementasikan');
      }

      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan konversi');
    }
  };

  const convertToYaml = (obj: any, indent: number = 0): string => {
    const spaces = ' '.repeat(indent);
    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return `${spaces}${key}:\n${convertToYaml(value, indent + 2)}`;
        }
        return `${spaces}${key}: ${value}`;
      })
      .join('\n');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolPageTemplate
      title="Format Converter"
      description="Convert between different data formats easily"
    >
      <div className="space-y-6">
        {/* Format Selection */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              From:
            </label>
            <select
              value={conversion.from}
              onChange={(e) => setConversion(prev => ({ ...prev, from: e.target.value as FormatType }))}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg capitalize"
            >
              {formatOptions.map(format => (
                <option key={format} value={format} className="capitalize">
                  {format.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex items-end justify-center">
            <Button
              variant="secondary"
              onClick={() => setConversion(prev => ({ from: prev.to, to: prev.from }))}
              className="px-3"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </Button>
          </div>

          <div className="flex-1 space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              To:
            </label>
            <select
              value={conversion.to}
              onChange={(e) => setConversion(prev => ({ ...prev, to: e.target.value as FormatType }))}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg capitalize"
            >
              {formatOptions.map(format => (
                <option key={format} value={format} className="capitalize">
                  {format.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Input:
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter your ${conversion.from.toUpperCase()} here...`}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={handleConvert}
            icon={<Icon type="play" />}
          >
            Convert
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setInput('');
              setOutput('');
              setError(null);
            }}
          >
            Clear
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-400 font-rubik text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Output */}
        {output && !error && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
                Output:
              </label>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(output)}
                icon={<Icon type="external" />}
              >
                Copy
              </Button>
            </div>
            <pre className="w-full h-64 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto">
              {output}
            </pre>
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
} 