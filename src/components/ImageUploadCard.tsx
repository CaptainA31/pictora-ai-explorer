
import React from 'react';
import { Camera, Upload, Loader2 } from 'lucide-react';

interface ImageUploadCardProps {
  onUpload: (file: File) => void;
  onCamera: () => void;
  isLoading?: boolean;
}

const ImageUploadCard: React.FC<ImageUploadCardProps> = ({ onUpload, onCamera, isLoading = false }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onUpload(event.target.files[0]);
    }
  };

  return (
    <div className="pictora-card mb-6 animate-fade-in">
      <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-4">
            <Loader2 className="w-10 h-10 text-pictora-purple animate-spin mb-2" />
            <p className="text-gray-600">Analyzing image...</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 mb-4">Upload or take a photo to analyze</p>
            <div className="flex gap-4">
              <button 
                className="pictora-button bg-pictora-purple-light text-pictora-purple-dark hover:bg-pictora-purple hover:text-white"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-5 h-5" />
                <span>Upload</span>
              </button>
              <button 
                className="pictora-button bg-pictora-purple-light text-pictora-purple-dark hover:bg-pictora-purple hover:text-white"
                onClick={onCamera}
              >
                <Camera className="w-5 h-5" />
                <span>Camera</span>
              </button>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploadCard;
