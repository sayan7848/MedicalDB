import { ArrowLeft } from "lucide-react";
import { phytoCompounds } from "@/app/data/mockData";
import type { PhytoCompound } from "@/app/data/mockData";
import plantDetailBG from "@/assets/plantDetailsBG.jpg";

interface PhytocompoundEntry {
  slNo: number;
  name: string;
  hyperlink?: string;
  plantParts: string;
}

interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  kingdom?: string;
  division?: string;
  class?: string;
  order?: string;
  family: string;
  genus?: string;
  species?: string;
  description?: string;
  uses?: string[];
  phytocompounds: PhytocompoundEntry[];
}

interface PlantDetailPageProps {
  plant: Plant;
  isDarkMode: boolean;
  onBack: () => void;
  onNavigate: (page: string, data?: Plant | PhytoCompound) => void;
}

export function PlantDetailPage({ plant, isDarkMode, onBack, onNavigate }: PlantDetailPageProps) {
  console.log("Plant data:", plant);
  console.log("Phytocompounds:", plant.phytocompounds);

  return (
    <div className={`relative min-h-screen py-12 px-4 sm:px-8 bg-cover bg-center`} style={{ backgroundImage: `url('${plantDetailBG}')` }}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}></div>
      <div className="relative">
      <div className="max-w-7xl mx-auto">
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

        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {plant.commonName}
        </h1>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Section - Plant ID and Image */}
          <div className={`rounded-xl p-8 border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
          } flex flex-col items-center justify-center`}>
            <div className={`w-full rounded p-2 mb-4 text-center font-semibold ${
              isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-900'
            }`}>
              PLANT ID:
            </div>
            <div className={`text-6xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {plant.id}
            </div>
            {/* Placeholder for plant image */}
            <div className={`mt-8 w-full h-40 rounded flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Plant Image
              </span>
            </div>
          </div>

          {/* Right Section - Classification */}
          <div className={`lg:col-span-2 rounded-xl p-8 border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Classification
            </h2>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Types of Plant:
            </h3>
            <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {plant.kingdom && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kingdom:</span> {plant.kingdom}
                </p>
              )}
              {plant.division && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Division (Phylum):</span> {plant.division}
                </p>
              )}
              {plant.class && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Class:</span> {plant.class}
                </p>
              )}
              {plant.order && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Order:</span> {plant.order}
                </p>
              )}
              {plant.family && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Family:</span> {plant.family}
                </p>
              )}
              {plant.genus && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Genus:</span> {plant.genus}
                </p>
              )}
              {plant.species && (
                <p>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Species:</span> {plant.species}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Phytocompounds Table */}
        <div className={`rounded-xl border overflow-hidden ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
        }`}>
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className={`sticky top-0 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-200'}`}>
                <tr>
                  <th className={`px-6 py-4 text-left font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    SL NO
                  </th>
                  <th className={`px-6 py-4 text-left font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    PHYTOCOMPOUNDS PRESENT
                  </th>
                  <th className={`px-6 py-4 text-left font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    PARTS OF PLANT
                  </th>
                </tr>
              </thead>
              <tbody>
                {plant.phytocompounds && Array.isArray(plant.phytocompounds) && plant.phytocompounds.length > 0 ? (
                  plant.phytocompounds.map((compound) => (
                    <tr
                      key={compound.slNo}
                      className={`border-t ${
                        isDarkMode 
                          ? 'border-gray-700 hover:bg-gray-700/50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {compound.slNo}
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {compound.name ? (
                          (() => {
                            const match = phytoCompounds.find(
                              (c) => c.name.toLowerCase() === compound.name.toLowerCase()
                            );
                            return match ? (
                              <button
                                type="button"
                                onClick={() => onNavigate("compound-detail", match)}
                                className={`underline ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}
                              >
                                {compound.name}
                              </button>
                            ) : (
                              <span>{compound.name}</span>
                            );
                          })()
                        ) : (
                          ""
                        )}
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {compound.plantParts || '-'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className={`px-6 py-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      No phytocompounds data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
