
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

  // Take up to 4 cover images
  const displayCovers = coverImages.slice(0, 4);
  
  // Fill with placeholders if less than 4
  while (displayCovers.length < 4) {
    displayCovers.push('/placeholder.svg');
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
