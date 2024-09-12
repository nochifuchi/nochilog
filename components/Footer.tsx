import { siteConfig } from '@/site.config';

const Footer = () => {
  return (
    <footer className="bg-primary-200">
      <p className="py-5 text-center">
        <small>&copy; 2024 {siteConfig.title}</small>
      </p>
    </footer>
  );
};

export default Footer;
