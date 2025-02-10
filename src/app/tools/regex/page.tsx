'use client';

import { useState, useEffect, useCallback } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

interface Match {
  text: string;
  index: number;
  groups: { [key: string]: string } | null;
}

interface RegexFlags {
  [key: string]: boolean;
  global: boolean;
  multiline: boolean;
  caseInsensitive: boolean;
  unicode: boolean;
  sticky: boolean;
  dotAll: boolean;
}

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState<RegexFlags>({
    global: true,
    multiline: false,
    caseInsensitive: false,
    unicode: false,
    sticky: false,
    dotAll: false
  });
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [replacementText, setReplacementText] = useState('');
  const [replacementResult, setReplacementResult] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleTest = useCallback(() => {
    try {
      setError(null);
      if (!pattern) {
        setMatches([]);
        setReplacementResult('');
        return;
      }

      const getFlags = () => {
        return Object.entries(flags)
          .filter(([, value]) => value)
          .map(([key]) => {
            switch (key) {
              case 'global': return 'g';
              case 'multiline': return 'm';
              case 'caseInsensitive': return 'i';
              case 'unicode': return 'u';
              case 'sticky': return 'y';
              case 'dotAll': return 's';
              default: return '';
            }
          })
          .join('');
      };

      const currentFlags = getFlags();
      const regex = new RegExp(pattern, currentFlags);
      const matches: Match[] = [];
      let match;

      if (currentFlags.includes('g')) {
        while ((match = regex.exec(testString)) !== null) {
          matches.push({
            text: match[0],
            index: match.index,
            groups: match.groups || null
          });
        }
      } else {
        match = regex.exec(testString);
        if (match) {
          matches.push({
            text: match[0],
            index: match.index,
            groups: match.groups || null
          });
        }
      }

      setMatches(matches);

      // Handle replacement
      if (replacementText) {
        const replaced = testString.replace(regex, replacementText);
        setReplacementResult(replaced);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid regular expression');
      setMatches([]);
      setReplacementResult('');
    }
  }, [pattern, testString, replacementText, flags]);

  useEffect(() => {
    handleTest();
  }, [handleTest]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ToolPageTemplate
      title="Regex Tester"
      description="Test and debug your regular expressions in real-time"
    >
      <div className="space-y-6">
        {/* Pattern Input */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Regular Expression:
          </label>
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter regex pattern..."
                className="w-full px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
              />
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(pattern, 'pattern')}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                icon={<Icon type="external" className="w-4 h-4" />}
              >
                {copied === 'pattern' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-4">
            Regex Flags
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(flags).map(([key, value]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => setFlags(prev => ({ ...prev, [key]: !prev[key] }))}
                  className="w-4 h-4 text-[#442781] dark:text-[#61459C] rounded border-gray-300 dark:border-gray-600 focus:ring-[#442781] dark:focus:ring-[#61459C]"
                />
                <span className="font-rubik text-sm text-gray-700 dark:text-gray-300 capitalize group-hover:text-[#442781] dark:group-hover:text-[#61459C] transition-colors">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Test String */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Test String:
          </label>
          <div className="relative">
            <textarea
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              placeholder="Enter text to test against..."
              className="w-full h-[200px] p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent resize-none"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setTestString('')}
              className="absolute top-2 right-2"
              icon={<Icon type="trash" className="w-4 h-4" />}
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Replacement */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Replacement Text (optional):
          </label>
          <div className="relative">
            <input
              type="text"
              value={replacementText}
              onChange={(e) => setReplacementText(e.target.value)}
              placeholder="Enter replacement text..."
              className="w-full px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setReplacementText('')}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              icon={<Icon type="trash" className="w-4 h-4" />}
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-400 font-rubik text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Results */}
        {!error && (
          <div className="space-y-6">
            {/* Matches */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-raleway font-semibold text-gray-800 dark:text-white">
                  Matches ({matches.length})
                </h3>
              </div>
              {matches.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matches.map((match, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                          Match {index + 1} at index {match.index}
                        </span>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => copyToClipboard(match.text, `match-${index}`)}
                          icon={<Icon type="external" className="w-4 h-4" />}
                        >
                          {copied === `match-${index}` ? 'Copied!' : 'Copy'}
                        </Button>
                      </div>
                      <pre className="font-mono text-sm bg-white dark:bg-gray-900 p-2 rounded">
                        {match.text}
                      </pre>
                      {match.groups && Object.keys(match.groups).length > 0 && (
                        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="font-rubik text-sm text-gray-700 dark:text-gray-300 mb-2">
                            Groups:
                          </h4>
                          {Object.entries(match.groups).map(([name, value]) => (
                            <div key={name} className="flex items-center gap-2 text-sm">
                              <span className="font-mono text-[#442781] dark:text-[#61459C]">
                                {name}:
                              </span>
                              <span className="font-mono">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No matches found
                </p>
              )}
            </div>

            {/* Replacement Result */}
            {replacementText && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-raleway font-semibold text-gray-800 dark:text-white">
                    Replacement Result
                  </h3>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => copyToClipboard(replacementResult, 'replacement')}
                    icon={<Icon type="external" className="w-4 h-4" />}
                  >
                    {copied === 'replacement' ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
                <pre className="w-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-auto">
                  {replacementResult}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
} 