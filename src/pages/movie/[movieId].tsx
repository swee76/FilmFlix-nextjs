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
            <Footer/>
        </div>
    );
};

export default Index;