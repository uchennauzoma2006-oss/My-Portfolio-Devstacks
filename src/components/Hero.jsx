import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 relative border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
            <span className="text-sky-400 font-semibold tracking-widest uppercase text-sm border-2 border-sky-400 glass-effect inline-block px-6 py-2 rounded-full shadow-lg shadow-sky-500/50">
              ⚡ Available for work
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Crafting Digital <span className="text-sky-400">Experiences</span> That Matter.
          </h1>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed text-shadow-black">
            Hello, i'm <span className="text-sky-400 font-semibold">Uzoma Uchenna</span> a Full Stack Developer passionate about creating seamless, accessible, human-centered web applications. I specialize in building intuitive digital products that not only solve real-world problems but also elevate user experiences. By the way, if you want to see some of the works that i have done, just click the button below. Let's make your E-commerce responsive or your SaaS dashboard scalable with my design empathy and technical precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 via-gray-600 to-slate-600 hover:from-sky-400 hover:via-gray-500 hover:to-slate-500 md:text-lg transition-all rounded-xl shadow-lg shadow-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/80 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">View my Projects</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-base font-bold text-cyan-400 glass-effect hover:bg-cyan-500/10 md:text-lg transition-all rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-500/30 hover:border-sky-400 flex items-center justify-center text-slate-400 hover:text-sky-400 glass-effect hover:shadow-lg hover:shadow-sky-500/50 transition-all hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-500/30 hover:border-sky-400 flex items-center justify-center text-slate-400 hover:text-sky-400 glass-effect hover:shadow-lg hover:shadow-sky-500/50 transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border-2 border-sky-500/30 hover:border-sky-400 flex items-center justify-center text-slate-400 hover:text-sky-400 glass-effect hover:shadow-lg hover:shadow-sky-500/50 transition-all hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
