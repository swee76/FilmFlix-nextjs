import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {motion} from "framer-motion"

const Login = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const visible = {opacity: 1, y: 0, transition: {duration: 1.5}};

    const itemVariants = {
        hidden: {opacity: 0, y: 10},
        visible
    };

    useEffect(() => {
        // Check local storage for the stored state (true for sign-in, false for sign-up)
        const storedState = localStorage.getItem('isSignUpForm');

        // Set the initial state based on the stored value
        setShowSignUpForm(storedState === 'true');

        return () => {
            localStorage.removeItem('isSignUpForm');
        };
    }, []);

    const displaySignUpForm = () => {
        localStorage.setItem('isSignUpForm', 'true');
        setShowSignUpForm(true);
    }

    const displaySignInForm = () => {
        localStorage.setItem('isSignUpForm', 'false');
        setShowSignUpForm(false);
    }

    return (
        <div className="login-bg-image">
            <Header/>
            {!showSignUpForm ?
                <motion.div initial="hidden" animate="visible" variants={itemVariants}
                            className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                            Sign in to Your Account
                        </h2>
                    </div>

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
                        <form action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Please enter your email address"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-400">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Please enter your password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex gap-6 items-center justify-between">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                                >
                                    Sign in
                                </button>
                                <button
                                    type="submit"
                                    onClick={displaySignUpForm}
                                    className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                                >
                                    Sign up instead
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div> :
                <motion.div initial="hidden" animate="visible" variants={itemVariants}
                            className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                            Create Your Account on FilmFlix
                        </h2>
                    </div>

                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
                        <form action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-400">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Please enter your username"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Please enter email address"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-400">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Please enter your password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="relative flex items-start bg-black max-w-fit pr-2">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="accept-agreement"
                                            name="accept-agreement"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <label htmlFor="accept-agreement" className="font-medium text-gray-300">
                                            Accept Licence & Agreement
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-6 items-center justify-between">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                                >
                                    Sign up
                                </button>
                                <button
                                    type="submit"
                                    onClick={displaySignInForm}
                                    className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                                >
                                    Sign in instead
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>}
            <Footer/>
        </div>
    );
};

export default Login;