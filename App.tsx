import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <Header />
      
      <main>
        <Hero />
        
        {/* Features/Curriculum Section placeholder */}
        <section id="curriculum" className="py-20 border-y border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-2xl font-bold text-white mb-12">Trusted by learners from companies like</h2>
             <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                {/* Mock Logos */}
                {['Acme Corp', 'GlobalTech', 'Nebula Inc', 'FutureSystems'].map(company => (
                  <span key={company} className="text-xl font-bold text-neutral-400">{company}</span>
                ))}
             </div>
          </div>
        </section>

        <Pricing />
      </main>

      <footer className="py-12 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500">
            © 2024 Nexus Learning. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <ChatWidget />
    </div>
  );
}

export default App;