import React, {useEffect, useState} from 'react';
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "../hooks";
import {login, logout} from "../features/userSlice";
import {child, get} from "firebase/database";
import {ref as databaseRef} from "@firebase/database";
import {FirebaseAuth, FirebaseDatabase} from "../../firebase";
import {User} from "../interfaces/user";

const navigation = [
    {name: 'Movie Uploader', href: '/movie-uploader', allowedRoles: ['admin']},
    {name: 'Popular Movie Updater', href: '/popular-movie-updater', allowedRoles: ['admin']},
    {name: 'User Page', href: '/user-page', allowedRoles: ['admin']},
    {name: 'Browse', href: '/browse', allowedRoles: ['admin','subscriber']},
]

const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        const loggedUser = localStorage.getItem('email')
        if (loggedUser) {
            dispatch(login())
        }
    }, [])

    useEffect(() => {
        checkUserRoles()
    }, [currentUser]);

    const checkUserRoles = () => {
        const userEmail = FirebaseAuth.currentUser?.email

        get(child(databaseRef(FirebaseDatabase), `users/${userEmail?.split('@')[0]}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setCurrentUser(snapshot.val())
                } else {
                    console.log('No data available')
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const allowedNavigationLinks = navigation.filter((item) => {
        if (user.isLoggedIn) {
            return item.allowedRoles.includes(currentUser?.role);
        }
        return false; // Show the link if the user is not logged in
    });

    const handleSignOut = () => {
        dispatch(logout())
    }

    return (
        <header className="fixed w-screen bg-neutral-900 z-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-0" aria-label="Global">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-4">
                    <span className="sr-only">Your Company</span>
                    <Image className="h-10 w-10 rounded-full" src="/images/Header_logo.jpg"
                           alt="logo" width="100" height="100"/>
                    <h2 className="text-white font-bold text-2xl">FilmFlix</h2>
                </Link>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    {allowedNavigationLinks.map((item) => (
                        <Link key={item.name} href={item.href}
                              className="text-sm font-semibold leading-6 text-gray-400">
                            {item.name}
                        </Link>
                    ))}
                    {!user.isLoggedIn ? <Link href="/login"
                                              className="outlined-primary-button px-3 py-1 rounded-lg text-sm font-semibold leading-6 text-gray-400">
                            Log in
                        </Link> :
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="solid-primary-button text-center -mx-3 block rounded-lg px-3 py-0.5 font-semibold leading-7"
                        >
                            Log out
                        </button>}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-10 w-10 rounded-full"
                                src="/images/Header_logo.jpg"
                                alt="logo" width="100" height="100"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {allowedNavigationLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6 w-full">
                                {!user.isLoggedIn ? <Link
                                        href="/login"
                                        className="w-full outlined-primary-button text-center -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-400 hover:text-gray-800"
                                    >
                                        Log in
                                    </Link> :
                                    <button
                                        type="button"
                                        onClick={handleSignOut}
                                        className="w-full solid-primary-button text-center -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                                    >
                                        Log out
                                    </button>}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Header;