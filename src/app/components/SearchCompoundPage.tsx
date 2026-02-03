import { Search, ArrowLeft, Atom } from "lucide-react";
import { useState } from "react";
import { phytoCompounds } from "@/app/data/mockData";
import type { PhytoCompound } from "@/app/data/mockData";
import { CompoundDetailPage } from "./CompoundDetailPage";

interface SearchCompoundPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function SearchCompoundPage({ isDarkMode, onBack}: SearchCompoundPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompound, setSelectedCompound] = useState<PhytoCompound | null>(null);

  const filteredCompounds = phytoCompounds.filter(compound =>
    compound.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    compound.formula.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCompound) {
    return (
      <CompoundDetailPage
        compound={selectedCompound}
        isDarkMode={isDarkMode}
        onBack={() => setSelectedCompound(null)}
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
          <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
            <Atom className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Search Phytocompounds
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
              placeholder="Search by compound name or formula..."
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
          {filteredCompounds.length > 0 ? (
            <div className="max-h-[600px] overflow-y-auto">
              {filteredCompounds.map((compound, index) => (
                <div
                  key={compound.id}
                  onClick={() => setSelectedCompound(compound)}
                  className={`p-6 cursor-pointer transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700/50 border-gray-700' 
                      : 'hover:bg-gray-50 border-gray-200'
                  } ${index !== 0 ? 'border-t' : ''}`}
                >
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {compound.name}
                  </h3>
                  <p className={`text-sm font-mono mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {compound.formula}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    Molecular Weight: {compound.molecularWeight}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No phytocompounds found matching your search.
              </p>
            </div>
          )}
        </div>

        {filteredCompounds.length > 0 && (
          <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Found {filteredCompounds.length} compound(s)
          </p>
        )}
      </div>
    </div>
  );
}