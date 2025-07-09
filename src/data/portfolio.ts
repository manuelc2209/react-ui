import type { Project, Experience, Skill, Testimonial } from '@/types';

export const projects: Project[] = [
    {
        id: 'react-ui-showcase',
        title: 'React UI Showcase',
        description: 'A comprehensive showcase of modern React components and technologies',
        longDescription:
            'A sophisticated React application demonstrating advanced frontend development skills including TypeScript, modern state management, and responsive design patterns.',
        technologies: ['React', 'TypeScript', 'Styled Components', 'Jotai', 'Vite'],
        category: 'frontend',
        image: '/assets/images/react-ui-showcase.jpg',
        liveUrl: 'https://react-ui.manuelcorreia.org/',
        githubUrl: 'https://github.com/manuel-correia/react-ui',
        featured: true,
        year: 2024
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'Modern portfolio website built with React and TypeScript',
        longDescription:
            'A fully responsive portfolio website showcasing modern web development practices, including PWA features, comprehensive testing, and optimized performance.',
        technologies: ['React', 'TypeScript', 'Mantine', 'Jotai', 'Vitest', 'PWA'],
        category: 'frontend',
        image: '/assets/images/portfolio-website.jpg',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        year: 2025
    },
    {
        id: 'component-library',
        title: 'Component Library',
        description: 'Reusable React component library with Storybook documentation',
        technologies: ['React', 'TypeScript', 'Storybook', 'Styled Components', 'Jest'],
        category: 'frontend',
        image: '/assets/images/component-library.jpg',
        featured: false,
        year: 2023
    }
];

export const experience: Experience[] = [
    {
        id: 'boost-it',
        company: 'Boost IT',
        position: 'Frontend Developer & Team Leader',
        startDate: '2022-01',
        description: 'Leading frontend development teams and architecting scalable React applications',
        achievements: [
            'Led a team of 5+ developers in delivering high-quality frontend solutions',
            'Implemented modern development practices including TypeScript and testing',
            'Improved code quality and team productivity through mentoring and code reviews',
            'Architected reusable component libraries used across multiple projects'
        ],
        technologies: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'GraphQL', 'Jest'],
        logo: '/assets/images/boost-it-logo.png'
    },
    {
        id: 'philip-morris-international',
        company: 'Philip Morris International',
        position: 'Sr Frontend Developer',
        startDate: '2024-07',
        description:
            'Senior frontend developer role focusing on advanced React development and technical leadership',
        achievements: [
            'Delivered high-quality frontend solutions for enterprise-level applications',
            'Implemented modern development practices and maintained code quality standards',
            'Collaborated with cross-functional teams to meet business requirements',
            'Contributed to technical decision-making and architecture discussions'
        ],
        technologies: ['React.js', 'JavaScript', 'HTML5', 'Jest', 'REST API', 'Webpack', 'JSON'],
        logo: '/assets/images/philip-morris-logo.png'
    },
    {
        id: 'wella-company-tech-lead',
        company: 'Wella Company',
        position: 'Technical Lead Frontend Developer',
        startDate: '2022-03',
        endDate: '2024-07',
        description: 'Led frontend development initiatives and managed technical aspects of web applications',
        achievements: [
            'Led frontend development teams in delivering scalable React applications',
            'Implemented microfrontends architecture and design systems',
            'Established coding standards and best practices across teams',
            'Delivered Progressive Web Apps (PWA) and microsites solutions',
            'Mentored team members and conducted comprehensive code reviews'
        ],
        technologies: [
            'React.js',
            'TypeScript',
            'Microfrontends',
            'PWA',
            'Jest',
            'Webpack',
            'Design Systems',
            'Google Maps API',
            'REST API'
        ],
        logo: '/assets/images/wella-logo.png'
    },
    {
        id: 'cleverty-software-engineer',
        company: 'Cleverty (99x Portugal)',
        position: 'Software Engineer',
        startDate: '2021-09',
        endDate: '2022-03',
        description:
            'Full-stack software engineer developing modern web applications with focus on frontend technologies',
        achievements: [
            'Developed scalable React applications with GraphQL integration',
            'Implemented comprehensive testing strategies and maintained high code coverage',
            'Collaborated in agile development environments to deliver user-centric solutions',
            'Built Progressive Web Apps and integrated Google Maps functionality'
        ],
        technologies: [
            'React.js',
            'GraphQL',
            'JavaScript',
            'Jest',
            'PWA',
            'Google Maps API',
            'REST API',
            'HTML5'
        ],
        logo: '/assets/images/cleverty-logo.png'
    },
    {
        id: 'grama-software-engineer',
        company: 'Grama',
        position: 'Software Engineer',
        startDate: '2020-10',
        endDate: '2021-09',
        description: 'Software engineer focused on frontend development and user experience optimization',
        achievements: [
            'Developed responsive web applications using React and modern JavaScript',
            'Implemented unit testing and maintained high code quality standards',
            'Collaborated with UX teams to deliver exceptional user experiences',
            'Integrated Google Maps API for location-based features'
        ],
        technologies: ['React.js', 'JavaScript', 'Jest', 'Google Maps API', 'REST API', 'HTML5', 'JSON'],
        logo: '/assets/images/grama-logo.png'
    },
    {
        id: 'wit-software-developer',
        company: 'WIT Software',
        position: 'Software Developer',
        startDate: '2019-01',
        endDate: '2020-10',
        description:
            'Software developer working on web applications and frontend solutions in Coimbra, Portugal',
        achievements: [
            'Developed web applications using modern frontend technologies',
            'Implemented comprehensive testing strategies and code reviews',
            'Worked in agile development environments to meet business requirements',
            'Contributed to UX improvements and technical problem-solving'
        ],
        technologies: ['JavaScript', 'HTML5', 'Jest', 'Google Maps API', 'REST API', 'JSON'],
        logo: '/assets/images/wit-software-logo.png'
    },
    {
        id: 'itgrow-intern',
        company: 'iTGROW - Software e Sistemas, ACE',
        position: 'Intern',
        startDate: '2018-04',
        endDate: '2018-12',
        description:
            'Software development internship focusing on frontend technologies and web development fundamentals',
        achievements: [
            'Gained hands-on experience in React development and modern JavaScript',
            'Learned agile methodologies and collaborative development practices',
            'Developed understanding of UX principles and user-centered design',
            'Contributed to testing and code quality initiatives'
        ],
        technologies: ['React.js', 'JavaScript', 'HTML5', 'Jest', 'Google Maps API', 'REST API', 'JSON'],
        logo: '/assets/images/itgrow-logo.png'
    }
];

export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', proficiency: 95, yearsOfExperience: 5 },
    { name: 'TypeScript', category: 'frontend', proficiency: 90, yearsOfExperience: 4 },
    { name: 'JavaScript', category: 'frontend', proficiency: 95, yearsOfExperience: 6 },
    { name: 'Next.js', category: 'frontend', proficiency: 85, yearsOfExperience: 3 },
    { name: 'HTML5', category: 'frontend', proficiency: 95, yearsOfExperience: 6 },
    { name: 'CSS3', category: 'frontend', proficiency: 90, yearsOfExperience: 6 },
    { name: 'Styled Components', category: 'frontend', proficiency: 85, yearsOfExperience: 3 },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 80, yearsOfExperience: 2 },

    // State Management & Tools
    { name: 'Jotai', category: 'frontend', proficiency: 85, yearsOfExperience: 2 },
    { name: 'React Query', category: 'frontend', proficiency: 80, yearsOfExperience: 2 },
    { name: 'React Hook Form', category: 'frontend', proficiency: 85, yearsOfExperience: 3 },
    { name: 'React Router', category: 'frontend', proficiency: 90, yearsOfExperience: 4 },

    // Backend & APIs
    { name: 'GraphQL', category: 'backend', proficiency: 75, yearsOfExperience: 2 },
    { name: 'REST APIs', category: 'backend', proficiency: 85, yearsOfExperience: 4 },
    { name: 'Node.js', category: 'backend', proficiency: 70, yearsOfExperience: 2 },

    // Tools & DevOps
    { name: 'Git', category: 'tools', proficiency: 90, yearsOfExperience: 6 },
    { name: 'Webpack', category: 'tools', proficiency: 80, yearsOfExperience: 3 },
    { name: 'Vite', category: 'tools', proficiency: 85, yearsOfExperience: 2 },
    { name: 'Docker', category: 'tools', proficiency: 70, yearsOfExperience: 2 },
    { name: 'Jest', category: 'tools', proficiency: 85, yearsOfExperience: 3 },
    { name: 'Vitest', category: 'tools', proficiency: 80, yearsOfExperience: 1 },
    { name: 'Storybook', category: 'tools', proficiency: 80, yearsOfExperience: 2 },

    // Architecture & Patterns
    { name: 'Micro-frontends', category: 'other', proficiency: 75, yearsOfExperience: 2 },
    { name: 'Module Federation', category: 'other', proficiency: 70, yearsOfExperience: 1 },
    { name: 'Component Libraries', category: 'other', proficiency: 85, yearsOfExperience: 3 }
];

export const testimonials: Testimonial[] = [
    {
        id: 'amanda-lacerda',
        name: 'Amanda Lacerda',
        position: 'Developer',
        company: 'Boost IT',
        content:
            'I had the pleasure of working with Manuel, he is an exceptional Developer who has always led the team in an incredible way. He is highly communicative, solves problems efficiently, and values software quality and testing. He is a true leader and I would love to work with him again in the future. I highly recommend this developer to any team looking for technical excellence and effective leadership.',
        avatar: '/assets/images/amanda-lacerda.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/amanda-lacerda'
    },
    {
        id: 'diullei-gomes',
        name: 'Diullei Gomes',
        position: 'Tech Lead Frontend',
        company: 'Resoptima',
        content:
            'I had the pleasure of working with Manuel. He is a highly skilled frontend developer and is always up to date with the latest technologies. Manuel is a great communicator and always strives to ensure the project is successful. I recommend Manuel for any frontend development role.',
        avatar: '/assets/images/diullei-gomes.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/diullei-gomes'
    }
];

export const personalInfo = {
    name: 'Manuel Correia',
    title: 'Frontend Web Developer & Team Leader',
    location: 'Coimbra, Portugal',
    linkedin: 'https://www.linkedin.com/in/manuel-correia2209/',
    github: 'https://github.com/manuel-correia',
    website: 'https://react-ui.manuelcorreia.org/',
    bio: "Hey there! 👋 I'm passionate about crafting seamless user experiences using the power of HTML, CSS, and JavaScript/TypeScript. With a knack for creative problem-solving, I specialize in Frontend development. My toolkit includes popular frameworks like React and technologies like TypeScript.",
    avatar: '/assets/images/manuel-avatar.jpg',
    resumeUrl: '/assets/documents/manuel-correia-resume.pdf'
};
