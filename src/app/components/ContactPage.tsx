import { Mail, Phone, MapPin, User as UserIcon, ArrowLeft } from "lucide-react";

interface ContactPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export function ContactPage({ isDarkMode, onBack }: ContactPageProps) {
  return (
    <div className={`py-12 px-4 sm:px-8`}>
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
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h1>
        
        <div className="space-y-8">
          {/* Scholar Information */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <UserIcon className="w-6 h-6 text-green-500" />
              Scholar
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shilpa Rudra</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>PhD Scholar</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Department of Integrative Biology</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>School of Biosciences and Technology</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vellore Institute of Technology, Vellore</p>
              </div>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a 
                    href="mailto:shilpa.rudra2023@vitstudent.ac.in" 
                    className={`hover:text-green-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    shilpa.rudra2023@vitstudent.ac.in
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    VIT University, Vellore<br />
                    Tamil Nadu, India, 632014
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Guide Information */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <UserIcon className="w-6 h-6 text-purple-500" />
              Research Guide
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dr. Danie Kingsley</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Associate Professor</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Department of Integrative Biology</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>School of Biosciences and Technology</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vellore Institute of Technology, Vellore</p>
              </div>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <a 
                    href="mailto:j.daniekingsley@vit.ac.in" 
                    className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    j.daniekingsley@vit.ac.in
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>+91 90259 56491</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Department of Integrative Biology<br />
                    VIT University, Vellore<br />
                    Tamil Nadu, India, 632014
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Database Maintainer */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <UserIcon className="w-6 h-6 text-blue-500" />
              Database Maintainer
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a 
                  href="mailto:maintainer@phytodatabase.edu" 
                  className={`hover:text-blue-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  maintainer@phytodatabase.edu
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>91-416-2243091/93</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Vellore Institute of Technology, Vellore Campus<br />
                  Tamil Nadu, India, 632014
                </span>
              </div>
            </div>
          </div>
          
          {/* General Inquiries */}
          <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              General Inquiries
            </h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              For questions about database access, data submissions, or collaboration opportunities, 
              please contact the maintainer via email. We typically respond within 2-3 business days.
            </p>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              For technical issues or bug reports, please include detailed information about the issue, 
              including screenshots if applicable, to help us resolve the problem quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}