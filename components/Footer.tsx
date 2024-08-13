import { siteConfig } from '@/site.config';

const Footer = () => {
  return (
    <footer className="text-center bg-gray-900 text-white w-screen block">
      <div className="container px-6 flex flex-col items-center max-w-2xl w-full mx-auto">
        <div className="text-center p-4">
          <small>&copy; {siteConfig.title}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
