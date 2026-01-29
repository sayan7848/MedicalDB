import { BookOpen, Search, List, Mail } from "lucide-react";

interface HelpPageProps {
  isDarkMode: boolean;
}

export function HelpPage({ isDarkMode }: HelpPageProps) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-8">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Help & Documentation
        </h1>
        
        <div className="space-y-6">
          {/* Getting Started */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                <BookOpen className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Getting Started
              </h2>
            </div>
            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Welcome to the DatabaseWebsite for medicinal plants and phytocompounds. This platform provides comprehensive information
              about various plant species and their bioactive compounds used in traditional and modern medicine.
            </p>
          </div>

          {/* Using Browse */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                <List className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Using the Browse Feature
              </h2>
            </div>
            <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>The Browse page allows you to explore the entire database at once:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View all medicinal plants in a scrollable list on the left</li>
                <li>View all phytocompounds in a scrollable list on the right</li>
                <li>Click on any entry to view detailed information</li>
                <li>Each plant entry shows its scientific name, family, and description</li>
                <li>Each compound entry shows its molecular formula and weight</li>
              </ul>
            </div>
          </div>

          {/* Using Search */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
                <Search className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Using the Search Feature
              </h2>
            </div>
            <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>The Search page provides advanced fuzzy search capabilities:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Fuzzy Matching:</strong> The search understands typos and partial matches</li>
                <li><strong>Real-time Suggestions:</strong> As you type, relevant results appear instantly</li>
                <li><strong>Multiple Search Fields:</strong> Search plants by common name, scientific name, or family</li>
                <li><strong>Compound Search:</strong> Search phytocompounds by name or molecular formula</li>
                <li><strong>Quick Navigation:</strong> Click on any suggestion to view full details</li>
              </ul>
            </div>
          </div>

          {/* Database Information */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Database Information
            </h2>
            <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                This database is part of a PhD dissertation research focused on medicinal plants and their bioactive phytochemical compounds.
                The information provided includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Botanical classification and nomenclature</li>
                <li>Traditional and modern medicinal uses</li>
                <li>Phytochemical composition and properties</li>
                <li>Molecular structures and weights</li>
                <li>Pharmacological activities</li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full ${isDarkMode ? 'bg-orange-900/50' : 'bg-orange-100'}`}>
                <Mail className={`w-6 h-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Need More Help?
              </h2>
            </div>
            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              If you have questions, suggestions, or need assistance with the database, please contact the maintainer
              using the contact information provided in the footer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
