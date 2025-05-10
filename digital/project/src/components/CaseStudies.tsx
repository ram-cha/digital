import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Boosting E-commerce Sales Through SEO & PPC",
      client: "Fashion Retailer",
      industry: "E-commerce",
      image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      challenge: "A national fashion retailer was struggling with stagnant online sales and high customer acquisition costs.",
      solution: "We implemented a comprehensive SEO strategy alongside targeted PPC campaigns, focusing on high-intent keywords and optimizing the conversion funnel.",
      results: [
        { metric: "Organic Traffic", value: "+187%" },
        { metric: "Conversion Rate", value: "+43%" },
        { metric: "Cost per Acquisition", value: "-32%" },
        { metric: "Return on Ad Spend", value: "426%" }
      ]
    },
    {
      id: 2,
      title: "Local Business Growth Through Digital Transformation",
      client: "Health & Wellness Clinic",
      industry: "Healthcare",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      challenge: "A local wellness clinic needed to expand their customer base and establish themselves as industry leaders in a competitive market.",
      solution: "We created a local SEO strategy, content marketing plan, and implemented a lead generation system with automated follow-ups.",
      results: [
        { metric: "Local Search Visibility", value: "+152%" },
        { metric: "New Patient Inquiries", value: "+89%" },
        { metric: "Website Conversion Rate", value: "+67%" },
        { metric: "Marketing ROI", value: "380%" }
      ]
    },
    {
      id: 3,
      title: "B2B Lead Generation Campaign",
      client: "Software Solution Provider",
      industry: "SaaS",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      challenge: "A B2B software company was struggling to generate qualified leads and had a lengthy sales cycle impacting revenue growth.",
      solution: "We developed a multi-channel approach with content marketing, LinkedIn advertising, and marketing automation to nurture leads through the funnel.",
      results: [
        { metric: "Qualified Leads", value: "+215%" },
        { metric: "Sales Cycle Length", value: "-41%" },
        { metric: "Cost per Lead", value: "-28%" },
        { metric: "Closed Deals", value: "+76%" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses. Explore how our strategies drive measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveCase(study.id)}
            >
              <div 
                className="h-60 bg-center bg-cover"
                style={{ backgroundImage: `url(${study.image})` }}
              ></div>
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.challenge.substring(0, 120)}...</p>
                <button 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case Study Modal */}
        {activeCase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setActiveCase(null)}>
            <div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const study = caseStudies.find(s => s.id === activeCase);
                if (!study) return null;
                
                return (
                  <>
                    <div 
                      className="h-72 bg-center bg-cover relative"
                      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${study.image})` }}
                    >
                      <button 
                        className="absolute top-4 right-4 bg-white rounded-full p-2"
                        onClick={() => setActiveCase(null)}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-sm font-medium mb-2">{study.client} • {study.industry}</div>
                        <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">The Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {study.results.map((result, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-1">{result.value}</div>
                              <div className="text-sm text-gray-600">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-8 text-center">
                        <button 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                          onClick={() => {
                            setActiveCase(null);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Discuss Your Project
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};