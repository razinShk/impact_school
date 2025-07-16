
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Globe, ArrowRight, BookOpen, Users, Trophy, Award, GraduationCap, TrendingUp, Zap, Target, Heart, Phone, Calendar, FileText, MessageSquare, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-xl">IS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Impact School
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">About</Link>
              <Link to="/courses" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Courses</Link>
              <Link to="/tutors" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Tutors</Link>
              <Link to="/notices" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Notices</Link>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Login and Signup buttons hidden */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 animate-bounce-in">
                  🚀 Next Generation Learning Platform
                </span>
              </div>
                             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight animate-gradient">
                Transform Education with Smart Technology
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                Unified platform connecting administrators, teachers, students, and parents. Streamline your educational institution with innovative tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/admission')} 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <Zap className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.getElementById('comprehensive-management')?.scrollIntoView({ behavior: 'smooth' })}
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

      {/* Enhanced 4 Ways Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute left-20 top-20 w-32 h-32 opacity-20 parallax-element">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              4 Ways to ensure your satisfaction
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>
          
          {/* Enhanced Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            {[
              { icon: Users, color: 'from-purple-500 to-pink-500', delay: '0.1s' },
              { icon: Calendar, color: 'from-blue-500 to-cyan-500', delay: '0.2s' },
              { icon: Shield, color: 'from-green-500 to-emerald-500', delay: '0.3s' },
              { icon: FileText, color: 'from-orange-500 to-red-500', delay: '0.4s' }
            ].map(({ icon: Icon, color, delay }, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: delay }}>
                <div className={`w-24 h-24 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 animate-pulse-glow`}>
                  <Icon className="w-12 h-12 text-white" />
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="comprehensive-management" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Comprehensive School Management
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your educational institution efficiently with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
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
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold text-xl">IS</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Impact School</span>
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
                <li><Link to="/tutors" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />Tutors</Link></li>
                <li><Link to="/notices" className="hover:text-purple-300 transition-colors duration-300 flex items-center group"><Star className="w-4 h-4 mr-2 group-hover:text-yellow-400" />Notices</Link></li>
              </ul>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-2xl font-semibold mb-6 text-white">Contact Info</h4>
              <div className="text-gray-300 space-y-3">
                <p className="flex items-start"><Globe className="w-4 h-4 mr-2 text-purple-400 mt-1" />Near Alimuddin associate, Pawar Vasti Rd, behind Usman Masjid, Pawar Vasti, Kudalwadi, Chikhali, Pimpri-Chinchwad, Maharashtra 411062</p>
                <a href="tel:09272147049" className="flex items-center hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  Call: 092721 47049
                </a>
                <p className="flex items-center"><Globe className="w-4 h-4 mr-2 text-purple-400" />Email: info@impactschool.edu</p>
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
            <p className="text-gray-400">© 2024 Impact School. All rights reserved. Made with ❤️ for education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
