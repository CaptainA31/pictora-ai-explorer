
import React from 'react';
import { Landmark, MapPin, Cat, Camera, MessageSquare } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-2xl p-2 flex justify-around z-10">
      <button 
        className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'travel' ? 'text-pictora-purple' : 'text-gray-500'}`}
        onClick={() => setActiveTab('travel')}
      >
        <Landmark className="w-6 h-6" />
        <span className="text-xs mt-1">Travel</span>
      </button>

      <button 
        className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'wildlife' ? 'text-pictora-purple' : 'text-gray-500'}`}
        onClick={() => setActiveTab('wildlife')}
      >
        <Cat className="w-6 h-6" />
        <span className="text-xs mt-1">Wildlife</span>
      </button>

      <button className="flex items-center justify-center bg-pictora-purple text-white p-3 rounded-full shadow-md -mt-8">
        <Camera className="w-6 h-6" />
      </button>

      <button 
        className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'chat' ? 'text-pictora-purple' : 'text-gray-500'}`}
        onClick={() => setActiveTab('chat')}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="text-xs mt-1">Chat</span>
      </button>

      <button 
        className={`flex flex-col items-center p-2 rounded-lg ${activeTab === 'saved' ? 'text-pictora-purple' : 'text-gray-500'}`}
        onClick={() => setActiveTab('saved')}
      >
        <MapPin className="w-6 h-6" />
        <span className="text-xs mt-1">Saved</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
