
import React, { useState } from 'react';
import Header from './Header';
import ImageUploadCard from './ImageUploadCard';
import ResultCard from './ResultCard';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

interface IdentifyScreenProps {
  type: 'landmark' | 'animal';
  onBack: () => void;
}

const IdentifyScreen: React.FC<IdentifyScreenProps> = ({ type, onBack }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot', image?: string}>>([]);
  
  // Mock data
  const mockLandmarkResult = {
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    caption: "Majestone Falls - one of the most beautiful waterfalls in the region",
    title: "Majestone Falls",
    description: "A spectacular waterfall located in the heart of the Emerald Forest.",
    location: "Northern California, USA",
    funFacts: [
      "The waterfall drops over 200 feet into a crystal-clear pool below.",
      "It's a popular spot for nature photographers and hikers.",
      "The surrounding forest is home to over 30 species of birds."
    ],
    similarImages: [
      { url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff", caption: "Mountain Ridge Trail" },
      { url: "https://images.unsplash.com/photo-1472396961693-142e6e269027", caption: "Emerald Lake" }
    ]
  };
  
  const mockAnimalResult = {
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    caption: "Highland mountain ox in its natural environment",
    title: "Highland Mountain Ox",
    description: "A majestic mountain ox adapted to high-altitude environments.",
    location: "Mountainous regions of Central Asia",
    funFacts: [
      "Mountain oxen can survive in temperatures as low as -40°F.",
      "They have special hemoglobin that allows them to absorb oxygen more efficiently at high altitudes.",
      "Their thick coat can weigh up to 20 pounds when fully grown."
    ],
    similarImages: [
      { url: "https://images.unsplash.com/photo-1518877593221-1f28583780b4", caption: "Jumping Whale" },
      { url: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d", caption: "Antelope and Zebra" }
    ]
  };

  const handleFileUpload = (file: File) => {
    // In a real app, you would upload this file to your AI service
    console.log("File uploaded:", file.name);
    simulateAnalysis();
  };

  const handleCamera = () => {
    // In a real app, you would open the camera
    console.log("Camera requested");
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
      
      // Add AI response to chat
      const resultData = type === 'landmark' ? mockLandmarkResult : mockAnimalResult;
      
      setMessages([
        {
          text: `I've identified this as ${resultData.title}. ${resultData.description}`,
          sender: 'bot',
          image: resultData.imageUrl
        }
      ]);
    }, 2000);
  };

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    
    // Simulate AI response
    setTimeout(() => {
      const resultData = type === 'landmark' ? mockLandmarkResult : mockAnimalResult;
      
      let botResponse;
      if (message.toLowerCase().includes("where") || message.toLowerCase().includes("location")) {
        botResponse = {
          text: `${resultData.title} is located in ${resultData.location}.`,
          sender: 'bot' as 'bot'
        };
      } else if (message.toLowerCase().includes("fact") || message.toLowerCase().includes("tell me")) {
        const randomFact = resultData.funFacts ? resultData.funFacts[Math.floor(Math.random() * resultData.funFacts.length)] : "";
        botResponse = {
          text: `Here's an interesting fact: ${randomFact}`,
          sender: 'bot' as 'bot'
        };
      } else {
        botResponse = {
          text: `${resultData.title} is ${resultData.description} You can find it in ${resultData.location}.`,
          sender: 'bot' as 'bot'
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full pb-20">
      <Header 
        title={type === 'landmark' ? "Identify Landmark" : "Identify Animal"} 
        subtitle={type === 'landmark' ? "Discover places around the world" : "Learn about wildlife and animals"}
      />
      
      <div className="flex-1 overflow-y-auto px-4">
        <ImageUploadCard
          onUpload={handleFileUpload}
          onCamera={handleCamera}
          isLoading={isAnalyzing}
        />
        
        {hasResult && (
          <div className="mb-4">
            <ResultCard 
              {...(type === 'landmark' ? mockLandmarkResult : mockAnimalResult)} 
            />
          </div>
        )}
        
        <div className="pb-4">
          {messages.map((msg, index) => (
            <ChatMessage 
              key={index}
              message={msg.text}
              sender={msg.sender}
              image={msg.image}
            />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-2 bg-gradient-to-t from-background via-background to-transparent pt-10">
        <ChatInput 
          onSend={handleSendMessage}
          placeholder={type === 'landmark' ? "Ask about this place..." : "Ask about this animal..."}
        />
      </div>
    </div>
  );
};

export default IdentifyScreen;
