import type { LayoutProps } from '@/types/types';
import type { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
