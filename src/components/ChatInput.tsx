
import React, { useState } from 'react';
import { Send, Mic, X } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSend, 
  placeholder = "Ask about this image or place..." 
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="mt-2 flex items-center gap-2 bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
      <button className="p-2 text-gray-500 hover:text-pictora-purple rounded-full">
        <Mic className="w-5 h-5" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 outline-none text-gray-700 text-sm"
      />
      
      {message && (
        <button 
          className="p-2 text-gray-400 hover:text-gray-600 rounded-full"
          onClick={() => setMessage('')}
        >
          <X className="w-4 h-4" />
        </button>
      )}
      
      <button
        className={`p-2 rounded-full ${
          message.trim() 
            ? 'bg-pictora-purple text-white' 
            : 'bg-gray-100 text-gray-400'
        }`}
        onClick={handleSend}
        disabled={!message.trim()}
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatInput;
