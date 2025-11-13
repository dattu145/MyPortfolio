import { useState, useEffect } from 'react';
import { GitBranch } from 'lucide-react';
import { personalInfo } from '../data/personal';

function ContributionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        if (window.scrollY > homeSectionBottom - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const redirectToContributions = () => {
    window.open(personalInfo.gssoctracker, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={redirectToContributions}
      className={`fixed bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20 group ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 -translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-pink-800 animate-ping opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main icon */}
      <GitBranch size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Tooltip */}
      <div className="absolute left-full mr-3 px-2 py-1 bg-gray-800 dark:bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-300">
        My Contributions
      </div>
    </button>
  );
}

export default ContributionButton;