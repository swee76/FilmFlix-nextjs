import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {Disclosure} from '@headlessui/react'
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline'
import Link from "next/link";

const faqs = [
    {
        question: "How do I sign up for FilmFlix?",
        answer:
            "Signing up for FilmFlix is easy! Go to the 'Log in' Page & Click on the 'Sign Up Instead' button at the bottom-right corner of the log in form. You'll need to provide your email address and create a password. Once you've completed the sign-up process, you can start enjoying our vast library of movies and TV shows."
    },
    {
        question: "What types of movies and shows does FilmFlix offer?",
        answer:
            "FilmFlix offers a diverse range of content, including the latest blockbusters, classic films, TV series, documentaries, and more. We have content across various genres, so there's something for everyone, from action and comedy to drama and sci-fi."
    },
    {
        question: "Can I watch FilmFlix on multiple devices?",
        answer:
            "Yes, you can! FilmFlix is compatible with a wide range of devices, including smartphones, tablets, smart TVs, and computers. You can watch your favorite movies and shows on multiple devices, and our platform seamlessly syncs your progress across them."
    },
    {
        question: "Is there a limit to how much I can watch?",
        answer:
            "FilmFlix offers unlimited streaming for all subscribers. You can watch as much content as you like, whenever you want, without any limits or hidden fees."
    },
    {
        question: "Can I download movies and shows to watch offline?",
        answer:
            "Yes, you can! FilmFlix allows you to download movies and TV shows to your mobile device or tablet, so you can enjoy them offline. Just look for the download icon next to eligible titles."
    },
    {
        question: "How do I update my payment information?",
        answer:
            "To update your payment information, log in to your FilmFlix account and go to the 'Account Settings' page. From there, you can easily update your payment method and billing information."
    },
];

const FaqSection = () => {
    return (
        <div>
            <Header/>
            <div className="bg-neutral-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl divide-y divide-gray-300/10">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"><span
                                className="gradient-text">
      Frequently asked questions
    </span></h2>
                            <p className="mt-6 text-base leading-7 text-gray-400">
                                Have a different question and can’t find the answer you’re looking for? Reach out to our
                                support team by{' '}
                                <Link href="mailto:contactfilmflix@google.com" className="font-semibold text-red-900 hover:text-red-800">
                                    sending us an email
                                </Link>{' '}
                                and we’ll get back to you as soon as we can.
                            </p>
                        </div>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-300/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({open}) => (
                                        <>
                                            <dt>
                                                <Disclosure.Button
                                                    className="flex w-full items-start justify-between text-left text-gray-200">
                                                    <span
                                                        className="text-base font-semibold leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                          )}
                        </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-sm leading-7 text-gray-400">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FaqSection;