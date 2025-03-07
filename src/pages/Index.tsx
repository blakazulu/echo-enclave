
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Music, User, Clock, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import MusicStat from '@/components/MusicStat';
import SearchHistoryItem from '@/components/SearchHistoryItem';

const Index = () => {
  const isMobile = useIsMobile();
  const [username] = useState("Liraz");
  
  return (
    <div className="min-h-screen dark:bg-black bg-zinc-50 transition-colors duration-300">
      {/* Hero Section with Search */}
      <div className="relative w-full overflow-hidden">
        {/* Wave background pattern */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 500" className="w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,240C672,256,768,288,864,282.7C960,277,1056,235,1152,202.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
              fill="url(#gradient)" 
              className="transition-all duration-300 transform translate-y-0 opacity-70 dark:opacity-30"
            >
            </path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="dark:stop-color-purple-900 stop-color-songhunt-red" />
                <stop offset="100%" className="dark:stop-color-songhunt-red stop-color-purple-600" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-songhunt-red to-purple-600 bg-clip-text text-transparent animate-fade-in">
              AI Song Search
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-delay">
              Upload an image or video to discover songs that match your visual.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8 animate-slide-up">
              <div className="relative">
                <div className="flex items-center relative z-10 backdrop-blur-md bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-full shadow-lg overflow-hidden">
                  <div className="pl-5 pr-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text"
                    placeholder="Add a text description, song title, artist name, image, or video..."
                    className="w-full py-4 px-2 bg-transparent text-gray-800 dark:text-gray-200 outline-none"
                  />
                  <button className="m-1 p-3 bg-songhunt-red text-white rounded-full hover:bg-opacity-90 transition-all">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-delay-longer">
              {['Metadata', 'Genre', 'Sub-genre', 'Mood', 'Sound', 'Instruments', 'Lyrical Theme', 'Lyrical Mood', 'Writing Style', 'Harmony'].map((filter) => (
                <span key={filter} className="px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Quick Access Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden backdrop-blur-md bg-white/50 dark:bg-black/30 border border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-6">
              {/* Left side - Profile preview */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-white dark:border-black shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-songhunt-red to-purple-600 text-white text-xl font-bold">
                      {username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{username}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pro Hunter</p>
                  </div>
                </div>
                
                <Link to="/profile">
                  <Button className="w-full bg-songhunt-red hover:bg-songhunt-red-hover text-white mb-4">
                    <User className="h-4 w-4 mr-2" />
                    View Full Profile
                  </Button>
                </Link>
                
                <div className="w-full grid grid-cols-2 gap-3 mt-2">
                  <div className="flex flex-col items-center p-3 rounded-xl bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Playlists</p>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-xl bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Searches</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Quick stats and recent search */}
              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-bold mb-4 flex justify-between items-center">
                  <span>Recent Activity</span>
                  <Link to="/profile" className="text-songhunt-red text-sm flex items-center hover:underline">
                    See all <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </h3>
                
                {/* Recent Search */}
                <div className="mb-4">
                  <SearchHistoryItem
                    query="Songs similar to Aretha Franklin - Respect"
                    timestamp="Today • 10:45 AM"
                    filterTags={["Soul", "60s", "Female Vocals"]}
                  />
                </div>
                
                {/* Quick Stats */}
                {!isMobile && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <MusicStat
                      title="Most Popular Genre"
                      value="Soul"
                      icon={<Music className="h-5 w-5 text-songhunt-red" />}
                    />
                    <MusicStat
                      title="Searches This Month"
                      value="24"
                      icon={<Clock className="h-5 w-5 text-songhunt-red" />}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
