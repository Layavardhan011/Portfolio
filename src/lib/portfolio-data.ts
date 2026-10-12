export type NavLink = { label: string; href: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const PROFILE = {
  name: 'Layavardhan Reddy',
  firstName: 'Layavardhan',
  initials: 'LR',
  role: 'Blockchain Developer',
  subRole: 'Smart Contracts & VM-Executor · Rust / Go / WebAssembly',
  location: 'Hyderabad, India',
  address: 'Hyderabad, Telangana, India',
  email: 'layavardhanreddy024@gmail.com',
  phone: '+91 9866367885',
  availability: 'Open to smart contract & blockchain engineering roles',
  tagline:
    'Blockchain developer building Rust smart contracts, vm-executor runtime bridges, and high-performance WebAssembly systems.',
  intro:
    'I am a blockchain developer specializing in Rust smart contracts and the vm-executor runtime on the Dharitri blockchain — stabilizing the Rust↔Go execution bridge, and shipping high-throughput infra for explorers, wallets, and asset CDNs. My day-to-day spans Rust, Go, JavaScript, TypeScript, Java, and the smart-contract toolchain that ties them together.',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/layavardhanreddy/',
      handle: 'in/layavardhanreddy',
    },
    { label: 'GitHub', href: 'https://github.com/layavardhanreddy024', handle: '@layavardhanreddy024' },
    { label: 'Email', href: 'mailto:layavardhanreddy024@gmail.com', handle: 'layavardhanreddy024' },
    { label: 'Phone', href: 'tel:+919866367885', handle: '+91 98663 67885' },
  ],
}

export type Stat = { value: string; label: string; hint: string }

export const STATS: Stat[] = [
  { value: '1+', label: 'Years in Web3', hint: 'Smart contracts & vm-executor engineering' },
  { value: '6', label: 'Projects Shipped', hint: 'Blockchain, CDN, and full-stack systems' },
  { value: '1st', label: 'Coding Contest', hint: 'CSET 2K24 Event champion' },
  { value: 'B.Tech', label: 'CSE Graduate', hint: 'Siddharth Institute of Engg. & Tech.' },
]

export type SkillCategory = {
  title: string
  icon: string
  blurb: string
  items: { name: string; level: number }[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    blurb: 'High-demand systems and typed languages.',
    items: [
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'Rust', level: 90 },
      { name: 'Go', level: 84 },
      { name: 'Java', level: 82 },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: 'layers',
    blurb: 'Smart contracts, vm-executor runtime, and WebAssembly systems.',
    items: [
      { name: 'Rust Smart Contracts', level: 88 },
      { name: 'Go VM & Execution Engine', level: 86 },
      { name: 'WebAssembly (WASM)', level: 85 },
      { name: 'Dharitri SDK & VM-Executor', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Modern Web',
    icon: 'layout',
    blurb: 'Modern component architectures and backend frameworks.',
    items: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'TailwindCSS', level: 88 },
      { name: 'Node.js / Express', level: 86 },
    ],
  },
  {
    title: 'Cloud, Infra & Databases',
    icon: 'wrench',
    blurb: 'Distributed caching, containers, and pipelines.',
    items: [
      { name: 'Git & CI/CD', level: 90 },
      { name: 'Docker & Containers', level: 88 },
      { name: 'PostgreSQL & SQL', level: 85 },
      { name: 'Redis (Caching & Queues)', level: 84 },
    ],
  },
]

export type Project = {
  id: string
  name: string
  category: string
  year: string
  tagline: string
  description: string
  tags: string[]
  metrics: { label: string; value: string }[]
  accent: 'emerald' | 'gold' | 'violet'
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'assets-cdn',
    name: 'Assets CDN (Dugong Global Services)',
    category: 'Full-stack · Microservice',
    year: 'Apr 2026 – Jun 2026',
    tagline: 'Scalable Asset CDN for tokens, smart contracts & media',
    description:
      'Architected and deployed a microservice-based Asset CDN utilizing JavaScript and TypeScript to automate the hosting, caching, and rapid delivery of token, smart contract, and verified account media within the Dharitri blockchain ecosystem. Integrated RabbitMQ for asynchronous queues to decouple heavy media processing jobs and background synchronization from the main API thread. Containerized the entire infrastructure using Docker for reproducible deployment and horizontal scaling across devnet and mainnet nodes.',
    tags: ['JavaScript', 'TypeScript', 'Redis', 'Docker', 'RabbitMQ', 'Git'],
    metrics: [
      { label: 'Queue', value: 'RabbitMQ' },
      { label: 'Cache', value: 'Redis' },
      { label: 'Deploy', value: 'Docker' },
    ],
    accent: 'emerald',
    featured: true,
  },
  {
    id: 'dharitri-vm-executor',
    name: 'Dharitri VM-Executor Bridge',
    category: 'Blockchain · Infra',
    year: '2026',
    tagline: 'Rust↔Go execution bridge stabilization & state parity',
    description:
      'Resolved critical low-level compilation and dependency errors inside the Dharitri Rust vm-executor, stabilizing the execution bridge linking Go runtime infrastructure with compiled Rust smart contracts. Engineered custom state-matching execution hooks within the executor for seamless logic and data parity across the Go VM and the Dharitri Rust SDK.',
    tags: ['Rust', 'Go', 'WebAssembly', 'vm-executor', 'Dharitri'],
    metrics: [
      { label: 'Bridge', value: 'Rust↔Go' },
      { label: 'Target', value: 'WebAssembly' },
      { label: 'Parity', value: 'VM ↔ SDK' },
    ],
    accent: 'violet',
    featured: true,
  },
  {
    id: 'jobhub',
    name: 'JobHub (Job Portal Web App)',
    category: 'Full-stack · Web App',
    year: 'Jan 2025 – Apr 2025',
    tagline: 'Daily-wage & part-time job portal with JWT & OAuth',
    description:
      'Developed JobHub, a React.js and Spring Boot web application connecting job seekers with employers for daily wage and part-time jobs. Implemented JWT-based role authentication with secure login, Google OAuth, OTP recovery, and role-specific dashboards. Enabled job and service postings with filters, real-time application tracking, and an admin reporting panel to verify recruiters and resolve issues.',
    tags: ['Java', 'Spring Boot', 'React', 'SQL', 'Git', 'JWT'],
    metrics: [
      { label: 'Frontend', value: 'React.js' },
      { label: 'Backend', value: 'Spring Boot' },
      { label: 'Auth', value: 'JWT + OAuth' },
    ],
    accent: 'emerald',
    featured: false,
  },
  {
    id: 'dns-smart-contract',
    name: 'DNS Smart Contract v1.0.0',
    category: 'Blockchain · Smart Contract',
    year: '2026',
    tagline: 'Refactored DNS contract with Go VM fuzz testing',
    description:
      'Rebuilt the Dharitri DNS smart contract from scratch to version 1.0.0 by implementing domain name standards, successfully compiling all smart contracts into optimized WebAssembly binaries, and updating the Go virtual machine’s integration and fuzz tests to correctly validate the new contract binaries.',
    tags: ['Rust', 'WebAssembly', 'Smart Contracts', 'Go VM', 'Fuzz Testing'],
    metrics: [
      { label: 'Version', value: 'v1.0.0' },
      { label: 'Binary', value: 'WebAssembly' },
      { label: 'Testing', value: 'Fuzz Tests' },
    ],
    accent: 'gold',
    featured: false,
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery Platform',
    category: 'Full-stack · Web App',
    year: 'Jul 2024 – Oct 2024',
    tagline: 'Dynamic order lifecycle & real-time tracking platform',
    description:
      'Engineered backend architecture with Java, JDBC, Servlets, and JSP to support dynamic content rendering and order lifecycle management, paired with a responsive UI in HTML/CSS/JavaScript. Implemented real-time order tracking to boost operational visibility and user transparency.',
    tags: ['Java', 'JDBC', 'Servlets', 'JSP', 'HTML', 'CSS', 'JavaScript'],
    metrics: [
      { label: 'Backend', value: 'Java Servlets' },
      { label: 'Data', value: 'JDBC' },
      { label: 'Tracking', value: 'Real-time' },
    ],
    accent: 'violet',
    featured: false,
  },
  {
    id: 'library-management',
    name: 'Library Management System',
    category: 'Full-stack · Web App',
    year: 'May 2024 – Jul 2024',
    tagline: 'Catalog & authentication management system',
    description:
      'Built a web-based Library Management System using Java, JDBC, Servlets, and JSP for core application logic and MySQL for persistent data storage. Developed frontend interfaces using HTML and CSS for user registration, login, and real-time book catalog search with secure credential validation.',
    tags: ['Java', 'JDBC', 'Servlets', 'JSP', 'MySQL', 'HTML/CSS'],
    metrics: [
      { label: 'Storage', value: 'MySQL' },
      { label: 'Logic', value: 'Servlets & JSP' },
      { label: 'Access', value: 'Real-time' },
    ],
    accent: 'emerald',
    featured: false,
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Blockchain Developer',
    company: 'Dugong Global Services',
    period: 'May 2026 — Present',
    location: 'Hyderabad, India',
    summary:
      'Smart contract & vm-executor engineering on the Dharitri blockchain — execution-bridge stability, explorer infra, and devnet operations.',
    highlights: [
      'Resolved critical low-level compilation and dependency errors inside the Dharitri Rust vm-executor, stabilizing the execution bridge that links Go runtime infrastructure with compiled Rust smart contracts.',
      'Engineered custom state-matching execution hooks within the virtual machine executor to establish seamless data and logic parity across the Go virtual machine layer and the Dharitri Rust SDK.',
      'Architected and deployed a highly scalable Asset CDN microservice utilizing JavaScript and TypeScript to automate the storage, hosting, and rapid content delivery of token, smart contract, and verified account media.',
      'Enhanced the Dharitri Lite-Wallet ecosystem by implementing deterministic transaction lifecycle tracking states, significantly reducing frontend state lag and improving user transaction transparency.',
      'Configured high-throughput WebSocket communication streams and optimized config topologies within the Dharitri API services to support real-time, low-latency network event streaming.',
      'Overhauled data-serialization and structural type-mapping pipelines for the Dharitri Blockchain Explorer to ensure lightning-fast data transfers and zero-loss rendering of block metrics.',
      'Spearheaded the deployment, configuration tuning, and active maintenance of the Dharitri devnet environment, establishing a stable sandboxed infrastructure for smart contract and vm-executor testing.',
      'Executed rigorous stress-testing paradigms on devnet infrastructure to isolate bottlenecks, validate vm-executor runtime updates, and ensure maximum network stability ahead of production mainnet releases.',
    ],
    stack: ['Rust', 'Go', 'WebAssembly', 'JavaScript', 'TypeScript', 'Docker', 'WebSockets'],
  },
  {
    role: 'Blockchain Developer Intern',
    company: 'Dugong Global Services',
    period: 'Dec 2025 — May 2026',
    location: 'Hyderabad, India',
    summary:
      'Foundation work on the Dharitri Rust SDK and smart-contract tooling.',
    highlights: [
      'Fixed dependency conflicts and build errors in the Dharitri Rust SDK, successfully compiling all smart contracts into optimized WebAssembly binaries and passing all SDK tests to verify codebase stability.',
      'Rebuilt the DNS smart contract from scratch to version 1.0.0 by implementing domain name resolution standards, subsequently updating the Go virtual machine’s integration and fuzz tests to correctly validate the new contract binaries.',
    ],
    stack: ['Rust', 'Go', 'WebAssembly', 'Smart Contracts', 'Go VM', 'Fuzz Testing'],
  },
  {
    role: 'Full Stack Intern',
    company: 'Code Genius Innovations',
    period: 'Jan 2025 — Mar 2025',
    location: 'Karnataka, India',
    summary:
      'Hands-on full-stack web development with responsive interfaces and API integration.',
    highlights: [
      'Developed and maintained responsive, user-friendly web interfaces using HTML, CSS, JavaScript.',
      'Collaborated with backend developers to integrate APIs and ensure seamless data flow.',
      'Gained exposure to full stack development with hands-on experience in both frontend and basic backend integration.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
  },
]

export const EDUCATION = {
  institution: 'Siddharth Institute of Engineering and Technology',
  degree: 'B.Tech in Computer Science Engineering',
  period: 'Dec 2021 — May 2025',
  location: 'Andhra Pradesh, India',
}

export const ACHIEVEMENTS = [
  {
    title: '1st Place — Coding Competition',
    context: 'CSET 2K24 Event champion',
  },
  {
    title: 'Runner-up — Project Expo',
    context: 'CSET 2K25 Project Expo for innovative project presentation',
  },
]

export const INTERESTS = [
  'Chess and strategic board games',
  'Reading tech articles',
]

export const LANGUAGES = ['Telugu', 'English', 'Hindi', 'Tamil']

export const MARQUEE_ITEMS = [
  'Rust',
  'Go',
  'Dharitri',
  'WebAssembly',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'React',
  'TailwindCSS',
  'Docker',
  'Redis',
  'Go VM',
  'Smart Contracts',
  'Java',
  'PostgreSQL',
]
