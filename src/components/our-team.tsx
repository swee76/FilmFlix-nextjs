import React from 'react';
import Image from "next/image";

const people = [
    {
        name: 'Kithma A.P.O.',
        registration_no:'IT20228026',
        role: 'Team Leader',
        imageUrl:
            '/images/osini.png'
    },
    {
        name: 'W.C.Y.S. Lowe',
        registration_no:'IT20014940',
        role: 'Group Member',
        imageUrl:
            '/images/yasas.png'
    },
    {
        name: 'Chathuranga K.G.S',
        registration_no:'IT20016852',
        role: 'Group Member',
        imageUrl:
            '/images/sameera.png'
    },
    {
        name: 'Vidanage K.H.',
        registration_no:'IT20021320',
        role: 'Group Member',
        imageUrl:
            '/images/kethmi.png'
    },
]
const OurTeam = () => {
    return (
        <div className="bg-gray-400 bg-opacity-10 rounded-xl py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-sm leading-8 text-gray-600">
                        Meet the FilmFlix development team – the architects of your streaming experience. These experts
                        are the driving force behind our platform's innovation. Together, they craft the future of movie
                        streaming, ensuring you enjoy the best in entertainment.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="team member image" width={'100'} height={'100'}/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-400">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-red-900">{person.registration_no}</p>
                                    <p className="text-xs font-semibold leading-6 text-gray-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurTeam;