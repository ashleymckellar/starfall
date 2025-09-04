import  { useState, useEffect } from 'react';
import {
    ChevronDown,
    Code,
    Zap,
    Users,
    CheckCircle,
    Mail,
    Phone,
    MapPin,
    Menu,
    X,
    Star,
    ArrowRight,
} from 'lucide-react';

import starfalllogo from './assets/starfalllogo.png'
import starfallgreenstars from './assets/starfallgreen.png'
import djbentley from './assets/djbentleyv2.png'
import bii from './assets/BII-new-thumb.png'

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'home',
                'services',
                'about',
                'portfolio',
                'contact',
            ];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (elementId) => {
        document.getElementById(elementId)?.scrollIntoView({
            behavior: 'smooth',
        });
        setIsMenuOpen(false);
    };

    return (
<div className="min-h-screen bg-black text-white flex flex-col min-w-0 mx-auto">

      {/* Navigation */}
   <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-sm border-b border-slate-800 z-50">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center p-1">
                <img className="w-full h-full object-contain" src={starfallgreenstars} alt="Starfall Logo" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Starfall Codeworks
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800">
              <div className="py-4 flex flex-col space-y-2">
                {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern Web Apps
                </span>
                <br />
                <span className="text-slate-200">for Local Businesses</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl">
                We craft lightning-fast Single Page Applications that help local businesses 
                stand out online and convert visitors into customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-slate-800"
              >
                View Our Work
              </button>
            </div>

            <div className="animate-bounce mt-16">
              <ChevronDown className="w-8 h-8 text-slate-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              Specialized web solutions designed to help local businesses thrive in the digital age
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Single Page Applications",
                description: "Fast, responsive SPAs built with React that provide seamless user experiences and instant page loads."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Full Stack Web and Mobile Apps",
                description: "Custom-built applications that work seamlessly across web and mobile."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Local Business Focus",
                description: "Tailored solutions for restaurants, shops, services, and other local businesses with location-based features."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105 w-full md:w-80 lg:w-96 flex-shrink-0"
              >
                <div className="flex flex-col items-start">
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Starfall?
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                We're not just developers – we're your digital partners. With years of experience 
                building modern web applications, we understand what local businesses need to succeed online.
              </p>
              
              <div className="flex flex-col space-y-4">
                {[
                  "Modern React-based architecture",
                  "Mobile-first responsive design",
                  "SEO optimized for local search",
                  "Fast loading times (< 2 seconds)",
                  "Ongoing support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col space-y-8 max-w-lg">
              {[
                {
                  name: "DJ Bentley Taylor",
                  company: "Music Producer",
                  
                  quote: "Starfall transformed my online presence completely. The site they built is lightning-fast and my booking inquiries have increased since launch."
                },
                {
                  name: "Brain Integration Institute",
                  company: "Healthcare Practice",
                  quote: "Working with Starfall was seamless. They understood our needs perfectly and delivered a modern, accessible platform that our patients and practitioners love."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-300 mb-3 italic">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Work
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              See how we've helped local businesses transform their online presence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "DJ Bentley Taylor",
                category: "Entertainment Industry",
                image: djbentley,
                description: "Single page React website with contact form and third party API integration.",
                link: "https://www.djbentleytaylor.com/"
              },
              {
                title: "Brain Integration Institute",
                category: "Healthcare",
                image: bii,
                description: "Full stack application with authentication, admin portal, Stripe powered payments, and a custom timed assessment.",
                link: "https://brainintegration.institute"
              }
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all hover:transform hover:scale-105 block group w-full md:w-80 lg:w-96 flex-shrink-0"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <img className="w-full   h-full text-slate-400 group-hover:text-blue-400 transition-colors" src={project.image} />
                </div>
                <div className="p-6 flex flex-col">
                  <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 flex-1">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              Ready to transform your business with a modern web application? Get in touch today.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-slate-400">hello@starfallcodeworks.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-slate-400">(206) 939-1818</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-slate-400">Gulf Breeze, FL</div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-lg">
              <div className="flex flex-col space-y-6">
                <div>
                  <div className="block text-sm font-medium mb-2">Name</div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium mb-2">Email</div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium mb-2">Message</div>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  onClick={() => alert('Contact form submitted! We will be in touch as soon as possible.')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center p-1">
                <img className="w-full h-full object-contain" src={starfallgreenstars} alt="Starfall Logo" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Starfall Codeworks
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 Starfall Codeworks. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
