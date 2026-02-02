import { Award, Heart, Book, ArrowLeft, University } from "lucide-react";

interface AcknowledgementPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function AcknowledgementPage({ isDarkMode, onBack }: AcknowledgementPageProps) {
  return (
    <div className={`py-12 px-4 sm:px-8`}>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${isDarkMode
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
                <li>School of Biosciences and Technology (SBST)</li>
                <li>Vellore Institute of Technology (VIT), Vellore, India</li>
              </ul>
            </div>
          </div>

          {/* Institutional Support */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <University className="w-6 h-6 text-green-500" />
              Institutional Support
            </h2>

            <div className="space-y-4">
              <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>We gratefully acknowledge the institutional support of the School of Bioscience and Technology (SBST), VIT, Vellore, for providing the computational infrastructure, server space, and laboratory resources required for the development of the Database</li>
                <li>We thank Technical and infrastructural support (servers, IT team, database hosting, high‑performance computing, library access)</li>
              </ul>
            </div>
          </div>

          {/* Data Sources & References */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Book className="w-6 h-6 text-blue-500" />
              Data Sources & References
            </h2>

            <div className="space-y-4">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                This database incorporates data from various publicly available sources:
              </p>
              <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>PubChem - National Library of Medicine
                  <ul
                    className={`list-inside ml-6 mt-2 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    style={{ listStyleType: 'circle' }}
                  >
                    <li><i>Link:</i></li>
                  </ul>
                </li>
                <li>IMPAAT 2.0 - Indian Medicinal Plants, Phytochemistry And Therapeutics
                  <ul
                    className={`list-inside ml-6 mt-2 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    style={{ listStyleType: 'circle' }}
                  >
                    <li><i>Link:</i></li>
                  </ul>
                </li>
                <li>SWISSADME
                  <ul
                    className={`list-inside ml-6 mt-2 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    style={{ listStyleType: 'circle' }}
                  >
                    <li><i>Link:</i></li>
                  </ul>
                </li>
                <li>ChEMBL - European Bioinformatics Institute (EMBL-EBI)
                  <ul
                    className={`list-inside ml-6 mt-2 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    style={{ listStyleType: 'circle' }}
                  >
                    <li><i>Link:</i></li>
                  </ul>
                </li>
                <li>Various peer-reviewed scientific publications and research articles</li>
              </ul>
            </div>
          </div>

          {/* Final Note */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
             <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Heart className="w-6 h-6 text-red-500" />
              All friends and colleagues
            </h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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