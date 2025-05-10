import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const Team: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Emma Richards",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emma has over 15 years of experience in digital marketing. Prior to founding PulseDigital, she led marketing at several Fortune 500 companies, driving significant revenue growth through innovative digital strategies.",
      expertise: ["Strategic Planning", "Growth Marketing", "Digital Transformation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@pulsedigital.com"
      }
    },
    {
      id: 2,
      name: "David Chen",
      role: "Head of SEO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With a background in computer science and 10+ years in SEO, David specializes in technical SEO and algorithm analysis. He's helped clients achieve first-page rankings for some of the most competitive keywords in their industries.",
      expertise: ["Technical SEO", "Content Strategy", "Local SEO Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@pulsedigital.com"
      }
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "PPC & Social Media Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sophia is a certified Google Ads expert with a passion for data-driven marketing. She's managed multi-million dollar ad budgets and specializes in creating high-converting campaigns across search and social platforms.",
      expertise: ["Paid Search", "Social Media Advertising", "Conversion Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@pulsedigital.com"
      }
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Content Marketing Strategist",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James combines his journalism background with marketing expertise to create content that resonates with audiences and drives results. He specializes in developing comprehensive content strategies across multiple channels.",
      expertise: ["Content Creation", "Storytelling", "Editorial Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@pulsedigital.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate digital marketing professionals dedicated to your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group"
              onClick={() => setActiveTeamMember(member.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                          <Linkedin className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} onClick={(e) => e.stopPropagation()} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                          <Twitter className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} onClick={(e) => e.stopPropagation()} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                          <Mail className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.expertise.slice(0, 1).map((skill, index) => (
                    <span key={index} className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 1 && (
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      +{member.expertise.length - 1} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Member Modal */}
        {activeTeamMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setActiveTeamMember(null)}>
            <div 
              className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const member = teamMembers.find(m => m.id === activeTeamMember);
                if (!member) return null;
                
                return (
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <button 
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => setActiveTeamMember(null)}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                      
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                      
                      <p className="text-gray-700 mb-6">{member.bio}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, index) => (
                            <span key={index} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-red-500 transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};