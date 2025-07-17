import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FileText, User, Phone, Mail, MapPin, Calendar, GraduationCap, Star, Menu, X, Zap } from 'lucide-react';

const AdmissionForm = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    previousSchool: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    emergencyContact: '',
    medicalConditions: '',
    agreeToTerms: false
  });

  useEffect(() => {
    // Check if we're coming back from FormSubmit success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setShowSuccess(true);
      
      // Clean the URL
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Hide success message after 4 seconds and redirect to home
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 4000);
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    // FormSubmit will handle the form submission and redirect
    // The success message will be shown when returning from FormSubmit
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        
        @keyframes success-bounce {
          0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
          70% { transform: scale(0.95) rotate(-2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes text-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
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
        
        .success-animation {
          animation: success-bounce 0.8s ease-out forwards;
        }
        
        .confetti-piece {
          animation: confetti-fall 3s linear forwards;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
        
        .text-shine {
          background: linear-gradient(90deg, #fff 25%, #a855f7 50%, #fff 75%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shine 2s linear infinite;
        }
      `}</style>

      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-float top-20 left-10" style={{ animationDelay: '0s', animationDuration: '16s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 animate-float top-80 right-20" style={{ animationDelay: '2s', animationDuration: '20s' }} />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-20 animate-float bottom-32 left-32" style={{ animationDelay: '4s', animationDuration: '14s' }} />
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
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Student Admission Form
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners! Fill out the form below to begin your educational journey with Impact School.
          </p>
        </div>

        {/* Admission Form */}
        <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-400" />
              Admission Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/razinshaikh3133@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Student Admission Application - Impact School" />
              <input type="hidden" name="_next" value={window.location.origin + "/?submitted=true"} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="studentName"
                      name="Student Name"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      placeholder="Enter student's full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-gray-300">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="Date of Birth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="Gender" value={formData.gender} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Grade/Class *</Label>
                    <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st">1st Grade</SelectItem>
                        <SelectItem value="2nd">2nd Grade</SelectItem>
                        <SelectItem value="3rd">3rd Grade</SelectItem>
                        <SelectItem value="4th">4th Grade</SelectItem>
                        <SelectItem value="5th">5th Grade</SelectItem>
                        <SelectItem value="6th">6th Grade</SelectItem>
                        <SelectItem value="7th">7th Grade</SelectItem>
                        <SelectItem value="8th">8th Grade</SelectItem>
                        <SelectItem value="9th">9th Grade</SelectItem>
                        <SelectItem value="10th">10th Grade</SelectItem>
                        <SelectItem value="11th">11th Grade</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="Grade/Class" value={formData.grade} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousSchool" className="text-gray-300">Previous School (if any)</Label>
                  <Input
                    id="previousSchool"
                    name="Previous School"
                    value={formData.previousSchool}
                    onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                    placeholder="Enter previous school name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  Parent/Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-gray-300">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      name="Parent/Guardian Name"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      placeholder="Enter parent/guardian name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail" className="text-gray-300">Email Address *</Label>
                    <Input
                      id="parentEmail"
                      name="Parent Email"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                      placeholder="Enter email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentPhone" className="text-gray-300">Phone Number *</Label>
                    <Input
                      id="parentPhone"
                      name="Parent Phone"
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      placeholder="Enter phone number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact" className="text-gray-300">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      name="Emergency Contact"
                      type="tel"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      placeholder="Enter emergency contact number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                  Address Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-gray-300">Complete Address *</Label>
                  <Textarea
                    id="address"
                    name="Complete Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter complete address including city, state, and postal code"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                    required
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-400" />
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions" className="text-gray-300">Medical Conditions / Allergies</Label>
                  <Textarea
                    id="medicalConditions"
                    name="Medical Conditions/Allergies"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="Please mention any medical conditions, allergies, or special requirements"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[80px]"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                    className="border-white/20"
                  />
                  <Label htmlFor="terms" className="text-gray-300 text-sm">
                    I agree to the terms and conditions and confirm that all information provided is accurate. *
                  </Label>
                  <input type="hidden" name="Terms Agreement" value={formData.agreeToTerms ? 'Yes' : 'No'} />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Submit Admission Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="!bg-transparent !bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-xl text-white">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <a href="tel:09272147049" className="flex items-center hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <span>Call: 092721 47049</span>
              </a>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                <span>admissions@impactschool.edu</span>
              </div>
              <div className="flex items-start col-span-full">
                <MapPin className="w-4 h-4 mr-2 text-purple-400 mt-1" />
                <span>Near Alimuddin associate, Pawar Vasti Rd, behind Usman Masjid, Pawar Vasti, Kudalwadi, Chikhali, Pimpri-Chinchwad, Maharashtra 411062</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center">
          {/* Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Pulse Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 border-2 border-purple-400/30 rounded-full pulse-ring"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
          
          {/* Main Success Message */}
          <div className="text-center relative z-10 success-animation">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '2s' }} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shine">
              Application Submitted!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-lg mx-auto">
              Thank you for choosing Impact School! We've received your admission application and will contact you soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-green-400">
                <Star className="w-5 h-5 mr-2" />
                <span>Application ID: IS{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              Redirecting to home page...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm; 