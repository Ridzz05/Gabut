import PageTemplate from '../components/PageTemplate';
import { ContactHeader } from './components/ContactHeader';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export default function ContactPage() {
  return (
    <PageTemplate>
      <ContactHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="lg:col-span-1">
          <ContactInfo />
        </div>
      </div>
    </PageTemplate>
  );
} 