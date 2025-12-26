import React from 'react';

export enum SubscriptionTier {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}