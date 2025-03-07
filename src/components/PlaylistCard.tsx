
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MoreHorizontal, Play } from 'lucide-react';
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

  // Curated playlist images from provided URLs
  const curatedImages = [
    "https://mypart.s3.amazonaws.com/curated_playlists_images/fresh_start.webp",
    "https://mypart.s3.amazonaws.com/curated_playlists_images/entrepreneur_hustle+.webp",
    "https://mypart.s3.amazonaws.com/curated_playlists_images/gold_mine.webp",
    "https://mypart.s3.amazonaws.com/curated_playlists_images/back_to_school.webp"
  ];

  // High-quality fallback images from Spotify album covers (kept as backup)
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

  // Use provided covers if available, otherwise use curated images
  const displayCovers = [...coverImages];
  
  // Fill with curated images if less than 4
  while (displayCovers.length < 4) {
    const curatedIndex = displayCovers.length % curatedImages.length;
    displayCovers.push(curatedImages[curatedIndex]);
  }

  return (
    <Card 
      className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-black/20 dark:to-black/30 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Cover grid with funky clip-path and hover effects */}
          <div className="grid grid-cols-2 grid-rows-2 aspect-square overflow-hidden">
            {displayCovers.map((cover, index) => (
              <div 
                key={index} 
                className={`overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:brightness-75 ${
                  index === 0 ? 'group-hover:clip-path-circle-tr' :
                  index === 1 ? 'group-hover:clip-path-circle-tl' :
                  index === 2 ? 'group-hover:clip-path-circle-br' :
                  'group-hover:clip-path-circle-bl'
                }`}
                style={{
                  transform: isHovered ? `scale(1.05) rotate(${(index * 2) - 3}deg)` : 'scale(1) rotate(0deg)',
                  transition: 'transform 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)'
                }}
              >
                <img 
                  src={cover} 
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImages[index % placeholderImages.length];
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Play button overlay */}
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-songhunt-red/70 to-purple-600/70 opacity-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button 
              className="transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-white text-songhunt-red p-4 rounded-full shadow-lg hover:bg-gray-100"
            >
              <Play className="h-8 w-8 fill-songhunt-red" />
            </button>
          </div>
        </div>
        
        {/* Card content with enhanced styling */}
        <div className="p-4 relative z-10 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40">
          <div className="flex justify-between items-start">
            <div className="backdrop-blur-sm p-2 rounded-lg">
              <h3 className="font-bold text-lg tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-songhunt-red mr-1 animate-pulse"></span>
                {songsCount} songs • {date}
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="backdrop-blur-lg bg-white/90 dark:bg-black/90">
                <DropdownMenuItem className="hover:bg-songhunt-red/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Export Playlist
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive hover:bg-destructive/10">
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
