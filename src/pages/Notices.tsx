
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, AlertCircle, Info, Star, Users, Globe, Zap, TrendingUp, Bell } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Notices = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const notices = [
    {
      id: 1,
      title: 'Annual Sports Day 2024',
      content: 'We are excited to announce our Annual Sports Day scheduled for March 15th, 2024. All students from grades 1-12 are encouraged to participate. Registration forms are available at the school office.',
      date: '2024-02-20',
      time: '10:00 AM',
      category: 'Event',
      priority: 'high',
      author: 'Prof. Naim Bagban',
      targetAudience: ['Students', 'Parents', 'Teachers'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      content: 'Monthly Parent-Teacher Meeting is scheduled for February 28th, 2024. Parents are requested to attend and discuss their child\'s academic progress with respective subject teachers.',
      date: '2024-02-15',
      time: '2:00 PM',
      category: 'Meeting',
      priority: 'high',
      author: 'Academic Department',
      targetAudience: ['Parents', 'Teachers'],
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Science Exhibition Registration Open',
      content: 'Registration for the Inter-School Science Exhibition is now open for grades 6-12. Students can submit their project proposals by March 1st, 2024. Exciting prizes await the winners!',
      date: '2024-02-18',
      time: '9:00 AM',
      category: 'Academic',
      priority: 'medium',
      author: 'Science Department',
      targetAudience: ['Students', 'Parents'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Library Renovation Notice',
      content: 'Our school library will be closed for renovation from March 5th to March 12th, 2024. During this period, students can access digital resources through our online portal.',
      date: '2024-02-17',
      time: '11:30 AM',
      category: 'Facility',
      priority: 'medium',
      author: 'Administration',
      targetAudience: ['Students', 'Teachers', 'Parents'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'New After-School Programs',
      content: 'We are introducing new after-school programs including Robotics Club, Creative Writing, and Advanced Mathematics. Registration starts from February 25th, 2024.',
      date: '2024-02-16',
      time: '1:15 PM',
      category: 'Program',
      priority: 'low',
      author: 'Extra-Curricular Department',
      targetAudience: ['Students', 'Parents'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Cultural Fest - Talent Show',
      content: 'Our annual cultural fest "Pratibha" is scheduled for April 5th, 2024. Students can register for various competitions including dance, music, drama, and art. Registration deadline: March 25th.',
      date: '2024-02-10',
      time: '3:30 PM',
      category: 'Event',
      priority: 'medium',
      author: 'Cultural Committee',
      targetAudience: ['Students', 'Parents'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=200&fit=crop'
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-400/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-400/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <Info className="w-4 h-4" />;
      case 'low': return <Star className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Event': 'bg-purple-500/20 text-purple-300 border-purple-400/50',
      'Meeting': 'bg-blue-500/20 text-blue-300 border-blue-400/50',
      'Academic': 'bg-indigo-500/20 text-indigo-300 border-indigo-400/50',
      'Facility': 'bg-orange-500/20 text-orange-300 border-orange-400/50',
      'Program': 'bg-teal-500/20 text-teal-300 border-teal-400/50',
      'Policy': 'bg-gray-500/20 text-gray-300 border-gray-400/50',
      'Examination': 'bg-red-500/20 text-red-300 border-red-400/50'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-400/50';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
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
              <Link to="/tutors" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">Tutors</Link>
              <Link to="/notices" className="text-purple-300 font-medium">Notices</Link>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Login and Signup buttons hidden */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              School Notices & Announcements
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, events, and important announcements from Impact School.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-purple-600/20 border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105">All Notices</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-purple-600/20 border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105">Events</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-600/20 border-blue-400/50 text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105">Meetings</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-indigo-600/20 border-indigo-400/50 text-indigo-300 hover:text-indigo-200 transition-all duration-300 hover:scale-105">Academic</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-red-600/20 border-red-400/50 text-red-300 hover:text-red-200 transition-all duration-300 hover:scale-105">Examinations</Badge>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Notices */}
            <div className="lg:col-span-2 space-y-6">
              {notices.map((notice, index) => (
                <Card key={notice.id} className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] animate-bounce-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    {notice.image && (
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img 
                          src={notice.image} 
                          alt={notice.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className={getPriorityColor(notice.priority)}>
                            {getPriorityIcon(notice.priority)}
                            <span className="ml-1 capitalize">{notice.priority}</span>
                          </Badge>
                          <Badge className={getCategoryColor(notice.category)}>
                            {notice.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors mb-3">{notice.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-purple-300">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(notice.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{notice.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors mb-4 leading-relaxed">{notice.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <div className="flex flex-wrap gap-1">
                          {notice.targetAudience.map((audience, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-purple-600/20 text-purple-300 border-purple-400/50">
                              {audience}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">By {notice.author}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 animate-bounce-in">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                    Notice Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Notices</span>
                    <span className="font-medium text-white">{notices.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">High Priority</span>
                    <span className="font-medium text-red-400">
                      {notices.filter(n => n.priority === 'high').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">This Month</span>
                    <span className="font-medium text-white">{notices.length}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Categories */}
              <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-purple-400" />
                    Notice Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Event', 'Academic', 'Meeting', 'Program'].map((category, index) => (
                      <div key={category} className="flex justify-between items-center">
                        <Badge className={getCategoryColor(category)}>{category}</Badge>
                        <span className="text-sm text-gray-400">
                          {notices.filter(n => n.category === category).length}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Important Links */}
              <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-400" />
                    Important Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start !bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" onClick={() => navigate('/login')}>
                    Student Portal
                  </Button>
                  <Button variant="outline" className="w-full justify-start !bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" onClick={() => navigate('/login')}>
                    Parent Portal
                  </Button>
                  <Button variant="outline" className="w-full justify-start !bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                    Academic Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start !bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                    Contact School
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive important notices and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Zap className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Bell className="w-5 h-5 mr-2" />
                Get Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notices;
