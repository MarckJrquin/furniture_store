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

const collections = [
    {
        title: 'Desk and Office',
        description: 'Work from home accessories',
        imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
        alt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
    },
    {
        title: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        alt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
    },
    {
        title: 'Travel',
        description: 'Daily commute essentials',
        imageUrl: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
        alt: 'Collection of four insulated travel bottles on wooden shelf.'
    }
];

const products = [
    {
        name: 'Wooden Chair',
        price: '$49.99',
        imageUrl: 'https://www.rowenandwren.co.uk/cdn/shop/products/HarmenOutdoorChair_Birch_04.jpg?v=1631893294',
    },
    {
        name: 'Modern Sofa',
        price: '$199.99',
        imageUrl: 'https://lago-cdn.thron.com/delivery/public/image/lago/623e99f7-50cd-415c-840e-d3486b1096c6/sqVrcnw/std/800x1172/italian-modern-sofa-for-living-room-or-air-soft-sofa-or-lago.webp?cropx=0&cropy=2.1006564551422&cropw=100&croph=95.579868708972&quality=70',
    },
    {
        name: 'Stylish Lamp',
        price: '$29.99',
        imageUrl: 'https://m.media-amazon.com/images/I/71s9eofknEL._AC_UF894,1000_QL80_.jpg',
    },
    {
        name: 'Wooden Chair',
        price: '$49.99',
        imageUrl: 'https://www.rowenandwren.co.uk/cdn/shop/products/HarmenOutdoorChair_Birch_04.jpg?v=1631893294',
    },
    {
        name: 'Modern Sofa',
        price: '$199.99',
        imageUrl: 'https://lago-cdn.thron.com/delivery/public/image/lago/623e99f7-50cd-415c-840e-d3486b1096c6/sqVrcnw/std/800x1172/italian-modern-sofa-for-living-room-or-air-soft-sofa-or-lago.webp?cropx=0&cropy=2.1006564551422&cropw=100&croph=95.579868708972&quality=70',
    },
    {
        name: 'Stylish Lamp',
        price: '$29.99',
        imageUrl: 'https://m.media-amazon.com/images/I/71s9eofknEL._AC_UF894,1000_QL80_.jpg',
    },
    {
        name: 'Wooden Chair',
        price: '$49.99',
        imageUrl: 'https://www.rowenandwren.co.uk/cdn/shop/products/HarmenOutdoorChair_Birch_04.jpg?v=1631893294',
    },
    {
        name: 'Modern Sofa',
        price: '$199.99',
        imageUrl: 'https://lago-cdn.thron.com/delivery/public/image/lago/623e99f7-50cd-415c-840e-d3486b1096c6/sqVrcnw/std/800x1172/italian-modern-sofa-for-living-room-or-air-soft-sofa-or-lago.webp?cropx=0&cropy=2.1006564551422&cropw=100&croph=95.579868708972&quality=70',
    }
];

const ProductCard = ({ name, price, imageUrl }) => {
    return (
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="#">
          <img className="hover:grow hover:shadow-lg h-[400px] w-full object-cover rounded-lg" src={imageUrl} alt={name} />
          <div className="pt-3 flex items-center justify-between">
            <p>{name}</p>
            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
          </div>
          <p className="pt-1 text-gray-900 dark:text-gray-300">{price}</p>
        </a>
      </div>
    );
};

const Collections = () => {
    return(
        <>
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

            <section className="bg-gray-100 dark:bg-zinc-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">Collections</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {collections.map((item, index) => (
                        <div key={index} className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img
                                src={item.imageUrl}
                                alt={item.alt}
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                {item.title}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900 dark:text-gray-300">{item.description}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-zinc-900 py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 dark:text-gray-200 text-xl" href="#">
                                Store
                            </a>
                        </div>
                    </nav>
                    {products.map((product, index) => (
                        <ProductCard key={index} name={product.name} price={product.price} imageUrl={product.imageUrl} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Collections;