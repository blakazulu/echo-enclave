
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MoreHorizontal } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface PlaylistCardProps {
  title: string;
  songsCount: number;
  date: string;
  coverImages: string[];
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  title,
  songsCount,
  date,
  coverImages = []
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default placeholder images from Unsplash
  const placeholderImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60"
  ];

  // Take up to 4 cover images, or use placeholder images if needed
  const displayCovers = [...coverImages];
  
  // Fill with placeholders if less than 4
  while (displayCovers.length < 4) {
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    displayCovers.push(placeholderImages[randomIndex]);
  }

  return (
    <Card 
      className="card-hover overflow-hidden dark:bg-songhunt-dark-card bg-songhunt-light-card border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <div className="grid grid-cols-2 grid-rows-2">
            {displayCovers.map((cover, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src={cover} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
              <button className="bg-songhunt-red text-white px-4 py-2 rounded-full hover:bg-songhunt-red-hover transition-colors">
                Open Playlist
              </button>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold truncate">{title}</h3>
              <p className="text-sm text-muted-foreground">{songsCount} songs • {date}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Export Playlist
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Delete Playlist
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
