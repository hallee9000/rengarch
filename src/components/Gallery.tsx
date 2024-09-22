'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

function Gallery ({ projects }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='rengarch-swiper-container'
    >
      {
        projects.map(project => (
          <SwiperSlide key={project.key}>
            <img
              src={project.cover}
              alt={project.name}
              style={{
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Gallery
