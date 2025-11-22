import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const PortfolioDetails = () => {
  const [searchParams] = useSearchParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const projectData = getProjectById(id);
      setProject(projectData);
    }
  }, [searchParams]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray">Project not found</p>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              Portfolio Details
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <Link to="/portfolio" className="text-sm text-dark font-roboto mr-3.5 relative">
                Portfolio
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">Details</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container mx-auto px-4">
          <div className="portfolio_details_inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div>
                <img className="w-full rounded-lg shadow-lg" src={project.image} alt={project.title} />
              </div>
              <div className="lg:mt-12">
                <h4 className="text-dark text-[21px] font-bold mb-4">{project.title}</h4>
                <p className="mb-6 text-sm leading-relaxed">{project.description}</p>
                <ul className="list-none">
                  <li className="mb-2 text-sm">
                    <span className="text-dark font-normal w-24 inline-block">Client:</span>
                    {project.client}
                  </li>
                  <li className="mb-2 text-sm">
                    <span className="text-dark font-normal w-24 inline-block">Date:</span>
                    {project.date}
                  </li>
                  <li className="mb-2 text-sm">
                    <span className="text-dark font-normal w-24 inline-block">Website:</span>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      View Live
                    </a>
                  </li>
                  <li className="mb-2 text-sm">
                    <span className="text-dark font-normal w-24 inline-block">Category:</span>
                    {project.categoryName}
                  </li>
                  <li className="mb-0 text-sm">
                    <span className="text-dark font-normal w-24 inline-block">Rating:</span>
                    <div className="inline-flex gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <FaStar key={i} className="text-secondary" />
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-dark text-[21px] font-bold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-secondary text-dark rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-dark text-[21px] font-bold mb-4">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-dark text-[21px] font-bold mb-4">Project Description</h4>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.detailedDescription }}></div>
            </div>

            <ul className="social_details flex gap-3.5 mt-12">
              <li>
                <a href="https://www.facebook.com/hasrat.khan.35513" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-dark hover:text-primary text-sm transition-all" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Hasrat09042872" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-dark hover:text-primary text-sm transition-all" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-dark hover:text-primary text-sm transition-all" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hasrat-khan-afridi" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-dark hover:text-primary text-sm transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;