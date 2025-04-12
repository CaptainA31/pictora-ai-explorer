
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon: Icon,
  bgColor,
  onClick
}) => {
  return (
    <div 
      className={`pictora-card flex flex-col items-center p-6 cursor-pointer animate-fade-in ${bgColor}`}
      onClick={onClick}
    >
      <div className="rounded-full bg-white p-4 mb-4 shadow-md">
        <Icon className="w-8 h-8 text-pictora-purple" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
};

export default CategoryCard;
