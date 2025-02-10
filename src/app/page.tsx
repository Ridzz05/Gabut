import PageTemplate from './components/PageTemplate';
import { HeroSection } from './components/HeroSection';
import { HomeFeatures } from './components/HomeFeatures';
import { HomeHighlights } from './components/HomeHighlights';

export default function HomePage() {
  return (
    <PageTemplate>
      <HeroSection />
      <HomeFeatures />
      <HomeHighlights />
    </PageTemplate>
  );
}
