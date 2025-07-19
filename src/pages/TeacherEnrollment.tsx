import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Star, GraduationCap, BookOpen, Globe, Zap, Award, TrendingUp, Menu, X, User, FileText, Calendar, MapPin, Briefcase, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TeacherEnrollment = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    qualification: '',
    specialization: '',
    experience: '',
    currentSchool: '',
    expectedSalary: '',
    availableFrom: '',
    subjects: [] as string[],
    grades: [] as string[],
    coverLetter: '',
    resume: null as File | null
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (field: string, value: string | string[] | File) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = 'New Teacher Application - Impact School';
    const emailBody = `
New Teacher Application Submitted

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Date of Birth: ${formData.dateOfBirth}
- Address: ${formData.address}
- City: ${formData.city}
- State: ${formData.state}
- Pincode: ${formData.pincode}

Professional Information:
- Qualification: ${formData.qualification}
- Specialization: ${formData.specialization}
- Experience: ${formData.experience}
- Current/Previous School: ${formData.currentSchool}
- Expected Salary: ${formData.expectedSalary}
- Available From: ${formData.availableFrom}

Teaching Preferences:
- Subjects: ${formData.subjects.join(', ')}
- Grades: ${formData.grades.join(', ')}

Cover Letter:
${formData.coverLetter}

Resume: ${formData.resume ? formData.resume.name : 'Not uploaded'}

---
This application was submitted through the Impact School website.
    `;

    // Create mailto link
    const mailtoLink = `mailto:impactschool466@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    alert('Thank you for your application! An email has been opened with your application details. Please send the email to complete your application.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      qualification: '',
      specialization: '',
      experience: '',
      currentSchool: '',
      expectedSalary: '',
      availableFrom: '',
      subjects: [],
      grades: [],
      coverLetter: '',
      resume: null
    });
  };

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 
    'English Grammar', 'History', 'Geography', 'Economics', 'Computer Science',
    'Art & Design', 'Music', 'Physical Education', 'Social Studies', 'Environmental Science'
  ];

  const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

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
              <img src="/logo.svg" alt="Rehmani's IMPACT CAMPUS" className="w-16 h-16" />
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
              <Link to="/teacher-enrollment" className="text-purple-300 font-medium">Teacher Enrollment</Link>
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
              <Button 
                onClick={() => navigate('/admission')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-4 h-4 mr-2" />
                Student Enrollment
              </Button>
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
                to="/teacher-enrollment" 
                onClick={closeMobileMenu}
                className="text-2xl text-purple-300 font-medium mobile-menu-item"
                style={{ animationDelay: '0.25s' }}
              >
                Teacher Enrollment
              </Link>
              <div className="pt-6 mobile-menu-item" style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={() => {
                    navigate('/admission');
                    closeMobileMenu();
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Student Enrollment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 animate-bounce-in">
                🎓 Join Our Teaching Team
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
              Teacher Enrollment Form
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our prestigious institution and help shape the future of education. We're looking for passionate educators who are committed to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-4">Teacher Application Form</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Please fill out all required fields to submit your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center">
                    <User className="w-6 h-6 mr-2 text-purple-400" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-white">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-purple-400" />
                    Address Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-white">Full Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Enter your complete address"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city" className="text-white">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="Enter city"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-white">State *</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="Enter state"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode" className="text-white">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          placeholder="Enter pincode"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-purple-400" />
                    Professional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="qualification" className="text-white">Highest Qualification *</Label>
                      <Input
                        id="qualification"
                        value={formData.qualification}
                        onChange={(e) => handleInputChange('qualification', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="e.g., M.A., M.Sc., Ph.D."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialization" className="text-white">Specialization *</Label>
                      <Input
                        id="specialization"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange('specialization', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="e.g., Mathematics, Physics"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-white">Years of Experience *</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="e.g., 5 years"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentSchool" className="text-white">Current/Previous School</Label>
                      <Input
                        id="currentSchool"
                        value={formData.currentSchool}
                        onChange={(e) => handleInputChange('currentSchool', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Name of current/previous school"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expectedSalary" className="text-white">Expected Salary (per month)</Label>
                      <Input
                        id="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Expected salary in INR"
                      />
                    </div>
                    <div>
                      <Label htmlFor="availableFrom" className="text-white">Available From *</Label>
                      <Input
                        id="availableFrom"
                        type="date"
                        value={formData.availableFrom}
                        onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Teaching Preferences */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
                    Teaching Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Subjects You Can Teach *</Label>
                      <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                        {subjects.map((subject) => (
                          <label key={subject} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.subjects.includes(subject)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  handleInputChange('subjects', [...formData.subjects, subject]);
                                } else {
                                  handleInputChange('subjects', formData.subjects.filter(s => s !== subject));
                                }
                              }}
                              className="rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-gray-300">{subject}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-white">Grades You Can Teach *</Label>
                      <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                        {grades.map((grade) => (
                          <label key={grade} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.grades.includes(grade)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  handleInputChange('grades', [...formData.grades, grade]);
                                } else {
                                  handleInputChange('grades', formData.grades.filter(g => g !== grade));
                                }
                              }}
                              className="rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-gray-300">{grade}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-4">
                  <Label htmlFor="coverLetter" className="text-white">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    placeholder="Tell us why you want to join our school and what makes you a great teacher..."
                    rows={6}
                    required
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-4">
                  <Label htmlFor="resume" className="text-white">Resume/CV (PDF) *</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleInputChange('resume', e.target.files?.[0] || null)}
                    className="bg-white/10 border-white/20 text-white file:bg-purple-600 file:border-0 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer"
                    required
                  />
                  <p className="text-sm text-gray-400">Please upload your resume in PDF, DOC, or DOCX format (max 5MB)</p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.svg" alt="Rehmani's IMPACT CAMPUS" className="w-16 h-16" />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Rehmani's IMPACT CAMPUS</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Join our team of dedicated educators and help shape the future of learning. We value passion, innovation, and commitment to excellence.
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
                <p className="flex items-start"><Globe className="w-4 h-4 mr-2 text-purple-400 mt-1" />Near Alimuddin associate, Pawar Vasti Rd, behind Usman Masjid, Pawar Vasti, Kudalwadi, Chikhali, Pimpri-Chinchwad, Maharashtra 411062</p>
                <a href="tel:09272147049" className="flex items-center hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  Call: 092721 47049
                </a>
                <p className="flex items-center"><Globe className="w-4 h-4 mr-2 text-purple-400" />Email: impactschool466@gmail.com</p>
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

export default TeacherEnrollment; 