import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Calendar, Users, Sparkles, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const DramaLlamaWebsite = () => {
  const [spotlightOn, setSpotlightOn] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Turn on spotlight after 2 seconds
    const timer = setTimeout(() => {
      setSpotlightOn(true);
    }, 2000);

    // Show full website after spotlight sequence
    const websiteTimer = setTimeout(() => {
      setShowWebsite(true);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(websiteTimer);
    };
  }, []);

  useEffect(() => {
    // Subtle spotlight movement
    if (spotlightOn) {
      const moveSpotlight = () => {
        setSpotlightPosition(prev => ({
          x: prev.x + (Math.random() - 0.5) * 2,
          y: prev.y + (Math.random() - 0.5) * 1
        }));
      };

      const interval = setInterval(moveSpotlight, 3000);
      return () => clearInterval(interval);
    }
  }, [spotlightOn]);

  const services = [
    {
      title: "Corporate Events",
      description: "Professional conferences, meetings, and corporate celebrations that make lasting impressions.",
      icon: "🏢"
    },
    {
      title: "Weddings & Celebrations",
      description: "Your special day deserves the spotlight. We create magical moments that shine forever.",
      icon: "💍"
    },
    {
      title: "Social Gatherings",
      description: "Birthday parties, anniversaries, and social events with theatrical flair and attention to detail.",
      icon: "🎉"
    },
    {
      title: "Stage Productions",
      description: "From concept to curtain call, we handle every aspect of your theatrical production.",
      icon: "🎭"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Drama Llama transformed our annual conference into an unforgettable experience. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Groom",
      content: "Our wedding was absolutely magical. They made us feel like we were the stars of our own romantic production.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Event Coordinator",
      content: "Professional, creative, and reliable. Drama Llama brings theatrical excellence to every project.",
      rating: 5
    }
  ];

  if (!showWebsite) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Main Spotlight */}
        <div 
          className={`fixed inset-0 pointer-events-none transition-all duration-3000 ease-out ${
            spotlightOn ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `
              radial-gradient(
                ellipse 400px 600px at ${spotlightPosition.x}% ${spotlightPosition.y}%,
                rgba(255, 255, 240, 0.8) 0%,
                rgba(255, 255, 240, 0.6) 10%,
                rgba(255, 255, 240, 0.4) 20%,
                rgba(255, 255, 240, 0.2) 35%,
                rgba(255, 255, 240, 0.1) 50%,
                rgba(255, 255, 240, 0.05) 70%,
                transparent 100%
              )
            `
          }}
        ></div>

        {/* Secondary Spotlights */}
        <div 
          className={`fixed inset-0 pointer-events-none transition-all duration-4000 delay-1000 ease-out ${
            spotlightOn ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            background: `
              radial-gradient(
                ellipse 200px 400px at 20% 30%,
                rgba(255, 215, 0, 0.3) 0%,
                rgba(255, 215, 0, 0.1) 40%,
                transparent 80%
              ),
              radial-gradient(
                ellipse 180px 350px at 80% 70%,
                rgba(255, 100, 100, 0.2) 0%,
                rgba(255, 100, 100, 0.05) 40%,
                transparent 80%
              )
            `
          }}
        ></div>

        {/* Dust Particles */}
        {spotlightOn && (
          <>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="fixed w-1 h-1 bg-white rounded-full opacity-20 animate-pulse pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </>
        )}

        {/* Stage Floor */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-3000 delay-1000 ${
            spotlightOn ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(139, 69, 19, 0.6) 0%,
                rgba(160, 82, 45, 0.4) 30%,
                rgba(160, 82, 45, 0.2) 60%,
                transparent 100%
              )
            `,
            boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.8)'
          }}
        ></div>

        {/* Content in Spotlight */}
        <div className={`min-h-screen flex items-center justify-center transition-all duration-2000 delay-3000 ${
          spotlightOn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="text-center px-4 max-w-4xl">
            <div className="mb-8">
              <h1 
                className="text-6xl md:text-8xl font-bold mb-6"
                style={{
                  color: 'rgba(255, 255, 240, 0.95)',
                  textShadow: `
                    0 0 20px rgba(255, 255, 240, 0.8),
                    0 0 40px rgba(255, 255, 240, 0.6),
                    0 0 60px rgba(255, 255, 240, 0.4),
                    0 2px 4px rgba(0, 0, 0, 0.8)
                  `
                }}
              >
                Drama Llama
              </h1>
              <p 
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                style={{
                  color: 'rgba(255, 255, 240, 0.8)',
                  textShadow: '0 0 10px rgba(255, 255, 240, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                Where Every Event Takes Center Stage
              </p>
            </div>
          </div>
        </div>

        {/* Stage Shadows */}
        {spotlightOn && (
          <>
            <div className="fixed top-0 left-0 bottom-0 w-1/4 bg-gradient-to-r from-black via-black to-transparent opacity-60 pointer-events-none"></div>
            <div className="fixed top-0 right-0 bottom-0 w-1/4 bg-gradient-to-l from-black via-black to-transparent opacity-60 pointer-events-none"></div>
            <div className="fixed top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black via-black to-transparent opacity-40 pointer-events-none"></div>
          </>
        )}

        {/* Loading Screen */}
        {!spotlightOn && (
          <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-pulse">🎭</div>
              <div className="text-white text-lg animate-pulse">
                Setting the stage...
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎭</span>
              <span className="text-2xl font-bold text-white">Drama Llama</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors">
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full">
                Book Consultation
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional Event Planning with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Theatrical Flair</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We don't just plan events – we create experiences that captivate, inspire, and leave lasting impressions on every guest.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors inline-flex items-center">
            Start Planning Your Event <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Drama Llama</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Born from a passion for storytelling and theatrical excellence, Drama Llama brings the magic of live performance to every event we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-gray-300 mb-6">
                Founded by industry veterans with backgrounds in theater, event production, and hospitality, we understand that every event is a performance – and every guest is part of the audience.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in the power of dramatic moments, carefully orchestrated details, and the magic that happens when creativity meets flawless execution.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-400">Events Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-4">Our Mission</h4>
                <p className="text-gray-300 mb-4">
                  To transform ordinary gatherings into extraordinary experiences that resonate long after the curtain falls.
                </p>
                <h4 className="text-xl font-bold text-white mb-4">Our Vision</h4>
                <p className="text-gray-300">
                  A world where every event is a masterpiece of human connection, creativity, and celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate gatherings to grand productions, we bring theatrical excellence to every occasion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm hover:from-slate-700/50 hover:to-purple-800/30 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it – hear from the stars of our past productions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your Spotlight Moment?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your vision into an unforgettable experience. Book your free consultation today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-300">30-minute strategy session to discuss your vision</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Custom Planning</h3>
              <p className="text-gray-300">Tailored approach for your unique event needs</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Flawless Execution</h3>
              <p className="text-gray-300">Professional management from concept to curtain call</p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to start planning? We'd love to hear about your upcoming event.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@dramallama.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">New York, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎭</span>
            <span className="text-2xl font-bold text-white">Drama Llama</span>
          </div>
          <p className="text-gray-400 mb-8">Where Every Event Takes Center Stage</p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">© 2024 Drama Llama Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DramaLlamaWebsite;