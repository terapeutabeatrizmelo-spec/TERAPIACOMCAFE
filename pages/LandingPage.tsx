import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TechnicalSection } from '../components/TechnicalSection';
import { AreasOfExpertise } from '../components/AreasOfExpertise';
import { LeadMagnet } from '../components/LeadMagnet';
import { FAQ } from '../components/FAQ';
import { Process } from '../components/Process';
import { BlogPreview } from '../components/BlogPreview';

export const LandingPage: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <TechnicalSection />
            <AreasOfExpertise />
            <Process />
            <LeadMagnet />
            <BlogPreview />
            <FAQ />
        </Layout>
    );
};
