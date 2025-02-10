import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    description: "Learn how to build modern web applications with Next.js 14 and its new features including Server Components, App Router, and more.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "John Doe",
      avatar: "/images/avatars/john.jpg"
    }
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    description: "Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "TypeScript",
    image: "/images/blog/typescript.jpg",
    author: {
      name: "Jane Smith",
      avatar: "/images/avatars/jane.jpg"
    }
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description: "Learn how to build beautiful user interfaces efficiently with Tailwind CSS utility-first approach.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "CSS",
    image: "/images/blog/tailwind.jpg",
    author: {
      name: "Mike Johnson",
      avatar: "/images/avatars/mike.jpg"
    }
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-raleway font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Blog & Articles
          </h1>
          <p className="font-rubik text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and best practices in web development, programming, and technology.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Web Development', 'TypeScript', 'JavaScript', 'CSS', 'React'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-rubik text-sm 
                ${category === 'All' 
                  ? 'bg-[#442781] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#442781]/10 text-[#442781] rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="font-raleway font-semibold text-xl text-gray-800 mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-[#442781] transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="font-rubik text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden">
                      {/* Uncomment when you have actual avatars */}
                      {/* <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <span className="font-rubik text-sm text-gray-600">
                      {post.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-[#442781] text-[#442781] rounded-lg font-rubik hover:bg-[#442781] hover:text-white transition-colors">
            Load More Articles
          </button>
        </div>
      </main>
    </div>
  );
} 