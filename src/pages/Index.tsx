
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Music, 
  Search, 
  Upload, 
  Disc3, 
  Sparkles, 
  User, 
  Headphones, 
  TrendingUp, 
  BarChart 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [username] = useState("Liraz");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse-glow"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-center items-center mb-12 mt-8">
          <div className="relative">
            <Disc3 className="h-12 w-12 text-pink-400 absolute -left-6 top-3 animate-spin-slow" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              SongHunt
            </h1>
            <Sparkles className="h-8 w-8 text-purple-400 absolute -right-6 top-4 animate-pulse" />
          </div>
        </div>
        
        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl blur-md opacity-50"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-1 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center bg-white/5 rounded-xl px-4 py-3">
                  <Search className="h-5 w-5 text-white/70 mr-2" />
                  <input 
                    type="text"
                    placeholder="Find your next musical obsession..."
                    className="w-full bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
                <div className="p-2 bg-white/5 rounded-xl hover:bg-white/10 transition cursor-pointer">
                  <Upload className="h-5 w-5 text-white/70" />
                </div>
                <button className="p-3 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-xl hover:opacity-90 transition shadow-lg">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Music Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Trending', 'Pop', 'Hip-Hop', 'Electronic', 'Rock', 'R&B', 'Lo-Fi', 'Indie', 'Acoustic'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Music className="h-8 w-8 text-pink-400" />,
              title: "Music Discovery",
              description: "Find songs by describing the vibe, upload an image, or reference another track."
            },
            {
              icon: <Headphones className="h-8 w-8 text-purple-400" />,
              title: "Smart Recommendations",
              description: "Our AI analyzes your taste and suggests songs perfectly matched to your preferences."
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-indigo-400" />,
              title: "Trending Analysis",
              description: "Stay ahead of the curve with insights on emerging artists and viral tracks."
            }
          ].map((feature, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:transform hover:scale-105 hover:bg-white/10">
              <div className="bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-full p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Profile Preview Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Your Music Journey
            </h2>
            <Link to="/profile">
              <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 text-white border-0">
                Full Profile
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-70 blur-sm animate-pulse-slow"></div>
                <Avatar className="h-20 w-20 border-2 border-white/20">
                  <AvatarFallback className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-2xl font-bold">
                    {username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold mb-1">{username}</h3>
              <p className="text-white/70 mb-4">Musical Explorer</p>
              
              <div className="grid grid-cols-2 gap-2 w-full mt-2">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold">4</p>
                  <p className="text-xs text-white/70">Playlists</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold">24</p>
                  <p className="text-xs text-white/70">Searches</p>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <BarChart className="h-5 w-5 text-pink-400 mr-2" />
                <h3 className="text-lg font-bold">Music Stats</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Soul</span>
                    <span className="text-sm text-white/70">65%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Hip-Hop</span>
                    <span className="text-sm text-white/70">48%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-2 rounded-full" style={{ width: "48%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Jazz</span>
                    <span className="text-sm text-white/70">32%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Headphones className="h-5 w-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-bold">Recent Activity</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    action: "Searched",
                    query: "Songs like Aretha Franklin",
                    time: "2h ago"
                  },
                  {
                    action: "Created Playlist",
                    query: "Summer Vibes 2023",
                    time: "Yesterday"
                  },
                  {
                    action: "Discovered",
                    query: "5 new jazz artists",
                    time: "3d ago"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium">{item.action}</p>
                        <p className="text-xs text-white/70">{item.query}</p>
                      </div>
                      <span className="text-xs text-white/50">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
