
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Star, GraduationCap, Zap, Globe, Award } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Courses = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only trigger animations once on component mount
    setMounted(true);
  }, []);

  const primaryCourses = [
    {
      grade: '1st Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art & Craft', 'Physical Education'],
      description: 'Foundation learning with focus on basic literacy and numeracy skills',
      students: 45,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop'
    },
    {
      grade: '2nd Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art & Craft', 'Physical Education'],
      description: 'Building upon foundation skills with interactive learning methods',
      students: 42,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop'
    },
    {
      grade: '3rd Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Basics', 'Art & Music'],
      description: 'Introduction to technology and advanced reading comprehension',
      students: 48,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop'
    },
    {
      grade: '4th Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Languages'],
      description: 'Enhanced curriculum with problem-solving and critical thinking',
      students: 44,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop'
    },
    {
      grade: '5th Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Languages'],
      description: 'Preparation for middle school with advanced concepts',
      students: 46,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop'
    }
  ];

  const middleCourses = [
    {
      grade: '6th Grade',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Second Language'],
      description: 'Transition to middle school with specialized subject teachers',
      students: 50,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=300&fit=crop'
    },
    {
      grade: '7th Grade',
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography'],
      description: 'Introduction to separate science subjects and advanced mathematics',
      students: 48,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop'
    },
    {
      grade: '8th Grade',
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography'],
      description: 'Comprehensive preparation for high school entrance',
      students: 52,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop'
    },
    {
      grade: '9th Grade',
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography'],
      description: 'Foundation for board examinations with practical sessions',
      students: 55,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1581726690015-c9861c318ced?w=500&h=300&fit=crop'
    },
    {
      grade: '10th Grade',
      subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography'],
      description: 'Board examination preparation with intensive coaching',
      students: 58,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop'
    }
  ];

  const seniorCourses = [
    {
      grade: '11th Grade - Science',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
      description: 'Specialized science stream for engineering and medical aspirants',
      students: 35,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop'
    },
    {
      grade: '11th Grade - Commerce',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
      description: 'Commerce stream for business and finance career paths',
      students: 28,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop'
    },
    {
      grade: '12th Grade - Science',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
      description: 'Final year preparation for competitive exams and higher education',
      students: 32,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop'
    },
    {
      grade: '12th Grade - Commerce',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
      description: 'Board exam preparation and career guidance for commerce students',
      students: 25,
      duration: 'Full Academic Year',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6567d?w=500&h=300&fit=crop'
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

  const CourseCard = ({ course, index }: { course: any, index: number }) => (
    <Card 
      className={`!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group h-full ${mounted ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: mounted ? `${index * 0.15}s` : '0s', animationFillMode: 'forwards' }}
    >
      <CardHeader>
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src={course.image} 
            alt={course.grade}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <Users className="w-3 h-3 mr-1" />
              {course.students} Students
            </Badge>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{course.grade}</CardTitle>
        </div>
        <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-purple-300">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-white">Subjects:</h4>
          <div className="flex flex-wrap gap-2">
            {course.subjects.map((subject: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-600/20">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
        <Button 
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105" 
          onClick={() => navigate('/admission')}
        >
          <Star className="w-4 h-4 mr-2" />
          Enroll Now
        </Button>
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
              <Link to="/courses" className="text-purple-300 font-medium">Courses</Link>
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
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our Courses
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive education programs from 1st to 12th grade designed to nurture academic excellence and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Education */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Primary Education (1st - 5th Grade)
            </h2>
            <p className="text-xl text-gray-300">Building strong foundations for lifelong learning</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Middle & High School Education */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Middle & High School (6th - 10th Grade)
            </h2>
            <p className="text-xl text-gray-300">Comprehensive curriculum preparing students for board examinations</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {middleCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Secondary Education */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
              Senior Secondary (11th - 12th Grade)
            </h2>
            <p className="text-xl text-gray-300">Specialized streams preparing students for higher education and careers</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seniorCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
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
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Impact School and unlock your potential with our comprehensive education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/admission')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Zap className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
