import React from 'react';

const NutritionCard = ({ nutritionData }) => {
  if (!nutritionData) return null;
  
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4 border-l-4 border-nutrition-orange">
      <h3 className="text-xl font-semibold text-nutrition-dark mb-3">
        {nutritionData.name} 
        <span className="text-sm ml-2 font-normal text-gray-500">
          (Confidence: {(nutritionData.confidence * 100).toFixed(0)}%)
        </span>
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-nutrition-yellow bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Calories</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData.calories?.toFixed(0)} kcal</p>
        </div>
        
        <div className="bg-nutrition-yellow bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Protein</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Protein (g)"]?.toFixed(1)}g</p>
        </div>
        
        <div className="bg-nutrition-yellow bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Carbs</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Carbohydrates (g)"]?.toFixed(1)}g</p>
        </div>
        
        <div className="bg-nutrition-light bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Fat</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Total Fat (g)"]?.toFixed(1)}g</p>
        </div>
        
        <div className="bg-nutrition-light bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Fiber</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Fiber (g)"]?.toFixed(1)}g</p>
        </div>
        
        <div className="bg-nutrition-light bg-opacity-30 p-3 rounded-md">
          <p className="text-sm text-gray-600">Sugar</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Sugar (g)"]?.toFixed(1)}g</p>
        </div>
        
        <div className="bg-nutrition-red bg-opacity-20 p-3 rounded-md">
          <p className="text-sm text-gray-600">Sodium</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Sodium (mg)"]?.toFixed(0)}mg</p>
        </div>
        
        <div className="bg-nutrition-red bg-opacity-20 p-3 rounded-md">
          <p className="text-sm text-gray-600">Cholesterol</p>
          <p className="text-xl font-bold text-nutrition-dark">{nutritionData["Cholesterol (mg)"]?.toFixed(0)}mg</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;