
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

  // High-quality fallback images from Spotify album covers
  const placeholderImages = [
    "https://i.scdn.co/image/ab67616d0000b273533fd0b248052d04e6b732c0",
    "https://i.scdn.co/image/ab67616d0000b2731eb7f3544e11371f29e90329",
    "https://i.scdn.co/image/ab67616d0000b273c9af158f7aee15db6302b7a2",
    "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4866eaeb7ce9c",
    "https://i.scdn.co/image/ab67616d0000b273fa2f0a0323d9c57e7a21c92e",
    "https://i.scdn.co/image/ab67616d0000b27358bf3c13ddd61b9fb166130b",
    "https://i.scdn.co/image/ab67616d0000b2733b11010b1a5c4cd7e5fae71c",
    "https://i.scdn.co/image/ab67616d0000b273ca56f17b9e93f4629c036d64"
  ];

  // Create a copy of the coverImages array
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
                  onError={(e) => {
                    // If image fails to load, replace with a fallback
                    e.currentTarget.src = placeholderImages[index % placeholderImages.length];
                  }}
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
