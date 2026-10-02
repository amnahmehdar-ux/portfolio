export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  buttons: { label: string; href: string; variant?: 'primary' | 'ghost' }[];
  image?: string;
  imagePlaceholder: string;
  badge?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'dentek',
    number: '01',
    title: 'Dentek — AI-Assisted Dental X-Ray Analysis',
    category: 'AI + Computer Vision',
    badge: 'Graduation Project',
    featured: true,
    description:
      'Dentek is an AI-assisted system designed to support dentists in analyzing panoramic dental X-rays. The goal is to reduce workload, assist with identifying potential findings, and provide structured reports — while keeping the dentist in control of the final clinical decision. The system was inspired by real challenges in dental clinics, including high patient volume, time pressure, and the difficulty of carefully reviewing every part of a panoramic X-ray.',
    tags: [
      'Artificial Intelligence',
      'Computer Vision',
      'YOLO',
      'ResNet18',
      'Python',
      'REST API',
      'React',
      'MariaDB',
    ],
    highlights: [
      'YOLO-based tooth detection',
      'ResNet18 image classification (lesion vs normal)',
      'Image preprocessing & augmentation',
      'Model evaluation: Precision, Recall, F1-score, Accuracy',
      'AI-generated analysis & report workflow',
      'Django backend + Django REST Framework',
      'MariaDB database',
      'React frontend',
    ],
    buttons: [
      { label: 'View Project', href: 'https://lnkd.in/p/dDKa8MmE', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/amnahmehdar-ux/Dentek-AI', variant: 'ghost' },
    ],
    image: '/dentekLandPage.png',
    imagePlaceholder: 'Add a Dentek system screenshot here',
  },
  {
    id: 'ieee-chatbot',
    number: '02',
    title: 'IEEE KAU AI Chatbot',
    category: 'Arabic AI + RAG + FastAPI',
    description:
      'An Arabic-focused AI chatbot built for the IEEE KAU Student Branch to help users access information about the branch, events, activities, and other relevant content. It uses retrieval to ground answers in IEEE KAU information rather than relying only on the language model\u2019s general knowledge.',
    tags: ['Python', 'FastAPI', 'RAG', 'LLM', 'Groq', 'Embeddings', 'AI'],
    highlights: [
      'Retrieval-Augmented Generation (RAG)',
      'Llama 3.1 through Groq',
      'multilingual-e5-small embeddings',
      'Vector store for IEEE KAU knowledge',
      'FastAPI REST API',
    ],
    buttons: [
      { label: 'GitHub', href: 'https://github.com/amnahmehdar-ux/IEEE-KAU-AI-Chatbot', variant: 'ghost' },
    ],
    image: '/ieeeChatbot.png',
    imagePlaceholder: 'Add an IEEE Chatbot screenshot here',
  },
  {
    id: 'bank-loan',
    number: '03',
    title: 'Bank Loan Prediction',
    category: 'Machine Learning + Data Analysis',
    description:
      'A machine learning project focused on analyzing applicant data and predicting whether a loan application is likely to be approved. The project demonstrates an end-to-end machine learning workflow, from data preprocessing and exploratory analysis to model training and evaluation.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Data Analysis', 'EDA'],
    highlights: [
      'Data cleaning and preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Feature analysis and selection',
      'Machine learning model training',
      'Model evaluation and comparison',
      'Predictive analysis',
    ],
    buttons: [
      { label: 'GitHub', href: 'https://github.com/amnahmehdar-ux/Bank-Loan-Prediction', variant: 'ghost' },
    ],
    image: '',
    imagePlaceholder: 'Add a Bank Loan Prediction screenshot here',
  },
];
