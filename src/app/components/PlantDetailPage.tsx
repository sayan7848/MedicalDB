import { Plant } from "@/app/data/mockData";
import { ArrowLeft, Leaf } from "lucide-react";

interface PlantDetailPageProps {
  plant: Plant;
  isDarkMode: boolean;
  onBack: () => void;
}

export function PlantDetailPage({ plant, isDarkMode, onBack }: PlantDetailPageProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-8">
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

        <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <div className="flex items-start gap-4 mb-6">
            <div className={`p-4 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
              <Leaf className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <div className="flex-1">
              <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {plant.name}
              </h1>
              <p className={`text-xl italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {plant.scientificName}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Family */}
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Family
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {plant.family}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Description
              </h2>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {plant.description}
              </p>
            </div>

            {/* Medicinal Uses */}
            <div>
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Medicinal Uses
              </h2>
              <div className="flex flex-wrap gap-2">
                {plant.uses.map((use, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-green-900/50 text-green-300 border border-green-700' 
                        : 'bg-green-100 text-green-800 border border-green-200'
                    }`}
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Compounds */}
            <div>
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Key PhytoCompounds
              </h2>
              <div className="flex flex-wrap gap-2">
                {plant.compounds.map((compound, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {compound}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
