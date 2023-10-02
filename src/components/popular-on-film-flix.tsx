import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"
import {ref as databaseRef} from "@firebase/database";
import {FirebaseDatabase} from "../../firebase";
import {onValue} from "firebase/database";
import {PopularFilm} from "../interfaces/popularFilm";
import {getTopicIdByName} from "../utils/film-category-list";
import {getNumberByPopularFilm} from "../utils/popular-film-list-helper";

const PopularOnFilmFlix = () => {

    const visible = {opacity: 1, x: 0, transition: {duration: 2.5}};

    const leftItemVariants = {
        hidden: {opacity: 0, x: 100},
        visible
    };

    const rightItemVariants = {
        hidden: {opacity: 0, x: -100},
        visible
    };

    const [dataList, setDataList] = useState<PopularFilm[]>([])
    const [popularFilmsList, setPopularFilmsList] = useState<PopularFilm[]>([])
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchData = () => {
        const popularFilmsRef = databaseRef(FirebaseDatabase, 'popularFilms')

        onValue(popularFilmsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const dataArray: any = Object.values(data)
                setDataList(dataArray)
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const sortedData = [...dataList].sort((a, b) => {
            // Assuming the date format is YYYY-MM-DD
            return new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime();
        });

        if (sortedData.length > 0) {
            setPopularFilmsList([sortedData[0]]);
            setDataLoaded(true);
        }
    }, [dataList]);

    const propertyNames = ['firstPopularFilm', 'secondPopularFilm', 'thirdPopularFilm'];

    const setDate = () => {
        const entryDate = new Date(popularFilmsList[0]?.entryDate);
        return entryDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }


    return (
        <div className="mx-20">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {propertyNames.map((propertyName, index) => {
                    // Access the film data using the property name
                    const filmData = popularFilmsList[0]?.[propertyName];

                    return (
                        // Conditionally render motion.div based on dataLoaded flag
                        dataLoaded ? (
                            <motion.div key={filmData?.movieId} initial="hidden" animate="visible"
                                        variants={getNumberByPopularFilm(propertyName) % 2 ? leftItemVariants : rightItemVariants}
                                        className={`relative isolate flex flex-col gap-8 ${getNumberByPopularFilm(propertyName) % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div
                                    className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        src={filmData?.movieCoverPhoto}
                                        alt={`${filmData?.movieName} image`}
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-fill"
                                        width={6000}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={popularFilmsList[0]?.entryDate} className="text-gray-500">
                                            {setDate()}
                                        </time>
                                        <Link
                                            href={`#${getTopicIdByName(filmData?.videoCategory)}`}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-500 hover:text-red-900 hover:bg-orange-50"
                                        >
                                            {filmData?.videoCategory}
                                        </Link>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-2xl font-semibold leading-6 gradient-text hover:text-red-900">
                                            <Link href={`/movie/${filmData?.movieId}`}>
                                                <span className="absolute inset-0"/>
                                                {filmData?.movieName}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">{filmData?.videoDescription}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : null
                    );
                })}
                {!dataLoaded && <p className="text-lg text-gray-500 text-center -mt-10">No Popular Films Available</p>}
            </div>
        </div>
    );
};

export default PopularOnFilmFlix;