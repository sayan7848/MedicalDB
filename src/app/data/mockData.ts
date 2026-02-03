// Mock data for plants and phytocompounds

export interface PhytocompoundEntry {
  slNo: number;
  name: string;
  hyperlink?: string;
  plantParts: string;
}

export interface Plant {
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

export interface PhytoCompound {
  id: string;
  name: string;
  formula: string;
  molecularWeight: string;
  description: string;
  sources: string[];
  properties: string[];
}

export const plants: Plant[] = [
  {
    id: "PHOT001",
    commonName: "Turmeric",
    scientificName: "Curcuma longa",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Monocotyledoneae",
    order: "Zingiberales",
    family: "Zingiberaceae",
    genus: "Curcuma",
    species: "C. longa",
    description: "A flowering plant with bright yellow rhizomes used extensively in cooking and traditional medicine.",
    uses: ["Anti-inflammatory", "Antioxidant", "Digestive health"],
    phytocompounds: [
      { slNo: 1, name: "Curcumin", hyperlink: "https://pubchem.ncbi.nlm.nih.gov/compound/985", plantParts: "" },
      { slNo: 2, name: "Demethoxycurcumin", plantParts: "" },
      { slNo: 3, name: "Bisdemethoxycurcumin", plantParts: "" }
    ]
  },
  {
    id: "PHOT002",
    commonName: "Neem",
    scientificName: "Azadirachta indica",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Rutales",
    family: "Meliaceae",
    genus: "Azadirachta",
    species: "A. indica",
    description: "An evergreen tree native to the Indian subcontinent known for its medicinal properties.",
    uses: ["Antibacterial", "Antifungal", "Skin care"],
    phytocompounds: [
      { slNo: 1, name: "Azadirachtin", hyperlink: "https://pubchem.ncbi.nlm.nih.gov/compound/5280863", plantParts: "" },
      { slNo: 2, name: "Nimbin", plantParts: "" },
      { slNo: 3, name: "Nimbidin", plantParts: "" }
    ]
  },
  {
    id: "PHOT003",
    commonName: "Ginger",
    scientificName: "Zingiber officinale",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Monocotyledoneae",
    order: "Zingiberales",
    family: "Zingiberaceae",
    genus: "Zingiber",
    species: "Z. officinale",
    description: "A flowering plant whose rhizome is widely used as a spice and in traditional medicine.",
    uses: ["Anti-nausea", "Anti-inflammatory", "Digestive aid"],
    phytocompounds: [
      { slNo: 1, name: "Gingerol", hyperlink: "https://pubchem.ncbi.nlm.nih.gov/compound/11141", plantParts: "" },
      { slNo: 2, name: "Shogaol", plantParts: "" },
      { slNo: 3, name: "Zingerone", plantParts: "" }
    ]
  },
  {
    id: "PHOT004",
    commonName: "Ashwagandha",
    scientificName: "Withania somnifera",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Solanales",
    family: "Solanaceae",
    genus: "Withania",
    species: "W. somnifera",
    description: "An ancient medicinal herb used in Ayurvedic medicine for stress relief and vitality.",
    uses: ["Adaptogen", "Stress relief", "Immune support"],
    phytocompounds: [
      { slNo: 1, name: "Withanolides", plantParts: "" },
      { slNo: 2, name: "Withaferin A", plantParts: "" },
      { slNo: 3, name: "Sitoindosides", plantParts: "" }
    ]
  },
  {
    id: "PHOT005",
    commonName: "Holy Basil",
    scientificName: "Ocimum sanctum",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Lamiales",
    family: "Lamiaceae",
    genus: "Ocimum",
    species: "O. sanctum",
    description: "A sacred plant in Hindu tradition with significant therapeutic properties.",
    uses: ["Stress relief", "Respiratory health", "Antioxidant"],
    phytocompounds: [
      { slNo: 1, name: "Eugenol", hyperlink: "https://pubchem.ncbi.nlm.nih.gov/compound/3314", plantParts: "" },
      { slNo: 2, name: "Ursolic acid", plantParts: "" },
      { slNo: 3, name: "Rosmarinic acid", plantParts: "" }
    ]
  },
  {
    id: "PHOT006",
    commonName: "Amla",
    scientificName: "Phyllanthus emblica",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Malpighiales",
    family: "Phyllanthaceae",
    genus: "Phyllanthus",
    species: "P. emblica",
    description: "Indian gooseberry, rich in vitamin C and used extensively in Ayurvedic preparations.",
    uses: ["Vitamin C source", "Hair care", "Immune booster"],
    phytocompounds: [
      { slNo: 1, name: "Ascorbic acid", plantParts: "" },
      { slNo: 2, name: "Gallic acid", plantParts: "" },
      { slNo: 3, name: "Ellagic acid", plantParts: "" }
    ]
  },
  {
    id: "PHOT007",
    commonName: "Brahmi",
    scientificName: "Bacopa monnieri",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Lamiales",
    family: "Plantaginaceae",
    genus: "Bacopa",
    species: "B. monnieri",
    description: "A creeping herb used to enhance memory and cognitive function.",
    uses: ["Memory enhancement", "Cognitive support", "Stress relief"],
    phytocompounds: [
      { slNo: 1, name: "Bacosides", plantParts: "" },
      { slNo: 2, name: "Bacoside A", plantParts: "" },
      { slNo: 3, name: "Bacoside B", plantParts: "" }
    ]
  },
  {
    id: "PHOT008",
    commonName: "Fenugreek",
    scientificName: "Trigonella foenum-graecum",
    kingdom: "Plantae",
    division: "Magnoliophyta",
    class: "Dicotyledoneae",
    order: "Fabales",
    family: "Fabaceae",
    genus: "Trigonella",
    species: "T. foenum-graecum",
    description: "An annual plant with seeds used as both spice and medicine.",
    uses: ["Blood sugar control", "Lactation support", "Digestive health"],
    phytocompounds: [
      { slNo: 1, name: "Trigonelline", plantParts: "" },
      { slNo: 2, name: "Diosgenin", plantParts: "" },
      { slNo: 3, name: "4-Hydroxyisoleucine", plantParts: "" }
    ]
  }
];

export const phytoCompounds: PhytoCompound[] = [
  {
    id: "1",
    name: "Curcumin",
    formula: "C21H20O6",
    molecularWeight: "368.38 g/mol",
    description: "A bright yellow polyphenolic compound found in turmeric with powerful anti-inflammatory properties.",
    sources: ["Turmeric"],
    properties: ["Anti-inflammatory", "Antioxidant", "Anticancer potential"]
  },
  {
    id: "2",
    name: "Azadirachtin",
    formula: "C35H44O16",
    molecularWeight: "720.71 g/mol",
    description: "A complex tetranortriterpenoid found in neem with potent insecticidal properties.",
    sources: ["Neem"],
    properties: ["Insecticidal", "Antibacterial", "Antifungal"]
  },
  {
    id: "3",
    name: "Gingerol",
    formula: "C17H26O4",
    molecularWeight: "294.39 g/mol",
    description: "The primary bioactive compound in fresh ginger responsible for its distinctive flavor.",
    sources: ["Ginger"],
    properties: ["Anti-inflammatory", "Antioxidant", "Anti-nausea"]
  },
  {
    id: "4",
    name: "Withaferin A",
    formula: "C28H38O6",
    molecularWeight: "470.6 g/mol",
    description: "A steroidal lactone and the principal bioactive compound in ashwagandha.",
    sources: ["Ashwagandha"],
    properties: ["Anti-cancer", "Anti-inflammatory", "Neuroprotective"]
  },
  {
    id: "5",
    name: "Eugenol",
    formula: "C10H12O2",
    molecularWeight: "164.20 g/mol",
    description: "An aromatic compound found in holy basil with analgesic and antiseptic properties.",
    sources: ["Holy Basil", "Clove"],
    properties: ["Analgesic", "Antiseptic", "Antioxidant"]
  },
  {
    id: "6",
    name: "Gallic Acid",
    formula: "C7H6O5",
    molecularWeight: "170.12 g/mol",
    description: "A phenolic acid found in amla with strong antioxidant activity.",
    sources: ["Amla", "Tea", "Oak bark"],
    properties: ["Antioxidant", "Anti-inflammatory", "Antimicrobial"]
  },
  {
    id: "7",
    name: "Bacoside A",
    formula: "C46H74O17",
    molecularWeight: "899.07 g/mol",
    description: "A triterpenoid saponin from brahmi known for cognitive-enhancing effects.",
    sources: ["Brahmi"],
    properties: ["Nootropic", "Neuroprotective", "Antioxidant"]
  },
  {
    id: "8",
    name: "Diosgenin",
    formula: "C27H42O3",
    molecularWeight: "414.62 g/mol",
    description: "A steroidal sapogenin found in fenugreek, used as a precursor for steroid synthesis.",
    sources: ["Fenugreek", "Wild Yam"],
    properties: ["Hormonal balance", "Anti-inflammatory", "Cholesterol lowering"]
  },
  {
    id: "9",
    name: "Quercetin",
    formula: "C15H10O7",
    molecularWeight: "302.23 g/mol",
    description: "A flavonoid with antioxidant and anti-inflammatory properties found in many plants.",
    sources: ["Onions", "Apples", "Berries"],
    properties: ["Antioxidant", "Anti-inflammatory", "Antihistamine"]
  },
  {
    id: "10",
    name: "Resveratrol",
    formula: "C14H12O3",
    molecularWeight: "228.25 g/mol",
    description: "A stilbenoid found in grapes and berries with cardioprotective properties.",
    sources: ["Grapes", "Berries", "Peanuts"],
    properties: ["Cardioprotective", "Anti-aging", "Antioxidant"]
  }
];
