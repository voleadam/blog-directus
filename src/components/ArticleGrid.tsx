import React from 'react';
import BlogCard from './BlogCard';
import SocialCard from './SocialCard';
import { useBlogs } from '../hooks/useBlogs';


const ArticleGrid: React.FC = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-neutral-200 h-64 rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="bg-neutral-200 h-4 w-20 rounded"></div>
                <div className="bg-neutral-200 h-6 w-full rounded"></div>
                <div className="bg-neutral-200 h-4 w-full rounded"></div>
                <div className="bg-neutral-200 h-4 w-3/4 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading blogs: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600 text-lg">No published blogs yet.</p>
          <p className="text-neutral-500 text-sm mt-2">Check back soon for new content!</p>
        </div>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            className={index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}
          />
        ))}
        
        {/* Social Card positioned strategically in the grid */}
        {blogs.length > 4 && <SocialCard className="sm:col-span-2 lg:col-span-1" />}
      </div>
      )}
      
      {/* Load More Section */}
      {blogs.length > 0 && (
        <div className="text-center mt-16">
        <button className="inline-flex items-center px-8 py-3 border border-neutral-300 text-sm font-medium rounded-lg text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue transition-colors duration-200">
          Load more blogs
        </button>
      </div>
      )}
    </main>
  );
};

export default ArticleGrid;