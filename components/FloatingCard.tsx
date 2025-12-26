import React from 'react';
import { FeatureCardProps } from '../types';

export const FloatingCard: React.FC<FeatureCardProps & { children?: React.ReactNode }> = ({ 
  title, 
  subtitle, 
  icon, 
  className = '', 
  children,
  delay = 0 
}) => {
  return (
    <div 
      className={`absolute backdrop-blur-xl bg-neutral-900/60 border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="p-2 bg-neutral-800 rounded-lg text-emerald-400">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
};