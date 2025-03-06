
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

interface NavBarProps {
  isLoggedIn?: boolean;
  username?: string;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  isLoggedIn = true,
  username = "Liraz",
  isDarkMode = false,
  onDarkModeToggle,
  className
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 backdrop-blur-lg py-4 px-4 sm:px-6 lg:px-8 border-b transition-all duration-300",
        isDarkMode 
          ? "bg-black/50 border-white/10" 
          : "bg-white/50 border-black/5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="lg:hidden mr-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-songhunt-red text-2xl font-bold">Songhunt</h1>
          </Link>
          
          <nav className="hidden lg:flex ml-8">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-songhunt-red transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/playlists" className="hover:text-songhunt-red transition-colors">
                  Playlists
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-songhunt-red transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full h-10 w-10 p-0">
                  <Avatar className="h-10 w-10 border border-songhunt-red/20">
                    <AvatarFallback className="bg-songhunt-red text-white">
                      {username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile?tab=settings" className="cursor-pointer">
                    <svg 
                      className="mr-2 h-4 w-4" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="bg-songhunt-red hover:bg-songhunt-red-hover">
              Sign In
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden mt-4 py-4 border-t border-black/5 dark:border-white/5 transition-all duration-300 animate-fade-in">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block py-2 hover:text-songhunt-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Search
              </Link>
            </li>
            <li>
              <Link 
                to="/playlists" 
                className="block py-2 hover:text-songhunt-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Playlists
              </Link>
            </li>
            <li>
              <Link 
                to="/profile" 
                className="block py-2 hover:text-songhunt-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
