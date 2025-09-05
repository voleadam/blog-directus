import React from 'react';
import { Twitter, ExternalLink } from 'lucide-react';

interface SocialCardProps {
  className?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ className = "" }) => {
  return (
    <article className={`group cursor-pointer ${className}`}>
      <a href="#" className="block h-full focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-4 rounded-lg">
        <div className="h-full bg-accent-blue rounded-lg p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Twitter className="h-8 w-8 text-white" />
              <ExternalLink className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white leading-tight">
                Follow us on Twitter for daily inspiration
              </h2>
              
              <p className="text-blue-100 text-sm leading-relaxed">
                Join our community of writers, designers, and dreamers. Get behind-the-scenes content, writing tips, and exclusive updates.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 mt-6">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-blue-100 text-sm">
                12.5k followers
              </span>
            </div>
            
            <div className="mt-4">
              <span className="text-white font-medium group-hover:underline">
                @thewriter
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default SocialCard;