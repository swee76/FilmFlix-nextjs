import React from 'react';
import Image from "next/image";
import {HeartIcon} from "@heroicons/react/24/outline";

const files = [
    {
        id: 1,
        title: 'Film 1',
        size: '3.9 MB',
        source:
            '/images/Ice-Age-poster.jpg',
    },
    {
        id: 2,
        title: 'Film 2',
        size: '3.9 MB',
        source:
            '/images/Ice-Age-poster.jpg',
    },
    {
        id: 3,
        title: 'Film 3',
        size: '3.9 MB',
        source:
            '/images/Ice-Age-poster.jpg',
    },
    {
        id: 4,
        title: 'Film 4',
        size: '3.9 MB',
        source:
            '/images/Ice-Age-poster.jpg',
    },
    {
        id: 5,
        title: 'Film 5',
        size: '3.9 MB',
        source:
            '/images/Ice-Age-poster.jpg',
    },
]

const KidsSpecial = () => {
    return (
        <div className="mx-20 overflow-x-auto">
            <div role="list"
                 className="scrollbar-container">
                {files.map((file) => (
                    <div key={file.id} className="relative scrollbar-item">
                        <div
                            className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-red-900 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <Image src={file.source} alt={`${file.title} Banner`}
                                   className="pointer-events-none object-cover group-hover:opacity-75" width={800}
                                   height={200}/>
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {file.title}</span>
                            </button>
                        </div>
                        <div className="flex flex-row justify-between items-center px-2 bg-neutral-700 rounded">
                            <div>
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">{file.title}</p>
                                <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                            </div>
                            <HeartIcon className="w-5 h-5 text-neutral-900"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KidsSpecial;