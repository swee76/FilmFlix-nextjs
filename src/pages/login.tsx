import React, {useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import {motion} from "framer-motion"
import {useRouter} from "next/router";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {FirebaseAuth} from "../../firebase";

const Login = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const visible = {opacity: 1, y: 0, transition: {duration: 1.5}};

    const itemVariants = {
        hidden: {opacity: 0, y: 10},
        visible
    };

    const handleUserSignin = () => {
        createUserWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push('/').then(r => console.log('Successfully created user!'))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="login-bg-image">
            <Header/>
            <motion.div initial="hidden" animate="visible" variants={itemVariants}
                        className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                        Sign in to Your Account
                    </h2>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
                    <form onSubmit={handleUserSignin}>
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
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
                                onClick={() => router.push('/register')}
                                className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                            >
                                Sign up instead
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <Footer/>
        </div>
    );
};

export default Login;