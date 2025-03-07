
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CornerUpRight, Search, Sparkles } from 'lucide-react';

interface SearchHistoryItemProps {
  query: string;
  timestamp: string;
  filterTags?: string[];
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  query,
  timestamp,
  filterTags = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleRerun = () => {
    // Would navigate to search results with the query
    console.log(`Re-running search for: ${query}`);
    // Example: navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div 
      className="relative overflow-hidden p-5 rounded-xl mb-3 dark:bg-black/20 bg-white/10 backdrop-blur-sm border border-white/10 dark:border-white/5 flex justify-between items-center group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: isHovered ? 
          'linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' : 
          'none'
      }}
    >
      {/* Funky geometric decorations */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-purple-600/10 to-songhunt-red/10 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -top-8 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-teal-400/10 rounded-full blur-xl"></div>
      
      <div className="flex items-center relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-songhunt-red to-purple-600 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-glow">
          <Search className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-medium text-lg flex items-center">
            {query}
            {isHovered && <Sparkles className="h-4 w-4 ml-2 text-yellow-400 animate-pulse" />}
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 relative z-10">
        {filterTags.length > 0 && (
          <div className="hidden md:flex flex-wrap gap-1">
            {filterTags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 backdrop-blur-sm border border-white/10 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <button 
          onClick={handleRerun}
          className="text-songhunt-red p-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-all shadow-lg group-hover:shadow-glow-red"
        >
          <CornerUpRight className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'rotate-0' : '-rotate-12'}`} />
        </button>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
