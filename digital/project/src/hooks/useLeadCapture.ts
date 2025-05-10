import { useState } from 'react';
import { LeadFormData } from '../components/LeadCaptureModal';

export function useLeadCapture() {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  const submitLead = (data: LeadFormData) => {
    console.log('Lead data submitted:', data);
    // Here you would typically send this data to your CRM or email service
    // For example:
    // fetch('/api/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  };
  
  return { showModal, openModal, closeModal, submitLead };
}