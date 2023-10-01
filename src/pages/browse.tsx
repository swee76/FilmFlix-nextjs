import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import ActionAndAdventureMovies from "../components/action-and-adventure-movies";
import AnimeStories from "../components/anime-stories";
import HorrorMovies from "../components/horror-movies";
import ComedyMovies from "../components/comedy-movies";
import RomanticMovies from "../components/romantic-movies";
import KidsSpecial from "../components/kids-special";
import SciFiMovies from "../components/sci-fi-movies";
import InternationalDramas from "../components/international-dramas";
import PopularOnFilmflix from "../components/popular-on-filmflix";

const Browse = () => {
    return (
        <div className="bg-neutral-900">
            <Header/>
            <div className="bg-neutral-900">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image className="object-cover max-w-none"
                                        src="/images/Spiderman-noway-home-poster.jpg"
                                        alt="spiderman noway home banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/john-wick-poster.jpg"
                                        alt="john wick 4 banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/mr-robot-season-2-poster.jpg"
                                        alt="mr robot season 2 banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/inception-poster.jpg"
                                        alt="inception banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/tenet-poster.jpg"
                                        alt="tenet banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/breaking-down-poster.jpg"
                                        alt="breaking down banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/batman-poster.jpg"
                                        alt="Batman banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/Karate-Kid-poster.jpg"
                                        alt="the karate kid banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/Avatar-poster.jpg"
                                        alt="avatar banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/naruto-poster.jpg"
                                        alt="naruto banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/maxresdefault-poster.jpg"
                                        alt="john wick 2 banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none" src="/images/oppenheimer-poster.jpg"
                                        alt="oppenheimer banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                    <SwiperSlide><Image className="object-cover max-w-none"
                                        src="/images/The-Last-Knight-transformers-poster.jpg"
                                        alt="Transformers banner image"
                                        width={6000} height={2000}/></SwiperSlide>
                </Swiper>
            </div>
            <div className="my-10 mx-20 text-2xl text-white">Popular on FilmFlix</div>
            <PopularOnFilmflix/>
            <div className="my-10 mx-20 text-2xl text-white">Action & Adventure Movies</div>
            <ActionAndAdventureMovies/>
            <div className="my-10 mx-20 text-2xl text-white">Anime Stories</div>
            <AnimeStories/>
            <div className="my-10 mx-20 text-2xl text-white">Horror Movies</div>
            <HorrorMovies/>
            <div className="my-10 mx-20 text-2xl text-white">Comedy Movies</div>
            <ComedyMovies/>
            <div className="my-10 mx-20 text-2xl text-white">Romantic Movies</div>
            <RomanticMovies/>
            <div className="my-10 mx-20 text-2xl text-white">Kids Special</div>
            <KidsSpecial/>
            <div className="my-10 mx-20 text-2xl text-white">Sci-Fi Movies</div>
            <SciFiMovies/>
            <div className="my-10 mx-20 text-2xl text-white">International Dramas</div>
            <InternationalDramas/>
            <Footer/>
        </div>
    );
};

export default Browse;