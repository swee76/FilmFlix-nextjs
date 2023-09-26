import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import Image from "next/image";

const TermsAndConditions = () => {
    return (
        <div>
            <Header/>
            <div className="bg-neutral-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
                    <p className="text-base font-semibold leading-7 text-red-800">Introducing</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                        className="gradient-text">
        Terms and Conditions
    </span></h2>
                    <p className="mt-6 text-xl leading-8">
                        Please read these Terms and Conditions carefully before using FilmFlix services.
                        By accessing or using FilmFlix, you agree to be bound by these Terms and Conditions.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            FilmFlix provides streaming services, including access to movies, TV shows, and other
                            content.
                            Your use of FilmFlix is subject to the following terms and conditions:
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-800" aria-hidden="true"/>
                                <span>
                <strong className="font-semibold text-neutral-400">Privacy and Data Protection:</strong> We
                        respect your privacy. FilmFlix may collect and use your data as described in our Privacy Policy.
              </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-800" aria-hidden="true"/>
                                <span>
                <strong className="font-semibold text-neutral-400">Content Usage:</strong> You may use FilmFlix
                        solely for personal and non-commercial purposes. Reproduction or distribution of content is
                        prohibited.
              </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-yellow-800" aria-hidden="true"/>
                                <span>
                <strong className="font-semibold text-neutral-400">Account Security:</strong> You are responsible
                        for maintaining the confidentiality of your account information and password. Notify us of any
                        unauthorized use.
              </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            By using FilmFlix, you agree to abide by these Terms and Conditions and any additional
                            guidelines and
                            policies provided by FilmFlix. Violation of these terms may result in the suspension or
                            termination of
                            your account.
                        </p>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-orange-900">Contact Information</h2>
                        <p className="mt-6">
                            If you have any questions or concerns about these Terms and Conditions, please contact us
                            at <span className="text-yellow-800"> contact@filmflix.com</span>
                        </p>
                        <figure className="mt-10 border-l border-red-900 pl-9">
                            <blockquote className="font-semibold text-gray-300">
                                <p>
                                    "FilmFlix is dedicated to providing you with the best movie streaming experience.
                                    Our commitment is to
                                    deliver high-quality content that you'll love. If you have any feedback or
                                    inquiries, please don't hesitate
                                    to reach out. We're here to make your movie-watching experience exceptional."
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 flex gap-x-4">
                                <Image
                                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                    src="/images/osini.png"
                                    alt="Team Leader Image"
                                    width={6000}
                                    height={1000}
                                />
                                <div className="text-sm leading-6">
                                    <strong className="font-semibold text-gray-300">Osini Kithma</strong> – Team
                                    Leader
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <figure className="mt-16">
                        <Image
                            className="aspect-video rounded-xl object-fit"
                            src="/images/terms-and-cond.jpg"
                            alt="Terms and Conditions Image"
                            width={6000}
                            height={500}
                        />
                        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                                                   aria-hidden="true"/>
                            Illustrative image for representation purposes only.
                        </figcaption>
                    </figure>
                    <div className="mt-16 max-w-2xl">
                        <h2 className="text-2xl font-bold tracking-tight text-orange-900">Exploring Our Platform</h2>
                        <p className="mt-6">
                            FilmFlix offers a comprehensive selection of movies and TV shows to cater to your
                            entertainment needs. Whether you're a film enthusiast or just looking for some leisurely
                            entertainment, our platform has something for everyone. Our user-friendly interface and
                            powerful search functionality make it easy to discover new content and revisit old
                            favorites.
                        </p>
                        <p className="mt-8">
                            Our content library is regularly updated to ensure you have access to the latest releases,
                            classic films, and exclusive content. At FilmFlix, we strive to be your go-to destination
                            for all things cinema.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TermsAndConditions;