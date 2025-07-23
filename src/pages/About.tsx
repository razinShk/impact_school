
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Award, Target, Heart, BookOpen, Star, Globe, TrendingUp, Menu, X, Zap } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const About = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for academic excellence and personal growth in every student.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We provide a nurturing environment where every child feels valued and supported.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace modern teaching methods and technology to enhance learning.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong partnerships between students, parents, and educators.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Prof. Naim Bagban',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Leading Impact School with 20+ years of educational excellence.',
      specialties: ['Educational Leadership', 'Curriculum Development', 'Student Welfare']
    },
    {
      name: 'Dr. Ahmad Hassan',
      role: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Dedicated to student development and academic achievement.',
      specialties: ['Academic Administration', 'Teacher Training', 'Quality Assurance']
    },
    {
      name: 'Ms. Fatima Malik',
      role: 'Academic Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Ensuring quality education and curriculum excellence.',
      specialties: ['Curriculum Design', 'Assessment', 'Educational Technology']
    }
  ];

  const FloatingShape = ({ size, color, delay, duration, position }: { size: string, color: string, delay: string, duration: string, position: string }) => (
    <div 
      className={`absolute ${size} ${color} rounded-full opacity-20 animate-float ${position}`}
      style={{
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
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
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
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
        
        .parallax-element {
          transform: translateY(${scrollY * 0.1}px);
        }
      `}</style>

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape size="w-80 h-80" color="bg-gradient-to-r from-purple-600 to-pink-600" delay="0s" duration="16s" position="top-20 left-10" />
        <FloatingShape size="w-64 h-64" color="bg-gradient-to-r from-blue-600 to-cyan-600" delay="2s" duration="20s" position="top-80 right-20" />
        <FloatingShape size="w-72 h-72" color="bg-gradient-to-r from-green-600 to-emerald-600" delay="4s" duration="14s" position="bottom-32 left-32" />
        <FloatingShape size="w-56 h-56" color="bg-gradient-to-r from-orange-600 to-red-600" delay="1s" duration="18s" position="bottom-80 right-10" />
        <FloatingShape size="w-48 h-48" color="bg-gradient-to-r from-indigo-600 to-purple-600" delay="3s" duration="22s" position="top-1/2 left-5" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/impact_logo-removebg-preview.png" alt="Rehmani's IMPACT CAMPUS" className="w-14 h-16" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Rehmani's IMPACT CAMPUS
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Home</Link>
              <Link to="/about" className="text-purple-300 font-medium">About</Link>
              <Link to="/courses" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Courses</Link>
              <Link to="/gallery" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Gallery</Link>
              <Link to="/career" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Career</Link>
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
        <div className="md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md" style={{ animation: 'mobile-menu-slide 0.3s ease-out forwards' }}>
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
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.1s' }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className="text-2xl text-purple-300 font-medium"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.15s' }}
              >
                About
              </Link>
              <Link 
                to="/courses" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.2s' }}
              >
                Courses
              </Link>
              <Link 
                to="/gallery" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.22s' }}
              >
                Gallery
              </Link>
              <Link 
                to="/career" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.25s' }}
              >
                Career
              </Link>
              <div className="pt-6" style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.3s' }}>
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
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              About Impact School
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering minds, shaping futures, and building tomorrow's leaders through quality education and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-bounce-in group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-white group-hover:text-purple-300 transition-colors">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center group-hover:text-gray-200 transition-colors leading-relaxed">
                  To provide exceptional education that nurtures intellectual curiosity, builds character, 
                  and prepares students to become responsible global citizens who make a positive impact in their communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-bounce-in group" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-white group-hover:text-blue-300 transition-colors">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center group-hover:text-gray-200 transition-colors leading-relaxed">
                  To be a leading educational institution that inspires excellence, fosters innovation, 
                  and creates a supportive learning environment where every student can reach their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-bounce-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center group-hover:text-gray-200 transition-colors text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300">Dedicated professionals committed to educational excellence</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-bounce-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-full" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full inline-block mr-1">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Years of Excellence', icon: Award },
              { value: '1,247', label: 'Happy Students', icon: Users },
              { value: '78', label: 'Expert Teachers', icon: GraduationCap },
              { value: '95%', label: 'Success Rate', icon: TrendingUp }
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
      </section>

      {/* CTA Section */}
      <section className="py-24 relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover the Impact School difference and unlock your child's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/admission')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Star className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
