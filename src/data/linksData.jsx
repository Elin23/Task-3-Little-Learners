export const navLinks = [
    {
        labelNav: "Home",
        labelFooter: "Home",
        description: "",
        path: "/",
        subLinks: [
            { name: "Features", path: "/#features" },
            { name: "Our Testimonials", path: "/#testimonials" },
            { name: "FAQ", path: "/#faq" },
        ]
    },
    {
        labelNav: "About Us",
        labelFooter: "About Us",
        description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education. ",
        path: "/about",
        subLinks: [
            { name: "Our Mission", path: "/about#mission" },
            { name: "Our Vision", path: "/about#vision" },
            { name: "Awards and Recognitions", path: "/about#awards" },
            { name: "History", path: "/about#history" },
            { name: "Teachers", path: "/about#teachers" },
        ]
    },
    {
        labelNav: "Academics",
        labelFooter: "Academics",
        description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
        path: "/academics",
        subLinks: [
            { name: "Special Features", path: "/academics#features" },
            { name: "Gallery", path: "/academics#gallery" },
        ]
    },
    {
        labelNav: "Admissions",
        labelFooter: "",
        description:"Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
        path: "/admissions",
        subLinks: []
    },
    {
        labelNav: "Student Life",
        labelFooter: "",
        description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
        path: "/student-life",
        subLinks: []
    },
    {
        labelNav: "Contact",
        labelFooter: "Contact Us",
        description: "",
        path: "/contact",
        subLinks: [
            { name: "Information", path: "/contact#info" },
            { name: "Map & Direction", path: "/contact#map" },
        ]
    }
];

export const footerLinks = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Cookie Policy", path: "/cookies" }
];
