import React from 'react';
import { Blog } from '../lib/supabase';

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, className = "" }) => {
  const formatReadTime = (content: string) => {
    if (!content || typeof content !== 'string') {
      return '1 min read';
    }
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Use picture from database or fallback to a placeholder
  const imageUrl = blog.picture_url || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';

  return (
    <article className={`group cursor-pointer ${className}`}>
      <a href={`#blog-${blog.id}`} className="block focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-4 rounded-lg">
        <div className="overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={imageUrl}
            alt={blog.Title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800';
            }}
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-neutral-400">
              {formatReadTime(blog.content_markdown)}
            </span>
          </div>
          
          <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-accent-blue transition-colors duration-200 leading-tight">
            {blog.Title}
          </h2>
          
          <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
          
          <div className="pt-2 flex items-center justify-between">
            <span className="text-sm font-medium text-accent-blue group-hover:underline">
              Read more
            </span>
            <div className="text-xs text-neutral-400">
              <span>By {blog.author}</span>
              <span className="ml-2">• {formatDate(blog.date_created)}</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;