import React, {useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {PhotoIcon, VideoCameraIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Image from "next/image";
import {getDownloadURL, ref as storageRef, uploadString} from "firebase/storage";
import {FirebaseAuth, FirebaseDatabase, FirebaseStorage} from "../../firebase";
import {uuid} from 'uuidv4';
import {set} from "firebase/database";
import {ref as databaseRef} from "@firebase/database";
import Spinner from "../components/spinner";
import {useAppSelector} from "../hooks";

const MovieUploader = () => {
    const user = useAppSelector(state => state.user)

    const [isLoading, setIsLoading] = useState(false)
    const [movieName, setMovieName] = useState('')
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [selectedVideoFile, setSelectedVideoFile] = useState(null)
    const [videoDescription, setVideoDescription] = useState('')
    const [videoCategory, setVideoCategory] = useState('Action & Adventure Movies')
    const [imageFileBase64, setImageFileBase64] = useState<string>('')
    const [videoFileBase64, setVideoFileBase64] = useState<string>('')

    const resetFields = () => {
        setMovieName('')
        setSelectedImageFile(null)
        setSelectedVideoFile(null)
        setPreviewImage(null)
        setVideoDescription('')
        setVideoCategory('Action & Adventure Movies')
    }

    const handleImageFileChange = async (event: any) => {
        const file = event.target.files[0]

        if (file.name.includes('.jpg') || file.name.includes('.jpeg') || file.name.includes('.png')) {
            setSelectedImageFile(file.name)

            const base64 = await convertBase64(file)
            setImageFileBase64(base64)

            // Generate a preview image URL
            const previewImageUrl = URL.createObjectURL(file)
            setPreviewImage(previewImageUrl)
        } else if (file.name.includes('.mp4') || file.name.includes('.mkv') || file.name.includes('webm')) {
            setSelectedVideoFile(file.name)

            const base64 = await convertBase64(file)
            setVideoFileBase64(base64)
        }
    }

    const handleRemoveImageFile = (event: any) => {
        setSelectedImageFile(null)
        setPreviewImage(null)
    }

    const handleVideoFileChange = async (event: any) => {
        const file = event.target.files[0]
        setSelectedVideoFile(file.name)

        const base64 = await convertBase64(file)
        setVideoFileBase64(base64)
    }

    const handleRemoveVideoFile = () => {
        setSelectedVideoFile(null)
    }

    const convertBase64 = (file: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result!.toString())
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })

    }

    const handleMovieUploader = async () => {

        setIsLoading(true)

        const validateMovieName = movieName.length < 70

        const validateImageType = selectedImageFile.includes('.jpg') || selectedImageFile.includes('.jpeg') ||
            selectedImageFile.includes('.png')

        const validateVideoType = selectedVideoFile.includes('.mp4') || selectedVideoFile.includes('.mkv') || selectedVideoFile.includes('.webm')

        if (validateMovieName && validateImageType && validateVideoType) {
            const movieId = uuid()
            const movieCoverPhotosStorageReference = storageRef(FirebaseStorage, `movie-cover-photos/${movieId}/` + selectedImageFile!);

            const imageUrl = await uploadString(movieCoverPhotosStorageReference, imageFileBase64, 'data_url').then((snapshot) => {
                return getDownloadURL(movieCoverPhotosStorageReference)
            })

            const moviesStorageReference = storageRef(FirebaseStorage, `movies/${movieId}/` + selectedVideoFile!)

            const videoUrl = await uploadString(moviesStorageReference, videoFileBase64, 'data_url').then((snapshot) => {
                return getDownloadURL(moviesStorageReference)
            })

            if (imageUrl && videoUrl) {
                await set(databaseRef(FirebaseDatabase, `movies/${movieId}/`), {
                    movieId: movieId,
                    movieName: movieName,
                    movieCoverPhoto: imageUrl,
                    movieUrl: videoUrl,
                    videoDescription: videoDescription,
                    videoCategory: videoCategory,
                    uploadedUser: user.email.trim().split('@')[0]
                })
            }
        }
        resetFields()
        setIsLoading(false)
    }

    return (
        <div className={`bg-neutral-900 ${isLoading ? 'overflow-hidden' : ''}`}>
            {isLoading && <Spinner isLoading={isLoading}/>}
            <Header/>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleMovieUploader().then(res => console.log('Successfully Uploaded!'))
            }}>
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
                                        <label htmlFor="movie-name"
                                               className="block text-sm font-medium leading-6 text-gray-400">
                                            Movie Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="movie-name"
                                                name="movie-name"
                                                type="text"
                                                value={movieName}
                                                onChange={(e) => setMovieName(e.target.value)}
                                                placeholder="Enter your movie name"
                                                required
                                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="cover-photo"
                                               className="block text-sm font-medium leading-6 text-white">
                                            Cover photo
                                        </label>
                                        <div
                                            className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                            <div className="text-center text-gray-300">
                                                {!selectedImageFile && <>
                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-500"
                                                               aria-hidden="true"/>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white hover:text-red-900"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" onChange={handleImageFileChange}
                                                                   name="file-upload" type="file"
                                                                   className="sr-only"/>
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to
                                                        10MB</p></>}
                                                {/* Display preview image */}
                                                {previewImage && (
                                                    <div className='flex flex-col mx-auto mb-2 text-gray-300 max-w-fit'>
                                                        <XMarkIcon onClick={handleRemoveImageFile}
                                                                   className='w-5 h-5 flex justify-items-start align-top place-self-end'/>
                                                        <Image src={previewImage} alt='Preview' className='max-w-md'
                                                               width={200} height={200}/>
                                                    </div>
                                                )}
                                                {selectedImageFile && <p>Selected file: {selectedImageFile}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="upload-video"
                                               className="block text-sm font-medium leading-6 text-white">
                                            Upload the Video
                                        </label>
                                        <div
                                            className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                            <div className="text-center">
                                                {!selectedVideoFile && <>
                                                    <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-500"
                                                                     aria-hidden="true"/>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none hover:text-red-900"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" onChange={handleVideoFileChange}
                                                                   name="file-upload" type="file"
                                                                   className="sr-only"/>
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-400">MP4, MKV, WEBM up to
                                                        2GB</p></>}
                                                {selectedVideoFile &&
                                                    <div className="flex flex-row gap-3 text-gray-300"><p>Selected Video
                                                        File: {selectedVideoFile}</p><XMarkIcon
                                                        onClick={handleRemoveVideoFile}
                                                        className='w-5 h-5 flex justify-items-start align-top place-self-end'/>
                                                    </div>
                                                }
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
                    value={videoDescription}
                    onChange={(e) => setVideoDescription(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
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
                                                    value="Action & Adventure Movies"
                                                    checked={videoCategory === 'Action & Adventure Movies'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Anime Stories"
                                                    checked={videoCategory === 'Anime Stories'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Horror Movies"
                                                    checked={videoCategory === 'Horror Movies'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Comedy Movies"
                                                    checked={videoCategory === 'Comedy Movies'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Romantic Movies"
                                                    checked={videoCategory === 'Romantic Movies'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Kids Special"
                                                    checked={videoCategory === 'Kids Special'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="Sci-Fi Movies"
                                                    checked={videoCategory === 'Sci-Fi Movies'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                                    value="International Dramas"
                                                    checked={videoCategory === 'International Dramas'}
                                                    onChange={(e) => setVideoCategory(e.target.value)}
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
                                    <button type="button" onClick={(e) => {
                                        e.preventDefault()
                                        resetFields()
                                    }}
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