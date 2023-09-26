import React from 'react';
import Link from "next/link";
import Image from "next/image";

const CtaSection = () => {
    return (
        <div className="overflow-hidden py-24 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                            className="gradient-text">
        Simplify Movie Streaming
    </span></h2>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Take charge of your movie library! Explore our admin portal to effortlessly manage, upload,
                            and curate your collection. Say goodbye to complexity and hello to simplicity. Elevate your
                            movie streaming platform today!
                        </p>
                        <p className="mt-6 text-sm leading-7 text-gray-400">
                            Streamline your movie management with our admin portal! Organize content with ease,
                            delivering an unparalleled viewing experience to your users. With intuitive tools and robust
                            features, you're in control. Join us today to revolutionize how you share movies with the
                            world.
                        </p>

                        <div className="mt-10 flex">
                            <Link
                                href="/login"
                                className="solid-primary-button rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Join our team <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <Image
                                src="/images/Across-the-Spider-Verse-2023-poster.jpg"
                                alt="spiderman film poster"
                                className="aspect-[7/5] max-w-none rounded-2xl bg-gray-50 object-cover"
                                width={'600'}
                                height={'1000'}
                            />
                        </div>
                        <div
                            className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <Image
                                    src="/images/Jujutsu_Kaisen-poster.jpg"
                                    alt="Jujutsu kaisen poster"
                                    className="aspect-[4/4.3] max-w-none flex-none rounded-2xl bg-gray-50 object-left-top"
                                    width={'300'}
                                    height={'6000'}
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <Image
                                    src="/images/Better-call-saul.jpg"
                                    alt="Better Call Saul poster"
                                    className="aspect-[7/5] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    width={'600'}
                                    height={'2000'}
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <Image
                                    src="/images/Love-death-plus-robots.jpg"
                                    alt="Interstellar poster"
                                    className="aspect-[4/3] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    width={'400'}
                                    height={'1700'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;