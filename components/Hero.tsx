import React, { useState } from 'react';
import { Play, CheckCircle2, TrendingUp, Mic, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { FloatingCard } from './FloatingCard';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            New Cohort Starting Soon
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
              Intelligent Learning
            </span>
          </h1>
          
          <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Master the skills of tomorrow with our adaptive AI-powered curriculum. 
            Personalized mentorship, real-world projects, and a community of high achievers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto lg:mx-0 bg-neutral-900/50 p-2 rounded-full border border-white/10 backdrop-blur-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent px-4 py-2 text-white placeholder-neutral-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button size="md" className="w-full sm:w-auto shrink-0 group">
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>

        {/* Right Visuals (The Floating Cards) */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          
          {/* Central Showcase Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[240px] bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 flex flex-col p-6">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-white">AI Mentor Call</h3>
                      <p className="text-xs text-neutral-400">Analysis in progress...</p>
                   </div>
                </div>
                <div className="flex gap-1">
                   <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                   <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                </div>
             </div>
             
             {/* Audio Waveform Viz */}
             <div className="flex-1 flex items-center justify-center gap-1.5 h-full">
                {[40, 70, 45, 90, 60, 80, 50, 75, 40, 60, 30].map((h, i) => (
                   <div 
                      key={i} 
                      className="w-1.5 bg-emerald-500/80 rounded-full animate-pulse-slow"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                   ></div>
                ))}
             </div>
             
             <div className="mt-4 bg-white/5 rounded-xl p-3">
                <p className="text-xs text-emerald-300 font-mono">
                   <span className="text-emerald-500 mr-2">●</span>
                   Suggestion: Optimize your React useEffect dependency array to prevent infinite loops.
                </p>
             </div>
          </div>

          {/* Floating Card 1: Progress */}
          <FloatingCard 
             title="Smart Progress" 
             subtitle="Module 3: Advanced Patterns" 
             icon={<TrendingUp className="w-5 h-5" />} 
             className="top-[10%] left-[10%] w-64 z-10"
             delay={0}
          >
             <div className="relative pt-2">
                <div className="flex justify-between text-xs text-neutral-400 mb-1">
                   <span>Completion</span>
                   <span className="text-white font-bold">94%</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                   <div className="w-[94%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                </div>
             </div>
          </FloatingCard>

          {/* Floating Card 2: Tasks */}
          <FloatingCard 
             title="Tasks due today" 
             icon={<Calendar className="w-5 h-5" />} 
             className="bottom-[15%] left-[0%] w-72 z-30"
             delay={2}
          >
             <div className="space-y-3 mt-2">
                {[
                   { label: 'Submit Code Review', done: true },
                   { label: 'Watch "State Management"', done: false },
                   { label: 'Join Community Call', done: false }
                ].map((task, i) => (
                   <div key={i} className="flex items-center gap-3 text-xs">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${task.done ? 'bg-emerald-500 border-emerald-500' : 'border-neutral-600'}`}>
                         {task.done && <CheckCircle2 className="w-3 h-3 text-black" />}
                      </div>
                      <span className={task.done ? 'text-neutral-500 line-through' : 'text-neutral-300'}>{task.label}</span>
                   </div>
                ))}
             </div>
          </FloatingCard>

          {/* Floating Card 3: Video */}
          <FloatingCard 
             title="Live Workshop" 
             subtitle="Starting in 5m"
             icon={<Play className="w-5 h-5 ml-0.5" />} 
             className="top-[20%] right-[0%] w-56 z-10"
             delay={1.5}
          >
             <div className="mt-2 relative rounded-lg overflow-hidden aspect-video bg-neutral-800 group cursor-pointer">
                <img src="https://picsum.photos/400/225?grayscale" alt="Workshop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white" />
                   </div>
                </div>
             </div>
          </FloatingCard>

        </div>
      </div>
    </section>
  );
};