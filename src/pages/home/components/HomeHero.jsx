import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import SlideBanner from './SlideBanner';

const images = [
    "https://img.freepik.com/free-photo/man-with-glasses-with-thumb-up_1368-7522.jpg?w=360&t=st=1700357070~exp=1700357670~hmac=a5524256231a6674e579c17f4a6da361fda205df258cebea392efef3cb472921",
    "https://img.freepik.com/free-photo/happy-man-holding-blank-sign-overhead_329181-9145.jpg?w=360&t=st=1700357682~exp=1700358282~hmac=a0f05f5457bae9904492a08ba72544b5e011a8b9a4dbb7835000ae120ef16fee",
    "https://img.freepik.com/free-photo/handsome-man-with-glasses-pointing-lateral_1368-7627.jpg?w=360&t=st=1700357821~exp=1700358421~hmac=cdb973785b1e5a712b6ddb5eef893c778cebc70592342d042cea52de290a3929"
]

function HomeHero() {
    
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay: 7000}}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
        className="home_hero"
      >
        {images.map((image, indx)=> (
            <SwiperSlide key={indx}>
                <SlideBanner image={image} />
            </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
}


export default HomeHero