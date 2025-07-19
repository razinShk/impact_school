import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu, X, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface GallerySection {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayText: string;
  videoUrl?: string;
}

const galleryData: GallerySection[] = [
  {
    id: 1,
    title: "Annual Function Part 1",
    description: "Celebrating Excellence & Achievement",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Celebrate",
    videoUrl: "https://www.youtube.com/watch?v=W82WNPexRhI"
  },
  {
    id: 2,
    title: "Annual Function Part 2",
    description: "Showcasing Talent & Creativity",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Perform",
    videoUrl: "https://www.youtube.com/watch?v=b1F2-_sgIl0"
  },
  {
    id: 3,
    title: "Library",
    description: "Knowledge Hub",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    overlayText: "Learn"
  },
  {
    id: 4,
    title: "Sports Ground",
    description: "Physical Excellence",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Achieve"
  },
  {
    id: 5,
    title: "Computer Lab",
    description: "Digital Learning",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Innovate"
  },
  {
    id: 6,
    title: "Art Studio",
    description: "Creative Expression",
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Create"
  },
  {
    id: 7,
    title: "Auditorium",
    description: "Performance & Events",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Perform"
  },
  {
    id: 8,
    title: "Cafeteria",
    description: "Healthy Nutrition",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayText: "Nourish"
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      setIsScrolling(true);

      const container = sectionsRef.current;
      if (container) {
        const scrollPosition = container.scrollTop;
        const containerHeight = container.clientHeight;
        let sectionIndex = Math.round(scrollPosition / containerHeight);
        
        // Handle infinite scroll
        if (sectionIndex < 0) {
          sectionIndex = galleryData.length - 1;
        } else if (sectionIndex >= galleryData.length) {
          sectionIndex = 0;
        }
        
        if (sectionIndex !== currentSection && sectionIndex >= 0 && sectionIndex < galleryData.length) {
          setCurrentSection(sectionIndex);
        }
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const container = sectionsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [currentSection, galleryData.length]);

  const scrollToSection = (index: number) => {
    const container = sectionsRef.current;
    if (container) {
      const targetScroll = index * container.clientHeight;
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    let nextSection = currentSection + direction;
    
    // Infinite scroll logic
    if (nextSection < 0) {
      nextSection = galleryData.length - 1;
    } else if (nextSection >= galleryData.length) {
      nextSection = 0;
    }
    
    scrollToSection(nextSection);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openVideo = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
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
        <div className="md:hidden fixed inset-0 z-[60] bg-black/90 backdrop-blur-md mobile-menu-container">
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
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Gallery Container */}
      <div 
        className="gallery-container pt-20"
        onWheel={handleWheel}
        ref={sectionsRef}
      >
        {/* Gallery Sections */}
        {galleryData.map((section, index) => (
          <div
            key={section.id}
            className="w-full h-screen relative gallery-section"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 gallery-image"
              style={{
                backgroundImage: `url(${section.image})`,
                filter: 'brightness(0.7)',
                opacity: currentSection === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="text-center text-white px-8 fade-in"
                style={{
                  opacity: currentSection === index ? 1 : 0,
                  transform: currentSection === index ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
                }}
              >
                {/* Diagonal Line with Text */}
                <div className="relative mb-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-white/50 rotate-45" />
                  <span className="relative bg-black/20 px-4 py-2 text-sm font-light tracking-widest uppercase text-reveal">
                    {section.overlayText}
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider text-reveal">
                  {section.title}
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 text-reveal mb-6">
                  {section.description}
                </p>
                
                {/* Video Button */}
                {section.videoUrl && (
                  <Button
                    onClick={() => openVideo(section.videoUrl!)}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                    size="lg"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Watch Video
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rolling Thumbnail Panel - Desktop */}
      <div className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4 gallery-panel p-4">
          {galleryData.map((section, index) => {
            // Calculate the position relative to current section for circular display
            let relativeIndex = index - currentSection;
            if (relativeIndex < -galleryData.length / 2) {
              relativeIndex += galleryData.length;
            } else if (relativeIndex > galleryData.length / 2) {
              relativeIndex -= galleryData.length;
            }
            
            // Show 5 images: current + 2 above + 2 below
            const shouldShow = Math.abs(relativeIndex) <= 2;
            
            if (!shouldShow) return null;
            
            return (
              <div
                key={section.id}
                className={`relative cursor-pointer transition-all duration-800 ease-out group ${
                  currentSection === index 
                    ? 'scale-125 opacity-100 z-10' 
                    : Math.abs(relativeIndex) === 1
                    ? 'scale-100 opacity-80 z-5'
                    : 'scale-90 opacity-50 z-0'
                }`}
                onClick={() => scrollToSection(index)}
                style={{
                  transform: `translateY(${relativeIndex * 5}px) scale(${
                    currentSection === index ? 1.25 : Math.abs(relativeIndex) === 1 ? 1 : 0.9
                  })`,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Thumbnail Image */}
                <div 
                  className="w-20 h-20 rounded-xl overflow-hidden border-2 gallery-thumbnail"
                  style={{
                    borderColor: currentSection === index ? 'white' : 'transparent',
                    borderWidth: currentSection === index ? '3px' : '2px',
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Active Indicator */}
                {currentSection === index && (
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-white rounded-full animate-pulse" />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Rolling Mobile Thumbnail Bar */}
      <div className="md:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          {galleryData.map((section, index) => {
            // Calculate the position relative to current section for circular display
            let relativeIndex = index - currentSection;
            if (relativeIndex < -galleryData.length / 2) {
              relativeIndex += galleryData.length;
            } else if (relativeIndex > galleryData.length / 2) {
              relativeIndex -= galleryData.length;
            }
            
            // Show current and adjacent images on mobile
            const shouldShow = Math.abs(relativeIndex) <= 1;
            
            if (!shouldShow) return null;
            
            return (
              <div
                key={section.id}
                className={`relative cursor-pointer transition-all duration-800 ease-out ${
                  currentSection === index 
                    ? 'scale-125 opacity-100 z-10' 
                    : 'scale-100 opacity-80 z-5'
                }`}
                onClick={() => scrollToSection(index)}
                style={{
                  transform: `scale(${currentSection === index ? 1.25 : 1})`,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full overflow-hidden border-2 gallery-thumbnail"
                  style={{
                    borderColor: currentSection === index ? 'white' : 'transparent',
                    borderWidth: currentSection === index ? '3px' : '2px',
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {currentSection === index && (
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block fixed left-8 top-1/2 transform -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 rounded-full w-12 h-12"
          onClick={() => {
            const prevSection = currentSection === 0 ? galleryData.length - 1 : currentSection - 1;
            scrollToSection(prevSection);
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      
      <div className="hidden md:block fixed right-32 top-1/2 transform -translate-y-1/2 z-30">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 rounded-full w-12 h-12"
          onClick={() => {
            const nextSection = currentSection === galleryData.length - 1 ? 0 : currentSection + 1;
            scrollToSection(nextSection);
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-sm">
              LAUNCHING SUMMER 2025
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-white font-bold text-xl">
                Impact Campus
              </div>
              
              <div className="flex gap-3">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  SIGN IN
                </Button>
                <Button 
                  onClick={() => navigate('/admission')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium"
                >
                  ENROLL NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-8 bottom-32 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <div className="text-white text-xs font-light">SCROLL</div>
          <div className="w-px h-16 bg-white/30 relative">
            <div 
              className="absolute bottom-0 left-0 w-full bg-white transition-all duration-300"
              style={{
                height: `${((currentSection + 1) / galleryData.length) * 100}%`
              }}
            />
          </div>
          <div className="text-white text-xs font-light">{currentSection + 1}/{galleryData.length}</div>
          <div className="text-white/60 text-xs font-light infinite-indicator">∞</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 