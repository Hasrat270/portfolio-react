import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <img src="/img/logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="flex gap-4 mb-6">
            <a
              href="https://www.facebook.com/hasrat.khan.35513"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray/20 flex items-center justify-center hover:bg-primary transition-all"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a
              href="https://x.com/Hasrat09042872"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray/20 flex items-center justify-center hover:bg-primary transition-all"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray/20 flex items-center justify-center hover:bg-primary transition-all"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasrat-khan-afridi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray/20 flex items-center justify-center hover:bg-primary transition-all"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
            <a
              href="https://github.com/Hasrat270"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray/20 flex items-center justify-center hover:bg-primary transition-all"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray text-sm">
              © {new Date().getFullYear()} Hasrat Afridi. All rights reserved. Made with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;