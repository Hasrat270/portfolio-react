import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (filter === '*') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <section className="section-gap bg-white" id="work">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 text-center">
            <div className="main-title mb-[75px]">
              <h1 className="font-poppins text-[48px] md:text-[48px] sm:text-4xl text-dark font-bold mb-5 pb-4 capitalize relative">
                Latest Works
                <span className="absolute left-1/2 bottom-0 h-0.5 w-[100px] bg-primary -ml-[50px]"></span>
                <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-primary -ml-[5px] rounded-full"></span>
              </h1>
              <p className="text-[15px] font-roboto leading-[26px] text-gray mb-0 mx-auto">
                I'm grateful for every opportunity to build and create — and I'm excited to share some of that work with you here.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="lg:w-5/6">
            <div className="projects_fillter bg-secondary mb-12">
              <ul className="filter list-none relative text-center py-3 px-0 sm:px-3">
                <div className="absolute left-[2%] -bottom-2.5 h-full w-[96%] bg-[#ffe6db] -z-10"></div>
                <li
                  className={`inline-block mr-8 text-xs uppercase cursor-pointer transition-all ${filter === '*' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                  onClick={() => setFilter('*')}
                >
                  All Categories
                </li>
                <li
                  className={`inline-block mr-8 text-xs uppercase cursor-pointer transition-all ${filter === 'react' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                  onClick={() => setFilter('react')}
                >
                  React Projects
                </li>
                <li
                  className={`inline-block mr-8 text-xs uppercase cursor-pointer transition-all ${filter === 'vanilla' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                  onClick={() => setFilter('vanilla')}
                >
                  Vanilla JS Projects
                </li>
                <li
                  className={`inline-block text-xs uppercase cursor-pointer transition-all ${filter === 'mern' ? 'text-primary' : 'text-dark hover:text-primary'}`}
                  onClick={() => setFilter('mern')}
                >
                  Mern Stack Projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7">
          {filteredProjects.map((project, index) => {
            const colClass = index === 0 || index === 3 || index === 4 || index === 5 ? 'lg:col-span-6' : 'lg:col-span-3';
            return (
              <div key={project.id} className={`${colClass} col-span-1`}>
                <div className="projects_item relative rounded-[5px] overflow-hidden group">
                  <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="projects_text absolute w-full left-1/2 bottom-0 -translate-x-1/2 text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:bottom-8 transition-all duration-400">
                    <Link to={`/portfolio-details?id=${project.id}`}>
                      <h4 className="text-xl text-white mb-1 uppercase cursor-pointer transition-all">
                        {project.title}
                      </h4>
                    </Link>
                    <p className="mb-0 text-[15px] text-white">{project.client}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;