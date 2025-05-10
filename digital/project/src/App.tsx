import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { useLeadCapture } from './hooks/useLeadCapture';

function App() {
  const { showModal, openModal, closeModal, submitLead } = useLeadCapture();

  return (
    <div className="min-h-screen bg-white">
      <Header openLeadModal={openModal} />
      <main>
        <Hero openLeadModal={openModal} />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Blog />
        <FAQ />
        <Contact openLeadModal={openModal} />
      </main>
      <Footer />
      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={closeModal} 
        onSubmit={submitLead} 
      />
    </div>
  );
}

export default App;