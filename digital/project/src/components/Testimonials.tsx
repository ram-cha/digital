import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      company: "Horizon Fashion",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      content: "Working with PulseDigital transformed our online presence. Their SEO strategy increased our organic traffic by 187% in just six months, leading to a significant boost in sales. The team's attention to detail and data-driven approach sets them apart."
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Wellness Central",
      role: "CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      content: "As a local business competing in a crowded market, we needed a partner who understood our challenges. PulseDigital delivered beyond our expectations, creating a digital strategy that generated 89% more patient inquiries and transformed our business growth."
    },
    {
      id: 3,
      name: "Michael Chen",
      company: "CloudSoft Solutions",
      role: "Head of Growth",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      content: "The PulseDigital team revamped our lead generation strategy and implemented marketing automation that shortened our sales cycle by 41%. Their expertise in B2B marketing and understanding of the SaaS industry made all the difference."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const startInterval = () => {
    if (intervalRef.current !== null) return;
    
    intervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 6000);
  };

  const stopInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [isPaused]);

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped grow
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 bg-white text-gray-900 rounded-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 h-full">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 flex items-center">
                      <blockquote className="italic text-gray-700 text-lg">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white text-blue-600 rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors md:-translate-x-6"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white text-blue-600 rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors md:translate-x-6"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white w-8' : 'bg-blue-200 bg-opacity-50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};