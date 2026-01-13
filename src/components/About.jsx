import React from 'react';
import { Database, Layout, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Dev', icon: <Layout className="w-6 h-6" />, description: 'React, Vue, Tailwind CSS' },
    { name: 'Backend Dev', icon: <Server className="w-6 h-6" />, description: 'Node.js, Express, PostgreSQL' },
    { name: 'Mobile Apps', icon: <Smartphone className="w-6 h-6" />, description: 'React Native, Flutter' },
    { name: 'Database', icon: <Database className="w-6 h-6" />, description: 'MongoDB, Redis, MySQL' },
  ];

  return (
    <section id="about" className="py-20 relative border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-gray-500 text-transparent bg-clip-text mb-6 text-glow">About Me</h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            I'm <span className="text-sky-400 font-semibold">Uchenna</span> — a curious builder, relentless learner, and frontend enthusiast who believes great design starts with empathy. While I'm still a student, I've already shipped projects that solve real problems and taught me how to think like a product engineer. I don't have five years of experience (yet), but I do have the grit to learn fast, the humility to ask questions, and the drive to make things better. I'm looking for internship opportunities where I can grow, contribute, and collaborate with people who care about what they build.
            </p>

          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 glass-effect-strong hover:glass-effect border border-sky-500/20 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/30 transition-all group rounded-2xl cyber-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-gray-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-gray-500 to-slate-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all rounded-xl shadow-lg shadow-sky-500/50 relative z-10">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{skill.name}</h3>
                <p className="text-slate-400 relative z-10">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
