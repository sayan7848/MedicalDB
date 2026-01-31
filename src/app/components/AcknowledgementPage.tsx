import { Award, Heart, Book, ArrowLeft } from "lucide-react";

interface AcknowledgementPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function AcknowledgementPage({ isDarkMode, onBack }: AcknowledgementPageProps) {
  return (
    <div className={`min-h-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12 px-4 sm:px-8`}>
      <div className="max-w-4xl mx-auto">
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
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Acknowledgements</h1>
        
        <div className="space-y-8">
          {/* Funding & Support */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Award className="w-6 h-6 text-yellow-500" />
              Funding & Support
            </h2>
            
            <div className="space-y-4">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                This research was supported by:
              </p>
              
              <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Vellore Institute of Technology (VIT), Vellore, India</li>
                <li>Department of Science and Technology (DST), Government of India</li>
              </ul>
            </div>
          </div>
          
          {/* Research Guidance */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Heart className="w-6 h-6 text-red-500" />
              Research Guidance
            </h2>
            
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We extend our sincere gratitude to:
            </p>
            
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>
                <strong>Dr. Guide Name</strong> - Research Supervisor and Professor, Department of Integrative Biology, VIT Vellore
                <br />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  For invaluable guidance, constant support, and mentorship throughout this research
                </span>
              </li>
              
              <li>
                <strong>Dr. Co-Guide Name</strong> - Co-Supervisor and Associate Professor
                <br />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  For expert advice on phytochemistry and analytical methods
                </span>
              </li>
            </ul>
          </div>
          
          {/* Institutional Support */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Institutional Support
            </h2>
          </div>
          
          {/* Data Sources */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Book className="w-6 h-6 text-blue-500" />
              Data Sources & References
            </h2>
            
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              This database incorporates data from various publicly available sources:
            </p>
            
            <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>PubChem - National Library of Medicine</li>
              <li>ChEMBL - European Bioinformatics Institute (EMBL-EBI)</li>
              <li>The Plant List - Royal Botanic Gardens, Kew</li>
              <li>MPNS (Medicinal Plant Names Services)</li>
              <li>Various peer-reviewed scientific publications and research articles</li>
            </ul>
          </div>
          
          {/* Final Note */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <p className={`text-center italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We are grateful to all contributors, collaborators, and users of this database who help advance 
              research in medicinal plants and phytochemistry. Your support and feedback are invaluable to 
              the continuous improvement of this platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}