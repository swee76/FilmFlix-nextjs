import React, {Fragment, useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/24/solid";
import {Listbox, Transition} from '@headlessui/react'
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

const films = [
    {id: 1, name: 'Wade Cooper'},
    {id: 2, name: 'Arlene Mccoy'},
    {id: 3, name: 'Devon Webb'},
    {id: 4, name: 'Tom Cook'},
    {id: 5, name: 'Tanya Fox'},
    {id: 6, name: 'Hellen Schmidt'},
    {id: 7, name: 'Caroline Schultz'},
    {id: 8, name: 'Mason Heaney'},
    {id: 9, name: 'Claudie Smitham'},
    {id: 10, name: 'Emil Schaefer'},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const PopularMovieUpdater = () => {
    const [selectedFirstFilm, setSelectedFirstFilm] = useState(films[3])
    const [selectedSecondFilm, setSelectedSecondFilm] = useState(films[3])
    const [selectedThirdFilm, setSelectedThirdFilm] = useState(films[3])

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
                                    <Listbox value={selectedFirstFilm} onChange={setSelectedFirstFilm}>
                                        {({open}) => (
                                            <>
                                                <Listbox.Label
                                                    className="block text-sm font-medium leading-6 text-gray-200">Popular
                                                    Film 1</Listbox.Label>
                                                <div className="relative mt-2">
                                                    <Listbox.Button
                                                        className="relative w-full cursor-default rounded-md bg-neutral-800 py-1.5 pl-3 pr-10 text-left text-gray-300 shadow-sm ring-1 ring-inset ring-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-900 sm:text-sm sm:leading-6">
                                                        <span className="block truncate">{selectedFirstFilm.name}</span>
                                                        <span
                                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-700 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dropdown-scrollbar">
                                                            {films.map((person) => (
                                                                <Listbox.Option
                                                                    key={person.id}
                                                                    className={({active}) =>
                                                                        classNames(
                                                                            active ? 'bg-red-800 text-white' : 'text-gray-300',
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                        )
                                                                    }
                                                                    value={person}
                                                                >
                                                                    {({selected, active}) => (
                                                                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'text-white' : 'text-gray-300',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                                <div className="col-span-full">
                                    <Listbox value={selectedSecondFilm} onChange={setSelectedSecondFilm}>
                                        {({open}) => (
                                            <>
                                                <Listbox.Label
                                                    className="block text-sm font-medium leading-6 text-gray-200">Popular
                                                    Film 2</Listbox.Label>
                                                <div className="relative mt-2">
                                                    <Listbox.Button
                                                        className="relative w-full cursor-default rounded-md bg-neutral-800 py-1.5 pl-3 pr-10 text-left text-gray-300 shadow-sm ring-1 ring-inset ring-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-900 sm:text-sm sm:leading-6">
                                                        <span
                                                            className="block truncate">{selectedSecondFilm.name}</span>
                                                        <span
                                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-700 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dropdown-scrollbar">
                                                            {films.map((person) => (
                                                                <Listbox.Option
                                                                    key={person.id}
                                                                    className={({active}) =>
                                                                        classNames(
                                                                            active ? 'bg-red-800 text-white' : 'text-gray-300',
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                        )
                                                                    }
                                                                    value={person}
                                                                >
                                                                    {({selected, active}) => (
                                                                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'text-white' : 'text-gray-300',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>

                                <div className="col-span-full">
                                    <Listbox value={selectedThirdFilm} onChange={setSelectedThirdFilm}>
                                        {({open}) => (
                                            <>
                                                <Listbox.Label
                                                    className="block text-sm font-medium leading-6 text-gray-200">Popular
                                                    Film 3</Listbox.Label>
                                                <div className="relative mt-2">
                                                    <Listbox.Button
                                                        className="relative w-full cursor-default rounded-md bg-neutral-800 py-1.5 pl-3 pr-10 text-left text-gray-300 shadow-sm ring-1 ring-inset ring-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-900 sm:text-sm sm:leading-6">
                                                        <span
                                                            className="block truncate">{selectedThirdFilm.name}</span>
                                                        <span
                                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-700 py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dropdown-scrollbar">
                                                            {films.map((person) => (
                                                                <Listbox.Option
                                                                    key={person.id}
                                                                    className={({active}) =>
                                                                        classNames(
                                                                            active ? 'bg-red-800 text-white' : 'text-gray-300',
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                        )
                                                                    }
                                                                    value={person}
                                                                >
                                                                    {({selected, active}) => (
                                                                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'text-white' : 'text-gray-300',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>
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