import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-[9999] transition-all duration-500 ${isScrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'}`}>
      <div className="main_menu">
        <nav className="navbar">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="navbar-brand mr-8">
                <img src="/img/logo.png" alt="Logo" className="h-auto" />
              </Link>

              <button
                className="lg:hidden flex flex-col gap-1 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                <span className="block w-6 h-0.5 bg-dark"></span>
                <span className="block w-6 h-0.5 bg-dark"></span>
                <span className="block w-6 h-0.5 bg-dark"></span>
              </button>

              <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto absolute lg:relative top-full left-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none`}>
                <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-end w-full p-4 lg:p-0 gap-0 lg:gap-11">
                  <li className="nav-item">
                    <Link 
                      to="/" 
                      className={`block py-3 lg:py-0 text-base font-medium capitalize transition-all ${isActive('/') ? 'text-white lg:text-white' : `${isScrolled ? 'text-dark' : 'text-dark'} hover:text-white`} ${isScrolled ? 'lg:leading-[70px]' : 'lg:leading-[100px]'}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      to="/about" 
                      className={`block py-3 lg:py-0 text-base font-medium capitalize transition-all ${isActive('/about') ? 'text-white lg:text-white' : `${isScrolled ? 'text-dark' : 'text-dark'} hover:text-white`} ${isScrolled ? 'lg:leading-[70px]' : 'lg:leading-[100px]'}`}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item relative group">
                    <Link 
                      to="/portfolio" 
                      className={`block py-3 lg:py-0 text-base font-medium capitalize transition-all ${isActive('/portfolio') || isActive('/portfolio-details') ? 'text-white lg:text-white' : `${isScrolled ? 'text-dark' : 'text-dark'} hover:text-white`} ${isScrolled ? 'lg:leading-[70px]' : 'lg:leading-[100px]'}`}
                    >
                      Portfolio
                    </Link>
                    <ul className="hidden lg:group-hover:block lg:absolute top-full left-0 min-w-[200px] bg-secondary shadow-xl">
                      <li className="border-b border-[#ededed] transition-all hover:bg-primary">
                        <Link to="/portfolio" className="block px-8 py-3 text-dark hover:text-white transition-all">
                          Portfolio
                        </Link>
                      </li>
                      <li className="transition-all hover:bg-primary">
                        <Link to="/portfolio-details" className="block px-8 py-3 text-dark hover:text-white transition-all">
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item relative group">
                    <Link 
                      to="/blog" 
                      className={`block py-3 lg:py-0 text-base font-medium capitalize transition-all ${isActive('/blog') || isActive('/blog-details') ? 'text-white lg:text-white' : `${isScrolled ? 'text-dark' : 'text-dark'} hover:text-white`} ${isScrolled ? 'lg:leading-[70px]' : 'lg:leading-[100px]'}`}
                    >
                      Blog
                    </Link>
                    <ul className="hidden lg:group-hover:block lg:absolute top-full left-0 min-w-[200px] bg-secondary shadow-xl">
                      <li className="border-b border-[#ededed] transition-all hover:bg-primary">
                        <Link to="/blog" className="block px-8 py-3 text-dark hover:text-white transition-all">
                          Blog
                        </Link>
                      </li>
                      <li className="transition-all hover:bg-primary">
                        <Link to="/blog-details" className="block px-8 py-3 text-dark hover:text-white transition-all">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link 
                      to="/contact" 
                      className={`block py-3 lg:py-0 text-base font-medium capitalize transition-all ${isActive('/contact') ? 'text-white lg:text-white' : `${isScrolled ? 'text-dark' : 'text-dark'} hover:text-white`} ${isScrolled ? 'lg:leading-[70px]' : 'lg:leading-[100px]'}`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;