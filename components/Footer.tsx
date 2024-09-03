import { siteConfig } from '@/site.config';

const Footer = () => {
  return (
    <footer className="bg-neutral-300">
      <p className="py-5 text-center">
        <small>&copy; 2024 {siteConfig.title}</small>
      </p>
    </footer>
  );
};

export default Footer;
