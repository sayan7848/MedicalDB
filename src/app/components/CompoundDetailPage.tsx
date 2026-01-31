import { PhytoCompound } from "@/app/data/mockData";
import { ArrowLeft, FlaskConical } from "lucide-react";

interface CompoundDetailPageProps {
  compound: PhytoCompound;
  isDarkMode: boolean;
  onBack: () => void;
}

export function CompoundDetailPage({ compound, isDarkMode, onBack }: CompoundDetailPageProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
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
            <div className={`p-4 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
              <FlaskConical className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div className="flex-1">
              <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {compound.name}
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {compound.formula}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Molecular Weight */}
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Molecular Weight
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {compound.molecularWeight}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Description
              </h2>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {compound.description}
              </p>
            </div>

            {/* Plant Sources */}
            <div>
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Plant Sources
              </h2>
              <div className="flex flex-wrap gap-2">
                {compound.sources.map((source, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-green-900/50 text-green-300 border border-green-700' 
                        : 'bg-green-100 text-green-800 border border-green-200'
                    }`}
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>

            {/* Properties */}
            <div>
              <h2 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Pharmacological Properties
              </h2>
              <div className="flex flex-wrap gap-2">
                {compound.properties.map((property, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode 
                        ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
                        : 'bg-purple-100 text-purple-800 border border-purple-200'
                    }`}
                  >
                    {property}
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
