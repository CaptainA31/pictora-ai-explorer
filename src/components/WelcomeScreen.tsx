
import React from 'react';
import { Landmark, Bird, Image } from 'lucide-react';
import Header from './Header';
import CategoryCard from './CategoryCard';

interface WelcomeScreenProps {
  onSelectCategory: (category: 'landmark' | 'animal') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectCategory }) => {
  return (
    <div className="flex flex-col h-full">
      <Header 
        title="Pictora.ai" 
        subtitle="Identify landmarks and wildlife with AI"
      />
      
      <div className="p-5 mt-5">
        <div className="pictora-card bg-pictora-purple-light bg-opacity-60 p-6 mb-8">
          <div className="flex justify-center mb-4">
            <Image className="w-12 h-12 text-pictora-purple" />
          </div>
          <h2 className="text-xl font-bold mb-2">What would you like to identify?</h2>
          <p className="text-gray-600">Upload a photo or type a question about a landmark or animal</p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <CategoryCard
            title="Identify a Landmark"
            description="Discover famous buildings, monuments, and natural wonders"
            icon={Landmark}
            bgColor="bg-pictora-blue bg-opacity-30"
            onClick={() => onSelectCategory('landmark')}
          />
          
          <CategoryCard
            title="Identify an Animal"
            description="Learn about wildlife, pets, and creatures from around the world"
            icon={Bird}
            bgColor="bg-pictora-green bg-opacity-30"
            onClick={() => onSelectCategory('animal')}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
