import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              Portfolio
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
    </>
  );
};

export default PortfolioPage;