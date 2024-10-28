import React from "react";

import { Button, Link, Image, Card } from '@nextui-org/react';

import HeroCarousel from "../../components/HeroCarousel";
import Gallery from "../../components/Gallery";
import Information from "../../components/InformationSection";
import FindAStore from "../../components/FindAStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
        <div className="font-sans">
            {/* Hero Section */}
            <HeroCarousel />        

            {/* Trends Section */}
            <Gallery />

            {/* Collection Section */}
            <section className="py-16 bg-green-100 dark:bg-emerald-900 mt-24">
                <div className="max-w-6xl mx-auto items-center justify-between px-6 gap-5 grid md:grid-cols-2">
                    <div className="w-100">
                        <h2 className="text-2xl font-bold dark:text-zinc-200">Shop anything and everything</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 ">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <Button color="success" endContent={<FontAwesomeIcon icon={faArrowRight} />} as={Link} href="/collections" className="mt-4">
                            Browse Our Collections
                        </Button>  
                    </div>
                    <div className="w-100">
                        <img className="w-full h-full object-cover rounded-2xl" src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Collection" />
                    </div>
                </div>
            </section>

            {/* Information Section */}
            <Information />

            {/* Find A Store Section */}
            <FindAStore />
        </div>
        </>                          
    );
}

export default Home;