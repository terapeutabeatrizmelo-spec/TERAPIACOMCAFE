import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TechnicalSection } from '../components/TechnicalSection';
import { AreasOfExpertise } from '../components/AreasOfExpertise';
import { ChildDevelopment } from '../components/ChildDevelopment';
import { FAQ } from '../components/FAQ';
import { Process } from '../components/Process';
import { BlogPreview } from '../components/BlogPreview';
import { AccessCounter } from '../components/AccessCounter';

export const LandingPage: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <About />
            <TechnicalSection />
            <AreasOfExpertise />
            <ChildDevelopment />
            <Process />
            <BlogPreview />
            <FAQ />
            <AccessCounter />
        </Layout>
    );
};
