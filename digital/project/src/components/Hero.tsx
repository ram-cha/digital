import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  openLeadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openLeadModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Drive Growth with Data-Driven Marketing Strategies",
      subtitle: "Increase ROI and maximize your digital presence with our expert team",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Transform Your Brand's Digital Presence",
      subtitle: "Award-winning campaigns that convert visitors into loyal customers",
      image: "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Outrank Your Competitors on Every Platform",
      subtitle: "Strategic SEO and PPC campaigns that deliver measurable results",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen">
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-white">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  currentSlide === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                {currentSlide === index && (
                  <>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {slide.subtitle}
                    </p>
                  </>
                )}
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={openLeadModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-colors duration-300"
              >
                Get a Free Audit <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="#case-studies" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-gray-400 bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};