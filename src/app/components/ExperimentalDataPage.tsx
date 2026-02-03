import { BookOpen, Search, List, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface ExperimentalDataPageProps {
  isDarkMode: boolean;
  onBack: () => void;
}

interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  abstract?: string;
  extractionType?: string;
  plantPart?: string;
  solvent?: string;
  diseaseInduced?: string;
  animalModel?: string;
  outcome?: string;
}

// Sample data - replace with your actual data
const papers: Paper[] = [
  {
    id: "1",
    title: "Antidiabetic Activity of Aqueous Extract of Azadirachta indica Leaves in Streptozotocin-Induced Diabetic Rats",
    authors: "Kumar A, Singh B, Sharma C, Patel D",
    journal: "Journal of Ethnopharmacology",
    year: "2024",
    doi: "10.1234/example.2024.001",
    abstract: "This study evaluates the antidiabetic potential of aqueous extract...",
    extractionType: "Aqueous extraction",
    plantPart: "Leaves",
    solvent: "Water",
    diseaseInduced: "Streptozotocin",
    animalModel: "Wistar rats",
    outcome: "Significant reduction in blood glucose levels (p<0.05)"
  },
  {
    id: "2",
    title: "Hepatoprotective Effects of Methanolic Extract of Silybum marianum Seeds Against CCl4-Induced Liver Damage",
    authors: "Rahman M, Ahmed S, Khan R, Ali T",
    journal: "Phytotherapy Research",
    year: "2023",
    doi: "10.1234/example.2023.045",
    abstract: "This investigation explores the hepatoprotective properties...",
    extractionType: "Methanolic extraction",
    plantPart: "Seeds",
    solvent: "Methanol",
    diseaseInduced: "Carbon tetrachloride (CCl4)",
    animalModel: "Swiss albino mice",
    outcome: "Restored liver enzymes and reduced oxidative stress"
  },
  {
    id: "3",
    title: "Anti-inflammatory Activity of Ethanolic Extract of Curcuma longa Rhizomes in Carrageenan-Induced Paw Edema",
    authors: "Patel V, Gupta K, Joshi M, Shah N",
    journal: "International Journal of Pharmacology",
    year: "2024",
    doi: "10.1234/example.2024.089",
    abstract: "The present study investigates the anti-inflammatory effects...",
    extractionType: "Ethanolic extraction",
    plantPart: "Rhizomes",
    solvent: "Ethanol (70%)",
    diseaseInduced: "Carrageenan",
    animalModel: "Sprague-Dawley rats",
    outcome: "Significant reduction in paw edema volume (68.5%)"
  },
  {
    id: "4",
    title: "Cardioprotective Effects of Hydroalcoholic Extract of Terminalia arjuna Bark in Isoproterenol-Induced Myocardial Infarction",
    authors: "Sharma R, Verma P, Singh K, Mishra A",
    journal: "Cardiovascular Therapeutics",
    year: "2023",
    doi: "10.1234/example.2023.112",
    abstract: "This research evaluates the cardioprotective potential...",
    extractionType: "Hydroalcoholic extraction",
    plantPart: "Bark",
    solvent: "Ethanol-Water (50:50)",
    diseaseInduced: "Isoproterenol",
    animalModel: "Wistar albino rats",
    outcome: "Prevented cardiac necrosis and maintained cardiac markers"
  },
  {
    id: "5",
    title: "Neuroprotective Activity of Chloroform Extract of Bacopa monnieri Against Scopolamine-Induced Amnesia",
    authors: "Das S, Mukherjee B, Roy A, Ghosh P",
    journal: "Neuropharmacology",
    year: "2024",
    doi: "10.1234/example.2024.156",
    abstract: "The study explores the neuroprotective effects...",
    extractionType: "Chloroform extraction",
    plantPart: "Whole plant",
    solvent: "Chloroform",
    diseaseInduced: "Scopolamine",
    animalModel: "Swiss mice",
    outcome: "Improved memory retention and learning ability"
  },
  {
    id: "6",
    title: "Antioxidant Properties of Petroleum Ether Extract of Withania somnifera Roots in DPPH Radical Scavenging Assay",
    authors: "Reddy K, Rao V, Krishna M, Naidu S",
    journal: "Free Radical Biology & Medicine",
    year: "2023",
    doi: "10.1234/example.2023.198",
    abstract: "This investigation focuses on the antioxidant capacity...",
    extractionType: "Petroleum ether extraction",
    plantPart: "Roots",
    solvent: "Petroleum ether",
    diseaseInduced: "N/A (In vitro study)",
    animalModel: "N/A (In vitro study)",
    outcome: "IC50 value of 45.2 μg/mL in DPPH assay"
  },
  {
    id: "7",
    title: "Antimicrobial Activity of Acetone Extract of Ocimum sanctum Leaves Against Multi-Drug Resistant Bacteria",
    authors: "Singh H, Kapoor R, Pandey S, Gupta A",
    journal: "Journal of Antimicrobial Chemotherapy",
    year: "2024",
    doi: "10.1234/example.2024.223",
    abstract: "The present work evaluates antimicrobial efficacy...",
    extractionType: "Acetone extraction",
    plantPart: "Leaves",
    solvent: "Acetone",
    diseaseInduced: "N/A (Antimicrobial study)",
    animalModel: "N/A (In vitro study)",
    outcome: "MIC of 125 μg/mL against E. coli and S. aureus"
  },
  {
    id: "8",
    title: "Wound Healing Activity of Ethyl Acetate Extract of Aloe vera Gel in Excision Wound Model",
    authors: "Jain R, Mehta S, Agarwal P, Sharma D",
    journal: "Journal of Ethnopharmacology",
    year: "2023",
    doi: "10.1234/example.2023.267",
    abstract: "This study investigates the wound healing potential...",
    extractionType: "Ethyl acetate extraction",
    plantPart: "Gel",
    solvent: "Ethyl acetate",
    diseaseInduced: "Surgical excision",
    animalModel: "Wistar rats",
    outcome: "95% wound contraction by day 14"
  },
  {
    id: "9",
    title: "Antiulcer Activity of Aqueous Extract of Glycyrrhiza glabra Roots in Aspirin-Induced Gastric Ulcers",
    authors: "Khan F, Ali M, Hassan Q, Iqbal J",
    journal: "Digestive Diseases and Sciences",
    year: "2024",
    doi: "10.1234/example.2024.301",
    abstract: "The research examines the gastroprotective effects...",
    extractionType: "Aqueous extraction",
    plantPart: "Roots",
    solvent: "Water",
    diseaseInduced: "Aspirin",
    animalModel: "Albino rats",
    outcome: "72% reduction in ulcer index"
  },
  {
    id: "10",
    title: "Antihypertensive Effect of Methanolic Extract of Hibiscus sabdariffa Flowers in L-NAME Induced Hypertensive Rats",
    authors: "Patel M, Desai N, Trivedi H, Shah K",
    journal: "Journal of Cardiovascular Pharmacology",
    year: "2023",
    doi: "10.1234/example.2023.345",
    abstract: "This investigation explores the blood pressure lowering effects...",
    extractionType: "Methanolic extraction",
    plantPart: "Flowers",
    solvent: "Methanol",
    diseaseInduced: "L-NAME",
    animalModel: "Wistar rats",
    outcome: "Systolic BP reduced from 165 to 128 mmHg"
  }
];

export function ExperimentalDataPage({ isDarkMode, onBack }: ExperimentalDataPageProps) {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  if (selectedPaper) {
    return (
      <PaperDetailPage 
        paper={selectedPaper} 
        isDarkMode={isDarkMode} 
        onBack={() => setSelectedPaper(null)} 
      />
    );
  }

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-8`}>
      <div className="max-w-6xl mx-auto">
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

        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Related Experiments
        </h1>
        
        {/* Scrollable list container */}
        <div className={`rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border overflow-hidden`}>
          <div className="max-h-[600px] overflow-y-auto">
            {papers.map((paper, index) => (
              <div
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className={`p-6 cursor-pointer transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-gray-700/50 border-gray-700' 
                    : 'hover:bg-gray-50 border-gray-200'
                } ${index !== 0 ? 'border-t' : ''}`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {paper.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {paper.authors}
                </p>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {paper.journal} • {paper.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// New component for paper details
function PaperDetailPage({ paper, isDarkMode, onBack }: { 
  paper: Paper; 
  isDarkMode: boolean; 
  onBack: () => void 
}) {
  return (
    <div className={`min-h-screen py-12 px-4 sm:px-8`}>
      <div className="max-w-7xl mx-auto">
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

        {/* Title Section */}
        <div className={`rounded-xl p-6 mb-6 border-2 ${
          isDarkMode ? 'bg-gray-800 border-blue-500' : 'bg-white border-blue-400'
        }`}>
          <h2 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            TITLE OF THE PAPER
          </h2>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {paper.title}
          </h1>
        </div>

        {/* Main Content - Single Column */}
        <div className="space-y-6">
          {/* Experimental Details Box */}
          <div className={`rounded-xl p-6 border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Types of Extraction
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.extractionType || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Plants Part Used In Experiment
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.plantPart || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Solvent Used
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.solvent || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Disease Induced by
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.diseaseInduced || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Animal Model
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.animalModel || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className={`text-center text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Outcome of the Study
                </h3>
                <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.outcome || 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Publication Info Box */}
          <div className={`rounded-xl p-6 border ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
          }`}>
            <div className="space-y-3">
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Year of Publication
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.year}
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Journal of Publication
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.journal}
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  DOI
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paper.doi || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}