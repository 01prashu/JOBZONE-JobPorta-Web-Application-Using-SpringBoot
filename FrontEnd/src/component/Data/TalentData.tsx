import { IconSearch , IconMapPin, IconRecharging } from "@tabler/icons-react";
const SearchFiled=[
    {title:"job title",icon:IconSearch, options:['Designer','Developer','Product Manager','Marketing Specialist',
        'Data Analyst','Sales Executive','Content Writer','Customer Support']},
    
    {
        title:"Location",icon:IconMapPin, options:['Delhi','New Work','San Fransico','London','Berlin','Tokyo','Sydney','Toronto']
    },
    {
        title:"Skills", icon:IconRecharging,options:['HTML','CSS','JavaScript','React','Angular','Node Js','Python','Java','Ruby','PHP'
            ,'SQL','MongoDB','Postgrey Sql','GIT','Api Development','Testing and Debugging','Agile','DevOps','AWS','Azure','Google Cloud'
        ]
    }

    ];
    const Talent = [
        {
            name: "John Doe",
            role: "Frontend Developer",
            company: "Tech Solutions Inc.",
            topSkills: ["JavaScript", "React", "HTML", "CSS", "TypeScript"],
            about: "John is a passionate frontend developer with over 4 years of experience building responsive and user-friendly web applications.",
            expectedPackage: [10, 12], // Represents 10-12 LPA
            location: "Delhi"
        },
        {
            name: "Jane Smith",
            role: "Data Scientist",
            company: "Data Insights Ltd.",
            topSkills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Pandas"],
            about: "Jane specializes in data science and machine learning, helping companies turn data into actionable insights.",
            expectedPackage: [14, 16], // Represents 14-16 LPA
            location: "San Francisco"
        },
        {
            name: "Michael Johnson",
            role: "Backend Engineer",
            company: "Innovatech",
            topSkills: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
            about: "Michael is an expert in backend technologies, ensuring robust and scalable server-side solutions for modern web applications.",
            expectedPackage: [9, 11], // Represents 9-11 LPA
            location: "London"
        },
        {
            name: "Sara Lee",
            role: "UI/UX Designer",
            company: "Creative Minds",
            topSkills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"],
            about: "Sara is a creative UI/UX designer with a focus on designing intuitive and beautiful user experiences for mobile and web platforms.",
            expectedPackage: [8, 10], // Represents 8-10 LPA
            location: "Berlin"
        },
        {
            name: "David Kim",
            role: "Full Stack Developer",
            company: "NextGen Solutions",
            topSkills: ["JavaScript", "Node.js", "React", "PostgreSQL", "GraphQL"],
            about: "David is a full-stack developer with a strong focus on both frontend and backend development, building end-to-end solutions.",
            expectedPackage: [12, 14], // Represents 12-14 LPA
            location: "Tokyo"
        }
    ];
    
    export default { SearchFiled, Talent };
    
    

    
   