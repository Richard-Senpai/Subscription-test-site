import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Nexus Learning
            </span>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#curriculum" className="text-sm text-neutral-400 hover:text-white transition-colors">Curriculum</a>
            <a href="#mentors" className="text-sm text-neutral-400 hover:text-white transition-colors">Mentors</a>
            <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log In</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};