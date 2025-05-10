import React, { useState } from 'react';
import { Layers, TrendingUp, Users, PenTool, Sparkles, BarChart } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('seo');
  
  const services: Service[] = [
    {
      id: 'seo',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'SEO Optimization',
      description: 'Drive organic traffic with data-driven SEO strategies that position your brand at the top of search results.',
      features: [
        'Comprehensive SEO audits and competitor analysis',
        'On-page & technical SEO optimization',
        'Content strategy and keyword research',
        'Link building and authority development',
        'Local SEO for businesses targeting specific regions'
      ],
      color: 'blue'
    },
    {
      id: 'ppc',
      icon: <BarChart className="h-6 w-6" />,
      title: 'PPC Management',
      description: 'Maximize ROI with targeted pay-per-click campaigns across Google, Bing, and social media platforms.',
      features: [
        'Strategic ad copy and creative development',
        'Advanced audience targeting and segmentation',
        'Conversion tracking and attribution modeling',
        'A/B testing and continuous optimization',
        'Transparent reporting and ROI analysis'
      ],
      color: 'orange'
    },
    {
      id: 'social',
      icon: <Users className="h-6 w-6" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement with strategic social media campaigns that resonate with your audience.',
      features: [
        'Platform-specific strategy development',
        'Content creation and community management',
        'Paid social campaigns with precision targeting',
        'Influencer marketing and partnerships',
        'Social listening and competitor analysis'
      ],
      color: 'pink'
    },
    {
      id: 'content',
      icon: <PenTool className="h-6 w-6" />,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that establishes authority and drives conversions.',
      features: [
        'Content strategy aligned with business goals',
        'Blog posts, articles, and long-form content',
        'Video production and multimedia content',
        'Email marketing campaigns and automation',
        'Content distribution and promotion'
      ],
      color: 'green'
    },
    {
      id: 'analytics',
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics that reveal actionable insights.',
      features: [
        'Custom dashboard development',
        'Conversion rate optimization (CRO)',
        'User behavior analysis',
        'Comprehensive performance reporting',
        'Predictive analytics and trend forecasting'
      ],
      color: 'purple'
    },
    {
      id: 'strategy',
      icon: <Layers className="h-6 w-6" />,
      title: 'Digital Strategy',
      description: 'Develop a holistic digital strategy that aligns marketing efforts with your business objectives.',
      features: [
        'Brand positioning and competitive analysis',
        'Customer journey mapping',
        'Multi-channel marketing roadmaps',
        'Growth hacking and innovation planning',
        'Budget allocation and ROI projection'
      ],
      color: 'indigo'
    }
  ];

  const getService = (id: string) => services.find(service => service.id === id) || services[0];
  const activeService = getService(activeTab);
  
  const getColorClasses = (service: Service, isActive: boolean) => {
    const colorMap: Record<string, { bg: string, text: string, border: string }> = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-500' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-500' },
      green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-500' }
    };
    
    const colors = colorMap[service.color];
    
    if (isActive) {
      return `${colors.bg} text-white`;
    }
    
    return `bg-white ${colors.text} hover:bg-gray-50 border-b-2 ${colors.border}`;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your brand and drive measurable results
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`px-5 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${getColorClasses(service, activeTab === service.id)}`}
              onClick={() => setActiveTab(service.id)}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Active Service Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500">
          <div className="md:flex">
            <div className={`md:w-1/2 p-8 md:p-12 ${`bg-${activeService.color}-50`}`}>
              <div className={`inline-block p-3 rounded-full bg-${activeService.color}-100 text-${activeService.color}-600 mb-6`}>
                {activeService.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{activeService.description}</p>
              
              <a href="#contact" className={`inline-flex items-center text-${activeService.color}-600 font-semibold hover:underline`}>
                Learn more about {activeService.title}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 bg-gray-900 text-white">
              <h4 className="text-xl font-semibold mb-6">What's Included:</h4>
              <ul className="space-y-4">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`mr-3 h-6 w-6 text-${activeService.color}-400 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};