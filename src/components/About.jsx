import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section-gap gray-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-5/12 about-left">
            <div className="relative inline-block">
              <img src="/img/Hasrat.png" alt="profile" className="relative z-10" />
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-secondary to-primary -z-0 translate-x-5 translate-y-5"></div>
            </div>
          </div>

          <div className="lg:w-1/2 about-right">
            <div className="main-title text-left mb-12">
              <h1 className="font-poppins text-[48px] md:text-[48px] sm:text-4xl text-dark font-bold mb-5 pb-4 capitalize relative text-left">
                about myself
                <span className="absolute left-0 bottom-0 h-0.5 w-[100px] bg-primary"></span>
                <span className="absolute left-[45px] -bottom-1 h-2.5 w-2.5 bg-primary rounded-full"></span>
              </h1>
            </div>
            <div className="mb-12 wow fadeIn" data-wow-duration=".8s">
              <p className="mb-4 text-gray leading-relaxed">
                Hi, I'm Hasrat, a MERN Stack Web Developer. I'll turn your ideas into
                functional, user-friendly web applications.
              </p>
              <p className="mb-4 text-gray leading-relaxed">
                I focus on creating solutions that make life simpler for others — whether it's helping a
                business go online or improving how people use technology every day.
              </p>
              <p className="mb-4 text-gray leading-relaxed">
                I believe good development means understanding real needs, serving with honesty, and making
                sure every project leaves a positive impact and a happy client.
              </p>
              <p className="mb-0 text-gray leading-relaxed">
                That's why every project I work on is done with care, purpose, and a genuine desire to make
                things better.
              </p>
            </div>
            <Link to="/about" className="primary-btn">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;