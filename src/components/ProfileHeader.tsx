
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Music, Crown, Calendar, Heart, Star, Award } from 'lucide-react';

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
      {/* Funky dynamic header with retro patterns and glowing elements */}
      <div className="relative">
        <div className="h-80 w-full overflow-hidden rounded-3xl">
          {/* Gradient background with texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-songhunt-red via-purple-600 to-blue-500"></div>
          
          {/* Animated wavy pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="rgba(255,255,255,0.2)">
                <animate attributeName="d" 
                  values="
                    M0,50 Q25,30 50,50 T100,50 V100 H0 Z;
                    M0,50 Q25,70 50,50 T100,50 V100 H0 Z;
                    M0,50 Q25,30 50,50 T100,50 V100 H0 Z
                  "
                  dur="20s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
          
          {/* Retro grid pattern */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          {/* Floating vinyl records */}
          <div className="absolute top-14 left-1/4 transform -translate-x-1/2 animate-spin-slow">
            <div className="relative w-16 h-16 rounded-full bg-black shadow-glow-purple">
              <div className="absolute inset-3 rounded-full bg-purple-900"></div>
              <div className="absolute inset-7 rounded-full bg-black border border-gray-800"></div>
            </div>
          </div>
          <div className="absolute bottom-20 right-1/4 transform translate-x-1/2 animate-spin-slow-reverse">
            <div className="relative w-12 h-12 rounded-full bg-black shadow-glow-blue">
              <div className="absolute inset-2 rounded-full bg-blue-900"></div>
              <div className="absolute inset-5 rounded-full bg-black border border-gray-800"></div>
            </div>
          </div>
          
          {/* Decorative music notes */}
          <div className="absolute top-1/4 right-1/5 transform rotate-12 animate-float opacity-30">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/5 transform -rotate-12 animate-float-delay opacity-30">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
        </div>
        
        {/* Profile info with neon glow effect */}
        <div className="absolute -bottom-20 left-8 flex items-end">
          <div className="relative">
            {/* Animated neon glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-songhunt-red to-blue-500 rounded-full opacity-70 blur-lg animate-pulse-slow"></div>
            <Avatar className="h-40 w-40 border-4 border-white dark:border-black shadow-2xl relative z-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-songhunt-red to-purple-600 text-white text-6xl font-bold">
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="mb-4 ml-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg flex items-center">
              {username}
              <span className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-3 py-1 shadow-inner">
                <Crown className="h-6 w-6 text-yellow-700" />
                <span className="ml-1 text-yellow-900 text-lg font-bold">Hunter</span>
              </span>
            </h1>
            <div className="flex items-center text-white/80 text-sm mt-2">
              <Calendar className="h-4 w-4 mr-1" />
              <p className="drop-shadow-md">Member since {joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section with neo-brutalist cards */}
      <div className="mt-24 px-8 flex flex-wrap gap-6">
        <div className="flex items-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl transform hover:scale-105 transition-all">
          <div className="p-3 rounded-xl bg-gradient-to-br from-songhunt-red to-purple-600 mr-4 shadow-inner">
            <Music className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">{playlists}</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Playlists</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl transform hover:scale-105 transition-all">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 mr-4 shadow-inner">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold">{searches}</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Searches</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl transform hover:scale-105 transition-all">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 mr-4 shadow-inner">
            <Star className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">Pro</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
