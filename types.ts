import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface BlogPostProps {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
  content?: string; // Conteúdo HTML ou Markdown simulado
}

export enum SectionType {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  PROCESS = 'PROCESS',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT'
}