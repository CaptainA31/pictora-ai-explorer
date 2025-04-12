
import React, { useState } from 'react';
import { Info, Map, ExternalLink } from 'lucide-react';

interface SimilarImage {
  url: string;
  caption: string;
}

interface ResultCardProps {
  imageUrl: string;
  caption: string;
  title: string;
  description: string;
  location?: string;
  funFacts?: string[];
  similarImages?: SimilarImage[];
}

const ResultCard: React.FC<ResultCardProps> = ({
  imageUrl,
  caption,
  title,
  description,
  location,
  funFacts,
  similarImages,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pictora-card mb-4 overflow-hidden animate-fade-in">
      <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="px-1">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{caption}</p>
        
        <div className="mb-3">
          <p className="text-gray-700">{description}</p>
        </div>

        {location && (
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
            <Map className="w-4 h-4 text-pictora-purple" />
            <span>{location}</span>
          </div>
        )}

        <button
          className="flex items-center justify-center w-full py-2 text-pictora-purple border border-pictora-purple rounded-lg mb-2 hover:bg-pictora-purple hover:text-white transition-colors duration-200"
          onClick={() => setExpanded(!expanded)}
        >
          <Info className="w-4 h-4 mr-1" />
          {expanded ? 'Less Info' : 'More Info'}
        </button>

        {expanded && (
          <div className="animate-fade-in mt-3">
            {funFacts && funFacts.length > 0 && (
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-2">Fun Facts</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="mb-1">{fact}</li>
                  ))}
                </ul>
              </div>
            )}

            {similarImages && similarImages.length > 0 && (
              <div>
                <h4 className="font-bold text-sm mb-2">Similar Images</h4>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {similarImages.map((img, index) => (
                    <div key={index} className="min-w-[120px] max-w-[120px]">
                      <div className="h-20 rounded-lg overflow-hidden mb-1">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600 truncate">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <a 
              href="#" 
              className="text-pictora-purple flex items-center mt-3 text-sm"
              onClick={(e) => e.preventDefault()}
            >
              View full details
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
