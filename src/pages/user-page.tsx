import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {EnvelopeIcon, PhoneIcon} from '@heroicons/react/20/solid'

const people = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Subscriber',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper1@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper2@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper3@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Subscriber',
        email: 'janecooper4@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper5@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        role: 'Subscriber',
        email: 'janecooper6@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
]

const UserPage = () => {
    return (
        <div>
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
                                    {people.map((person) => (
                                        <div key={person.email}
                                             className="col-span-1 divide-y divide-gray-200 rounded-lg bg-red-100 bg-opacity-50 shadow">
                                            <div
                                                className="flex w-full items-center justify-between space-x-6 px-6 py-5">
                                                <div className="flex-1 truncate">
                                                    <div className="flex items-center space-x-3">
                                                        <h3 className="truncate text-sm font-bold text-gray-900">{person.name}</h3>
                                                        <span
                                                            className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium  ${person.role === 'Admin' ? 'bg-red-50 text-red-600 ring-red-500/20' : 'bg-orange-50 text-orange-600 ring-orange-500/20'} ring-1 ring-inset`}>
                  {person.role}
                </span>
                                                    </div>
                                                    <p className="mt-3 truncate text-xs text-gray-800">{person.title}</p>
                                                </div>
                                                <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                                     src={person.imageUrl}
                                                     alt=""/>
                                            </div>
                                            <div>
                                                <div className="-mt-px flex divide-x divide-gray-200">
                                                    <div className="flex w-0 flex-1">
                                                        <a
                                                            href={`mailto:${person.email}`}
                                                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                                        >
                                                            <EnvelopeIcon
                                                                className={`h-5 w-5 ${person.role === 'Admin' ? 'text-red-900' : 'text-orange-900'}`}
                                                                aria-hidden="true"/>
                                                            Email
                                                        </a>
                                                    </div>
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={`tel:${person.telephone}`}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                                        >
                                                            <PhoneIcon
                                                                className={`h-5 w-5 ${person.role === 'Admin' ? 'text-red-900' : 'text-orange-900'}`}
                                                                aria-hidden="true"/>
                                                            Call
                                                        </a>
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