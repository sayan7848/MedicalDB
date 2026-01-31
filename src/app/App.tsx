import { useState, useEffect } from "react";
import { Search, Menu, FlaskConical, User, ChevronDown, LogOut, X, Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import { BrowsePage } from "@/app/components/BrowsePage";
import { SearchPage } from "@/app/components/SearchPage";
import { HelpPage } from "@/app/components/HelpPage";
import { CitationPage } from "@/app/components/CitationPage";
import { PlantDetailPage } from "@/app/components/PlantDetailPage";
import { CompoundDetailPage } from "@/app/components/CompoundDetailPage";
import { ContactPage } from "@/app/components/ContactPage";
import { AcknowledgementPage } from "@/app/components/AcknowledgementPage";
import { Plant, PhytoCompound } from "@/app/data/mockData";
import vitLogo from "@/assets/425314c8321c30346a324b0b3dce365185965331.png";
import headerBg from "@/assets/6abdbe5a9ca4f7200906e3e2f5e6b79252364bb0.png";

interface UserData {
  name: string;
  email: string;
  password: string;
  institution: string;
  designation: string;
}

export default function App() {
  // Header and logo images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1611865445506-b45f9f119080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luYWwlMjBwbGFudHMlMjBoZXJic3xlbnwxfHx8fDE3Njk3MDIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1669344319065-61282714d7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHl0b2NoZW1pc3RyeSUyMGxhYm9yYXRvcnklMjBjb21wb3VuZHN8ZW58MXx8fHwxNzY5NzAyMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659328376647-52ec39d1a5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtZWRpY2luZSUyMHBsYW50c3xlbnwxfHx8fDE3Njk3MDIyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1668932105708-4fb4eb8eb012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjByZXNlYXJjaCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY5NzAyMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1718105019708-9d41f411a405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGhlcmJzJTIwbWVkaWNpbmFsfGVufDF8fHx8MTc2OTcwMjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Otherwise, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Authentication states
  const [currentUser, setCurrentUser] = useState<UserData | null>(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [signInStep, setSignInStep] = useState<'email' | 'password'>('email');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // Sign-up form states
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    institution: '',
    designation: ''
  });
  const [signUpError, setSignUpError] = useState('');

  // Navigation states
  const [currentPage, setCurrentPage] = useState<'home' | 'browse' | 'search' | 'help' | 'citation' | 'plant-detail' | 'compound-detail' | 'contact' | 'acknowledgement'>('home');
  const [previousPage, setPreviousPage] = useState<'home' | 'browse' | 'search' | 'help'>('home');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedCompound, setSelectedCompound] = useState<PhytoCompound | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get all users from localStorage
  const getAllUsers = (): UserData[] => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Save users to localStorage
  const saveUsers = (users: UserData[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Handle sign-in email submission
  const handleSignInEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = getAllUsers();
    const userExists = users.find(u => u.email === signInEmail);
    
    if (!userExists) {
      setSignInError('Email not found. Please sign up first.');
    } else {
      setSignInError('');
      setSignInStep('password');
    }
  };

  // Handle sign-in password submission
  const handleSignInPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = getAllUsers();
    const user = users.find(u => u.email === signInEmail && u.password === signInPassword);
    
    if (!user) {
      setSignInError('Incorrect password.');
    } else {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setShowSignInModal(false);
      setSignInEmail('');
      setSignInPassword('');
      setSignInError('');
      setSignInStep('email');
    }
  };

  // Handle sign-up
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!signUpData.name || !signUpData.email || !signUpData.password || !signUpData.institution || !signUpData.designation) {
      setSignUpError('All fields are required.');
      return;
    }

    const users = getAllUsers();
    const emailExists = users.find(u => u.email === signUpData.email);
    
    if (emailExists) {
      setSignUpError('Email already exists. Please sign in.');
      return;
    }

    // Add new user
    const newUser: UserData = { ...signUpData };
    users.push(newUser);
    saveUsers(users);
    
    // Auto sign-in after sign-up
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Reset form and close modal
    setShowSignUpModal(false);
    setSignUpData({ name: '', email: '', password: '', institution: '', designation: '' });
    setSignUpError('');
  };

  // Handle sign-out
  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setShowUserDropdown(false);
  };

  // Open sign-in modal
  const openSignInModal = () => {
    setShowSignInModal(true);
    setSignInStep('email');
    setSignInEmail('');
    setSignInPassword('');
    setSignInError('');
  };

  // Close modals
  const closeSignInModal = () => {
    setShowSignInModal(false);
    setSignInStep('email');
    setSignInEmail('');
    setSignInPassword('');
    setSignInError('');
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
    setSignUpData({ name: '', email: '', password: '', institution: '', designation: '' });
    setSignUpError('');
  };

  // Navigation handler
  const handleNavigate = (page: string, data?: Plant | PhytoCompound) => {
    // Check if user needs to be authenticated for certain pages
    if (!currentUser && (page === 'browse' || page === 'search')) {
      openSignInModal();
      return;
    }
    
    if (page === 'plant-detail' && data) {
      // Save current page as previous before navigating to detail
      setPreviousPage(currentPage as 'home' | 'browse' | 'search' | 'help');
      setSelectedPlant(data as Plant);
      setCurrentPage('plant-detail');
    } else if (page === 'compound-detail' && data) {
      // Save current page as previous before navigating to detail
      setPreviousPage(currentPage as 'home' | 'browse' | 'search' | 'help');
      setSelectedCompound(data as PhytoCompound);
      setCurrentPage('compound-detail');
    } else {
      setCurrentPage(page as any);
    }
    setShowHamburgerMenu(false);
  };

  const handleBack = () => {
    setCurrentPage(previousPage);
    setSelectedPlant(null);
    setSelectedCompound(null);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header with institution background */}
      <header className="relative h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: `url('${headerBg}')` }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Header content */}
        <div className="relative h-full flex flex-col px-4 sm:px-8 max-w-7xl mx-auto">
          {/* Top row - Two column layout */}
          <div className="flex items-start justify-between pt-6">
            {/* Left side - VIT Logo only */}
            <div className="flex-shrink-0">
              <img 
                src={vitLogo}
                alt="VIT Logo"
                className="h-12 sm:h-24 object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Right side - Dark mode toggle and Auth buttons */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                {currentUser ? (
                  /* User dropdown */
                  <div className="relative">
                    <button
                      onClick={() => setShowUserDropdown(!showUserDropdown)}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border border-white/30 shadow-lg transition-colors flex items-center gap-2 text-sm sm:text-base"
                    >
                      <User className="w-5 h-5" />
                      <span>{currentUser.email}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {showUserDropdown && (
                      <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl overflow-hidden z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} border`}>
                        <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-gray-700 bg-gray-700/50' : 'border-gray-200 bg-gray-50'}`}>
                          <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentUser.name}</p>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{currentUser.email}</p>
                          <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{currentUser.designation} at {currentUser.institution}</p>
                        </div>
                        <button
                          onClick={handleSignOut}
                          className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                    <>
                    {/* Sign-in button */}
                    <button 
                      onClick={openSignInModal}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border border-white/30 shadow-lg transition-colors text-sm sm:text-base"
                    >
                      Sign In
                    </button>
                    
                    {/* Sign-up button */}
                    <button 
                      onClick={() => setShowSignUpModal(true)}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border border-white/30 shadow-lg transition-colors text-sm sm:text-base"
                    >
                      Sign Up
                    </button>
                  </>
                )}
                {/* Dark mode toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-lg shadow-lg transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Center content - Website name and description (moved down) */}
          <div className="flex-grow flex flex-col items-center justify-center px-2 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 leading-tight">DatabaseWebsite</h1>
            <p className="text-base sm:text-xl text-gray-200">Plant & PhytoCompound Research Portal</p>
          </div>
        </div>
      </header>

      {/* Database Description Section */}
      <section className={`relative py-8 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-start gap-6">
            {/* Hamburger menu (when logged in) */}
            {currentUser && (
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
                  className={`p-3 rounded-lg shadow-lg transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                  aria-label="Toggle menu"
                >
                  {showHamburgerMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                
                {/* Hamburger Menu Dropdown */}
                {showHamburgerMenu && (
                  <div className={`absolute top-full mt-2 left-0 w-64 rounded-lg shadow-xl z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} border`}>
                    <nav className="py-2">
                      <button onClick={() => handleNavigate('home')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Home
                      </button>
                      <button onClick={() => handleNavigate('browse')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Browse
                      </button>
                      <button onClick={() => handleNavigate('search')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Search
                      </button>
                      <button onClick={() => handleNavigate('help')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Help
                      </button>
                      <button onClick={() => handleNavigate('citation')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Citation
                      </button>
                      <button onClick={() => handleNavigate('contact')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Contact
                      </button>
                      <button onClick={() => handleNavigate('acknowledgement')} className={`w-full text-left block px-4 py-3 transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                        Acknowledgement
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            )}
            
            {/* Description text */}
            <div className="flex-grow text-center px-2">
              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Welcome to DatabaseWebsite, a comprehensive research platform dedicated to botanical sciences and phytochemistry. 
                This database provides detailed information on medicinal plant species and their phytochemical compounds, 
                supporting advanced research in pharmacology, ethnobotany, and natural product chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content - Functionality list with dynamic background */}
      <main className="relative flex-grow overflow-hidden">
        {/* Conditional rendering based on current page */}
        {currentPage === 'browse' ? (
          <BrowsePage isDarkMode={isDarkMode} onNavigate={handleNavigate} onBack={handleBack} />
        ) : currentPage === 'search' ? (
          <SearchPage isDarkMode={isDarkMode} onNavigate={handleNavigate} onBack={handleBack} />
        ) : currentPage === 'help' ? (
          <HelpPage isDarkMode={isDarkMode} onBack={handleBack} />
        ) : currentPage === 'citation' ? (
          <CitationPage isDarkMode={isDarkMode} onBack={handleBack} />
        ) : currentPage === 'plant-detail' && selectedPlant ? (
          <PlantDetailPage plant={selectedPlant} isDarkMode={isDarkMode} onBack={handleBack} />
        ) : currentPage === 'compound-detail' && selectedCompound ? (
          <CompoundDetailPage compound={selectedCompound} isDarkMode={isDarkMode} onBack={handleBack} />
        ) : currentPage === 'contact' ? (
          <ContactPage isDarkMode={isDarkMode} onBack={handleBack} />
        ) : currentPage === 'acknowledgement' ? (
          <AcknowledgementPage isDarkMode={isDarkMode} onBack={handleBack} />
        ) : (
          <>
            {/* Dynamic background images with transition */}
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                  backgroundImage: `url('${image}')`,
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
              />
            ))}
            
            {/* Overlay for better content readability */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}></div>
            
            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Available Functions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-2 sm:px-0">
                {/* Search Plant */}
                <div onClick={() => handleNavigate('search')} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
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
                <div onClick={() => handleNavigate('search')} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
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
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Website Info */}
            <div>
              <h3 className="text-xl font-bold mb-2">DatabaseWebsite</h3>
              <p className="text-gray-400 text-sm">
                A comprehensive research portal for plant species and phytochemical compounds. 
                Part of ongoing PhD research in botanical sciences.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Maintainer</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <a href="mailto:maintainer@phytodatabase.edu" className="text-gray-300 hover:text-white transition-colors text-sm">
                    maintainer@phytodatabase.edu
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">Department of Botanical Sciences, University Campus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DatabaseWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sign-in Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} relative`}>
            <div className={`px-6 py-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sign In</h2>
              <button
                onClick={closeSignInModal}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {signInStep === 'email' ? (
                <form onSubmit={handleSignInEmailSubmit}>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={signInEmail}
                      onChange={(e) => setSignInEmail(e.target.value)}
                      className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      required
                    />
                  </div>
                  
                  {signInError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                      {signInError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Continue
                  </button>
                  
                  {/* Sign-up link */}
                  <div className={`mt-4 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        closeSignInModal();
                        setShowSignUpModal(true);
                      }}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSignInPasswordSubmit}>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={signInEmail}
                      disabled
                      className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-500'}`}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Password
                    </label>
                    <input
                      type="password"
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                      required
                    />
                  </div>
                  
                  {signInError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                      {signInError}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSignInStep('email')}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sign-up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} max-h-[90vh] overflow-y-auto relative`}>
            <div className={`px-6 py-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} z-10`}>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sign Up</h2>
              <button
                onClick={closeSignUpModal}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSignUp} className="p-6">
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={signUpData.name}
                  onChange={(e) => setSignUpData({...signUpData, name: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={signUpData.email}
                  onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  value={signUpData.password}
                  onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Institution
                </label>
                <input
                  type="text"
                  value={signUpData.institution}
                  onChange={(e) => setSignUpData({...signUpData, institution: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Designation
                </label>
                <input
                  type="text"
                  value={signUpData.designation}
                  onChange={(e) => setSignUpData({...signUpData, designation: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                  placeholder="e.g., PhD Student, Professor, Researcher"
                  required
                />
              </div>
              
              {signUpError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {signUpError}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Create Account
              </button>
              
              {/* Sign-in link */}
              <div className={`mt-4 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    closeSignUpModal();
                    openSignInModal();
                  }}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}