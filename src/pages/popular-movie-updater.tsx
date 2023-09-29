import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import {PhotoIcon, VideoCameraIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        href: '/browse',
        imageUrl:
            '/images/Lord-of-the-rings-poster.jpg',
    },
    {
        id: 2,
        title: 'Frozen 2',
        href: '/browse',
        imageUrl:
            '/images/Frozen-poster.jpg',
    },
    {
        id: 3,
        title: 'Remember Me',
        href: '/browse',
        imageUrl:
            '/images/Remember-me-poster.jpg',
    },
]

const PopularMovieUpdater = () => {
    return (
        <div className="bg-neutral-900">
            <Header/>
            <form>
                <div className="space-y-12 mx-10 sm:mx-20 pt-24">
                    <div className="pb-2">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                                className="gradient-text">
        Most Popular Featured Flicks
    </span></h2>
                            <h6 className="text-gray-600">-Highlighted Hits of the Month-</h6>
                        </div>

                        <div
                            className="mx-auto mt-10 lg:mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 h-size">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="relative isolate flex flex-col justify-end overflow-hidden h-full rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                                >
                                    <Image src={post.imageUrl} alt={`${post.title} image`}
                                           className="absolute inset-0 -z-10 h-full w-full object-fill" width={200}
                                           height={500}/>
                                    <div
                                        className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-800 via-neutral-900/40"/>
                                    <div
                                        className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                    <h3 className="mt-3 text-lg text-center font-semibold leading-6 text-white">
                                        <Link href={post.href}>
                                            <span className="absolute inset-0"/>
                                            {post.title}
                                        </Link>
                                    </h3>
                                </article>
                            ))}
                        </div>

                        <div className="mx-auto">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="cover-photo"
                                           className="block text-sm font-medium leading-6 text-white">
                                        Cover photo
                                    </label>
                                    <div
                                        className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-500"
                                                       aria-hidden="true"/>
                                            <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white hover:text-red-900"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file"
                                                           className="sr-only"/>
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to
                                                10MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description"
                                           className="block text-sm font-medium leading-6 text-white">
                                        Popular Film Description
                                    </label>
                                    <div className="mt-2">
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about
                                        the film.</p>
                                </div>

                                <div className="col-span-full">
                                    <legend className="text-sm font-semibold leading-6 text-white">Video
                                        Categorization
                                    </legend>
                                    <p className="mt-1 text-sm leading-6 text-gray-400">Choose the perfect category
                                        for your video.</p>
                                    <div
                                        className="mt-6 space-y-6 grid grid-cols-2 sm:grid-cols-3 items-baseline">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="action-and-adventure-movies"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="action-and-adventure-movies"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Action & Adventure Movies
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="anime-stories"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="anime-stories"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Anime Stories
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="horror-movies"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="horror-movies"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Horror Movies
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="comedy-movies"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="comedy-movies"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Comedy Movies
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="romantic-movies"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="romantic-movies"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Romantic Movies
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="kids-special"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="kids-special"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Kids Special
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="sci-fi-movies"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="sci-fi-movies"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                Sci-Fi Movies
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="international-dramas"
                                                name="video-category"
                                                type="radio"
                                                className="h-4 w-4 border-white/10 bg-white/5 text-red-900 focus:ring-red-900 focus:ring-offset-gray-900"
                                            />
                                            <label htmlFor="international-dramas"
                                                   className="block text-sm font-medium leading-6 text-white">
                                                International Dramas
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 flex items-center justify-end gap-x-6">
                                <button type="button"
                                        className="basis-1/2 outlined-primary-button rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="basis-1/2 rounded-md solid-primary-button px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Save New Entry
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
            <Footer/>
        </div>
    );
};

export default PopularMovieUpdater;