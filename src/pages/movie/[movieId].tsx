import React, {useEffect, useState} from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import {useRouter} from 'next/router'
import {child, get, ref as databaseRef} from 'firebase/database'
import {FirebaseDatabase} from "../../../firebase";
import {Movie} from "../../interfaces/movie";
import Spinner from "../../components/spinner";
import ReactPlayer from "react-player";

const Index = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [movieInfo, setMovieInfo] = useState<Movie | null>(null)

    useEffect(() => {
        get(child(databaseRef(FirebaseDatabase), `movies/${router.query.movieId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setMovieInfo(snapshot.val())
                    console.log(snapshot)
                } else {
                    console.log('No data available')
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [router.query.id])

    useEffect(() => {
        console.log(movieInfo)
    }, [movieInfo])

    return (
        <div className="bg-neutral-900">
            {isLoading && <Spinner isLoading={isLoading}/>}
            <Header/>
            <div className="grid place-items-center mx-20">
                <ReactPlayer
                    width="100%"
                    height="90%"
                    loop
                    url={movieInfo?.movieUrl}
                    playing={true} controls={true}/>
            </div>
            <div className="mx-20 text-gray-300">
                <div className="flex items-center gap-5">
                    <h3 className="text-3xl font-semibold">{movieInfo?.movieName}</h3>
                    <div
                        className="bg-stone-700 bg-opacity-30 text-red-900 px-1.5 py-0.5 text-xs rounded-lg text-center max-w-fit">
                        <span className="gradient-text">{movieInfo?.videoCategory}</span></div>
                </div>
                <p className="mt-3 text-gray-400">{movieInfo?.videoDescription}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Index;