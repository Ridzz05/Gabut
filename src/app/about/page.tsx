import PageTemplate from '../components/PageTemplate';
import { AboutHeader } from './components/AboutHeader';
import { AboutContent } from './components/AboutContent';
import { Stats } from './components/Stats';
import { Values } from './components/Values';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';

export default function AboutPage() {
  return (
    <PageTemplate>
      <AboutHeader />
      <AboutContent />
      <Stats />
      <Values />
      <TeamSection />
      <ContactSection />
    </PageTemplate>
  );
} 