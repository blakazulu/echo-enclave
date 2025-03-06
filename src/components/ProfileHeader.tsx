
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Music } from 'lucide-react';

interface ProfileHeaderProps {
  username: string;
  joinDate: string;
  playlists: number;
  searches: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  joinDate,
  playlists,
  searches
}) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="relative">
        <div className="h-40 w-full bg-gradient-to-r from-songhunt-red to-songhunt-red-hover rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        </div>
        <div className="absolute -bottom-16 left-8 flex items-end">
          <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
            <AvatarImage src="" />
            <AvatarFallback className="bg-songhunt-red text-white text-4xl">
              {username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="mb-2 ml-4">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">{username}</h1>
            <p className="text-white/80 text-sm drop-shadow-md">Member since {joinDate}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 px-8 flex flex-wrap gap-6">
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-songhunt-red/10 mr-3">
            <Music className="h-5 w-5 text-songhunt-red" />
          </div>
          <div>
            <p className="text-lg font-semibold">{playlists}</p>
            <p className="text-sm text-muted-foreground">Playlists</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-songhunt-red/10 mr-3">
            <svg className="h-5 w-5 text-songhunt-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold">{searches}</p>
            <p className="text-sm text-muted-foreground">Searches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
