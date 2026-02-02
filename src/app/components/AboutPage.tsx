import { ArrowLeft } from "lucide-react";

interface AboutPageProps {
    isDarkMode: boolean;
    onBack: () => void;
}

export function AboutPage({ isDarkMode, onBack }: AboutPageProps) {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8 sm:py-12`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h1 className={`text-2xl sm:text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    About
                </h1>

                {/* Page content will go here */}
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                    <div className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p className="mt-4">
                            Liver diseases, ranging from hepatitis to cirrhosis and hepatocellular carcinoma, pose significant global health challenges, driving an urgent need for safe and effective therapeutics. In response, researchers are increasingly turning to medicinal plants, which represent rich sources of bioactive phytochemicals with promising hepatoprotective properties.
                        </p>

                        <p className="mt-4">
                            Welcome to DatabaseWebsite, a comprehensive research platform dedicated to botanical sciences, phytochemistry, and liver disease therapeutics. This database compiles and organizes detailed information on medicinal plant species and their phytocompounds with reported efficacy against liver disorders, supporting advanced research in pharmacology, ethnobotany, natural product chemistry, and evidence-based herbal medicine. It offers structured insights into plant species, their active constituents, and the pharmacokinetic profiles of key compounds, enabling users to evaluate both traditional uses and experimentally validated activities.
                        </p>

                        <p className="mt-4">
                            By integrating traditional knowledge with modern scientific research, this database aims to facilitate hepatoprotective drug discovery, and promote further studies on plant-derived agents for the prevention and treatment of liver diseases. It is designed as a valuable resource for researchers, healthcare professionals, and traditional medicine practitioners seeking a focused, up-to-date, and scientifically grounded reference on hepatoprotective medicinal plants and their phytochemicals.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
