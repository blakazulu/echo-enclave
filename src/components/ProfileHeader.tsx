
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Music, Crown, Calendar } from 'lucide-react';

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
        {/* Enhanced gradient background with texture */}
        <div className="h-64 w-full overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-songhunt-red via-songhunt-red-hover to-songhunt-red-hover opacity-90"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '150px 150px',
          }}></div>
          
          {/* Decorative music notes */}
          <div className="absolute top-8 left-1/4 transform -translate-x-1/2 opacity-20">
            <svg className="h-20 w-20 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute top-12 right-1/3 transform translate-x-1/2 opacity-10">
            <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        {/* Profile info with shadow effect */}
        <div className="absolute -bottom-20 left-8 flex items-end">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-white dark:bg-gray-900 rounded-full blur-lg opacity-70"></div>
            <Avatar className="h-36 w-36 border-4 border-white dark:border-gray-900 shadow-xl relative z-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-songhunt-red to-songhunt-red-hover text-white text-5xl font-bold">
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="mb-4 ml-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg flex items-center">
              {username}
              <span className="ml-2 inline-flex items-center justify-center">
                <Crown className="h-6 w-6 text-yellow-300 drop-shadow-md" />
              </span>
            </h1>
            <div className="flex items-center text-white/80 text-sm mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              <p className="drop-shadow-md">Member since {joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section with enhanced visuals */}
      <div className="mt-24 px-8 flex flex-wrap gap-6">
        <div className="flex items-center bg-white/5 dark:bg-black/5 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="p-2.5 rounded-full bg-songhunt-red/20 mr-3">
            <Music className="h-5 w-5 text-songhunt-red" />
          </div>
          <div>
            <p className="text-lg font-semibold">{playlists}</p>
            <p className="text-sm text-muted-foreground">Playlists</p>
          </div>
        </div>
        <div className="flex items-center bg-white/5 dark:bg-black/5 backdrop-blur-sm p-3 rounded-lg shadow-sm">
          <div className="p-2.5 rounded-full bg-songhunt-red/20 mr-3">
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
