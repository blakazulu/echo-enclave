
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CornerUpRight, Search } from 'lucide-react';

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
      className="p-4 rounded-lg mb-2 song-entry-hover dark:bg-songhunt-dark-card/80 bg-songhunt-light-card/80 flex justify-between items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-songhunt-red/10 flex items-center justify-center mr-3">
          <Search className="h-5 w-5 text-songhunt-red" />
        </div>
        <div>
          <p className="font-medium">{query}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {filterTags.length > 0 && (
          <div className="hidden md:flex space-x-1">
            {filterTags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <button 
          onClick={handleRerun}
          className={`text-songhunt-red hover:text-songhunt-red-hover transition-all p-2 rounded-full ${isHovered ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
        >
          <CornerUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
