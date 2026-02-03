import { Search, ArrowLeft, Leaf } from "lucide-react";
import { useState } from "react";
import { PlantDetailPage } from "./PlantDetailPage";
import { plants } from "@/app/data/mockData";
import type { PhytoCompound, Plant } from "@/app/data/mockData";

interface SearchPlantPageProps {
  isDarkMode: boolean;
  onBack: () => void;
  onNavigate: (page: string, data?: Plant | PhytoCompound) => void;
}

export function SearchPlantPage({ isDarkMode, onBack, onNavigate }: SearchPlantPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  
  const filteredPlants = plants.filter(plant =>
    plant.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedPlant) {
    return (
      <PlantDetailPage
        plant={selectedPlant}
        isDarkMode={isDarkMode}
        onBack={() => setSelectedPlant(null)}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className={`py-12 px-4 sm:px-8`}>
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
            <Leaf className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Search Medicinal Plants
          </h2>
        </div>

        {/* Search Bar */}
        <div className={`rounded-xl shadow-lg mb-8 border ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
        }`}>
          <div className="flex items-center px-6 py-4">
            <Search className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search by common name or scientific name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-transparent outline-none text-lg ${
                isDarkMode 
                  ? 'text-white placeholder-gray-500' 
                  : 'text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>
        </div>

        {/* Results */}
        <div className={`rounded-xl shadow-lg border overflow-hidden ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
        }`}>
          {filteredPlants.length > 0 ? (
            <div className="max-h-[600px] overflow-y-auto">
              {filteredPlants.map((plant, index) => (
                <div
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className={`p-6 cursor-pointer transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700/50 border-gray-700' 
                      : 'hover:bg-gray-50 border-gray-200'
                  } ${index !== 0 ? 'border-t' : ''}`}
                >
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plant.commonName}
                  </h3>
                  <p className={`text-sm italic mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {plant.scientificName}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    Family: {plant.family} {plant.genus ? `| Genus: ${plant.genus}` : ''}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No plants found matching your search.
              </p>
            </div>
          )}
        </div>

        {filteredPlants.length > 0 && (
          <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Found {filteredPlants.length} plant(s)
          </p>
        )}
      </div>
    </div>
  );
}