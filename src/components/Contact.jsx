import React from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 text-center bg-gray-900 border-2 border-gray-800 hover:border-sky-500 hover:shadow-xl transition-all rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-gray-600 flex items-center justify-center text-white mx-auto mb-4 rounded-xl shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-1">Email</h3>
              <p className="text-gray-300 text-sm">desxgod27@gmail.com</p>
            </div>
            <div className="p-6 text-center bg-gray-900 border-2 border-gray-800 hover:border-sky-500 hover:shadow-xl transition-all rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-gray-600 flex items-center justify-center text-white mx-auto mb-4 rounded-xl shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-1">Phone</h3>
              <p className="text-gray-300 text-sm">+2348058624907</p>
            </div>
            <div className="p-6 text-center bg-gray-900 border-2 border-gray-800 hover:border-sky-500 hover:shadow-xl transition-all rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-gray-600 flex items-center justify-center text-white mx-auto mb-4 rounded-xl shadow-md">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-1">Chat</h3>
              <p className="text-gray-300 text-sm">Live chat available</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-800 outline-none transition-all rounded-xl"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-800 outline-none transition-all rounded-xl"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Let's talk!!</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-800 outline-none transition-all rounded-xl"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-sky-500 to-gray-600 text-white font-bold hover:from-sky-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
