import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <ScrollToTop />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-20">
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;