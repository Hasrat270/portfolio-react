import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 82 },
  ];

  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              About Me
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">About</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap gray-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            <div className="lg:w-5/12">
              <div className="relative inline-block">
                <img src="/img/Hasrat_about.png" alt="profile" className="relative z-10 w-full" />
                <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-secondary to-primary -z-0 translate-x-5 translate-y-5"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="main-title text-left mb-8">
                <h1 className="font-poppins text-[48px] md:text-[48px] sm:text-4xl text-dark font-bold mb-5 pb-4 capitalize relative text-left">
                  About Myself
                  <span className="absolute left-0 bottom-0 h-0.5 w-[100px] bg-primary"></span>
                  <span className="absolute left-[45px] -bottom-1 h-2.5 w-2.5 bg-primary rounded-full"></span>
                </h1>
              </div>
              <div className="mb-8">
                <p className="mb-4 text-gray leading-relaxed">
                  Hi, I'm Hasrat Khan Afridi, a passionate MERN Stack Web Developer dedicated to creating innovative, user-friendly web applications that solve real-world problems.
                </p>
                <p className="mb-4 text-gray leading-relaxed">
                  With expertise in MongoDB, Express.js, React.js, and Node.js, I build scalable, efficient applications that prioritize user experience and performance. My approach combines technical excellence with creative problem-solving.
                </p>
                <p className="mb-4 text-gray leading-relaxed">
                  I believe technology should serve people, not complicate their lives. Every line of code I write is aimed at making the web a more accessible, efficient, and enjoyable place for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="main-title text-center mb-12">
              <h1 className="font-poppins text-[48px] md:text-[48px] sm:text-4xl text-dark font-bold mb-5 pb-4 capitalize relative">
                My Skills
                <span className="absolute left-1/2 bottom-0 h-0.5 w-[100px] bg-primary -ml-[50px]"></span>
                <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-primary -ml-[5px] rounded-full"></span>
              </h1>
              <p className="text-[15px] font-roboto leading-[26px] text-gray mb-0 mx-auto max-w-2xl">
                I continuously expand my technical expertise to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-dark font-medium">{skill.name}</span>
                    <span className="text-gray">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray/20 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;