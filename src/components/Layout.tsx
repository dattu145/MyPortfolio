import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <main className="lg:ml-20">
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default Layout;
