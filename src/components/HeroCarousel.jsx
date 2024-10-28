import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Keyboard, Autoplay } from 'swiper/modules';

import { Button, Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const carouselItems = [
  {
    image: 'https://images.pexels.com/photos/16641323/pexels-photo-16641323/free-photo-of-mesa-ventanas-sofa-hogar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Retro: Old is New Again',
    description: 'Dolor fermentum tristique eget id nisi. Orci varius natoque penatibus et magnis dis parturient montes.'
  },
  {
    image: 'https://images.pexels.com/photos/6699979/pexels-photo-6699979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Modern Furniture Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    image: 'https://images.pexels.com/photos/4800178/pexels-photo-4800178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Bold and Beautiful Colors',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
  }
];

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Swiper
        effect={'fade'}
        modules={[Navigation, Pagination, EffectFade, Keyboard, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true}}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop={true} 
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[500px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-white dark:bg-zinc-900 opacity-50"></div>
              <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">{item.title}</h1>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{item.description}</p>
                <Button color="warning" endContent={<FontAwesomeIcon icon={faArrowRight} />} as={Link} href="/trends" className="mt-4">
                    Discover This Trend
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeroCarousel;
