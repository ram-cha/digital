import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "What makes your digital marketing approach unique?",
      answer: "Our data-driven methodology combines advanced analytics with creative strategy. We don't just follow industry trends – we create customized solutions based on your specific business goals, target audience, and market dynamics. Our team continuously monitors and optimizes campaigns to ensure maximum ROI."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "While initial improvements can be seen within 3-6 months, sustainable SEO results typically develop over 6-12 months. We focus on building a strong foundation with technical SEO, quality content, and authoritative backlinks. Our transparent reporting keeps you informed of progress throughout the journey."
    },
    {
      question: "What's included in your social media management services?",
      answer: "Our comprehensive social media management includes content strategy, creation, and scheduling, community management, paid advertising, performance tracking, and monthly analytics reports. We handle everything from graphic design to engagement monitoring while maintaining your brand's voice."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We establish clear KPIs aligned with your business objectives and track them through advanced analytics tools. Metrics may include traffic growth, conversion rates, lead quality, ROI, and brand engagement. You'll receive detailed monthly reports with actionable insights and recommendations."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer customized packages based on your specific needs and goals. After understanding your requirements through an initial consultation, we'll provide a detailed proposal outlining recommended services and investment levels. All packages include regular reporting and dedicated account management."
    },
    {
      question: "Do you offer contracts or is it month-to-month?",
      answer: "We offer both monthly and long-term agreements. While we recommend a minimum 6-month commitment for optimal results, especially for SEO and content marketing, we also provide flexible month-to-month options. Each agreement includes clear deliverables and performance metrics."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-600" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};