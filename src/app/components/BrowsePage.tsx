import { useState } from "react";
import { plants, phytoCompounds, Plant, PhytoCompound } from "@/app/data/mockData";
import { Leaf, FlaskConical, X, ArrowLeft } from "lucide-react";

interface BrowsePageProps {
  isDarkMode: boolean;
  onNavigate: (page: string, data?: Plant | PhytoCompound) => void;
  onBack: () => void;
}

export function BrowsePage({ isDarkMode, onNavigate, onBack }: BrowsePageProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8 sm:py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-900'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <h1 className={`text-2xl sm:text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Browse Database
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plants Section */}
          <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                <Leaf className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Medicinal Plants
              </h2>
            </div>
            
            <div className="overflow-y-auto max-h-[600px] space-y-3 pr-2">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => onNavigate('plant-detail', plant)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    isDarkMode 
                      ? 'bg-gray-700/50 hover:bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                  } border`}
                >
                  <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plant.name}
                  </h3>
                  <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {plant.scientificName}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PhytoCompounds Section */}
          <div className={`rounded-xl shadow-lg p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                <FlaskConical className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                PhytoCompounds
              </h2>
            </div>
            
            <div className="overflow-y-auto max-h-[600px] space-y-3 pr-2">
              {phytoCompounds.map((compound) => (
                <div
                  key={compound.id}
                  onClick={() => onNavigate('compound-detail', compound)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    isDarkMode 
                      ? 'bg-gray-700/50 hover:bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                  } border`}
                >
                  <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {compound.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}