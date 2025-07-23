import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu, X, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface GallerySection {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayText: string;
  videoUrl?: string;
  type: 'portrait' | 'landscape1' | 'landscape2';
}

const galleryData: GallerySection[] = [
  // Portrait Section - All images from Portrait impact folder
  {
    id: 1,
    title: "Portrait View 1",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0181.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 2,
    title: "Portrait View 2",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0177.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 3,
    title: "Portrait View 3",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0176.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 4,
    title: "Portrait View 4",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0170.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 5,
    title: "Portrait View 5",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0168.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 6,
    title: "Portrait View 6",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0165.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 7,
    title: "Portrait View 7",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0164.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 8,
    title: "Portrait View 8",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0163.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 9,
    title: "Portrait View 9",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0161.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 10,
    title: "Portrait View 10",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0150.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 11,
    title: "Portrait View 11",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0139.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 12,
    title: "Portrait View 12",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0131.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 13,
    title: "Portrait View 13",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0103.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 14,
    title: "Portrait View 14",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0102.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 15,
    title: "Portrait View 15",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0089.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 16,
    title: "Portrait View 16",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0082.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 17,
    title: "Portrait View 17",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0054.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 18,
    title: "Portrait View 18",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0040.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 19,
    title: "Portrait View 19",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0025.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 20,
    title: "Portrait View 20",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0023.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 21,
    title: "Portrait View 21",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0021.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 22,
    title: "Portrait View 22",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0019.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 23,
    title: "Portrait View 23",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0018.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 24,
    title: "Portrait View 24",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0008.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },
  {
    id: 25,
    title: "Portrait View 25",
    description: "Campus Life and Activities",
    image: "/gallery-images/portrait/IMG-20250719-WA0000.jpg",
    overlayText: "Portrait",
    type: 'portrait'
  },

  // Landscape Section - All images from Landscape impact folder
  {
    id: 26,
    title: "Landscape View 1",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0171.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 27,
    title: "Landscape View 2",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0169.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 28,
    title: "Landscape View 3",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0052.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 29,
    title: "Landscape View 4",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0133.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 30,
    title: "Landscape View 5",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0088.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 31,
    title: "Landscape View 6",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0085.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 32,
    title: "Landscape View 7",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0084.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 33,
    title: "Landscape View 8",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0075.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 34,
    title: "Landscape View 9",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0059.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 35,
    title: "Landscape View 10",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0058.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 36,
    title: "Landscape View 11",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0057.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 37,
    title: "Landscape View 12",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0056.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 38,
    title: "Landscape View 13",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/DSC_1468.JPG",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 39,
    title: "Landscape View 14",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/DSC_1474.JPG",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 40,
    title: "Landscape View 15",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/MBK_4430.JPG",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 41,
    title: "Landscape View 16",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0017.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 42,
    title: "Landscape View 17",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0011.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 43,
    title: "Landscape View 18",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0010.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 44,
    title: "Landscape View 19",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0009.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 45,
    title: "Landscape View 20",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0007.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 46,
    title: "Landscape View 21",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0006.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },
  {
    id: 47,
    title: "Landscape View 22",
    description: "Campus Facilities and Infrastructure",
    image: "/gallery-images/landscape/IMG-20250719-WA0003.jpg",
    overlayText: "Landscape",
    type: 'landscape1'
  },

  // Houses Section - All images from Houses impact folder
  {
    id: 48,
    title: "Houses View 1",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0053.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 49,
    title: "Houses View 2",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0049.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 50,
    title: "Houses View 3",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0050.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 51,
    title: "Houses View 4",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0047.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 52,
    title: "Houses View 5",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0048.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 53,
    title: "Houses View 6",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0045.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 54,
    title: "Houses View 7",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0046.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 55,
    title: "Houses View 8",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0043.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  },
  {
    id: 56,
    title: "Houses View 9",
    description: "School Houses and Activities",
    image: "/gallery-images/houses/IMG-20250719-WA0044.jpg",
    overlayText: "Houses",
    type: 'landscape2'
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'portrait' | 'landscape1' | 'landscape2'>('portrait');
  const sectionsRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const filteredGalleryData = galleryData.filter(item => item.type === selectedType);

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
        const sectionIndex = Math.round(scrollPosition / containerHeight);
        
        if (sectionIndex >= 0 && sectionIndex < filteredGalleryData.length) {
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
  }, [currentSection, filteredGalleryData.length]);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < filteredGalleryData.length) {
    const container = sectionsRef.current;
    if (container) {
      const targetScroll = index * container.clientHeight;
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    
    if (nextSection >= 0 && nextSection < filteredGalleryData.length) {
      scrollToSection(nextSection);
    }
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
              <img src="/impact_logo-removebg-preview.png" alt="Rehmani's IMPACT CAMPUS" className="w-14 h-16" />
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
                to="/career" 
                onClick={closeMobileMenu}
                className="text-2xl text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform mobile-menu-item"
                style={{ animationDelay: '0.3s' }}
              >
                Career
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

      {/* Gallery Type Toggle - Updated mobile styles */}
      <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
        <ToggleGroup 
          type="single" 
          value={selectedType} 
          onValueChange={(value) => value && setSelectedType(value as 'portrait' | 'landscape1' | 'landscape2')}
          className="bg-black/40 backdrop-blur-md p-1 md:p-2 rounded-full border border-white/10"
        >
          <ToggleGroupItem 
            value="portrait" 
            aria-label="Portrait" 
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 data-[state=on]:bg-purple-600 text-xs md:text-sm"
          >
            <div className="w-3 h-4 md:w-4 md:h-6 bg-current rounded" />
            <span className="text-white">Portrait</span>
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="landscape1" 
            aria-label="Landscape" 
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 data-[state=on]:bg-purple-600 text-xs md:text-sm"
          >
            <div className="w-4 h-3 md:w-6 md:h-4 bg-current rounded" />
            <span className="text-white">Landscape</span>
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="landscape2" 
            aria-label="Houses" 
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 data-[state=on]:bg-purple-600 text-xs md:text-sm"
          >
            <div className="w-4 h-3 md:w-6 md:h-4 bg-current rounded" />
            <span className="text-white">Houses</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Main Gallery Container */}
      <div 
        className="gallery-container pt-20 h-screen overflow-y-auto snap-y snap-mandatory"
        onWheel={handleWheel}
        ref={sectionsRef}
      >
        {/* Gallery Sections */}
        {filteredGalleryData.map((section, index) => (
          <div
            key={section.id}
            className="w-full h-screen relative gallery-section flex-shrink-0 snap-start"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 gallery-image bg-cover bg-center"
              style={{
                backgroundImage: `url(${section.image})`,
                filter: 'brightness(0.7)',
                opacity: currentSection === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
            
            {/* Content Overlay - Updated mobile styles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="text-center text-white px-4 md:px-8 fade-in"
                style={{
                  opacity: currentSection === index ? 1 : 0,
                  transform: currentSection === index ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
                }}
              >
                {/* Diagonal Line with Text */}
                <div className="relative mb-4 md:mb-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-px bg-white/50 rotate-45" />
                  <span className="relative bg-black/20 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-light tracking-widest uppercase text-reveal">
                    {section.overlayText}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-4 tracking-wider text-reveal text-white/70">
                  {section.title}
                </h1>
                <p className="text-sm md:text-xl lg:text-2xl font-light opacity-70 text-reveal mb-4 md:mb-6">
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

      {/* Rolling Thumbnail Panel - Desktop - Updated to use filtered data */}
      <div className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4 gallery-panel p-4">
          {filteredGalleryData.map((section, index) => {
            // Calculate the position relative to current section
            let relativeIndex = index - currentSection;
            
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
                
                {currentSection === index && (
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-white rounded-full animate-pulse" />
                )}
                
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
            const prevSection = currentSection - 1;
            if (prevSection >= 0) {
            scrollToSection(prevSection);
            }
          }}
          disabled={currentSection === 0}
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
            const nextSection = currentSection + 1;
            if (nextSection < filteredGalleryData.length) {
            scrollToSection(nextSection);
            }
          }}
          disabled={currentSection === filteredGalleryData.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-sm">
              Admission Open 2025
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
                height: `${((currentSection + 1) / filteredGalleryData.length) * 100}%`
              }}
            />
          </div>
          <div className="text-white text-xs font-light">{currentSection + 1}/{filteredGalleryData.length}</div>
          <div className="text-white/60 text-xs font-light infinite-indicator">∞</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 