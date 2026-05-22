import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CookieBar from './CookieBar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBar />
    </div>
  );
}