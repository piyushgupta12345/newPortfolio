import React, { useEffect, useState } from 'react';
import { XIcon, ExternalLinkIcon, Terminal, Database, Wrench, Box, Menu, X } from 'lucide-react';
import Certificate from './assets/webDev.png'
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const projects = [
        {
            title: "Project 1",
            description: "A full-stack web application built with React and Node.js A full-stack web application built with React and Node.jsA full-stack web application built with React and Node.jsA full-stack web application built with React and Node.jsA full-stack web application built with React and Node.jsA full-stack web application built with React and Node.jsA full-stack web application built with React and Node.js",
            techStack: ["React", "Node.js", "MongoDB"],
            imageUrl: Certificate,
            githubUrl: 'https://github.com/your-username/project-3',
            liveUrl: 'https://project-3.example.com'
        },
        {
            title: "Project 2",
            description: "A full-stack web application built with React and Node.js",
            techStack: ["React", "Tailwind CSS", "Firebase"],
            imageUrl: Certificate,
            githubUrl: 'https://github.com/your-username/project-3',
            liveUrl: 'https://project-3.example.com'
        },
        {
            title: "Project 3",
            description: "A full-stack web application built with React and Node.js",
            techStack: ["React", "Redux", "Stripe"],
            imageUrl: Certificate,
            githubUrl: 'https://github.com/your-username/project-3',
            liveUrl: 'https://project-3.example.com'
        }
    ];

    const skills = [
        {
            title: "Frontend",
            icon: <Terminal className="w-6 h-6" />,
            items: ["HTML", "CSS", "Bootstrap", "Tailwind-CSS", "JavaScript", "ReactJs", "Redux", "Shadcn Ui", "Zod"],
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
            iconColor: "text-blue-500"
        },
        {
            title: "Backend",
            icon: <Box className="w-6 h-6" />,
            items: ["NodeJs", "ExpressJs", "RestApi"],
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
            iconColor: "text-purple-500"
        },
        {

            title: "Developer Tools",
            icon: <Wrench className="w-6 h-6" />,
            items: ["VS Code", "Git", "GitHub", "Postman", "Vercel", "Netlify"],
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
            iconColor: "text-green-500"
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6" />,
            items: ["MongoDB", "Firebase"],
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
            iconColor: "text-orange-500"
        }
    ];

    const certificates = [
        {
            id: 1,
            title: "Full Stack Web Developer",
            issuer: "PW Skills",
            date: "2023",
            image: Certificate,
            credential: "Credential ID: db7da8c2-b0c1-4974-af90-229dc7a04a1b"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Header */}
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 px-5 bg-black`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </div>
                        <nav className="hidden md:flex space-x-5">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact', 'Certificates'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                                {['Home', 'About', 'Skills', 'Projects', 'Contact', 'Certificates'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Home Section */}
            <section id="home" className="min-h-screen flex items-center pt-16 px-6">
                <div className="max-w-[1280px] w-full mx-auto grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4 w-full">
                        <p className="text-purple-500 text-base">Welcome to my Portfolio</p>
                        <h1 className="text-4xl max-lg:text-3xl font-bold">Hi I’m
                            <span className="text-4xl max-lg:text-3xl ml-2 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Piyush Gupta</span></h1>
                        <h2 className="text-4xl max-lg:text-3xl font-semibold">Full Stack Web Developer</h2>
                        <p className="text-lg text-gray-400 max-w-lg">
                            I build robust, user-friendly web applications and Collaborating with highly skilled individuals.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 w-full">
                            <a
                                href="#about"
                                className="max-w-[150px] w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center gap-2 transition-colors"
                            >
                                Download CV
                            </a>
                            <a
                                href="#projects"
                                className="max-w-[150px] w-full px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full flex items-center justify-center gap-2 transition-all"
                            >
                                Projects
                                <span>🚀</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                            <img
                                src="https://via.placeholder.com/300"
                                alt="Profile"
                                className="relative w-[350px] h-[350px] object-cover rounded-full mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='overflow-hidden bg-[#F6F6F6]'>
                <div className="w-[100vw] flex justify-between items-center gap-8 animate-scroll py-3">
                    <span className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap">Pay via De9to App an get Flat 20% Discount</span>
                    <span className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap">Pay via De9to App an get Flat 20% Discount</span>
                </div>
            </section> */}

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center py-20">
                <div className="bg-gray-900 text-white p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-400 mb-4">About me:</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Hi, my name is Piyush Gupta. I am a Fullstack Web Developer with a passion for creating
                        seamless and efficient web applications. I have a strong understanding of web development
                        principles and aim to deliver exceptional user experiences.
                    </p>
                    <div className="text-5xl font-bold text-purple-400 mb-2">1-2+</div>
                    <p className="text-lg leading-relaxed mb-8">
                        Years of experience. Specialized in building apps while ensuring a seamless web experience
                        for end users.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-purple-500 p-4 rounded-lg text-center">
                            <p className="text-xl font-semibold">UI & UX DESIGNING</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-xl font-semibold">WEB DEVELOPMENT</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-xl font-semibold">MOBILE DEVELOPMENT</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-xl font-semibold">WEB SCRAPING WITH PYTHON</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            {/* <section id="skills" className=" flex items-center py-20 bg-gray-900">
                <div className="max-w-[1280px] w-full mx-auto px-5">
                    <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform backdrop-blur-sm"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <section id="skills" className="min-h-screen flex items-center py-20 bg-gray-900/40">
                <div className="max-w-[1280px] w-full mx-auto px-5">
                    <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className={`p-6 rounded-xl border ${skill.borderColor} ${skill.bgColor} transition-all duration-300 hover:scale-105`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`${skill.iconColor}`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{skill.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-white dark:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center py-20">
                <div className="max-w-[1280px] w-full mx-auto px-5">
                    <h2 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform"
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="mb-4 rounded-lg shadow-md"
                                />
                                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-blue-500/20 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4 w-full mt-6">
                                    <button className='h-10 rounded-full w-1/2 text-[#1A202C] text-sm font-medium bg-[#EDF2F7]'>Visit</button>
                                    <button className='h-10 rounded-3xl w-1/2 bg-[#000000] flex justify-center items-center'><FaGithub className="w-7 h-7" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex items-center py-20 w-full bg-gray-900">
                <div className="w-full max-w-[1000px] mx-auto px-5">
                    <h1 className="text-4xl font-bold mb-12 text-center">
                        <span className="text-white">Contact </span>
                        <span className="text-cyan-400">Me!</span>
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Your First Name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 border border-gray-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Your Last Name"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 border border-gray-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 border border-gray-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                            />
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Your Mobile Number"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 border border-gray-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 placeholder-gray-400 border border-gray-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                        />

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold hover:opacity-90 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="py-20 bg-gray-900/50">
                <div className="max-w-[1280px] w-full mx-auto px-5">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                        Certificates & Achievements
                    </h2>

                    {/* Certificates Grid */}
                    <div className="flex justify-center w-full cursor-pointer">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="bg-[#1a1a24] rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300"
                            >
                                {/* Certificate Preview */}
                                <div className="relative group">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => setSelectedCertificate(cert)}
                                            className="bg-white text-purple-600 px-4 py-2 rounded-full flex items-center gap-2 transform scale-95 hover:scale-100 transition-all"
                                        >
                                            View Certificate <ExternalLinkIcon size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Certificate Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-gray-400 mb-2">Issued by {cert.issuer}</p>
                                    <p className="text-gray-500 text-sm">{cert.date}</p>
                                    <p className="text-purple-400 text-sm mt-2">{cert.credential}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificate Preview Modal */}
                {selectedCertificate && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                        <div className="bg-[#1a1a24] rounded-xl max-w-xl p-6 relative">
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute top-1 right-2 text-gray-400 hover:text-white"
                            >
                                <XIcon size={24} />
                            </button>

                            <div className="space-y-4 mt-2">
                                {/* <h3 className="text-2xl font-bold text-white">
                                    {selectedCertificate.title}
                                </h3> */}
                                <img
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.title}
                                    className="w-full rounded-lg"
                                />
                                {/* <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-400">Issued by {selectedCertificate.issuer}</p>
                                        <p className="text-gray-500">{selectedCertificate.date}</p>
                                    </div>
                                    <p className="text-purple-400">{selectedCertificate.credential}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="bg-black/80 backdrop-blur-sm py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © 2024 Portfolio. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Portfolio;