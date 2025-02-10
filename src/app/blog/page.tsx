import { BlogSidebar } from './components/BlogSidebar';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Konten blog utama di sini */}
      </div>
      
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <BlogSidebar />
      </aside>
    </div>
  );
} 