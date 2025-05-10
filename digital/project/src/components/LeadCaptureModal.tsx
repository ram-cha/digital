import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadFormData) => void;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  services: string[];
  goals: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const initialFormData: LeadFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [],
    goals: ''
  };
  
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setStep(1);
      setCompleted(false);
      setFormData(initialFormData);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      
      return { ...prev, services: updatedServices };
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setCompleted(true);
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const isValidStep = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email;
    }
    if (step === 2) {
      return formData.services.length > 0;
    }
    return true;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Get Your Free Marketing Proposal</h2>
            <p className="text-gray-600 mt-2">
              Tell us about your business and goals, and we'll create a custom proposal tailored to your needs.
            </p>
          </div>
          
          {completed ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your information and will create your custom marketing proposal. A member of our team will contact you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex flex-col items-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step >= item ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {item}
                      </div>
                      <div className="text-xs mt-1 text-gray-500">
                        {item === 1 && 'Basic Info'}
                        {item === 2 && 'Services'}
                        {item === 3 && 'Goals'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div>
                    <p className="text-gray-700 mb-4">Which digital marketing services are you interested in? (Select all that apply)</p>
                    
                    <div className="space-y-3">
                      {[
                        { id: 'seo', label: 'SEO Optimization' },
                        { id: 'ppc', label: 'PPC Management' },
                        { id: 'social', label: 'Social Media Marketing' },
                        { id: 'content', label: 'Content Marketing' },
                        { id: 'analytics', label: 'Analytics & Insights' },
                        { id: 'strategy', label: 'Digital Strategy' }
                      ].map((service) => (
                        <div key={service.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={service.id} className="ml-3 text-gray-700">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                      What are your primary marketing goals or challenges?
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="E.g., increasing website traffic, generating more leads, improving conversion rates, etc."
                    ></textarea>
                  </div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md font-medium transition-colors"
                    >
                      Back
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isValidStep()}
                      className={`ml-auto bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors ${
                        isValidStep() ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};