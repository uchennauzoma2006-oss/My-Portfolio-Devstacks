import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import geometryBg from '../imgs/Geometry Dash.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with real-time inventory management and secure payments.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative productivity tool with real-time updates and team workspace features.',
      tags: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    },
    {
    title: 'Online Student Management System',
    description: 'The Online Course Enrollment Portal is a simple PHP-MySQL web application designed to help students enroll in courses and allow administrators to manage available courses.',
    tags: ['PHP', 'MySQL'],
    link: '#',
    github: 'https://github.com/uchennauzoma2006-oss/Online-Course-Enrollment-using-PHP-MySQL',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 border-b border-gray-800" style={{ backgroundImage: `url(${geometryBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my latest work, ranging from complex web applications to elegant UI/UX experiments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 overflow-hidden border-2 border-gray-800 hover:border-sky-500 transition-all group rounded-2xl shadow-lg hover:shadow-2xl">
              <div className="relative overflow-hidden aspect-video bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/90 to-gray-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-gray-800 hover:bg-sky-500 hover:text-white transition-colors rounded-xl shadow-lg">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="p-3 bg-gray-800 hover:bg-sky-500 hover:text-white transition-colors rounded-xl shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold rounded-full hover:bg-gray-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sky-400 font-semibold hover:text-sky-300 hover:underline transition-all"
                >
                  Learn More
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
