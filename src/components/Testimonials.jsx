import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Abdullah',
      rating: 5,
      text: 'Hasrat delivered an outstanding MERN stack e-commerce platform. The integration of MongoDB, Express.js, React, and Node.js was seamless, resulting in a highly scalable and responsive application. His attention to detail and problem-solving skills were exceptional.',
    },
    {
      name: 'Naqash',
      rating: 5,
      text: 'Working with Hasrat was a fantastic experience. He developed a comprehensive inventory management system that exceeded our expectations. The system is robust, efficient, and user-friendly. Hasrat demonstrated excellent communication throughout the project.',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Hasrat is a talented developer who brings both technical expertise and creativity to every project. He built our company website with modern features and ensured it was optimized for performance and SEO. Highly recommended!',
    },
  ];

  return (
    <div className="section-gap testimonial_area">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-7/12 text-left">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="active_testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="single_testimonial">
                    <div className="testimonial_head mb-6">
                      <img src="/img/quote.png" alt="quote" className="mb-4" />
                      <h4 className="text-dark text-2xl font-bold mb-2">{testimonial.name}</h4>
                      <div className="review flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-secondary" />
                        ))}
                      </div>
                    </div>
                    <div className="testimonial_content">
                      <p className="text-gray leading-relaxed">{testimonial.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;