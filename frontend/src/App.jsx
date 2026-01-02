import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import './App.css';
import ImageUpload from './components/ImageUpload';
import NutritionCard from './components/NutritionCard';
import { analyzeImage } from './services/nutritionService';

function App() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setError(null);
    setNutritionData(null);
    
    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
    
    try {
      const result = await analyzeImage(file);
      setNutritionData(result);
    } catch (err) {
      setError('Failed to analyze the food image. Please try again with a clearer image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nutrition-yellow bg-opacity-20">
      <header className="bg-nutrition-light text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Food Nutrition Analyzer</h1>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 p-4 bg-nutrition-light bg-opacity-50 rounded-lg flex items-start">
            <FiInfo className="text-nutrition-red mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              Upload or drag & drop a food image to analyze its nutritional content. For best results, 
              ensure the food item is clearly visible and well-lit.
            </p>
          </div>
          
          <ImageUpload onImageUpload={handleImageUpload} />
          
          {loading && (
            <div className="mt-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-nutrition-orange border-t-transparent"></div>
              <p className="mt-2 text-gray-600">Analyzing your food image...</p>
            </div>
          )}
          
          {error && (
            <div className="mt-6 p-4 bg-nutrition-red bg-opacity-20 text-nutrition-red rounded-lg">
              {error}
            </div>
          )}
          
          {imagePreview && !loading && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-nutrition-dark mb-3">Your Food Image</h2>
              <div className="rounded-lg overflow-hidden shadow-md border-2 border-nutrition-light">
                <img 
                  src={imagePreview} 
                  alt="Food upload" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
          
          {nutritionData && nutritionData.map((food, index) => (
            <NutritionCard key={index} nutritionData={food} />
          ))}
        </div>
      </main>
      
      <footer className="bg-nutrition-light text-white p-4 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} Food Nutrition Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;