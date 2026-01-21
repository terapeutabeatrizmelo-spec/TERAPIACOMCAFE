import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { AreasOfExpertise } from '../components/AreasOfExpertise';
import { Process } from '../components/Process';
import { BlogPreview } from '../components/BlogPreview';
import { LeadMagnet } from '../components/LeadMagnet';
import { FAQ } from '../components/FAQ';
import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling on initial load if hash is present
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <AreasOfExpertise />
      <Process />
      <LeadMagnet />
      <BlogPreview />
      <FAQ />
    </>
  );
};