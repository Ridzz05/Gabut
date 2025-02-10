import PageTemplate from '../components/PageTemplate';
import { PlaygroundHeader } from './components/PlaygroundHeader';
import { StreamingServices } from './components/StreamingServices';
import { FeaturedStream } from './components/FeaturedStream';

export default function PlaygroundPage() {
  return (
    <PageTemplate>
      <PlaygroundHeader />
      <StreamingServices />
      <FeaturedStream />
    </PageTemplate>
  );
} 