import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import 'bootstrap/dist/css/bootstrap.min.css';
import SingleMovieCard from './SingleMovieCard';

const MovieSlider = ({ category, categoryHeader }) => {
  return (
    <div>
      {' '}
      {category && (
        <div className="py-4 movie--category--container">
          <p>{categoryHeader}</p>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {category.map((item, index) => (
              <SwiperSlide>
                <SingleMovieCard key={index} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default MovieSlider;
