import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        } else if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        return '';
      
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      
      case 'subject':
        if (!value.trim()) {
          return 'Subject is required';
        } else if (value.trim().length < 3) {
          return 'Subject must be at least 3 characters';
        }
        return '';
      
      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        } else if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setTouched({});
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="min-h-[400px] bg-[url(/img/banner/common-banner.jpg)] bg-cover relative z-10">
        <div className="relative overflow-hidden w-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-dark text-[60px] md:text-[60px] sm:text-[40px] font-bold mb-5 capitalize">
              Contact Us
            </h1>
            <div className="inline-block border-2 border-dark rounded-full px-5 leading-[46px]">
              <Link to="/" className="text-sm text-dark font-roboto mr-3.5 relative">
                Home
                <span className="absolute h-full w-px right-[-10px] top-1/2 bg-dark -translate-y-1/2"></span>
              </Link>
              <span className="text-sm text-dark font-roboto">Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container mx-auto px-4">
          <div className="main-title text-center mb-16">
            <h1 className="font-poppins text-[48px] md:text-[48px] sm:text-4xl text-dark font-bold mb-5 pb-4 capitalize relative">
              Get in Touch
              <span className="absolute left-1/2 bottom-0 h-0.5 w-[100px] bg-primary -ml-[50px]"></span>
              <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-primary -ml-[5px] rounded-full"></span>
            </h1>
            <p className="text-[15px] font-roboto leading-[26px] text-gray mb-0 mx-auto max-w-2xl">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded focus:outline-none transition-all ${
                      touched.name && errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray/30 focus:border-primary'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 border rounded focus:outline-none transition-all ${
                      touched.email && errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray/30 focus:border-primary'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 border rounded focus:outline-none transition-all ${
                      touched.subject && errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray/30 focus:border-primary'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message"
                    rows="6"
                    className={`w-full px-4 py-3 border rounded focus:outline-none transition-all resize-none ${
                      touched.message && errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray/30 focus:border-primary'
                    }`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary text-white px-10 py-3 rounded-full hover:bg-dark transition-all font-medium ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">Address</h4>
                    <p className="text-gray">Peshawar, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">Phone</h4>
                    <p className="text-gray">+92 308 2841437</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-2">Email</h4>
                    <p className="text-gray">hasrat3701@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-bold text-dark mb-4">Let's Connect</h4>
                <p className="text-gray leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;