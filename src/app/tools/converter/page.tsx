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

// Tambahkan tipe untuk convertToYaml
interface YamlObject {
  [key: string]: YamlObject | string | number | boolean | null;
}

export default function FormatConverterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [conversion, setConversion] = useState<ConversionOption>({
    from: 'json',
    to: 'yaml'
  });
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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

  const convertToYaml = (obj: YamlObject, indent: number = 0): string => {
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
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPageTemplate
      title="Format Converter"
      description="Convert between different data formats easily"
    >
      <div className="space-y-6">
        {/* Format Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* From Format */}
          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              From:
            </label>
            <div className="relative">
              <select
                value={conversion.from}
                onChange={(e) => setConversion(prev => ({ ...prev, from: e.target.value as FormatType }))}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent capitalize appearance-none"
              >
                {formatOptions.map(format => (
                  <option key={format} value={format} className="capitalize">
                    {format.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon type="chevron-down" className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          {/* To Format */}
          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              To:
            </label>
            <div className="relative">
              <select
                value={conversion.to}
                onChange={(e) => setConversion(prev => ({ ...prev, to: e.target.value as FormatType }))}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent capitalize appearance-none"
              >
                {formatOptions.map(format => (
                  <option key={format} value={format} className="capitalize">
                    {format.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon type="chevron-down" className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Input/Output Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Input:
            </label>
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Enter your ${conversion.from.toUpperCase()} here...`}
                className="w-full h-[300px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent resize-none"
              />
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setInput('')}
                className="absolute top-2 right-2"
                icon={<Icon type="trash" className="w-4 h-4" />}
              >
                Clear
              </Button>
            </div>
          </div>

          {/* Output */}
          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Output:
            </label>
            <div className="relative">
              <pre className="w-full h-[300px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto whitespace-pre-wrap break-words">
                {output}
              </pre>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(output)}
                className="absolute top-2 right-2"
                icon={<Icon type="external" className="w-4 h-4" />}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={handleConvert}
            icon={<Icon type="play" className="w-4 h-4" />}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Convert
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

        {/* Format Info */}
        <div className="p-4 bg-[#442781]/5 dark:bg-[#442781]/10 rounded-lg">
          <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-2">
            Supported Formats
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {formatOptions.map((format) => (
              <div
                key={format}
                className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-center"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {format}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 