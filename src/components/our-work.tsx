import React from 'react';

const incentives = [
    {
        name: 'Renovate & restructure the Project',
        imageSrc: '/icons/renovation.png',
        description: "Renovate the project with next.js, tailwindCSS, and more."
    },
    {
        name: 'Available on Github',
        imageSrc: '/icons/github.png',
        description: "The FilmFlix project code will be available on Github.",
    },
    {
        name: 'Deployment',
        imageSrc: '/icons/deployment.png',
        description:
            "This project is deployed on Vercel",
    },
]

const OurWork = () => {
    return (
        <div className="bg-transparent">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-transparent px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-50">
                                Our Work on FilmFlix
                            </h2>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                            {incentives.map((incentive) => (
                                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                                    <div className="sm:flex-shrink-0">
                                        <div className="flow-root">
                                            <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="svg images" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 className="text-sm font-medium text-gray-100">{incentive.name}</h3>
                                        <p className="mt-2 text-sm text-gray-200">{incentive.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;