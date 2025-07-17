
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Star, GraduationCap, BookOpen, Globe, Zap, Award, TrendingUp, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tutors = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only trigger animations once on component mount
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const tutors = [
    {
      name: 'Dr. Ayesha Rahman',
      subject: 'Mathematics',
      grades: ['9th', '10th', '11th', '12th'],
      experience: '12 years',
      qualification: 'Ph.D. in Mathematics, IIT Delhi',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c615e2?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      email: 'ayesha.rahman@impactschool.edu',
      specialization: 'Advanced Calculus, Algebra, Geometry',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Mr. Omar Sheikh',
      subject: 'Physics',
      grades: ['9th', '10th', '11th', '12th'],
      experience: '15 years',
      qualification: 'M.Sc. Physics, Delhi University',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      rating: 4.8,
      email: 'omar.sheikh@impactschool.edu',
      specialization: 'Mechanics, Thermodynamics, Optics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ms. Zainab Khan',
      subject: 'Chemistry',
      grades: ['9th', '10th', '11th', '12th'],
      experience: '10 years',
      qualification: 'M.Sc. Chemistry, Mumbai University',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      rating: 4.7,
      email: 'zainab.khan@impactschool.edu',
      specialization: 'Organic Chemistry, Inorganic Chemistry',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Dr. Ibrahim Ali',
      subject: 'English Literature',
      grades: ['6th', '7th', '8th', '9th', '10th'],
      experience: '18 years',
      qualification: 'Ph.D. English Literature, Oxford University',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      email: 'ibrahim.ali@impactschool.edu',
      specialization: 'Shakespeare, Modern Literature, Creative Writing',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Ms. Mariam Qureshi',
      subject: 'Biology',
      grades: ['9th', '10th', '11th', '12th'],
      experience: '14 years',
      qualification: 'M.Sc. Botany, Pune University',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&fit=crop&crop=face',
      rating: 4.8,
      email: 'mariam.qureshi@impactschool.edu',
      specialization: 'Plant Biology, Human Anatomy, Genetics',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Mr. Hassan Ahmed',
      subject: 'Computer Science',
      grades: ['6th', '7th', '8th', '9th', '10th', '11th', '12th'],
      experience: '8 years',
      qualification: 'B.Tech Computer Science, IIT Bombay',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
      rating: 4.9,
      email: 'hassan.ahmed@impactschool.edu',
      specialization: 'Programming, Web Development, AI/ML',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Ms. Khadija Rizvi',
      subject: 'History',
      grades: ['6th', '7th', '8th', '9th', '10th'],
      experience: '11 years',
      qualification: 'M.A. History, Jawaharlal Nehru University',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
      rating: 4.6,
      email: 'khadija.rizvi@impactschool.edu',
      specialization: 'Ancient History, Medieval History, World Wars',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Mr. Tariq Mahmood',
      subject: 'Economics',
      grades: ['11th', '12th'],
      experience: '13 years',
      qualification: 'M.A. Economics, Delhi School of Economics',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      rating: 4.7,
      email: 'tariq.mahmood@impactschool.edu',
      specialization: 'Microeconomics, Macroeconomics, Statistics',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'Ms. Nadia Siddiqui',
      subject: 'Geography',
      grades: ['6th', '7th', '8th', '9th', '10th'],
      experience: '9 years',
      qualification: 'M.A. Geography, Bangalore University',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
      rating: 4.5,
      email: 'nadia.siddiqui@impactschool.edu',
      specialization: 'Physical Geography, Human Geography, GIS',
      color: 'from-emerald-500 to-green-500'
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

  const TutorCard = ({ tutor, index }: { tutor: any, index: number }) => (
    <Card 
      className={`!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group h-full ${mounted ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: mounted ? `${index * 0.15}s` : '0s', animationFillMode: 'forwards' }}
    >
      <CardHeader className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img 
            src={tutor.image} 
            alt={tutor.name}
            className="w-32 h-32 rounded-full object-cover transition-transform duration-700 group-hover:scale-110 border-4 border-white/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-full" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className={`w-8 h-8 bg-gradient-to-r ${tutor.color} rounded-full flex items-center justify-center border-2 border-white/20`}>
              <Star className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{tutor.name}</CardTitle>
        <CardDescription className="text-purple-400 font-medium text-lg">{tutor.subject}</CardDescription>
        <div className="flex items-center justify-center space-x-1 mt-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-400">{tutor.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-300 flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
            {tutor.qualification}
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
            {tutor.experience} Experience
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-2 text-white">Teaching Grades:</h4>
          <div className="flex flex-wrap gap-1">
            {tutor.grades.map((grade: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-purple-600/20 text-purple-300 border-purple-400/50">
                {grade}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-white">Specialization:</h4>
          <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{tutor.specialization}</p>
        </div>

        <div className="pt-4 border-t border-white/20 space-y-2">
          <button className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors w-full justify-center py-2 rounded-lg hover:bg-purple-600/20">
            <Mail className="w-4 h-4" />
            <span>Contact Teacher</span>
          </button>
        </div>
      </CardContent>
    </Card>
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
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(50px); }
          50% { opacity: 0.8; transform: scale(1.05) translateY(-10px); }
          70% { opacity: 0.9; transform: scale(0.9) translateY(5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          animation-iteration-count: 1;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
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
              <Link to="/tutors" className="text-purple-300 font-medium">Tutors</Link>
              <Link to="/notices" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Notices</Link>
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
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
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
                to="/tutors" 
                onClick={closeMobileMenu}
                className="text-2xl text-purple-300 font-medium"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.25s' }}
              >
                Tutors
              </Link>
              <Link 
                to="/notices" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.3s' }}
              >
                Notices
              </Link>
              <div className="pt-6" style={{ animation: 'mobile-menu-item 0.4s ease-out forwards', animationDelay: '0.35s' }}>
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
              Our Expert Tutors
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet our dedicated team of qualified educators who are passionate about nurturing young minds and fostering academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '78', label: 'Expert Teachers', icon: GraduationCap },
              { value: '15+', label: 'Average Experience', icon: Award },
              { value: '12', label: 'Subject Areas', icon: BookOpen },
              { value: '4.8', label: 'Average Rating', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`${mounted ? 'opacity-100 animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: mounted ? `${index * 0.2}s` : '0s', animationFillMode: 'forwards' }}>
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-purple-200">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Our Teaching Faculty
            </h2>
            <p className="text-xl text-gray-300">Highly qualified and experienced educators committed to student success</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <TutorCard key={index} tutor={tutor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Ready to Learn from the Best?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Impact School and learn from our expert tutors who are dedicated to your academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/admission')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Zap className="w-5 h-5 mr-2" />
                Enroll Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
