import React from 'react';
import { Button } from '@nextui-org/react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FurnitureTrends = () => {
    return (
        <>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                    <div className="flex items-center justify-center flex-col gap-5 mb-14">
                        <span className='bg-indigo-50 text-indigo-500  text-xs font-medium px-3.5 py-1 rounded-full'>
                            Furniture Collection
                        </span>
                        <h2 className="font-manrope font-bold text-4xl text-gray-900 dark:text-zinc-200 text-center">
                            Modern Furniture Trends
                        </h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-zinc-300 max-w-3xl mx-auto text-center">
                            Explore the latest trends in modern furniture design, where elegance meets functionality to create spaces that inspire comfort and style.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
                        <div className="sm:col-span-2 bg-[url('https://st.hzcdn.com/simgs/9b316efc05329d16_4-5939/home-design.jpg')] bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6">
                            <h6 className="font-medium text-xl leading-8 text-white mb-4">Contemporary Living Room</h6>
                            <p className="text-base font-normal text-white/70">Sleek and modern designs to transform your living space into a chic and cozy haven.</p>
                        </div>
                        <div className="block">
                            <img src="https://worldarchitecture.org/imgcache/bin-6574192812c5f15162afc5d2da654325.jpeg" alt="Modern Sofa" className="w-full rounded-lg object-cover" />
                        </div>
                        <div className="block">
                            <img src="https://i.pinimg.com/originals/37/69/82/376982859d947a079f98c241a0d0d4a3.png" alt="Minimalist Chair" className="w-full rounded-lg object-cover" />
                        </div>
                        <div className="block">
                            <img src="https://www.furniturechoice.co.uk/v5/img/hier/advice-and-inspiration/12-interior-design-trends-for-2024/05-plush-armchair-with-chrome-legs-in-a-reading-nook.jpg" alt="Wooden Dining Table" className="w-full rounded-lg object-cover" />
                        </div>
                        <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/dba0a5b6-db95-4454-ac60-f16b3af4a73b/_a26f1104-f321-4cbf-97ec-334694996eb6.jpg')] bg-cover bg-center rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6">
                            <h6 className="font-medium text-xl leading-8 text-white mb-4">Scandinavian Bedroom</h6>
                            <p className="text-base font-normal text-white/70">Simple, clean designs that bring warmth and functionality to your bedroom.</p>
                        </div>
                        <div className="block">
                            <img src="https://www.furniturechoice.co.uk/p/l/FS10003298/FS10003298.jpg" alt="Sleek Furniture" className="w-full rounded-lg object-cover" />
                        </div>
                        <div className="bg-[url('https://havenly.com/blog/wp-content/uploads/2022/03/render-final-2946296-58430-15972-511c5a18464e-700x467.jpg')] bg-cover bg-center rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6">
                            <h6 className="font-medium text-xl leading-8 text-white mb-4">Outdoor Furniture</h6>
                            <p className="text-base font-normal text-white/80">Durable and stylish furniture perfect for outdoor lounging and dining.</p>
                        </div>
                    </div>
                    <button className="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
                        Load More Furniture
                    </button>
                </div>
            </section>

            <section class="py-20 relative">
                <div class="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
                    <h1 class="font-manrope font-medium text-4xl text-gray-900 dark:text-gray-200 mb-10 max-md:text-center">
                        Featured Furniture Collections
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="flex items-center flex-col gap-8 w-full group">
                            <div class="block">
                                <img class="rounded-3xl object-cover" src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/79720cf1-c891-4856-987e-db4c6d306b1f/a04733ed352f419c8ccbd0a5a7ab9895p-jpg-960x960.webp" alt="Living Room Set"/>
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 dark:text-zinc-200 mb-1">Modern Sofa Set</h4>
                                    <p class="font-medium text-lg text-gray-400">Living Room Furniture</p>
                                </div>
                                <button
                                    class=" border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                                    <svg class="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                                        xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                        fill="none">
                                        <path
                                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                            stroke="" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="group flex items-center flex-col gap-8 w-full">
                            <div class="block">
                                <img class="rounded-3xl object-cover" src="https://thetimberguy.com/cdn/shop/products/Solid-Sheesham-Wood-Designer-Dining-table-with-Cushioned-Chair-Bench-furniture-set-CHOOSE-YOUR-COMBINATION_0541a87c-82b2-4d7f-b69a-2e91b37cbf8a_1200x.jpg?v=1628791733" alt="Dining Table"/>
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 dark:text-zinc-200 mb-1">Wooden Dining Set</h4>
                                    <p class="font-medium text-lg text-gray-400">Dining Room Furniture</p>
                                </div>
                                <button
                                    class=" border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                                    <svg class="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                                        xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                        fill="none">
                                        <path
                                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                            stroke="" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            class="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                            <div class="block">
                                <img class="rounded-3xl object-cover" src="https://www.dreamo.com.au/wp-content/uploads/2022/10/OTF-535A-BLK-6PC-Main-min.jpg" alt="Outdoor Furniture"/>
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 dark:text-zinc-200 mb-1">Outdoor Lounge</h4>
                                    <p class="font-medium text-lg text-gray-400">Patio & Garden Furniture</p>
                                </div>
                                <button
                                    class=" border border-black dark:border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                                    <svg class="stroke-black dark:stroke-white transition-all duration-300 group-hover:stroke-white dark:group-hover:stroke-black"
                                        xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                        fill="none">
                                        <path
                                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                            stroke="" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="font-manrope text-4xl font-bold text-gray-900 dark:text-gray-200 text-center mb-16">
                        Our Latest Furniture Blog
                    </h2>
                    <div class="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div class="group w-full max-lg:max-w-xl lg:max-w-xs mx-auto">
                            <div class="relative">
                                <img src="https://blog.buyerselect.com/wp-content/uploads/2024/06/scandinavian-bedroom-ideas-article.jpg" class="object-cover rounded-xl h-96 w-full" alt="Scandinavian Bedroom Trends" />
                            </div>
                            <div class="w-full">
                                <h3 class="font-medium text-2xl my-6 text-gray-900 dark:text-gray-200 group-hover:text-indigo-500">Scandinavian Bedroom Trends</h3>
                                <p class="font-medium text-base text-gray-400 leading-relaxed mb-6">Discover how to create the ultimate Scandinavian bedroom retreat with simple and stylish furniture pieces that blend comfort and functionality.</p>
                                <button class="text-lg font-semibold text-indigo-600 flex items-center gap-x-2">Read more <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:max-w-xs mx-auto">
                            <div class="relative">
                                <img src="https://st.hzcdn.com/simgs/pictures/patios/san-francisco-2-story-addition-jmj-studios-img~e05165890b95318e_14-7453-1-6c03eb2.jpg" class="object-cover rounded-xl h-96 w-full" alt="Modern Outdoor Spaces" />
                            </div>
                            <div class="w-full">
                                <h3 class="font-medium text-2xl my-6 text-gray-900 dark:text-gray-200 group-hover:text-indigo-500">Creating Modern Outdoor Spaces</h3>
                                <p class="font-medium text-base text-gray-400 leading-relaxed mb-6">Transform your outdoor space with sleek and durable furniture that adds style and comfort to your patio or garden area.</p>
                                <button class="text-lg font-semibold text-indigo-600 flex items-center gap-x-2">Read more <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:max-w-xs mx-auto">
                            <div class="relative">
                                <img src="https://cdn.shopify.com/s/files/1/0298/1577/files/Best_Dining_Chairs_Singapore_Online_Modern_600x600.webp?v=1710944319" class="object-cover rounded-xl h-96 w-full" alt="Choosing a Modern Dining Set" />
                            </div>
                            <div class="w-full">
                                <h3 class="font-medium text-2xl my-6 text-gray-900 dark:text-gray-200 group-hover:text-indigo-500">Choosing a Modern Dining Set</h3>
                                <p class="font-medium text-base text-gray-400 leading-relaxed mb-6">Elevate your dining experience with stylish and functional modern dining furniture that's perfect for any occasion.</p>
                                <button class="text-lg font-semibold text-indigo-600 flex items-center gap-x-2">Read more <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FurnitureTrends;
