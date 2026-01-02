import React, { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';

const ImageUpload = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };
  
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  return (
    <div 
      className={`w-full max-w-lg mx-auto border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center
      ${dragActive ? 'border-nutrition-orange bg-nutrition-light bg-opacity-30' : 'border-nutrition-light'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <FiUpload className="w-12 h-12 text-nutrition-orange mb-3" />
      <h3 className="text-lg font-medium text-gray-700">Upload Food Image</h3>
      <p className="text-sm text-gray-500 mt-1">
        to get its nutrition value
      </p>
      <button
        className="mt-4 px-4 py-2 bg-nutrition-orange text-white rounded-md hover:bg-nutrition-red transition-colors"
        onClick={onButtonClick}
      >
        Select Image
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageUpload;