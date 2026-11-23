// HostInfo component - Host avatar, name, and years as host
import React from 'react';

interface HostInfoProps {
  name: string;
  avatar: string;
  yearsAsHost: number;
}

const HostInfo: React.FC<HostInfoProps> = ({ name, avatar, yearsAsHost }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg mb-6">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          {yearsAsHost} year{yearsAsHost !== 1 ? 's' : ''} as host
        </p>
      </div>
    </div>
  );
};

export default HostInfo;
