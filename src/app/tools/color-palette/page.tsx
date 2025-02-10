'use client';

import { useState } from 'react';
import ToolPageTemplate from '../../components/ToolPageTemplate';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

interface Color {
  hex: string;
  rgb: string;
  name: string;
}

interface Palette {
  colors: Color[];
  type: 'monochromatic' | 'analogous' | 'complementary' | 'triadic' | 'tetradic';
}

const generatePalette = (baseColor: string, type: Palette['type']): Color[] => {
  // Implementasi sederhana untuk demo
  const demoColors: Record<Palette['type'], Color[]> = {
    monochromatic: [
      { hex: '#442781', rgb: 'rgb(68, 39, 129)', name: 'Primary' },
      { hex: '#61459C', rgb: 'rgb(97, 69, 156)', name: 'Light' },
      { hex: '#2D1A56', rgb: 'rgb(45, 26, 86)', name: 'Dark' },
      { hex: '#8873B3', rgb: 'rgb(136, 115, 179)', name: 'Lighter' },
      { hex: '#1B0F33', rgb: 'rgb(27, 15, 51)', name: 'Darker' },
    ],
    analogous: [
      { hex: '#442781', rgb: 'rgb(68, 39, 129)', name: 'Primary' },
      { hex: '#812756', rgb: 'rgb(129, 39, 86)', name: 'Analogous 1' },
      { hex: '#2781AC', rgb: 'rgb(39, 129, 172)', name: 'Analogous 2' },
      { hex: '#9C4569', rgb: 'rgb(156, 69, 105)', name: 'Light 1' },
      { hex: '#4569AC', rgb: 'rgb(69, 105, 172)', name: 'Light 2' },
    ],
    complementary: [
      { hex: '#442781', rgb: 'rgb(68, 39, 129)', name: 'Primary' },
      { hex: '#814427', rgb: 'rgb(129, 68, 39)', name: 'Complement' },
      { hex: '#61459C', rgb: 'rgb(97, 69, 156)', name: 'Primary Light' },
      { hex: '#9C6145', rgb: 'rgb(156, 97, 69)', name: 'Complement Light' },
    ],
    triadic: [
      { hex: '#442781', rgb: 'rgb(68, 39, 129)', name: 'Primary' },
      { hex: '#278144', rgb: 'rgb(39, 129, 68)', name: 'Triad 1' },
      { hex: '#812744', rgb: 'rgb(129, 39, 68)', name: 'Triad 2' },
    ],
    tetradic: [
      { hex: '#442781', rgb: 'rgb(68, 39, 129)', name: 'Primary' },
      { hex: '#278144', rgb: 'rgb(39, 129, 68)', name: 'Tetrad 1' },
      { hex: '#812744', rgb: 'rgb(129, 39, 68)', name: 'Tetrad 2' },
      { hex: '#448127', rgb: 'rgb(68, 129, 39)', name: 'Tetrad 3' },
    ],
  };

  return demoColors[type];
};

export default function ColorPalettePage() {
  const [baseColor, setBaseColor] = useState('#442781');
  const [paletteType, setPaletteType] = useState<Palette['type']>('monochromatic');
  const [palette, setPalette] = useState<Color[]>(generatePalette(baseColor, paletteType));
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleGeneratePalette = () => {
    const newPalette = generatePalette(baseColor, paletteType);
    setPalette(newPalette);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <ToolPageTemplate
      title="Color Palette Generator"
      description="Generate beautiful color palettes for your designs"
    >
      <div className="space-y-8">
        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Base Color:
            </label>
            <div className="flex gap-4">
              <div className="relative group">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="h-10 w-20 cursor-pointer rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
                <div className="absolute inset-0 rounded border-2 border-transparent group-hover:border-[#442781] dark:group-hover:border-[#61459C] transition-colors pointer-events-none" />
              </div>
              <input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="flex-1 px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Palette Type:
            </label>
            <select
              value={paletteType}
              onChange={(e) => setPaletteType(e.target.value as Palette['type'])}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#442781] dark:focus:ring-[#61459C] focus:border-transparent"
            >
              <option value="monochromatic">Monochromatic</option>
              <option value="analogous">Analogous</option>
              <option value="complementary">Complementary</option>
              <option value="triadic">Triadic</option>
              <option value="tetradic">Tetradic</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          variant="primary"
          onClick={handleGeneratePalette}
          icon={<Icon type="play" />}
          className="w-full sm:w-auto"
        >
          Generate Palette
        </Button>

        {/* Color Palette */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {palette.map((color) => (
            <div
              key={color.hex}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div
                className="h-32 w-full transition-transform group-hover:scale-105 duration-300"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4">
                <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-2">
                  {color.name}
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="w-full text-left px-3 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors relative overflow-hidden group/button"
                  >
                    {color.hex}
                    <span className={`absolute inset-0 flex items-center justify-center bg-[#442781] text-white text-xs font-rubik transition-transform duration-200 ${
                      copiedColor === color.hex ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                      Copied!
                    </span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="w-full text-left px-3 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors relative overflow-hidden group/button"
                  >
                    {color.rgb}
                    <span className={`absolute inset-0 flex items-center justify-center bg-[#442781] text-white text-xs font-rubik transition-transform duration-200 ${
                      copiedColor === color.rgb ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                      Copied!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            onClick={() => {
              const text = palette
                .map(c => `${c.name}: ${c.hex} (${c.rgb})`)
                .join('\n');
              copyToClipboard(text);
            }}
            className="flex-1 sm:flex-none justify-center"
          >
            Copy All Colors
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const css = palette
                .map(c => `--color-${c.name.toLowerCase()}: ${c.hex};`)
                .join('\n');
              copyToClipboard(css);
            }}
            className="flex-1 sm:flex-none justify-center"
          >
            Export as CSS Variables
          </Button>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 