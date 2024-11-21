import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css"; 

const testimonials = [
  {
    name: "Sankalp Sharma",
    position: "Senior Associate TA, Simplilearn",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/bhaskar_anand.jpg",
    message:
      "We had a very specific need that we can assess a large number of candidates with minimal intervention and the highest success rate. Joboard has delivered the metrics for the same.",
  },
  {
    name: "Sangeetha Raj",
    position: "Senior Manager Human Resources - Vee Technologies",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/sangeetha_raj.jpg",
    message:
      "A must-have for any company in the digital age. Very happy with all our new hires, guided by Joboard. The transition was very smooth.",
  },
  {
    name: "Abedin Challawala",
    position: "Assistant Manager - Talent Acquisition Qmetry",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/abedin-challawala.jpg",
    message: "Before Joboard, every time there was a technical challenge, candidates who were appearing in the technical interviews were not up to the mark, and many candidates didn't have basic technical knowledge. Joboard's been helping us evaluate candidates in basic technical competence and has reduced the time needed for technical screening and decreased our dependency on other areas.",
  },
  {
    name: "Sanjeev Sah",
    position: "Assistant Manager - HRBP, Shadowfax Technologies Pvt. Ltd.",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/Sanjeev_Sah_Photo.jpg",
    message: "We have been associated with Joboard for our campus recruitment assessment process for 1 year now. In a very short duration of time, the tool was integrated into our system. The platform is easy to use, economical, and has good features which helped us speed up the assessment process. The team is proactive and accessible to help resolve queries on time We had a wonderful experience collaborating with Joboard.",
  },
  {
    name: "Khushbu Vora",
    position: "Manager HR, Silver Touch Technologies Ltd.",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/Silver_Touch_Technologies_Ltd.png",
    message: "This was our first campus drive on digital platform, but it went really well. We have performed as a one team. We really appreciate your prompt support. Look forward to work with you.",
  },
  {
    name: "Irfan Baig",
    position: "HR Lead, Ingram.",
    image: "https://hiremee.co.in/assets/hiremee-revamp/images/testimonials/Ingram.png",
    message: "It has been wonderful association with you. Your support, customer interface skills & high responsiveness is commendable. You had been extremely helpful & providing best service to us. Highly appreciate! Thank you and assure you perpetual association with Ingram Micro for sure.",
    },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,     // Set timer to 2000 ms (2 seconds)
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-box">
              <div className="testimonial-avatar justify-items-center">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-details">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.position}</span>
              </div>
              <div className="testimonial-message">
                <p>{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
