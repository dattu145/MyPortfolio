import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-pink-600 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-blue-400" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;