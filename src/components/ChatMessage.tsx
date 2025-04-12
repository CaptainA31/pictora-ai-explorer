
import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
  image?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender, image }) => {
  return (
    <div className={`flex mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      {sender === 'bot' && (
        <div className="bg-pictora-purple rounded-full p-2 mr-2 self-end">
          <Bot className="text-white w-5 h-5" />
        </div>
      )}
      
      <div 
        className={`max-w-[80%] rounded-2xl p-3 ${
          sender === 'user' 
            ? 'bg-pictora-purple text-white rounded-tr-none' 
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        <p className="text-sm">{message}</p>
        
        {image && sender === 'bot' && (
          <div className="mt-2 rounded-lg overflow-hidden">
            <img src={image} alt="AI Response" className="w-full" />
          </div>
        )}
      </div>
      
      {sender === 'user' && (
        <div className="bg-gray-200 rounded-full p-2 ml-2 self-end">
          <User className="text-gray-600 w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
