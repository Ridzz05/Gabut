'use client';

import { useState, useEffect } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

interface Match {
  text: string;
  index: number;
  groups: { [key: string]: string } | null;
}

interface RegexFlags {
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

  const getFlags = () => {
    return Object.entries(flags)
      .filter(([_, value]) => value)
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

  const handleTest = () => {
    try {
      setError(null);
      if (!pattern) {
        setMatches([]);
        setReplacementResult('');
        return;
      }

      const regex = new RegExp(pattern, getFlags());
      const matches: Match[] = [];
      let match;

      if (flags.global) {
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
  };

  useEffect(() => {
    handleTest();
  }, [pattern, testString, flags, replacementText]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
          <div className="flex gap-4">
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="flex-1 px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
            />
            <Button
              variant="secondary"
              onClick={() => copyToClipboard(pattern)}
              icon={<Icon type="external" />}
            >
              Copy
            </Button>
          </div>
        </div>

        {/* Flags */}
        <div className="flex flex-wrap gap-4">
          {Object.entries(flags).map(([key, value]) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={value}
                onChange={() => setFlags(prev => ({ ...prev, [key]: !prev[key] }))}
                className="w-4 h-4 text-[#442781] dark:text-[#61459C] rounded border-gray-300 dark:border-gray-600"
              />
              <span className="font-rubik text-sm text-gray-700 dark:text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </span>
            </label>
          ))}
        </div>

        {/* Test String */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Test String:
          </label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter text to test against..."
            className="w-full h-32 p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
          />
        </div>

        {/* Replacement */}
        <div className="space-y-2">
          <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
            Replacement Text (optional):
          </label>
          <input
            type="text"
            value={replacementText}
            onChange={(e) => setReplacementText(e.target.value)}
            placeholder="Enter replacement text..."
            className="w-full px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
          />
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
                <div className="space-y-2">
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
                          onClick={() => copyToClipboard(match.text)}
                          icon={<Icon type="external" />}
                        >
                          Copy
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
                    onClick={() => copyToClipboard(replacementResult)}
                    icon={<Icon type="external" />}
                  >
                    Copy
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