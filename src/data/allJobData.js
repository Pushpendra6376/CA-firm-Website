

const allJobData = [
    {
        id: 'executive-assistant',
        title: 'Executive Assistant',
        shortDesc: 'Providing high-level support to optimize executive effectiveness and drive firm success.',
        overview: "The Executive Assistant provides high-level administrative support to the Chartered Accountant, managing communications, scheduling, and commitments to ensure the CA's time is optimized for strategic and client-facing activities. This role requires exceptional organizational skills, discretion, and a proactive approach to managing a dynamic professional schedule.",
        qualifications: ["Bachelor's degree in Commerce, Business Administration, or a related field.", "2-4 years of experience as an Executive Assistant, preferably in a professional services firm.", "Proficiency in MS Office Suite and calendar management tools.", "Exceptional written and verbal communication skills.", "High degree of professionalism and discretion."],
        responsibilities: [
            { title: 'Communication Management', content: 'Manage incoming calls, emails, and correspondence, acting as a gatekeeper. Draft and proofread professional communications on behalf of the CA.' },
            { title: 'Calendar & Schedule Management', content: 'Maintain a complex and dynamic calendar, scheduling meetings, appointments, and travel arrangements. Proactively resolve scheduling conflicts.' },
            { title: 'Meeting & Event Coordination', content: 'Organize logistics for internal and external meetings, including preparing agendas, taking minutes, and coordinating follow-up actions.' },
            { title: 'Document & Information Management', content: 'Organize and maintain physical and digital files for easy retrieval. Assist in preparing presentations, reports, and handle confidential information.' }
        ],
        skills: { labels: ['Communication', 'Organization', 'Proactiveness', 'Discretion', 'Tech Savvy', 'Problem Solving'], data: [95, 98, 90, 99, 85, 88] }
    },
    {
        id: 'hr-manager',
        title: 'HR Manager',
        shortDesc: 'Developing and executing human resource strategies for talent acquisition, development, engagement, and retention.',
        overview: "The HR Manager will be responsible for developing and executing human resource strategies that support the firm's overall business objectives, with a strong focus on talent acquisition, employee development (including AI tool training), engagement, and retention. This role ensures a positive and productive work environment aligned with the firm's values.",
        qualifications: ["Bachelor's degree in Human Resources, Business Administration, or related field. MBA HR preferred.", "5-7 years of progressive HR experience, with at least 2-3 years in a managerial role.", "Proficiency in HRIS software and strong knowledge of Indian labor laws.", "Excellent interpersonal and communication skills.", "Strategic thinking and problem-solving skills."],
        responsibilities: [
            { title: 'Talent Acquisition', content: 'Lead the end-to-end recruitment process, from sourcing and interviewing to onboarding. Develop strategies to attract top talent.' },
            { title: 'Training & Development', content: 'Identify training needs and create development programs for employees, including training on new AI tools.' },
            { title: 'Employee Engagement', content: 'Develop and implement initiatives to foster a positive work environment. Act as a point of contact for employee grievances.' },
            { title: 'Performance Management', content: 'Oversee the performance appraisal process, providing guidance to managers and ensuring fairness and consistency.' }
        ],
        skills: { labels: ['Recruitment', 'Training', 'Employee Relations', 'Performance Mgmt', 'Labor Law', 'Adaptability'], data: [95, 90, 92, 88, 94, 85] }
    },
    {
        id: 'client-relationship-manager',
        title: 'Client Relationship Manager',
        shortDesc: 'Building and nurturing strong, long-term client relationships, ensuring satisfaction, and identifying growth opportunities.',
        overview: "The Client Relationship Manager is responsible for building and nurturing strong, long-term relationships with the firm's clients, ensuring their satisfaction, facilitating effective service delivery, and identifying opportunities for additional services. This role is crucial for client retention and overall business growth.",
        qualifications: ["Bachelor's degree in Commerce, Business, or Marketing. MBA preferred.", "4-6 years of experience in client relationship management or business development in professional services.", "Proficiency in CRM software (e.g., Salesforce, Zoho).", "Strong understanding of accounting, tax, and financial services.", "Exceptional interpersonal and negotiation skills."],
        responsibilities: [
            { title: 'Client Engagement', content: 'Serve as the primary point of contact for key clients, understanding their needs, objectives, and challenges.' },
            { title: 'Service Delivery Oversight', content: 'Act as a liaison between clients and service delivery teams to ensure expectations are met.' },
            { title: 'Client Retention & Growth', content: 'Develop retention strategies and identify opportunities to offer additional services to existing clients.' },
            { title: 'Reporting & Analysis', content: 'Track key account metrics and provide regular reports on client satisfaction and relationship health.' }
        ],
        skills: { labels: ['Relationship Building', 'Communication', 'Negotiation', 'Problem Solving', 'Client Focus', 'Proactiveness'], data: [98, 95, 90, 88, 96, 92] }
    },
    {
        id: 'sales-manager',
        title: 'Sales Manager',
        shortDesc: 'Driving revenue growth by strategizing, developing, and executing sales and marketing initiatives.',
        overview: "The Sales Manager is responsible for driving the firm's revenue growth by strategizing, developing, and executing sales and marketing initiatives. This role involves identifying client needs, designing suitable service offerings, leading marketing campaigns, generating leads, and managing the sales team to achieve ambitious sales targets.",
        qualifications: ["Bachelor's degree in Marketing, Business, or a related field. MBA preferred.", "5-7 years of progressive sales experience, with 2-3 years in a managerial role in B2B services.", "Proficiency in CRM software and digital marketing tools.", "Strong leadership and team management abilities.", "Strategic thinker with a results-oriented mindset."],
        responsibilities: [
            { title: 'Market Analysis & Strategy', content: 'Conduct market research to identify client needs and trends. Position firm services effectively, highlighting AI integration.' },
            { title: 'Marketing & Advertising', content: 'Develop and execute multi-channel marketing campaigns to build brand awareness.' },
            { title: 'Lead Generation & Nurturing', content: 'Manage the sales pipeline from lead generation to conversion. Develop strategies for nurturing leads.' },
            { title: 'Sales Team Management', content: 'Lead and mentor the sales team, setting clear targets and providing performance feedback.' }
        ],
        skills: { labels: ['Strategy', 'Negotiation', 'Leadership', 'Market Analysis', 'Digital Marketing', 'Results-Oriented'], data: [95, 92, 90, 88, 85, 98] }
    },
    {
        id: 'accounts-audit-executives',
        title: 'Accounts & Audit Executives/Managers',
        shortDesc: 'Delivering high-quality accounting, taxation, auditing, financial advisory, and consultancy services to clients.',
        overview: "Accounts & Audit Executives/Managers are responsible for delivering high-quality accounting, taxation, auditing, financial advisory, and consultancy services to clients. They ensure compliance, accuracy, and efficiency in all engagements, striving to exceed client expectations.",
        qualifications: ["Bachelor's degree in Commerce. CA Inter/Finalist or M.Com for Executive. Qualified CA for Manager.", "Executive: 2-5 years experience. Manager: 5-8+ years experience.", "Proficiency in TallyPrime and MS Excel is mandatory.", "Strong understanding of Indian accounting standards, tax laws, and Companies Act.", "Aptitude for learning and applying AI tools for accounting processes."],
        responsibilities: [
            { title: 'Accounting & Bookkeeping', content: 'Manage end-to-end accounting processes for clients. Prepare financial statements as per applicable standards.' },
            { title: 'Taxation & Compliance', content: 'Prepare and file GST, TDS, and Income Tax returns. Ensure all statutory compliances are met on time.' },
            { title: 'Auditing', content: 'Conduct statutory, tax, and internal audits, ensuring adherence to auditing standards.' },
            { title: 'Advisory & Consultancy', content: 'Provide financial advice to clients based on their business needs and financial data analysis.' }
        ],
        skills: { labels: ['Accounting', 'Taxation', 'Auditing', 'Financial Analysis', 'Compliance', 'AI Aptitude'], data: [95, 92, 90, 88, 98, 80] }
    },
    {
        id: 'it-manager',
        title: 'Information Technology (IT) Manager / Executive',
        shortDesc: "Managing, developing, securing, and maintaining the firm's technological resources, including AI tool integration.",
        overview: "The IT Manager/Executive is responsible for the overall management, development, security, and maintenance of the firm's technological resources. This includes hardware, software, data, and network infrastructure, ensuring seamless and secure operations.",
        qualifications: ["Bachelor's degree in Computer Science, IT, or a related field.", "3-7 years of experience in IT support, network administration, or IT management.", "Strong knowledge of networking protocols and cybersecurity best practices.", "Familiarity with database management and website content management systems.", "Strong aptitude for learning and implementing new technologies, especially AI applications."],
        responsibilities: [
            { title: 'IT Infrastructure', content: 'Oversee installation, configuration, and maintenance of hardware, software, and network infrastructure.' },
            { title: 'Data Management & Security', content: 'Implement and maintain security policies, manage data backups, and ensure data integrity.' },
            { title: 'Software & System Management', content: 'Manage software licenses, subscriptions, and vendor relationships. Evaluate and deploy new software.' },
            { title: 'MIS & Digital Presence', content: 'Develop and maintain Management Information Systems (MIS). Manage the firm’s website and social media accounts.' }
        ],
        skills: { labels: ['Network Admin', 'Cybersecurity', 'Software Mgmt', 'MIS Development', 'Problem Solving', 'AI Integration'], data: [90, 95, 88, 85, 92, 80] }
    },
    {
        id: 'process-coordinator',
        title: 'Process Coordinator (Entry-Level Junior Computer Operator)',
        shortDesc: 'Ensuring tasks are accurately verified against procedures, quality standards, and timelines.',
        overview: "The Process Coordinator is an entry-level role responsible for ensuring that tasks reported as completed are accurately verified against prescribed procedures, quality standards, and timelines. This role supports the firm's commitment to accuracy and efficiency.",
        qualifications: ["10+2 (Intermediate) or Bachelor's degree in Commerce/Computer Applications. Freshers welcome.", "0-1 years of experience in data entry or a similar administrative role.", "Basic computer proficiency (MS Office) and familiarity with data entry software.", "Exceptional attention to detail and accuracy.", "Highly organized, methodical, and reliable."],
        responsibilities: [
            { title: 'Task Verification', content: 'Review submitted tasks for adherence to prescribed manner and quality. Cross-check data entries against source documents.' },
            { title: 'Timeliness Monitoring', content: 'Track task completion against deadlines and report any delays to the concerned manager.' },
            { title: 'Reporting & Documentation', content: 'Maintain accurate logs of verified tasks and prepare daily/weekly status reports.' },
            { title: 'Basic Computer Operations', content: 'Perform data entry, document scanning, and file management tasks as required.' }
        ],
        skills: { labels: ['Attention to Detail', 'Accuracy', 'Organization', 'Reliability', 'Computer Basics', 'Learning Aptitude'], data: [99, 98, 90, 95, 85, 80] }
    },
    {
        id: 'ai-solutions-lead',
        title: 'AI Solutions Lead / AI Integration Specialist',
        shortDesc: 'Driving the strategic integration and optimization of AI tools across all firm operations to enhance efficiency.',
        overview: "The AI Solutions Lead is a pivotal role responsible for identifying, evaluating, integrating, and optimizing AI tools specific to accounting, tax, and advisory services. This role bridges the gap between IT and the service teams, ensuring AI adoption is strategic and secure.",
        qualifications: ["Bachelor's or Master's degree in Computer Science, Data Science, or a related technical field.", "3-5 years of experience in AI/ML solution implementation or technology consulting.", "Strong understanding of AI/ML concepts (LLMs, NLP, RPA).", "Experience with cloud AI services (Google, Azure, AWS) is beneficial.", "Excellent analytical and communication skills."],
        responsibilities: [
            { title: 'AI Strategy & Research', content: 'Research and evaluate emerging AI tools relevant to accounting and tax. Develop a roadmap for AI integration.' },
            { title: 'Implementation & Optimization', content: 'Lead the technical integration of AI tools with existing systems. Monitor performance and optimize for efficiency.' },
            { title: 'Data & Security for AI', content: 'Ensure data privacy and security in all AI implementations. Establish governance protocols for AI usage.' },
            { title: 'Training & Support', content: 'Train staff on how to use new AI tools effectively. Provide ongoing support and act as the AI subject matter expert.' }
        ],
        skills: { labels: ['AI/ML Concepts', 'Data Analysis', 'Integration', 'Problem Solving', 'Communication', 'Innovation'], data: [95, 90, 92, 88, 94, 98] }
    },
    {
        id: 'digital-marketing-executive',
        title: 'Digital Marketing Executive',
        shortDesc: 'Executing digital marketing campaigns, managing online presence, and creating engaging content to attract clients.',
        overview: "The Digital Marketing Executive is responsible for executing the firm's digital marketing strategies, managing its online presence, and creating compelling content. This role supports the Sales Manager's initiatives to enhance brand visibility and lead generation.",
        qualifications: ["Bachelor's degree in Marketing, Mass Communication, or a related field.", "1-3 years of experience in digital marketing, content creation, or social media management.", "Proficiency in social media platforms and basic understanding of SEO/SEM principles.", "Experience with email marketing and analytics tools.", "Strong written communication skills and basic graphic design skills (e.g., Canva)."],
        responsibilities: [
            { title: 'Content Creation', content: 'Develop engaging content for the firm’s website, blog, and social media channels (articles, posts, infographics).' },
            { title: 'Social Media Management', content: 'Manage and grow the firm’s presence on platforms like LinkedIn, Facebook, and Twitter.' },
            { title: 'SEO & SEM Support', content: 'Assist in optimizing website content for search engines and support the execution of paid advertising campaigns.' },
            { title: 'Email Marketing & Analytics', content: 'Create and send email newsletters. Track and report on the performance of digital marketing campaigns.' }
        ],
        skills: { labels: ['Content Writing', 'Social Media Mgmt', 'SEO/SEM Basics', 'Email Marketing', 'Analytics', 'Creativity'], data: [90, 88, 80, 85, 82, 92] }
    }
];

export default allJobData;
