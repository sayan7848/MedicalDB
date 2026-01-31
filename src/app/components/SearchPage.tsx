import { useState, useEffect } from "react";
import { plants, phytoCompounds, Plant, PhytoCompound } from "@/app/data/mockData";
import { Search, Leaf, FlaskConical, ArrowLeft } from "lucide-react";
import Fuse from "fuse.js";

interface SearchPageProps {
  isDarkMode: boolean;
  onNavigate: (page: string, data?: Plant | PhytoCompound) => void;
  onBack: () => void;
}

export function SearchPage({ isDarkMode, onNavigate, onBack }: SearchPageProps) {
  const [plantQuery, setPlantQuery] = useState("");
  const [compoundQuery, setCompoundQuery] = useState("");
  const [plantSuggestions, setPlantSuggestions] = useState<Plant[]>([]);
  const [compoundSuggestions, setCompoundSuggestions] = useState<PhytoCompound[]>([]);
  const [showPlantSuggestions, setShowPlantSuggestions] = useState(false);
  const [showCompoundSuggestions, setShowCompoundSuggestions] = useState(false);

  // Fuse.js setup for fuzzy search
  const plantFuse = new Fuse(plants, {
    keys: ["name", "scientificName", "family"],
    threshold: 0.4,
    includeScore: true,
  });

  const compoundFuse = new Fuse(phytoCompounds, {
    keys: ["name", "formula"],
    threshold: 0.4,
    includeScore: true,
  });

  // Handle plant search
  useEffect(() => {
    if (plantQuery.trim().length > 0) {
      const results = plantFuse.search(plantQuery);
      setPlantSuggestions(results.map(result => result.item).slice(0, 5));
      setShowPlantSuggestions(true);
    } else {
      setPlantSuggestions([]);
      setShowPlantSuggestions(false);
    }
  }, [plantQuery]);

  // Handle compound search
  useEffect(() => {
    if (compoundQuery.trim().length > 0) {
      const results = compoundFuse.search(compoundQuery);
      setCompoundSuggestions(results.map(result => result.item).slice(0, 5));
      setShowCompoundSuggestions(true);
    } else {
      setCompoundSuggestions([]);
      setShowCompoundSuggestions(false);
    }
  }, [compoundQuery]);

  const handlePlantSelect = (plant: Plant) => {
    setPlantQuery(plant.name);
    setShowPlantSuggestions(false);
    onNavigate('plant-detail', plant);
  };

  const handleCompoundSelect = (compound: PhytoCompound) => {
    setCompoundQuery(compound.name);
    setShowCompoundSuggestions(false);
    onNavigate('compound-detail', compound);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8 sm:py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Search Database
        </h1>
        
        <div className="space-y-12">
          {/* Plant Search Section */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                <Leaf className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Search Medicinal Plants
              </h2>
            </div>
            
            <div className="relative">
              <div className="relative">
                <Search className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  value={plantQuery}
                  onChange={(e) => setPlantQuery(e.target.value)}
                  onFocus={() => plantSuggestions.length > 0 && setShowPlantSuggestions(true)}
                  placeholder="Type plant name or scientific name..."
                  className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500 transition-all`}
                />
              </div>
              
              {/* Autocomplete suggestions */}
              {showPlantSuggestions && plantSuggestions.length > 0 && (
                <div className={`absolute z-10 w-full mt-2 rounded-lg shadow-xl border ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  {plantSuggestions.map((plant) => (
                    <div
                      key={plant.id}
                      onClick={() => handlePlantSelect(plant)}
                      className={`p-4 cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        isDarkMode 
                          ? 'hover:bg-gray-700 border-b border-gray-700 last:border-b-0' 
                          : 'hover:bg-gray-50 border-b border-gray-100 last:border-b-0'
                      }`}
                    >
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {plant.name}
                      </div>
                      <div className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {plant.scientificName}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {plant.family}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Compound Search Section */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                <FlaskConical className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Search PhytoCompounds
              </h2>
            </div>
            
            <div className="relative">
              <div className="relative">
                <Search className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  value={compoundQuery}
                  onChange={(e) => setCompoundQuery(e.target.value)}
                  onFocus={() => compoundSuggestions.length > 0 && setShowCompoundSuggestions(true)}
                  placeholder="Type compound name or formula..."
                  className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
              </div>
              
              {/* Autocomplete suggestions */}
              {showCompoundSuggestions && compoundSuggestions.length > 0 && (
                <div className={`absolute z-10 w-full mt-2 rounded-lg shadow-xl border ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  {compoundSuggestions.map((compound) => (
                    <div
                      key={compound.id}
                      onClick={() => handleCompoundSelect(compound)}
                      className={`p-4 cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        isDarkMode 
                          ? 'hover:bg-gray-700 border-b border-gray-700 last:border-b-0' 
                          : 'hover:bg-gray-50 border-b border-gray-100 last:border-b-0'
                      }`}
                    >
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {compound.name}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {compound.formula}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        MW: {compound.molecularWeight}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
