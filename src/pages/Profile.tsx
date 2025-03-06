import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Music2, Search, Settings, ListMusic, Clock, Plus } from 'lucide-react';
import ProfileHeader from '@/components/ProfileHeader';
import PlaylistCard from '@/components/PlaylistCard';
import SearchHistoryItem from '@/components/SearchHistoryItem';
import SettingsPanel from '@/components/SettingsPanel';
import MusicStat from '@/components/MusicStat';
import EmptyState from '@/components/EmptyState';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const mockPlaylists = [
  {
    id: 1,
    title: "Soul Classics",
    songsCount: 12,
    date: "June 2, 2023",
    coverImages: [
      "https://i.scdn.co/image/ab67616d0000b273533fd0b248052d04e6b732c0",
      "https://i.scdn.co/image/ab67616d0000b2731eb7f3544e11371f29e90329",
      "https://i.scdn.co/image/ab67616d0000b273c9af158f7aee15db6302b7a2",
      "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4866eaeb7ce9c"
    ]
  },
  {
    id: 2,
    title: "Funk & Jazz Mix",
    songsCount: 8,
    date: "August 15, 2023",
    coverImages: [
      "https://i.scdn.co/image/ab67616d0000b273fa2f0a0323d9c57e7a21c92e",
      "https://i.scdn.co/image/ab67616d0000b27358bf3c13ddd61b9fb166130b",
      "https://i.scdn.co/image/ab67616d0000b2733b11010b1a5c4cd7e5fae71c",
      "https://i.scdn.co/image/ab67616d0000b273ca56f17b9e93f4629c036d64"
    ]
  },
  {
    id: 3,
    title: "60s Vibes",
    songsCount: 15,
    date: "September 5, 2023",
    coverImages: [
      "https://i.scdn.co/image/ab67616d0000b273b4945ce7e403666a59c2d072",
      "https://i.scdn.co/image/ab67616d0000b273a46da2c93e0f51f702b2e4b9",
      "https://i.scdn.co/image/ab67616d0000b273f5c2967c30f764e47d5b6e73",
      "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    ]
  },
  {
    id: 4,
    title: "Smooth R&B",
    songsCount: 10,
    date: "October 22, 2023",
    coverImages: [
      "https://i.scdn.co/image/ab67616d0000b2736a25295161232111829c05ef",
      "https://i.scdn.co/image/ab67616d0000b273c634cd65ba525a902a77c602",
      "https://i.scdn.co/image/ab67616d0000b27367b9a2083439c76d5a7a39f2",
      "https://i.scdn.co/image/ab67616d0000b2731a84d71391df7469c5ab8539"
    ]
  }
];

const mockSearchHistory = [
  {
    id: 1,
    query: "Songs similar to Aretha Franklin - Respect",
    timestamp: "Oct 12, 2023 • 10:45 AM",
    filterTags: ["Soul", "60s", "Female Vocals"]
  },
  {
    id: 2,
    query: "Upbeat jazz with saxophone",
    timestamp: "Oct 5, 2023 • 3:22 PM",
    filterTags: ["Jazz", "Instrumental"]
  },
  {
    id: 3,
    query: "Songs similar to Ray LaMontagne - You Are The Best Thing",
    timestamp: "Sep 28, 2023 • 7:15 PM",
    filterTags: ["Folk", "Acoustic"]
  },
  {
    id: 4,
    query: "70s funk with brass section",
    timestamp: "Sep 15, 2023 • 2:30 PM",
    filterTags: ["Funk", "70s", "Brass"]
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("playlists");
  const [settings, setSettings] = useState({
    darkMode: document.documentElement.classList.contains('dark'),
    discoveryMode: true,
    multilingualMode: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDarkModeChange = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, darkMode: enabled }));
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toast({
      title: `${enabled ? 'Dark' : 'Light'} mode activated`,
      description: `You've switched to ${enabled ? 'dark' : 'light'} mode.`,
    });
  };

  const handleDiscoveryModeChange = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, discoveryMode: enabled }));
    toast({
      title: `Discovery mode ${enabled ? 'enabled' : 'disabled'}`,
      description: enabled 
        ? "You'll now discover more diverse music recommendations." 
        : "You'll now see recommendations closer to your preferences.",
    });
  };

  const handleMultilingualModeChange = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, multilingualMode: enabled }));
    toast({
      title: `Multilingual mode ${enabled ? 'enabled' : 'disabled'}`,
      description: enabled
        ? "You'll now see songs in multiple languages."
        : "You'll now primarily see songs in your default language.",
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account."
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-songhunt-red border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-songhunt-dark bg-white px-4 pb-16 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-6">
        <ProfileHeader 
          username="Liraz"
          joinDate="October 2022"
          playlists={mockPlaylists.length}
          searches={mockSearchHistory.length}
        />
        
        <div className="mt-8">
          <Tabs 
            defaultValue="playlists" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px] h-14">
              <TabsTrigger 
                value="playlists"
                className="flex items-center gap-2 data-[state=active]:bg-songhunt-red data-[state=active]:text-white"
              >
                <ListMusic className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Playlists</span>
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="flex items-center gap-2 data-[state=active]:bg-songhunt-red data-[state=active]:text-white"
              >
                <Clock className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>History</span>
              </TabsTrigger>
              <TabsTrigger 
                value="insights"
                className="flex items-center gap-2 data-[state=active]:bg-songhunt-red data-[state=active]:text-white"
              >
                <Music2 className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Insights</span>
              </TabsTrigger>
              <TabsTrigger 
                value="settings"
                className="flex items-center gap-2 data-[state=active]:bg-songhunt-red data-[state=active]:text-white"
              >
                <Settings className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="playlists" className="animate-slide-up">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Your Playlists</h2>
                  <Button className="bg-songhunt-red hover:bg-songhunt-red-hover">
                    <Plus className="h-4 w-4 mr-2" />
                    New Playlist
                  </Button>
                </div>
                
                {mockPlaylists.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mockPlaylists.map(playlist => (
                      <PlaylistCard
                        key={playlist.id}
                        title={playlist.title}
                        songsCount={playlist.songsCount}
                        date={playlist.date}
                        coverImages={playlist.coverImages}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    icon={<ListMusic className="h-8 w-8 text-songhunt-red" />}
                    title="No playlists yet"
                    description="Start creating playlists by searching for songs and adding them to a new playlist."
                    action={
                      <Button className="bg-songhunt-red hover:bg-songhunt-red-hover">
                        Create Your First Playlist
                      </Button>
                    }
                  />
                )}
              </TabsContent>
              
              <TabsContent value="history" className="animate-slide-up">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Search History</h2>
                  <Button variant="outline">
                    Clear History
                  </Button>
                </div>
                
                {mockSearchHistory.length > 0 ? (
                  <div className="space-y-3 max-w-5xl">
                    {mockSearchHistory.map(search => (
                      <SearchHistoryItem
                        key={search.id}
                        query={search.query}
                        timestamp={search.timestamp}
                        filterTags={search.filterTags}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    icon={<Search className="h-8 w-8 text-songhunt-red" />}
                    title="No search history"
                    description="Your search history will appear here once you start searching for songs."
                    action={
                      <Button className="bg-songhunt-red hover:bg-songhunt-red-hover">
                        Start Searching
                      </Button>
                    }
                  />
                )}
              </TabsContent>
              
              <TabsContent value="insights" className="animate-slide-up">
                <h2 className="text-2xl font-bold mb-6">Music Insights</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <MusicStat
                    title="Total Songs Added"
                    value="145"
                    icon={<Music2 className="h-5 w-5 text-songhunt-red" />}
                    change={{ value: "12%", positive: true }}
                  />
                  <MusicStat
                    title="Most Popular Genre"
                    value="Soul"
                    icon={<ListMusic className="h-5 w-5 text-songhunt-red" />}
                  />
                  <MusicStat
                    title="Searches This Month"
                    value="24"
                    icon={<Search className="h-5 w-5 text-songhunt-red" />}
                    change={{ value: "5%", positive: false }}
                  />
                </div>
                
                <div className="bg-songhunt-light-card dark:bg-songhunt-dark-card rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Top Artists In Your Playlists</h3>
                  <div className="space-y-4">
                    {['Aretha Franklin', 'Al Green', 'Ray LaMontagne', 'The Spinners'].map((artist, index) => (
                      <div key={index} className="flex items-center">
                        <div className="text-lg font-bold w-6 text-muted-foreground">{index + 1}</div>
                        <div className="ml-4">{artist}</div>
                        <div className="ml-auto">
                          <div className="bg-gray-200 dark:bg-gray-700 h-2 w-40 rounded-full overflow-hidden">
                            <div 
                              className="bg-songhunt-red h-full rounded-full" 
                              style={{ width: `${100 - (index * 15)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="animate-slide-up">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                
                <div className="max-w-3xl">
                  <SettingsPanel
                    darkMode={settings.darkMode}
                    discoveryMode={settings.discoveryMode}
                    multilingualMode={settings.multilingualMode}
                    onDarkModeChange={handleDarkModeChange}
                    onDiscoveryModeChange={handleDiscoveryModeChange}
                    onMultilingualModeChange={handleMultilingualModeChange}
                    onSignOut={handleSignOut}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
