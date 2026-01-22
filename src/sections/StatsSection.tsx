import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { useState } from 'react';

// Component for GitHub stats (handles cache busting)
const GitHubStatImage = ({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) => {
  const [imgSrc, setImgSrc] = useState(`${src}&cache=${Date.now()}`);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.error(`Failed to load ${alt}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const retryLoad = () => {
    setIsLoading(true);
    setHasError(false);
    // Add new cache busting parameter
    const baseUrl = imgSrc.split('&cache=')[0];
    setImgSrc(`${baseUrl}&cache=${Date.now()}`);
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-32 bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
        <AlertCircle className="w-8 h-8 text-rose-500 mb-2" />
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-2">
          {fallbackText || `Failed to load ${alt}`}
        </p>
        <button
          onClick={retryLoad}
          className="text-sm px-3 py-1 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors flex items-center gap-1"
        >
          <RefreshCw size={12} />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[8rem] w-full">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

// Simple component for LeetCode and other services that don't need cache busting
const StatImage = ({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Add a key to force re-render on retry
  const [retryKey, setRetryKey] = useState(0);

  const handleError = () => {
    console.error(`Failed to load ${alt}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const retryLoad = () => {
    setHasError(false);
    setIsLoading(true);
    setRetryKey(prev => prev + 1);
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-32 bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
        <AlertCircle className="w-8 h-8 text-rose-500 mb-2" />
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-2">
          {fallbackText || `Failed to load ${alt}`}
        </p>
        <button
          onClick={retryLoad}
          className="text-sm px-3 py-1 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors flex items-center gap-1"
        >
          <RefreshCw size={12} />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[8rem] w-full">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      )}
      <img
        key={retryKey}
        src={src}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="eager"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

function StatsSection() {
  const [githubStatsKey, setGithubStatsKey] = useState(Date.now());

  // Function to refresh all GitHub stats
  const refreshGitHubStats = () => {
    setGithubStatsKey(Date.now());
  };

  return (
    <section id="stats" className="min-h-screen flex items-center bg-gray-100 justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative overflow-hidden dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-150 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 dark:bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-600/10 dark:bg-rose-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-pink-600 dark:text-pink-500 text-sm font-semibold tracking-wider uppercase">Coding Activity</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-white font-bold mt-2">My Developer Stats</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Stats update periodically. If they don't load, try refreshing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">LeetCode Stats</h3>
              <a
                href="https://leetcode.com/dattu145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
              >
                <ExternalLink size={16} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
              <StatImage
                src="https://leetcard.jacoblin.cool/dattu145?theme=dark&ext=activity"
                alt="LeetCode Stats"
                fallbackText="LeetCode stats not available"
              />
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">GitHub Stats</h3>
                <button
                  onClick={refreshGitHubStats}
                  className="p-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors"
                  title="Refresh GitHub stats"
                >
                  <RefreshCw size={14} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <a
                href="https://github.com/dattu145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
              >
                <ExternalLink size={16} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            <div className="space-y-2 sm:space-y-3" key={githubStatsKey}>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <GitHubStatImage
                  src="https://github-readme-stats.vercel.app/api?username=dattu145&show_icons=true&theme=dark&bg_color=000000&border_color=27272a"
                  alt="GitHub Stats"
                  fallbackText="GitHub stats not available"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <GitHubStatImage
                  src="https://github-readme-streak-stats.herokuapp.com/?user=dattu145&theme=dark&background=000000&border=27272a"
                  alt="GitHub Streak"
                  fallbackText="Streak stats not available"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
                <GitHubStatImage
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=dattu145&layout=compact&theme=dark&bg_color=000000&border_color=27272a"
                  alt="Top Languages"
                  fallbackText="Language stats not available"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-800 dark:border-zinc-700 rounded-xl p-3 sm:p-4 lg:p-6 transition-colors"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">Contribution Graph</h3>
            <a
              href="https://github.com/dattu145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              View Profile
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700">
            <StatImage
              src="https://github-readme-activity-graph.vercel.app/graph?username=dattu145&theme=github-compact&bg_color=000000&color=ec4899&line=ec4899&point=ffffff&area=true&hide_border=false&border_color=27272a"
              alt="GitHub Activity Graph"
              fallbackText="Contribution graph not available"
            />
          </div>
        </motion.div>

        {/* Note about stats */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Note: External services may have rate limits. Stats update every 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;