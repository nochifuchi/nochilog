import type { LayoutProps } from '@/types/types';
import type { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
