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

  const handleGeneratePalette = () => {
    const newPalette = generatePalette(baseColor, paletteType);
    setPalette(newPalette);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolPageTemplate
      title="Color Palette Generator"
      description="Generate beautiful color palettes for your designs"
    >
      <div className="space-y-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Base Color:
            </label>
            <div className="flex gap-4">
              <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="h-10 w-20 rounded border border-gray-200 dark:border-gray-700"
              />
              <input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="flex-1 px-4 py-2 font-mono text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="block font-rubik text-sm text-gray-700 dark:text-gray-300">
              Palette Type:
            </label>
            <select
              value={paletteType}
              onChange={(e) => setPaletteType(e.target.value as Palette['type'])}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
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
        >
          Generate Palette
        </Button>

        {/* Color Palette */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {palette.map((color) => (
            <div
              key={color.hex}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div
                className="h-32 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-2">
                  {color.name}
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="w-full text-left px-2 py-1 font-mono text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {color.hex}
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="w-full text-left px-2 py-1 font-mono text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {color.rgb}
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => copyToClipboard(color.hex)}
                >
                  Copy Color
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              const text = palette
                .map(c => `${c.name}: ${c.hex} (${c.rgb})`)
                .join('\n');
              copyToClipboard(text);
            }}
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
          >
            Export as CSS Variables
          </Button>
        </div>
      </div>
    </ToolPageTemplate>
  );
} 