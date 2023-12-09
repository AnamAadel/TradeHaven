import TestimonialCard from './TestimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';

function AboutTestimonials() {
  return (
    <div className="testimonial-area pb-40px pt-100px ">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center mb-0">
                        <h2 className="title line-height-1">#testimonials</h2>
                    </div>
                </div>
            </div>
            <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={true}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCard /></SwiperSlide>
        <SwiperSlide><TestimonialCard /></SwiperSlide>
        <SwiperSlide><TestimonialCard /></SwiperSlide>
        <SwiperSlide><TestimonialCard /></SwiperSlide>
        <SwiperSlide><TestimonialCard /></SwiperSlide>
      </Swiper>
    </>
        </div>
    </div>
  )
}

export default AboutTestimonials