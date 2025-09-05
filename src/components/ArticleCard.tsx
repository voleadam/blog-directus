import React from 'react';

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  href?: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  category,
  title,
  excerpt,
  readTime,
  href = "#",
  className = ""
}) => {
  return (
    <article className={`group cursor-pointer ${className}`}>
      <a href={href} className="block focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-4 rounded-lg">
        <div className="overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {category}
            </span>
            <span className="text-xs text-neutral-400">
              {readTime}
            </span>
          </div>
          
          <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-accent-blue transition-colors duration-200 leading-tight">
            {title}
          </h2>
          
          <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          
          <div className="pt-2">
            <span className="text-sm font-medium text-accent-blue group-hover:underline">
              Read more
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;