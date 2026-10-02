export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    title: 'Graduation',
    description:
      'Information Technology graduate, King Abdulaziz University — graduated with Excellence.',
    icon: 'GraduationCap',
  },
  {
    year: '2025–2026',
    title: 'Graduation Project — Dentek',
    description:
      'Developed Dentek, an AI-assisted dental X-ray analysis system combining computer vision, deep learning, and a full-stack web application.',
    icon: 'Microscope',
  },
  {
    year: 'IEEE KAU',
    title: 'Technology Department',
    description:
      'Contributed to technical projects and digital solutions, and served as lead in the Documentation & Production section for two consecutive years.',
    icon: 'Users',
  },
];

export const achievements = [
  {
    title: 'Graduation with Excellence',
    detail: 'بامتياز — King Abdulaziz University, 2026',
    icon: 'Award',
  },
  {
    title: 'KAU Certificate of Excellence',
    detail: 'Academic excellence recognition.',
    icon: 'Medal',
  },
  {
    title: 'IEEE KAU — Leadership',
    detail: 'Documentation & Production lead, two consecutive years.',
    icon: 'Trophy',
  },
  {
    title: 'Future Certificate',
    detail: 'Placeholder — add a certification or award here.',
    icon: 'Sparkles',
    placeholder: true,
  },
];
