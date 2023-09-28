import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {VideoCameraIcon} from '@heroicons/react/24/solid'
import Image from "next/image";

const MovieUploader = () => {
    return (
        <div className="bg-neutral-900">
            <Header/>
            <form>
                <div className="space-y-12 mx-10 sm:mx-20 pt-24">
                    <div className="pb-2">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                                className="gradient-text">
        Film Submission Center
    </span></h2>
                            <h6 className="text-gray-600">-Upload Your Masterpiece-</h6>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse gap-9 items-start">
                            <div className="w-full lg:basis-1/3 mt-10 lg:w-52 h-1/2">
                                <Image src="/images/films-uploader-img.jpg" alt="movie uploader banner image"
                                       width={2000} height={500}/>
                                <p className="text-gray-400 text-base mt-5 font-mono">"Explore your creativity and
                                    showcase your
                                    filmmaking skills on FilmFlix. Your videos can inspire, entertain, and unite
                                    audiences worldwide. FilmFlix lets you share your passion project, thrilling
                                    adventure, or heartwarming story. Join our community of storytellers, filmmakers,
                                    and visionaries to showcase your work. Your video could change lives and leave a
                                    legacy. So why delay? Start uploading today and join a global movement where your
                                    imagination is limitless!"</p>
                            </div>

                            <div className="w-full lg:basis-2/3">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="upload-video"
                                               className="block text-sm font-medium leading-6 text-white">
                                            Upload the Video
                                        </label>
                                        <div
                                            className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                            <div className="text-center">
                                                <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-500"
                                                                 aria-hidden="true"/>
                                                <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none hover:text-red-900"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file"
                                                               className="sr-only"/>
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-400">MP4, MKV, WEBM up to
                                                    2GB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="description"
                                               className="block text-sm font-medium leading-6 text-white">
                                            Video Description
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
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
            <Footer/>
        </div>
    );
};

export default MovieUploader;