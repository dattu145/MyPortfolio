import { Home, User, BarChart3, GraduationCap, Code, Briefcase, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
  { id: 'qualifications', label: 'Skills', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Code },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-20 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-8 z-50">
        <div className="mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group ${
                  activeSection === item.id ? 'text-pink-600' : 'text-gray-400 hover:text-white'
                } transition-colors`}
                title={item.label}
              >
                <Icon size={24} />
                <span className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-600 rounded-r"></div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="text-xs text-gray-500 transform -rotate-90 whitespace-nowrap">
          <span className="text-pink-600">★</span> 2025
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
