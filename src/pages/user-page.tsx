import React, {Fragment, useEffect, useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {EllipsisVerticalIcon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/20/solid'
import {Menu, Transition} from '@headlessui/react'
import Link from "next/link";
import {get as dbGet, onValue, query, ref as databaseRef, remove as dbRemove} from 'firebase/database'
import {FirebaseDatabase, FirebaseStorage} from "../../firebase";
import {deleteObject, ref as storageRef} from "firebase/storage";
import Image from "next/image";
import Spinner from "../components/spinner";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const UserPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [userData, setUserData] = useState<any[]>([])

    const fetchData = () => {
        const usersRef = databaseRef(FirebaseDatabase, 'users')

        onValue(usersRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const dataArray = Object.values(data)
                setUserData(dataArray)
            }
        })
    }

    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [])

    useEffect(() => {
        if (userData && userData.length) {
            setIsLoading(false)
        }
    }, [userData]);

    const handleRemoveUser = async (email: string) => {
        const uniqueUserId = email.split('@')[0];

        console.log('uniqueUserId: ', uniqueUserId)

        try {
            // Remove subscribedPlans
            await dbRemove(databaseRef(FirebaseDatabase, `subscribedPlans/${uniqueUserId}`));
            console.log('subs plans uni: ', uniqueUserId)
            // Query movies uploaded by the user
            const moviesQuery = query(databaseRef(FirebaseDatabase, 'movies'))
            console.log('moviesQuery: ', moviesQuery)

            const moviesSnapshot = await dbGet(moviesQuery);

            console.log('movies snapshot: ', moviesSnapshot)

            const movies = []


            moviesSnapshot.forEach((movie) => {
                const uploadedUser = movie.val().uploadedUser

                if (uploadedUser === email) {
                    movies.push(movie.val())
                }
            })

            if (movies.length) {
                const deletionPromises = [];

                movies.forEach((movie) => {
                    const movieKey = movie.key;
                    console.log(movieKey)

                    // Remove the movie from Firebase Storage
                    const movieCoverPhotoPath = `movie-cover-photos/${movieKey}`;
                    const moviePath = `movies/${movieKey}`;

                    deletionPromises.push(deleteObject(storageRef(FirebaseStorage, movieCoverPhotoPath)));
                    deletionPromises.push(deleteObject(storageRef(FirebaseStorage, moviePath)));

                    // Remove the movie from the database
                    deletionPromises.push(dbRemove(databaseRef(FirebaseDatabase, `movies/${movieKey}`)));

                    console.log(`Movie removed: ${movie.val().movieName}`);
                });

                // Wait for all deletion operations to complete
                await Promise.all(deletionPromises);
            }

            // Remove user images from Firebase Storage
            const userImagesPath = `user_images/${uniqueUserId}`;
            await deleteObject(storageRef(FirebaseStorage, userImagesPath));

            console.log(`User data removed for email: ${email}`);

            // Clear the old user data
            setUserData([]);

            // Fetch the updated user data
            fetchData();

        } catch
            (error) {
            console.error("Error removing user data:", error);
        }
    }

    return (
        <div>
            {isLoading && <Spinner isLoading={isLoading}/>}
            <Header/>
            <div className="bg-neutral-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="max-w-full px-6">
                            <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl"><span
                                className="gradient-text">
      User List
    </span></h2>
                            <div className="my-9">
                                <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {userData.map((person) => (
                                        <div key={person.email}
                                             className="col-span-1 divide-y divide-gray-200 rounded-lg bg-red-100 bg-opacity-50 shadow">
                                            <div className="flex flex-col">
                                                <Menu as="div"
                                                      className="relative inline-block ml-auto mt-1 mr-1 text-left">
                                                    <div>
                                                        <Menu.Button
                                                            className="flex items-center rounded-full bg-transparent text-red-900 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                            <span className="sr-only">Open options</span>
                                                            <EllipsisVerticalIcon className="h-5 w-5"
                                                                                  aria-hidden="true"/>
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {person.role === 'admin' && <Menu.Item>
                                                                    {({active}) => (
                                                                        <button
                                                                            type="button"
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm w-full text-left'
                                                                            )}
                                                                        >
                                                                            Remove Admin Privileges
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>}
                                                                {person.role === 'subscriber' && <Menu.Item>
                                                                    {({active}) => (
                                                                        <button
                                                                            type="button"
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm w-full text-left'
                                                                            )}
                                                                        >
                                                                            Grant Admin Privileges
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>}
                                                                <Menu.Item>
                                                                    {({active}) => (
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveUser(person.email)}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm w-full text-left'
                                                                            )}
                                                                        >
                                                                            Remove User
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>

                                                <div
                                                    className="flex w-full items-center justify-between space-x-6 px-6 pb-5">
                                                    <div className="flex-1 truncate">
                                                        <div className="flex items-center space-x-3">
                                                            <h3 className="truncate text-sm font-bold text-gray-900">{person.username}</h3>
                                                            <span
                                                                className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium  ${person.role === 'admin' ? 'bg-red-50 text-red-600 ring-red-500/20' : 'bg-orange-50 text-orange-600 ring-orange-500/20'} ring-1 ring-inset`}>
                  {person.role}
                </span>
                                                        </div>
                                                        <p className="mt-3 truncate text-xs text-gray-800">{person.email}</p>
                                                    </div>
                                                    <Image
                                                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                                        src={person.userImage}
                                                        alt={`${person.username} image`} width={100} height={100}/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="-mt-px flex divide-x divide-gray-200">
                                                    <div className="flex w-0 flex-1">
                                                        <Link
                                                            href={`mailto:${person.email}`}
                                                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                                        >
                                                            <EnvelopeIcon
                                                                className={`h-5 w-5 ${person.role === 'admin' ? 'text-red-900' : 'text-orange-900'}`}
                                                                aria-hidden="true"/>
                                                            Email
                                                        </Link>
                                                    </div>
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <Link
                                                            href={`tel:${person.contactNumber}`}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                                        >
                                                            <PhoneIcon
                                                                className={`h-5 w-5 ${person.role === 'admin' ? 'text-red-900' : 'text-orange-900'}`}
                                                                aria-hidden="true"/>
                                                            Call
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserPage;