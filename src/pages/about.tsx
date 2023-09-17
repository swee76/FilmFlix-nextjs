import React, {useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

const stats = [
    {label: 'Movies Available', value: '10,000+'},
    {label: 'TV Shows', value: '500+'},
    {label: 'Exclusive Content', value: '200+'},
    {label: 'Active Subscribers', value: '5 million+'},
]
const values = [
    {
        name: 'Passion for Film',
        description:
            'We are driven by our deep passion for the art of filmmaking, recognizing its power to inspire, entertain, and bring people together.',
    },
    {
        name: 'Customer-Centric',
        description:
            'Our viewers are at the heart of everything we do. We prioritize their satisfaction, listening to their feedback and continuously improving their streaming experience.',
    },
    {
        name: 'Innovation',
        description:
            'We embrace technological innovation to deliver cutting-edge features and content. We believe in staying ahead of the curve to provide the best possible service.',
    },
    {
        name: 'Diversity and Inclusion',
        description:
            'FilmFlix celebrates diversity in all its forms. We aim to represent and honor diverse voices and stories from around the world.',
    },
    {
        name: 'Quality Excellence',
        description:
            'We strive for excellence in every aspect of our platform, from content curation to streaming quality. Quality is our hallmark.',
    },
    {
        name: 'Community Engagement',
        description:
            'We foster a sense of community among movie enthusiasts. Join us in discussions, events, and exclusive content that unites film lovers.',
    },
]

const About = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <Header/>
            <main className="isolate bg-neutral-900">
                {/* Hero section */}
                <div className="relative isolate -z-10 mr-10 pb-5">
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#450a0a] to-[#450a0a] opacity-40"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-32 lg:px-8 lg:pt-24">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
                                        <span className="gradient-text">
                                        Elevating Your Movie Experience.</span>
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Discover a world of cinematic wonder at FilmFlix. We're more than just a movie
                                        streaming site; we're
                                        changing the way people connect with the films they love. Dive into our vast
                                        library of classic
                                        movies, latest releases, and exclusive content, all at your fingertips.
                                    </p>
                                </div>
                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <Image
                                                src="/images/Wednesday-poster.jpg"
                                                alt="Wednesday Poster"
                                                className="aspect-[2/3] w-full rounded-xl object-cover"
                                                width={'1000'}
                                                height={'1000'}
                                            />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <Image
                                                src="/images/Snow-white-huntsman-poster.jpg"
                                                alt="Snow White Huntsman Poster"
                                                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                                                width={'1000'}
                                                height={'1000'}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src="/images/The-bad-guys-poster.jpg"
                                                alt="The Bad Guys Poster"
                                                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                                                width={'1000'}
                                                height={'1000'}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <Image
                                                src="/images/Barbie-poster.jpg"
                                                alt="Barbie Poster"
                                                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                                                width={'1000'}
                                                height={'1000'}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                src="/images/The-flash-poster.jpg"
                                                alt="The Flash Poster"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                width={'1000'}
                                                height={'1000'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Our story</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl leading-8 text-gray-600">
                                    FilmFlix is more than just a streaming platform; it's a journey through the world of
                                    cinema. Our mission is to provide seamless access to an unparalleled collection of
                                    movies, TV shows, and exclusive content, all curated for the ultimate entertainment
                                    experience.
                                </p>
                                <div className="mt-10 max-w-xl text-base leading-7 text-gray-400">
                                    <p>
                                        Founded on a passion for storytelling, FilmFlix has grown into a global
                                        community of movie lovers. We believe in the power of film to connect people,
                                        inspire emotions, and spark conversations. Our platform is designed to deliver
                                        exceptional cinematic content to your screen, whether you're a casual viewer or
                                        a devoted cinephile.
                                    </p>
                                    <p className="mt-10">
                                        At FilmFlix, our dedication to quality and innovation sets us apart. We are
                                        proud to present our remarkable journey in numbers:
                                    </p>
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-300">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <Image
                        src="/images/our-goal.jpg"
                        alt="Our Goal Image"
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                        width={'1000'}
                        height={'700'}
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Our values</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At FilmFlix, we hold these values dear, guiding us in our journey to provide exceptional
                            cinematic experiences to our audience.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-300">{value.name}</dt>
                                <dd className="mt-1 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default About;