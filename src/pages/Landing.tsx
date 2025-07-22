
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Globe, ArrowRight, BookOpen, Users, Trophy, Award, GraduationCap, TrendingUp, Zap, Target, Heart, Phone, Calendar, FileText, MessageSquare, Shield, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Check if splash has been shown in this session
    const hasShownSplash = sessionStorage.getItem('splashShown');
    
    if (!hasShownSplash) {
      setShowSplash(true);
      sessionStorage.setItem('splashShown', 'true');
      
      // Hide splash screen after 4 seconds to enjoy the animations
      const splashTimer = setTimeout(() => {
        setShowSplash(false);
      }, 4000);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(splashTimer);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Comprehensive student records and academic tracking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Attendance System',
      description: 'Real-time attendance tracking and reporting',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Academic Records',
      description: 'Complete academic history and performance analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Seamless communication between all stakeholders',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Assessment Tools',
      description: 'Comprehensive examination and grading system',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Role-based access with enterprise-grade security',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const FloatingShape = ({ size, color, delay, duration }: { size: string, color: string, delay: string, duration: string }) => (
    <div 
      className={`absolute ${size} ${color} rounded-full opacity-20 animate-float`}
      style={{
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Splash Screen */}
      {showSplash && (
        <div className={`fixed inset-0 z-[9999] gradient-bg flex items-center justify-center overflow-hidden ${showSplash ? 'splash-screen' : 'splash-exit'}`}>
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white/20 rounded-full floating-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full orbit-element"
                  style={{
                    animationDelay: `${i * 5}s`,
                    animationDuration: `${12 + i * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Ripple Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 border border-white/30 rounded-full ripple-effect"
                style={{
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Main Content */}
          <div className="text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider text-reveal">
              <span style={{ fontFamily: 'Georgia, serif' }} className="flex flex-col md:flex-row md:gap-4 items-center">
                <span className="block">
                  {'Impact'.split('').map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'letter-reveal 0.8s ease-out forwards'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="block">
                  {'School'.split('').map((letter, index) => (
                    <span
                      key={index + 6}
                      className="inline-block"
                      style={{
                        animationDelay: `${(index + 7) * 0.1}s`,
                        animation: 'letter-reveal 0.8s ease-out forwards'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            
            {/* Animated Underline */}
            <div className="mt-8 relative mx-auto w-64">
              <div className="h-1 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full animate-pulse" style={{
                  animation: 'pulse 2s ease-in-out infinite, gradient-wave 3s ease infinite',
                  backgroundSize: '200% 100%',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,1), rgba(255,255,255,0.5))'
                }}></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="mt-6 text-xl md:text-2xl text-white/80 font-light tracking-wide" style={{
              animation: 'letter-reveal 1s ease-out forwards',
              animationDelay: '1.5s',
              opacity: 0
            }}>
              Transforming Education
            </p>
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/30 floating-particle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/30 floating-particle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/30 floating-particle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/30 floating-particle" style={{ animationDelay: '2s' }}></div>
        </div>
      )}
      
      {/* Main Content - Hidden during splash */}
      <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-drift {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(90deg); }
          50% { transform: translate(-5px, -25px) rotate(180deg); }
          75% { transform: translate(-15px, -10px) rotate(270deg); }
          100% { transform: translate(0px, 0px) rotate(360deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-8px); }
        }
        
        @keyframes splash-fade-in {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes splash-fade-out {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
        
        @keyframes gradient-wave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5), 0 0 80px rgba(147,51,234,0.3); }
        }
        
        @keyframes letter-reveal {
          0% { opacity: 0; transform: translateY(30px) rotateX(90deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes mobile-menu-slide {
          0% { opacity: 0; transform: translateY(-100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes mobile-menu-item {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-drift {
          animation: float-drift 20s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 15s ease-in-out infinite;
        }
        
        .splash-screen {
          animation: splash-fade-in 1s ease-out forwards;
        }
        
        .splash-exit {
          animation: splash-fade-out 1s ease-out forwards;
        }
        
        .mobile-menu-container {
          animation: mobile-menu-slide 0.3s ease-out forwards;
        }
        
        .mobile-menu-item {
          animation: mobile-menu-item 0.4s ease-out forwards;
        }
        
        .gradient-bg {
          background: linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6, #10B981, #F59E0B);
          background-size: 400% 400%;
          animation: gradient-wave 8s ease infinite;
        }
        
        .floating-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        
        .text-reveal {
          animation: text-glow 3s ease-in-out infinite, letter-reveal 0.8s ease-out forwards;
        }
        
        .ripple-effect {
          animation: ripple 2s linear infinite;
        }
        
        .orbit-element {
          animation: orbit 15s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .parallax-element {
          transform: translateY(${scrollY * 0.1}px);
        }
      `}</style>

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape size="w-96 h-96" color="bg-gradient-to-r from-purple-600 to-pink-600" delay="0s" duration="25s" />
        <FloatingShape size="w-80 h-80" color="bg-gradient-to-r from-blue-600 to-cyan-600" delay="3s" duration="30s" />
        <FloatingShape size="w-72 h-72" color="bg-gradient-to-r from-green-600 to-emerald-600" delay="6s" duration="22s" />
        <FloatingShape size="w-64 h-64" color="bg-gradient-to-r from-orange-600 to-red-600" delay="2s" duration="28s" />
        <FloatingShape size="w-56 h-56" color="bg-gradient-to-r from-indigo-600 to-purple-600" delay="5s" duration="32s" />
        
        {/* Additional floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-float-gentle" style={{ animationDelay: '8s', animationDuration: '24s' }} />
        <div className="absolute top-96 right-20 w-48 h-48 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-25 animate-float-drift" style={{ animationDelay: '12s', animationDuration: '28s' }} />
        <div className="absolute bottom-40 left-32 w-40 h-40 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-30 animate-float" style={{ animationDelay: '10s', animationDuration: '26s' }} />
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => {
          const animationTypes = ['animate-float', 'animate-float-drift', 'animate-float-gentle'];
          const animationType = animationTypes[i % 3];
          const size = Math.random() > 0.7 ? 'w-3 h-3' : Math.random() > 0.4 ? 'w-2 h-2' : 'w-1 h-1';
          const opacity = Math.random() > 0.5 ? 'opacity-20' : Math.random() > 0.3 ? 'opacity-30' : 'opacity-10';
          
          return (
            <div
              key={i}
              className={`absolute ${size} bg-white rounded-full ${opacity} ${animationType}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 25}s`
              }}
            />
          );
        })}
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/impact_logo-removebg-preview.png" alt="Rehmani's IMPACT CAMPUS" className="w-10 h-12 rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Rehmani's IMPACT CAMPUS
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">About</Link>
              <Link to="/courses" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Courses</Link>
              <Link to="/gallery" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Gallery</Link>
              <Link to="/teacher-enrollment" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Teacher Enrollment</Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-white hover:text-purple-300 hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {/* Login and Signup buttons hidden */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md mobile-menu-container">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMobileMenu}
                className="text-white hover:text-purple-300 hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center space-y-6 text-center">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.1s' }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.15s' }}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.2s' }}
              >
                Courses
              </Link>
              <Link 
                to="/gallery" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.25s' }}
              >
                Gallery
              </Link>
              <Link 
                to="/teacher-enrollment" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.3s' }}
              >
                Teacher Enrollment
              </Link>
              <div className="pt-6 mobile-menu-item" style={{ animationDelay: '0.4s' }}>
                <Button 
                  onClick={() => {
                    navigate('/admission');
                    closeMobileMenu();
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 animate-bounce-in">
                  🚀 Rehmani Educational & Charitable Trust's
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight animate-gradient">
                IMPACT ENGLISH MEDIUM SCHOOL & JUNIOR COLLEGE
              </h2>
              <p className="text-lg text-gray-300 mb-4 max-w-lg leading-relaxed">
                Shape Your Future with Quality Education & Expert Guidance!
              </p>
              <p className="text-md text-gray-400 mb-8 max-w-lg leading-relaxed">
                At IMPACT CAMPUS, we don't just teach - we empower, inspire, and transform. We are committed to delivering value-based, concept-driven learning in a disciplined and nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/admission')} 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  ADMISSION OPEN 2025
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Features
                </Button>
              </div>
            </div>
            
            {/* Student Image with Enhanced Abstract Shapes */}
            <div className="relative">
              {/* Large Animated Background Shapes */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s', animationDuration: '28s' }} />
              <div className="absolute top-32 -right-16 w-64 h-64 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-30 animate-float-gentle" style={{ animationDelay: '6s', animationDuration: '22s' }} />
              <div className="absolute -bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 animate-float-drift" style={{ animationDelay: '12s', animationDuration: '35s' }} />
              <div className="absolute bottom-16 -left-16 w-72 h-72 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-25 animate-float" style={{ animationDelay: '9s', animationDuration: '30s' }} />
              <div className="absolute top-0 left-10 w-48 h-48 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-30 animate-float-gentle" style={{ animationDelay: '15s', animationDuration: '25s' }} />
              
              {/* Floating geometric shapes */}
              <div className="absolute top-10 left-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-40 animate-float-gentle transform rotate-45" style={{ animationDelay: '18s', animationDuration: '20s' }} />
              <div className="absolute bottom-32 left-0 w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-35 animate-float-drift" style={{ animationDelay: '24s', animationDuration: '26s' }} />
              <div className="absolute top-40 right-0 w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg opacity-40 animate-float transform rotate-12" style={{ animationDelay: '21s', animationDuration: '18s' }} />
              
              {/* Student Image Container */}
              <div className="relative z-10 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 animate-bounce-in">
                <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/50e068bc-150a-49ec-a210-c309477eb187.png"
                  alt="Student studying"
                    className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 hover:scale-110"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Why Choose Us Section */}
      <section className="py-24 relative" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              WHY CHOOSE US?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pimpri Chinchwad's First Minority Jr. College with exceptional facilities and results
            </p>
          </div>
          
          {/* Taleem Bhi Tarbiyat Bhi Section */}
          <div className="text-center mb-16 animate-slide-up">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-8">
              TALEEM BHI, TARBIYAT BHI
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Munasib Fees mein Aala Taleem',
                  description: 'Quality education at affordable fees, ensuring every child has access to excellent learning opportunities.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Users,
                  title: 'Waalidain ke saath Regular Rabta',
                  description: 'Regular communication with parents to keep them informed about their child\'s progress and development.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Heart,
                  title: 'Taleem ke saath-saath Sports aur Hunar ki Tarbiyat',
                  description: 'Comprehensive development through education, sports, and skill development programs.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Shield,
                  title: 'Akhlaaq Sazi aur Character Building',
                  description: 'Focus on moral values and character building alongside academic excellence.',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-bounce-in group shadow-lg shadow-black/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-center group-hover:text-gray-200 transition-colors">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Why Choose Us Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-red-400 mb-6">Key Features</h4>
              <ul className="space-y-4">
                {[
                  'Pimpri Chinchwad\'s First Minority Jr. College',
                  'Interactive Smart Classrooms',
                  'Regular Doubt-solving and Personal Mentoring',
                  'Emphasis on Moral Values and Holistic Development',
                  'State-of-the-art Infrastructure',
                  'NEET Exam Preparation With Syllabus',
                  '100% Board Exam Result Track Record',
                  'Quality Education in a Safe Environment'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Faculty Section */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-purple-400 mb-6">Guided by an Exceptional Faculty Team</h4>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {[
                  {
                    name: 'MR. BAGBAN MOHAMMED NAEEM',
                    role: 'Chairman',
                    qualification: 'M.Sc (Maths), B.Ed - University Topper',
                    experience: '18 Years'
                  },
                  {
                    name: 'MISS. BEDREKAR FIRDOUS',
                    role: 'Principal',
                    qualification: 'M.A, B.Ed',
                    experience: '25 Years'
                  },
                  {
                    name: 'MISS. SHAIKH NIDA',
                    role: 'Faculty',
                    qualification: 'M.Sc (Computer Science)',
                    experience: '06 Years'
                  },
                  {
                    name: 'MISS. KHAN SHAFEEQUNNISA',
                    role: 'Faculty',
                    qualification: 'M.Sc, B.Ed',
                    experience: '15 Years'
                  },
                  {
                    name: 'MISS. ZULEKHA SAMEER KHAN',
                    role: 'Faculty',
                    qualification: 'M.A., B.Ed',
                    experience: '09 Years'
                  },
                  {
                    name: 'MISS. SAYYED SHABANAM SHABBIR',
                    role: 'Faculty',
                    qualification: 'M.Sc (Physics), B.Ed - University Topper',
                    experience: '05 Years'
                  },
                  {
                    name: 'DR. SHAIKH SHAMSHAD',
                    role: 'Faculty',
                    qualification: 'BHMS, PEDEMS',
                    experience: '11 Years'
                  },
                  {
                    name: 'MISS. SHAIKH MARIYAM',
                    role: 'Faculty',
                    qualification: 'M.Com, MBA, B.Ed - (100/100 in Accounts)',
                    experience: '13 Years'
                  }
                ].map((faculty, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-400/30">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-bold text-white text-sm">{faculty.name}</h5>
                        <p className="text-purple-300 text-xs">{faculty.role}</p>
                        <p className="text-gray-300 text-xs mt-1">{faculty.qualification}</p>
                      </div>
                      <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded">
                        {faculty.experience}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Academic Excellence',
                description: 'Consistently high academic performance with innovative teaching methodologies and personalized learning approaches.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Highly qualified and experienced teachers dedicated to nurturing each student\'s potential and fostering a love for learning.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: 'Safe Environment',
                description: 'Secure campus with modern facilities, ensuring a safe and conducive learning environment for all students.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'International curriculum standards with exposure to diverse cultures and global learning opportunities.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Heart,
                title: 'Holistic Development',
                description: 'Focus on academic, physical, emotional, and social development through comprehensive programs and activities.',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Zap,
                title: 'Technology Integration',
                description: 'State-of-the-art technology integration in classrooms for enhanced learning experiences and digital literacy.',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-bounce-in group shadow-lg shadow-black/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Stats Section at the end of Why Choose Us */}
          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
                Our Impact in Numbers
              </h4>
              <p className="text-lg text-gray-300">
                Trusted by thousands of students and parents
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '1,247', label: 'Active Students', icon: Users },
                { value: '78', label: 'Teaching Staff', icon: Award },
                { value: '24', label: 'Classes', icon: Calendar },
                { value: '95%', label: 'Satisfaction Rate', icon: TrendingUp }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                      <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-purple-200">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Watch Our School in Action
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our campus, meet our community, and see the Impact School difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Tour 2024',
                description: 'Take a virtual tour of our state-of-the-art facilities and beautiful campus environment.',
                videoId: 'CcTMu0ZxD9Y',
                embedUrl: 'https://www.youtube.com/embed/CcTMu0ZxD9Y',
                duration: '5:32'
              },
              {
                title: 'Student Life at Impact',
                description: 'Discover the vibrant student life, activities, and experiences that make our school special.',
                videoId: '3LV1g-oXwz4',
                embedUrl: 'https://www.youtube.com/embed/3LV1g-oXwz4?si=eoMT8RQVJlrvvWzV',
                duration: '8:15'
              },
              {
                title: 'Academic Excellence',
                description: 'Learn about our innovative teaching methods and academic achievements.',
                videoId: 'b1F2-_sgIl0',
                embedUrl: 'https://www.youtube.com/embed/b1F2-_sgIl0?si=i6d9WYyvXSYoi9l_',
                duration: '6:48'
              },
              {
                title: 'Sports Function 2024',
                description: 'Experience the energy and excitement of our annual sports day celebrations.',
                videoId: 'W82WNPexRhI',
                embedUrl: 'https://www.youtube.com/embed/W82WNPexRhI?si=fWmi92L-R1VFDpDH',
                duration: '7:45'
              },
              {
                title: 'Annual Function - Pratibha 2024',
                description: 'Witness the spectacular performances and celebrations at our annual cultural event.',
                videoId: 'OksQti1TxNk',
                embedUrl: 'https://www.youtube.com/embed/OksQti1TxNk?si=Mo4UvmYMffjOCOeE',
                duration: '12:30'
              },
              {
                title: 'Parent Testimonials',
                description: 'Hear what our parents have to say about their experience with Impact School.',
                videoId: '4n9TptEaNpY',
                embedUrl: 'https://www.youtube.com/embed/4n9TptEaNpY?si=4KzuQXIRmctPLQsr',
                duration: '7:30'
              }
            ].map((video, index) => (
              <Card 
                key={index} 
                className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-bounce-in group shadow-lg shadow-black/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg aspect-video">
                  <iframe 
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {video.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Faculty Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
              Our Distinguished Faculty
            </h3>
            <p className="text-lg text-gray-300">
              Learn from the best minds in education
            </p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative group">
            {/* Scroll Buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0"
              onClick={() => {
                const container = document.getElementById('faculty-container');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0"
              onClick={() => {
                const container = document.getElementById('faculty-container');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div 
              id="faculty-container"
              className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {/* Faculty Cards */}
              {[
                {
                  name: "Bagban Mohammad Naeem Mohammad Haneef",
                  qualification: "MSC (Math), B.Ed",
                  achievement: "University Topper",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Mohd Nizamuddin",
                  qualification: "MCA",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Muzammil Nisar Inamdar",
                  qualification: "M-Tech (Mechanical)",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Sarvarpasha Satakhed",
                  qualification: "MCA",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Gudusab Sharfoddin Chowdri",
                  qualification: "DTDM (Diploma in Tool & Die making)",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Mustafa Mujawar",
                  qualification: "B.E. E&TC",
                  image: "/placeholder.svg" // Replace with actual image
                },
                {
                  name: "Alim Ahemed Shaikh",
                  qualification: "BSc (Electronics and Computer Maintenance)",
                  image: "/placeholder.svg" // Replace with actual image
                }
              ].map((faculty, index) => (
                <div 
                key={index} 
                  className="flex-none w-72 snap-center"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full animate-pulse" />
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                      />
                  </div>

                    {/* Faculty Info */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                        {faculty.name}
                      </h4>
                      <p className="text-purple-300 text-sm mb-2">
                        {faculty.qualification}
                      </p>
                      {faculty.achievement && (
                        <p className="text-yellow-400 text-xs">
                          {faculty.achievement}
                        </p>
                      )}
                  </div>
                  </div>
                </div>
            ))}
          </div>
          </div>
        </div>

        {/* Add custom styles for hiding scrollbar */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/impact_logo-removebg-preview.png" alt="Rehmani's IMPACT CAMPUS" className="w-14 h-16 rounded-lg" />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Rehmani's IMPACT CAMPUS</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transforming education through technology and innovation. Building the future of learning, one student at a time.
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-2xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/about" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />About Us</Link></li>
                <li><Link to="/courses" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />Courses</Link></li>
                <li><Link to="/teacher-enrollment" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />Teacher Enrollment</Link></li>
                <li><Link to="/admission" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />Student Enrollment</Link></li>
              </ul>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-2xl font-semibold mb-6 text-white">Contact Info</h4>
              <div className="text-gray-300 space-y-3">
                <p className="flex items-start"><Globe className="w-4 h-4 mr-2 text-purple-400 mt-1" />Pavar Vasti, Behind Usman Masjid, Kudalwadi, Pimpri-Chinchwad, Pune - 411062</p>
                <a href="tel:+919272147049" className="flex items-center hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  Call: +91-9272 147 049
                </a>
                <p className="flex items-center"><Globe className="w-4 h-4 mr-2 text-purple-400" />Email: impactschool466@gmail.com</p>
                <div className="mt-4 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-400/30">
                  <h5 className="font-bold text-purple-300 mb-2">Admission Form Available</h5>
                  <p className="text-sm text-gray-300 mb-2">📍 In the School Office</p>
                  <p className="text-sm text-gray-300">🕐 Monday to Saturday: 11:00 AM to 3:00 PM</p>
                  <p className="text-sm text-gray-300 mt-2">📚 Classes: 11th & 12th Science & Commerce</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo Buttons Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold mb-6 text-white">Try Our Demo Platforms</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://skoolmanagement.netlify.app/', '_blank')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Demo Dashboard
                </Button>
                <Button 
                  onClick={() => window.open('https://resulty.netlify.app/', '_blank')}
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Demo Result & Certificate Generator
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400">© 2024 Rehmani's IMPACT CAMPUS. All rights reserved. Made by Razin for education.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Landing;
