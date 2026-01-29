import { BrowsePage } from "@/app/components/BrowsePage";
import { SearchPage } from "@/app/components/SearchPage";
import { HelpPage } from "@/app/components/HelpPage";
import { CitationPage } from "@/app/components/CitationPage";
import { PlantDetailPage } from "@/app/components/PlantDetailPage";
import { CompoundDetailPage } from "@/app/components/CompoundDetailPage";
import { Plant, PhytoCompound } from "@/app/data/mockData";
import { Search, FlaskConical } from "lucide-react";

interface AppRouterProps {
  currentPage: string;
  isDarkMode: boolean;
  selectedPlant: Plant | null;
  selectedCompound: PhytoCompound | null;
  onNavigate: (page: string, data?: Plant | PhytoCompound) => void;
  onBack: () => void;
}

export function AppRouter({ currentPage, isDarkMode, selectedPlant, selectedCompound, onNavigate, onBack }: AppRouterProps) {
  
  // Render different pages based on currentPage state
  if (currentPage === 'browse') {
    return <BrowsePage isDarkMode={isDarkMode} onNavigate={onNavigate} />;
  }
  
  if (currentPage === 'search') {
    return <SearchPage isDarkMode={isDarkMode} onNavigate={onNavigate} />;
  }
  
  if (currentPage === 'help') {
    return <HelpPage isDarkMode={isDarkMode} />;
  }
  
  if (currentPage === 'citation') {
    return <CitationPage isDarkMode={isDarkMode} />;
  }
  
  if (currentPage === 'plant-detail' && selectedPlant) {
    return <PlantDetailPage plant={selectedPlant} isDarkMode={isDarkMode} onBack={onBack} />;
  }
  
  if (currentPage === 'compound-detail' && selectedCompound) {
    return <CompoundDetailPage compound={selectedCompound} isDarkMode={isDarkMode} onBack={onBack} />;
  }
  
  // Default home page
  return (
    <div className="relative max-w-7xl mx-auto px-8 py-20">
      <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Available Functions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Search Plant */}
        <div 
          onClick={() => onNavigate('search')}
          className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}
        >
          <div className="flex items-center justify-center mb-6">
            <div className={`p-4 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
              <Search className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Search Plant</h3>
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our comprehensive database of plant species with detailed botanical information and research data.
          </p>
        </div>

        {/* Search PhytoCompounds */}
        <div 
          onClick={() => onNavigate('search')}
          className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}
        >
          <div className="flex items-center justify-center mb-6">
            <div className={`p-4 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
              <FlaskConical className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Search PhytoCompounds</h3>
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Access detailed information on phytochemical compounds, their properties, and scientific applications.
          </p>
        </div>
      </div>
    </div>
  );
}
