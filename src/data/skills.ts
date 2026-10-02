export type SkillGroup = {
  category: string;
  icon: string; // lucide icon name
  skills: { name: string; level: 'core' | 'working' | 'familiar' }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Artificial Intelligence & Data',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning', level: 'core' },
      { name: 'Deep Learning', level: 'working' },
      { name: 'Computer Vision', level: 'core' },
      { name: 'AI', level: 'core' },
      { name: 'Data Analysis', level: 'core' },
      { name: 'Image Classification', level: 'core' },
      { name: 'Object Detection', level: 'working' },
      { name: 'Data Preprocessing', level: 'working' },
      { name: 'Natural Language Processing (NLP)', level: 'working' },
      { name: 'RAG', level: 'working' },
      { name: 'LLM Applications', level: 'working' },
    ],
  },
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'core' },
      { name: 'Java', level: 'core' },
      { name: 'JavaScript', level: 'working' },
     
    ],
  },
  {
    category: 'Web & Backend',
    icon: 'Globe',
    skills: [
      { name: 'React', level: 'working' },
     
     
      { name: 'FastAPI', level: 'working' },
      { name: 'REST APIs', level: 'working' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MariaDB', level: 'working' },
      { name: 'SQL', level: 'working' },
    ],
  },
  {
    category: 'AI / ML Technologies',
    icon: 'Cpu',
    skills: [
      { name: 'YOLO', level: 'working' },
      { name: 'ResNet', level: 'working' },
      { name: 'PyTorch', level: 'working' },
      { name: 'Groq', level: 'familiar' },
     
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'working' },
      { name: 'GitHub', level: 'working' },
      { name: 'VS Code', level: 'core' },
      { name: 'Google Colab', level: 'working' },
      { name: 'Roboflow', level: 'working' },
    ],
  },
];
