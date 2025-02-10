import PageTemplate from '../components/PageTemplate';
import { BlogHeader } from './components/BlogHeader';
import { BlogPosts } from './components/BlogPosts';
import { FeaturedPost } from './components/FeaturedPost';

export default function BlogPage() {
  return (
    <PageTemplate>
      <BlogHeader />
      <BlogPosts />
      <FeaturedPost />
    </PageTemplate>
  );
} 