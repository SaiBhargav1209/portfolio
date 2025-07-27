import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, GraduationCap, Briefcase, User, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    "Programming Languages": ["Java", "C", "C++", "JavaScript", "Python"],
    "Web Technologies": ["HTML", "CSS", "React.js", "Node.js", "Express"],
    "Databases": ["MongoDB", "SQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code"],
    "Concepts": ["OOP in Java", "DBMS", "DSA"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sai Bhargav
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Education', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              SB
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Sai Bhargav
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Computer Science Student</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Dedicated and goal-driven Computer Science undergraduate passionate about solving real-world problems through clean, efficient, and maintainable code
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:saibhargavaudit0101@gmail.com" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Get In Touch
            </a>
            <button onClick={() => scrollToSection('about')} className="border border-purple-400 hover:bg-purple-400/20 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <User className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science undergraduate at Vellore Institute of Technology with a strong foundation in full-stack web development and programming. With a CGPA of 8.75, I've consistently demonstrated academic excellence while building practical skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across multiple programming languages and modern web technologies. I'm experienced in building responsive web applications and have hands-on experience with database systems and version control tools.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Jagayyapeta, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current CGPA</span>
                  <span className="font-semibold text-purple-400">8.75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Intermediate</span>
                  <span className="font-semibold text-purple-400">97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SSC</span>
                  <span className="font-semibold text-purple-400">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-semibold text-purple-400">Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/40 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                degree: "BTech in Computer Science",
                institution: "Vellore Institute of Technology",
                period: "Sep 2023 – Present",
                grade: "CGPA: 8.75"
              },
              {
                degree: "Intermediate",
                institution: "JRC College",
                period: "Aug 2021 – Mar 2023",
                grade: "Percentage: 97%"
              },
              {
                degree: "SSC",
                institution: "Chegu Vidyalayam",
                period: "Jun 2011 – Jun 2021",
                grade: "Percentage: 100%"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">Web Development Intern</h3>
                <p className="text-xl text-gray-300 mb-2">Ethnus</p>
                <p className="text-gray-400">Jun 2025 – Jul 2025</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
                  Completed
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Built a comprehensive full-stack Hotel Booking System with separate admin and user dashboards</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Integrated complex booking logic and developed responsive UI components</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Implemented SQL backend for efficient data management and retrieval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and programming.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:saibhargavaudit0101@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                    saibhargavaudit0101@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <Phone className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919391558489" className="text-white hover:text-purple-400 transition-colors">
                    +91 9391558489
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <MapPin className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Jagayyapeta, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/sai-bhargav-966335304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://leetcode.com/saibhargav" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Code2 className="w-5 h-5" />
                  <span>LeetCode</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Let's Build Something Amazing Together</h4>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're looking for a passionate developer to join your team, want to collaborate on an exciting project, or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Sai Bhargav. Built with React and passion for clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;