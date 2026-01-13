import React from 'react';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Dev-Portfolio</span>
          </div>
          
          <div className="flex space-x-6 text-gray-300 text-sm font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-gray-600 hover:border-sky-400 text-white hover:bg-sky-500 transition-all rounded-lg">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-gray-600 hover:border-sky-400 text-white hover:bg-sky-500 transition-all rounded-lg">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-gray-600 hover:border-sky-400 text-white hover:bg-sky-500 transition-all rounded-lg">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Devstacks👾.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
