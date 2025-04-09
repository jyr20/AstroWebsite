export const personalInfo = {
  name: 'Joey Reiness PhD',
  location: 'Leeds, United Kingdom',
  email: 'j.reiness@gmail.com',
  github: 'https://github.com/jyr20',
  linkedin: 'https://www.linkedin.com/in/reinessjoey/',
  education: 'University of Cambridge',
}

export const workExperience = [
  {
    company: 'Mathlabs',
    location: 'Remote / London, UK',
    position: 'Tech Lead & Senior AI Engineer',
    period: 'July 2020 - Present',
    achievements: [
      'Work on and manage the development of an AI-powered cloud platform for business research and analysis.',
      'Full Stack: Involved in development of all parts of the technical pipeline: cloud, backend, frontend, data, testing, CICD, AI, algorithms, monitoring.',
      'Team management: manage tasks across team members, ensure quality of work, and help with technical decisions. Involved in hiring and onboarding. The small and agile startup environment allows for a lot of flexibility and ownership.',
      'Clients & partners: exposure to clients and their needs, including support. Some experience in leading technical due diligence for large M&A deals. Help in assessing potential partnerships.',
      'Features: recently pushed the development of the new unified AI assistant.',
      'Trajectory: started as AI Engineer in 2020, promoted to Senior AI Engineer in 2021, and then to Tech Lead in 2024.',
    ],
  },
  {
    company: 'Durham University',
    location: 'Durham, UK',
    position: 'Temp. Postdoctoral Researcher',
    period: 'March 2020 - Jun 2020',
    achievements: [
      'Worked on the intersection of high energy physics with Quantum Computing, Optimisation and Neural Networks.',
      'Led investiation during the COVID-19 lockdown.',
    ],
  },
  {
    company: 'Universidad de Costa Rica',
    location: 'Costa Rica',
    position: 'Guest Lecturer',
    period: 'July 2019 - Aug 2019',
    achievements: [
      "Helped to deliver a master's course on Dark Matter and Cosmology, with workshops conducted in Spanish.",
      'Employed as guest lecturer as a result of networking at a PhD conference.',
      'Integrated into working life in Costa Rica, including working in Spanish and adapting to a different culture.',
    ],
  },
  {
    company: 'Durham University',
    location: 'Durham, UK',
    position: 'Workshop Demonstrator',
    period: 'Sep 2016 - March 2020',
    achievements: [
      'Instructed groups of undergraduate physics students in workshops on theoretical physics.',
      'Nominated by students and professor for a university-level teaching award, after very positive feedback.',
      'Helping students to solve difficult problems involved logically breaking down the differnt elements of the problem and explaining them clearly, such that they could reapply the logic to another problem.',
    ],
  },
]

export const education = [
  {
    institution: 'Durham University',
    location: 'Durham, UK',
    degree: 'PhD in Particle Physics',
    period: 'Sep 2016 - March 2020',
    achievements: [
      'PhD Thesis: "Pieces of the Higgsaw".',
      'Thesis investigates the Higgs boson in three contexts: interactions at colliders as a proxy for new physics; as a probe of cosmology and dark matter; and theoretical behaviour at higher energies.',
      'During PhD I gave seminars at various international conferences, produced and presented papers, taught undergraduates, organised conferences, secured speakers etc.',
      'Collaborated with various institutions.',
      'Heavily involved in scientific outreach work.',
    ],
  },
  {
    institution: 'University of Cambridge',
    location: 'Cambridge, UK',
    degree: 'MSci BA in Natural Sciences, Physics',
    period: 'Sep 2012 - Jun 2016',
    achievements: [
      'Gained title of "Foundation Scholar" for achieving a first class result in all four years of study.',
      'Involved in the running of student societies across sport, science and charity: Judo, Ultimate Frisbee, Outreach work.',
      'Started in broad study of natural sciences, before focusing on physics in the final two years.',
    ],
  },
  {
    institution: 'Clyst Vale Community College',
    location: 'Devon, UK',
    degree: 'A Levels & GCSEs',
    period: 'Sep 2005 - Jul 2012',
    achievements: [
      'Achieved the top A Level results in the school.',
      '4 A* at A Level (Physics, Maths, Further Maths, Chemistry) and additional A at AS in Biology.',
      '9A*, 2A, 1B at GCSE',
    ],
  },
]
export const skills = {
  programmingLanguages: ['Python', 'TypeScript', 'JavaScript'],
  frontendDevelopment: [
    'Reactjs',
    'HTML',
    'CSS',
    'Redux',
    'Material UI',
    'Storybook',
    'Figma',
  ],
  backendDevelopment: ['Flask', 'Nodejs', 'Expressjs'],
  databaseAndStorage: ['PostgreSQL', 'MongoDB', 'Redis'],
  cloudAndDevOps: ['AWS (incl. CDK)', 'CircleCI', 'Docker', 'Azure', 'GCP'],
  toolsAndServices: [
    'Large language models (LLMs: GPT, Clause, Gemini, Perplexity)',
    'Pusher (real-time communication)',
    'Auth0 (authentication)',
    'Datadog (monitoring)',
    'Sentry (error tracking)',
    'Github (version control)',
    'Monday (project management)',
    'Office (Word, Excel, Powerpoint, Outlook, Teams)',
  ],
  languages: ['🇬🇧 English (native)', '🇪🇸 Spanish (professional)'],
}

export const projects = [
  {
    title: 'Birdle',
    github: 'https://github.com/jyr20/Birdle',
    demo: 'https://www.birdlegame.com/',
    description: [
      'In 2022, I jumped on the Wordle hype train and created Birdle, a game where players guess the names of UK birds based on a picture.',
      'This reached peak popularity of around 200 daily players. The web app tracks user scores over time and allows users to share their scores on social media.',
      'Over two years later, I still occasionally hear from players who are still enjoying the game.',
      'I used this project to help my process of learning React, so it is a bit rough around the edges.',
    ],
  },
  {
    title: 'Dark Matter Arduino',
    github: 'https://github.com/jyr20/ArduinoDM',
    demo: 'https://www.youtube.com/watch?v=o6-c03G_0gs&ab_channel=JYReiness',
    description: [
      'An Arduino-based project to simulate the direct detection of dark matter particles, for outreach purposes.',
      'The code is written in C and runs on an Arduino board, which is connected to LED strips and switches via a breadboard.',
      'The board was embedded in a make-shift model of a dark matter detector, with interactive elements and switches to simulate different environments and scenarios.',
    ],
  },
]

export const awards = [
  {
    name: 'Foundation Scholar',
    issuer: 'University of Cambridge',
    date: '2016',
  },
  {
    name: 'Saunders Scholar',
    issuer: 'University of Cambridge',
    date: '2014/15',
  },
  {
    name: 'Whitelegg Scholar',
    issuer: 'University of Cambridge',
    date: '2013',
  },
  {
    name: 'Queen Scout Award',
    issuer: 'Scouting Association',
    date: '2012',
  },
  {
    name: 'Gold Duke of Edinburgh Award',
    issuer: 'Duke of Edinburgh',
    date: '2012',
  },
]

export const publications = [
  {
    name: 'Resolving the tensor structure of the Higgs coupling to Z-bosons via Higga-strahlung',
    authors: 'S Banerjee, R Gupta, J Reiness & M Spannowsky',
    journal: 'Physical Review D100 115004',
    date: '2019',
    link: 'https://journals.aps.org/prd/abstract/10.1103/PhysRevD.100.115004',
  },
  {
    name: 'All-in-one Relaxion: a unified solution to five particle-physics puzzles',
    authors: 'R Gupta, J Reiness & M Spannowsky',
    journal: 'Physical Review D100 055003',
    date: '2019',
    link: 'https://journals.aps.org/prd/abstract/10.1103/PhysRevD.100.055003',
  },
  {
    name: 'Review of the semiclassical formalism for multiparticle production at high energies',
    authors: 'V Khoze & J Reiness',
    journal: 'Physics Reports 822',
    date: '2019',
    link: 'https://www.sciencedirect.com/science/article/pii/S0370157319302510?via%3Dihub',
  },
  {
    name: 'Precision measurements for the Higgsploding Standard Model',
    authors: 'V Khoze, J Reiness, M Spannowsky & P Waite',
    journal: 'Journal of Physics G46 06',
    date: '2019',
    link: 'https://iopscience.iop.org/article/10.1088/1361-6471/ab1a70',
  },
  {
    name: 'Pieces of the Higgsaw',
    authors: 'J Reiness',
    journal: 'PhD Thesis',
    date: '2020',
    link: 'https://www.ippp.dur.ac.uk/old/drupal/files/Reiness000664765_FINAL.pdf',
  },
]

export const certs = [
  {
    name: 'React Front to Back',
    issuer: 'Udemy',
    date: '2022',
  },
  {
    name: 'AWS Cloud Technical Essentials',
    issuer: 'Coursera',
    date: '2021',
  },
  {
    name: 'AWS Serverless Applications',
    issuer: 'Coursera',
    date: '2021',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera',
    date: '2020',
  },
  {
    name: 'ML, Data Science & Deep Learning with Python',
    issuer: 'Udemy',
    date: '2020',
  },
]
