import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import screen from '/public/image/screen.png';

export const projectsData = [
    {
        id: 1,
        name: 'Port Scanner',
        description: "Delivered a GUI-based network scanner to detect vulnerable ports, enhancing scanning efficiency by 70% and improving the identificatio of open and filtered ports.",
        tools: ["Python', 'Flask', 'Python-NAP for port scanning', 'socket programming for domain-to-IP conversion'"],
        role: ' Cyber Security Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Hospital Management System - (Softclinic GenX)',
        description: 'I designed and implemented a fully automated CI/CD pipeline, which reduced deployment time by 50% and increased deployment frequency by 75%. Additionally, I developed and maintained Azure DevOps test automation, leading to a 40% reduction in testing time and a 25% increase in test coverage. My efforts also ensured version releases with less than one minute of downtime by implementing efficient deployment strategies and automation.',
        tools: ["AWS Cloud', 'Azure Cloud', 'Jenkins', 'Azure DevOps', 'Bitbucket', 'Docker', 'Terraform', 'Nginx Server', 'MongoDB', 'PostgreSQL'"],
        role: 'Devops Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Power Camera Detection App - (Dhaal)',
        description: 'I developed an 88% real-time face detection model for camera feeds and configured AWS AI/ML services to optimize and streamline processing workflows, achieving a 50% reduction in overall processing time. Additionally, I utilized OpenSearch for camera system monitoring and enhanced insights through its powerful dashboard.',
        tools: ["'AWS Cloud', 'Python', 'Open Search', 'API', 'Tableau',' Power BI', 'Machine Learning', 'PostgreSQL','Lambda Function', 'Hik-Vision Camera and Application'"],
        code: '',
        role: 'AI-ML Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Airline Management System - (AeroNex Horizon)',
        description: "Developed an Airline Management System with features such as streamlined passenger tracking, flight scheduling, and efficient inventory management.",
        tools: ["'Nodejs', 'SQL', 'IBM-Cloud', 'Node-Red', 'Watson-Studio', 'OpenSearch and DevOps tools for seamless development and deployment.'"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Lab Equipment Management System Project',
        description: "Designed Lab Equipment Management System with robust features including streamlined sample tracking, results management, inventory control, and 90% efficient task automation.",
        tools: ["'Agile Methodology', 'PHP', 'SQL',' DevOps tools for seamless development and deployment.'"],
        code: '',
        demo: '',
        image: screen,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },