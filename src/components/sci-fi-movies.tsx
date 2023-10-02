import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {HeartIcon, TrashIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import {ref as databaseRef} from "@firebase/database";
import {FirebaseAuth, FirebaseDatabase} from "../../firebase";
import {onValue} from "firebase/database";
import {Movie} from "../interfaces/movie";

const SciFiMovies = () => {
    const router = useRouter()
    const [dataList, setDataList] = useState<Movie[]>([])
    const [sciFiMovies, setSciFiMovies] = useState<Movie[]>([])
    const fetchData = () => {
        const popularFilmsRef = databaseRef(FirebaseDatabase, 'movies')

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
        const filteredMovies = dataList.filter(data => data.videoCategory === 'Sci-Fi Movies')
        setSciFiMovies(filteredMovies)
    }, [dataList]);

    return (
        <div className="mx-20 overflow-x-auto">
            <div role="list"
                 className="scrollbar-container">
                {sciFiMovies.map((movie) => (
                    <div key={movie.movieId} className="relative scrollbar-item shadow shadow-white rounded-lg">
                        <div onClick={() => router.push(`/movie/${movie.movieId}`)}
                             className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-red-900 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <Image src={movie.movieCoverPhoto} alt={`${movie.movieName} Banner`}
                                   className="pointer-events-none object-cover group-hover:opacity-75" width={800}
                                   height={200}/>
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {movie.movieName}</span>
                            </button>
                        </div>
                        <div className="flex flex-row justify-between items-center px-2 bg-neutral-900 rounded">
                            <div>
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300 movie-name-length">{movie.movieName}</p>
                                <p className="pointer-events-none block text-sm font-medium text-gray-500">{movie.videoDescription.slice(0, 20)}...</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <HeartIcon className="w-5 h-5 text-orange-900"/>
                                {FirebaseAuth.currentUser.email === movie.uploadedUser &&
                                    <TrashIcon className="w-5 h-5 text-red-900"/>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SciFiMovies;