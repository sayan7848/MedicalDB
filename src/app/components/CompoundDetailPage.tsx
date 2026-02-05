import { ArrowLeft, FlaskConical } from "lucide-react";
import { PhytoCompound } from "@/app/data/mockData";
import phytoDetailBG from "@/assets/phytoDetailsBG.jpg";

interface CompoundDetailPageProps {
  compound: PhytoCompound;
  isDarkMode: boolean;
  onBack: () => void;
}

export function CompoundDetailPage({ compound, isDarkMode, onBack }: CompoundDetailPageProps) {
  return (
    <div className={`relative min-h-screen py-10 bg-cover bg-center`} style={{ backgroundImage: `url('${phytoDetailBG}')` }}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}></div>
      <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
          } border ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <FlaskConical className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} w-7 h-7`} />
          <h1 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {compound.name || "Name of Phytocompounds"}
          </h1>
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Row 0 */}
          
          {/* grid[0][0] - 2D Structure (single box) */}
          <div className={`border p-4 rounded-xl shadow-sm flex items-center justify-center ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <span className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg font-semibold`}>
              2D STRUCTURE
            </span>
          </div>
          
          {/* grid[0][1] - Basic Properties */}
          <div className={`border p-4 rounded-xl shadow-sm ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Basic Properties
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Molecular Formula:</span> {compound.formula || ""}
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Molecular Weight:</span> {compound.molecularWeight || ""}
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>SMILE:</span>
            </p>
          </div>

          {/* grid[0][2] - Drug Likeness & Solubility */}
          <div className={`border p-4 rounded-xl shadow-sm ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Drug Likeness & Solubility
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Drug Likeness:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Bioavailability Score:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>[ESOL] value:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Solubility class [ESOL]:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>[Silicos IT] value:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Solubility class [Silicos IT]:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>GI absorption:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>BBB permeant:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>P-gp substrate:</span></p>
          </div>

          {/* Row 1 */}
          {/* grid[1][0] - Physicochemical */}
          <div className={`border p-4 rounded-xl shadow-sm ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Physicochemical Properties
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of heavy atoms:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of aromatic heavy atoms:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of rotatable bonds:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of H-bond acceptors:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of H-bond donors:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Molar Refractivity:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>TPSA:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>LogP:</span></p>
          </div>

          {/* grid[1][1] and grid[1][2] - ADMET (spans 2 cols and 2 rows) */}
          <div className={`border p-4 rounded-xl shadow-sm col-span-1 lg:col-span-2 row-span-2 ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              ADMET & CYP Inhibition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                  Toxicity
                </h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Hepatotoxicity:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Mutagenicity:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Tumorigenic:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Irritant:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>A:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>B:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>C:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>D:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>E:</span></p>
              </div>
              <div>
                <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                  Inhibitor
                </h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>CYP1A2 inhibitor:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>CYP2C19 inhibitor:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>CYP2C9 inhibitor:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>CYP2D6 inhibitor:</span></p>
                <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>CYP3A4 inhibitor:</span></p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* grid[2][0] - Rule-Based Filters */}
          <div className={`border p-4 rounded-xl shadow-sm ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
            <h3 className={`text-sm font-semibold mb-3 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              Rule-Based Filters
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of Lipinski Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of Veber Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of Ghose Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of Egan Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of Mugge Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>No of Violations of MDDR Rule:</span></p>
            <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}><span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>QED:</span></p>
          </div>
        </div>

        {/* Bottom Full-Width Box */}
        <div className={`border p-6 rounded-xl shadow-sm min-h-[120px] ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}>
          <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Functions in LIVER DISEASE:
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}