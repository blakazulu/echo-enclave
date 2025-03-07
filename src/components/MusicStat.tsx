
import React from 'react';

interface MusicStatProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string | number;
    positive: boolean;
  };
}

const MusicStat: React.FC<MusicStatProps> = ({
  title,
  value,
  icon,
  change
}) => {
  return (
    <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent dark:from-black/20 backdrop-blur-sm border border-white/10 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Background decorations */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-songhunt-red/10 rounded-full blur-xl"></div>
      
      <div className="flex items-center relative z-10">
        <div className="p-4 rounded-xl bg-gradient-to-br from-songhunt-red to-purple-600 mr-4 shadow-lg">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6 text-white' })}
        </div>
        <div>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">{title}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">{value}</p>
          
          {change && (
            <p className={`text-sm flex items-center ${change.positive ? 'text-green-500' : 'text-red-500'}`}>
              <span className="inline-block mr-1">
                {change.positive ? '↑' : '↓'}
              </span> 
              <span>{change.value}</span>
              <span className="ml-1 text-xs opacity-70">since last month</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicStat;
