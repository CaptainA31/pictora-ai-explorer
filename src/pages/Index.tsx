
import React, { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import IdentifyScreen from '../components/IdentifyScreen';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  const [activeTab, setActiveTab] = useState('travel');
  const [selectedCategory, setSelectedCategory] = useState<'landmark' | 'animal' | null>(null);

  const handleSelectCategory = (category: 'landmark' | 'animal') => {
    setSelectedCategory(category);
    setActiveTab(category === 'landmark' ? 'travel' : 'wildlife');
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 overflow-hidden">
        {selectedCategory === null ? (
          <WelcomeScreen onSelectCategory={handleSelectCategory} />
        ) : (
          <IdentifyScreen type={selectedCategory} onBack={handleBack} />
        )}
      </div>
      
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
