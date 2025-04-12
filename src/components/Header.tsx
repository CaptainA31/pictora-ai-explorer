
import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-2">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-pictora-purple" />
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      {subtitle && (
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default Header;
