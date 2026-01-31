import { ArrowLeft, BookOpen } from "lucide-react";

interface CitationPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function CitationPage({ isDarkMode, onBack }: CitationPageProps) {
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
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Citation</h1>
        
        <div className="space-y-8">
          {/* Citation Information */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <BookOpen className="w-6 h-6 text-blue-500" />
              How to Cite
            </h2>
            
            <div className="space-y-6">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                If you use our resource, please cite the following research article:
              </p>
              
              {/* Article Citation */}
              <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="space-y-3">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    1) Article Details
                  </h3>
                  
                  <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                      <strong>Authors:</strong> Author Name(s)
                    </p>
                    <p>
                      <strong>Title:</strong> "Database of Medicinal Plants and Phytocompounds"
                    </p>
                    <p>
                      <strong>Journal:</strong> Journal Name
                    </p>
                    <p>
                      <strong>Year:</strong> 2024
                    </p>
                    <p>
                      <strong>Volume:</strong> XX
                    </p>
                    <p>
                      <strong>Pages:</strong> XX-XX
                    </p>
                    <p>
                      <strong>DOI:</strong> <code className={isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}>10.xxxx/xxxxx</code>
                    </p>
                  </div>
                </div>
              </div>

              {/* APA Citation Format */}
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  APA Format:
                </h3>
                <p className={`italic p-4 rounded-lg ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                  Author Name, A. (2024). Database of medicinal plants and phytocompounds. <em>Journal Name</em>, XX, XX-XX. https://doi.org/10.xxxx/xxxxx
                </p>
              </div>

              {/* BibTeX Citation Format */}
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  BibTeX Format:
                </h3>
                <pre className={`p-4 rounded-lg overflow-x-auto text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
{`@article{medicinaldb2024,
  author = {Author Name},
  title = {Database of Medicinal Plants and Phytocompounds},
  journal = {Journal Name},
  year = {2024},
  volume = {XX},
  pages = {XX--XX},
  doi = {10.xxxx/xxxxx}
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
