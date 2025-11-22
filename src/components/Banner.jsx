import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
  const slides = [
    {
      bg: 'bg-[url(/img/banner/banner_one.jpeg)]',
      title: 'Hasrat Afridi',
      subtitle: 'Mern Stack Web Developer',
      btnText: "Let's Talk!",
    },
    {
      bg: 'bg-[url(/img/banner/banner_two.jpeg)]',
      title: 'Hasrat Afridi',
      subtitle: 'IT Support Speacialist',
      btnText: "What's in your mind?",
    },
    {
      bg: 'bg-[url(/img/banner/banner_three.jpeg)]',
      title: 'Hasrat Afridi',
      subtitle: 'Mern Stack Web Developer',
      btnText: 'Say it!',
    },
  ];

  return (
    <section className="banner-area" id="home">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`single_slide_banner ${slide.bg} bg-cover bg-center bg-no-repeat h-full`}>
              <div className="container mx-auto px-4 h-full">
                <div className="flex items-center h-full">
                  <div className="banner-content w-full text-center lg:text-left max-sm:bg-white/10 max-sm:backdrop-blur-[10px] max-sm:mx-4 max-sm:border-2 max-sm:border-white/30 max-sm:rounded-[20px] max-sm:shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-sm:p-10">
                    <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 max-sm:text-white max-sm:drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
                      {slide.title}
                    </h1>
                    <h3 className="text-[30px] md:text-[30px] sm:text-[20px] font-roboto font-normal text-dark mb-8 max-sm:text-white max-sm:drop-shadow-[1px_1px_3px_rgba(0,0,0,0.3)]">
                      {slide.subtitle}
                    </h3>
                    <a
                      href="https://wa.me/923082841437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn bg-primary border-transparent text-white hover:bg-transparent hover:border-primary hover:text-dark inline-flex items-center gap-2"
                    >
                      {slide.btnText}
                      <FaWhatsapp className="text-2xl text-green-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;