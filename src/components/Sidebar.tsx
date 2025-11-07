import { Home, User, BarChart3, GraduationCap, Code, Briefcase, Mail, Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
  { id: 'qualifications', label: 'Qualifications', icon: GraduationCap },
  { id: 'experience', label: 'Skills', icon: Code },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-pink-600 dark:hover:border-pink-600 transition-colors"
      >
        {isMobileOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 flex-col items-center py-8 z-40">
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
                  activeSection === item.id ? 'text-pink-600 dark:text-pink-500' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                } transition-colors`}
                title={item.label}
              >
                <Icon size={24} />
                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 dark:bg-zinc-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-600 dark:bg-pink-500 rounded-r"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="mb-4 p-3 bg-gray-100 dark:bg-zinc-800 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          title="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Sidebar Panel */}
          <div className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 flex flex-col py-8">
            <div className="px-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <div>
                  <h1 className="text-gray-900 dark:text-white font-bold text-lg">Dattu</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">MERN Stack Developer</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 px-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id 
                        ? 'bg-pink-600 text-white' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="px-4">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span>Toggle Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;