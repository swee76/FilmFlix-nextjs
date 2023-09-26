import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

const PrivacyPolicy = () => {
    return (
        <div>
            <Header/>
            <div className="bg-neutral-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <p className="text-base font-semibold leading-7 text-red-900">Your Privacy Matters</p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                            className="gradient-text">
       Privacy Policy
    </span></h2>
                        <div
                            className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    At FilmFlix, we value and respect your privacy. This Privacy Policy outlines how we
                                    collect, use, and protect your personal information when you use our platform. By
                                    using FilmFlix, you agree to the practices described in this policy.
                                </p>
                                <p className="mt-8">
                                    We collect various types of information to enhance your experience and improve our
                                    services. This includes data related to your interactions with our platform, the
                                    content you view, and the device you use to access FilmFlix.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Your personal information is safeguarded with us. We do not share or sell your data
                                    to third parties for marketing purposes. FilmFlix uses your data solely to provide
                                    you with a personalized and enjoyable streaming experience.
                                </p>
                                <p className="mt-8">
                                    We take security seriously and employ industry-standard measures to protect your
                                    data from unauthorized access. If you have any concerns or questions about your
                                    privacy, please feel free to contact us at <span
                                    className="text-yellow-800">contactfilmflix@google.com</span>.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex">
                            <Link
                                href="/terms-and-conditions"
                                className="solid-primary-button rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Read Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16 lg:pt-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Image
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                            src="/images/privacy-policy.jpg"
                            alt="Privacy Policy Image"
                            width={6000}
                            height={1000}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-neutral-700 pt-[7%]"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;