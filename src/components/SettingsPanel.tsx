
import { Moon, Sun, Globe, Sparkles } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface SettingsPanelProps {
  darkMode: boolean;
  discoveryMode: boolean;
  multilingualMode: boolean;
  onDarkModeChange: (enabled: boolean) => void;
  onDiscoveryModeChange: (enabled: boolean) => void;
  onMultilingualModeChange: (enabled: boolean) => void;
  onSignOut: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  darkMode,
  discoveryMode,
  multilingualMode,
  onDarkModeChange,
  onDiscoveryModeChange,
  onMultilingualModeChange,
  onSignOut
}) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(discoveryMode);
  const [isMultilingualMode, setIsMultilingualMode] = useState(multilingualMode);

  const handleDarkModeChange = (checked: boolean) => {
    setIsDarkMode(checked);
    onDarkModeChange(checked);
  };

  const handleDiscoveryModeChange = (checked: boolean) => {
    setIsDiscoveryMode(checked);
    onDiscoveryModeChange(checked);
  };

  const handleMultilingualModeChange = (checked: boolean) => {
    setIsMultilingualMode(checked);
    onMultilingualModeChange(checked);
  };

  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-songhunt-red/10">
              {isDarkMode ? (
                <Moon className="h-5 w-5 text-songhunt-red" />
              ) : (
                <Sun className="h-5 w-5 text-songhunt-red" />
              )}
            </div>
            <div>
              <Label htmlFor="dark-mode" className="text-base font-medium">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Switch between light and dark theme</p>
            </div>
          </div>
          <Switch 
            id="dark-mode" 
            checked={isDarkMode}
            onCheckedChange={handleDarkModeChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-songhunt-red/10">
              <Sparkles className="h-5 w-5 text-songhunt-red" />
            </div>
            <div>
              <Label htmlFor="discovery-mode" className="text-base font-medium">Discovery Mode</Label>
              <p className="text-sm text-muted-foreground">Find similar songs outside your preferences</p>
            </div>
          </div>
          <Switch 
            id="discovery-mode" 
            checked={isDiscoveryMode}
            onCheckedChange={handleDiscoveryModeChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-songhunt-red/10">
              <Globe className="h-5 w-5 text-songhunt-red" />
            </div>
            <div>
              <Label htmlFor="multilingual-mode" className="text-base font-medium">Multilingual Mode</Label>
              <p className="text-sm text-muted-foreground">Include songs in different languages</p>
            </div>
          </div>
          <Switch 
            id="multilingual-mode" 
            checked={isMultilingualMode}
            onCheckedChange={handleMultilingualModeChange}
          />
        </div>

        <div className="pt-6 border-t border-border">
          <Button 
            variant="outline" 
            className="w-full text-songhunt-red border-songhunt-red hover:bg-songhunt-red hover:text-white"
            onClick={onSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
