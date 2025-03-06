
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
    <div className="p-4 rounded-lg dark:bg-songhunt-dark-card bg-songhunt-light-card">
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-songhunt-red/10 mr-3">
          {icon}
        </div>
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
          
          {change && (
            <p className={`text-xs ${change.positive ? 'text-green-500' : 'text-red-500'}`}>
              {change.positive ? '↑' : '↓'} {change.value} since last month
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicStat;
