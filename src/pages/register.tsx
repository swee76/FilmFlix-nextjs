import React, {useState} from 'react';
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import {UserTypes} from "../enums/user-types";
import {FirebaseAuth, FirebaseDatabase, FirebaseStorage} from "../../firebase";
import {getDownloadURL, ref as storageRef, uploadString} from "firebase/storage";
import {ref as databaseRef, set } from 'firebase/database'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {login} from "../features/userSlice";
import {useAppDispatch, useAppSelector} from "../hooks";
import {UserCircleIcon} from "@heroicons/react/20/solid";
import {toast} from "react-toastify";

const Register = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [hasAcceptedAgreements, setHasAcceptedAgreements] = useState(false)
    const [fileBase64, setFileBase64] = useState<string>('')

    const visible = {opacity: 1, y: 0, transition: {duration: 1.5}};

    const itemVariants = {
        hidden: {opacity: 0, y: 10},
        visible
    };

    const handleImageFileChange = async (event: any) => {
        const file = event.target.files[0]
        setSelectedImageFile(file.name)

        const base64 = await convertBase64(file)
        setFileBase64(base64)
    }

    const convertBase64 = (file: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result!.toString())
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })

    }

    const [loading, setLoading] = useState(false)

    const handleUserSignUp = () => {
        if (!selectedImageFile) {
            toast.error('Please select an image!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
            })

            return
        }

        const validateImageType = selectedImageFile.includes('.jpg') ||
            selectedImageFile.includes('.png') || selectedImageFile.includes('.jpeg')


        if (!validateImageType) {
            toast.error('Image type is not valid!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
            })

            return
        }

        const extension = selectedImageFile.split('.')[1]


        if (isNaN(+contactNumber) || contactNumber.includes('.') || contactNumber.includes(' ')) {
            toast.error('Contact Number should be a number!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
            })

            return
        }

        if (contactNumber.trim().length !== 10) {
            toast.error('Contact Number should be a number & limited to 10 digits!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
            })

            return
        }

        if (password.trim().length < 6) {
            toast.error('Password should be at least 6 characters!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
            })

            return
        }

        const storageReference = storageRef(FirebaseStorage, `user_images/${email?.split('@')[0]}/profile_image.${extension}`);


        setLoading(true)
        createUserWithEmailAndPassword(FirebaseAuth, email, password)
            .then(async userCredential => {
                const user = userCredential.user;
                uploadString(storageReference, fileBase64, 'data_url').then((snapshot) => {
                    getDownloadURL(storageReference)
                        .then((url) => {
                            set(databaseRef(FirebaseDatabase, `users/${email?.split('@')[0]}/`), {
                                userImage: url,
                                username: username,
                                email: email,
                                // password: password,
                                contactNumber: contactNumber,
                                role: UserTypes.customer as UserTypes,
                            }).then(async res => {
                                toast.success('Successfully registered user!', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                })

                                dispatch(login({
                                    email: email,
                                    role: UserTypes.customer,
                                }))

                                setLoading(false)
                                await router.push('/')
                            })
                        })
                        .catch(error => {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            toast.error(errorMessage, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: true,
                            })
                            setLoading(false)
                            return
                        })
                }).catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    toast.error(errorMessage, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                    })
                    setLoading(false)
                    return
                })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                })
                setLoading(false)
                return
            })
    }

    return (
        <div className="login-bg-image">
            <Header/>
            <motion.div initial="hidden" animate="visible" variants={itemVariants}
                        className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                        Create Your Account on FilmFlix
                    </h2>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleUserSignUp()
                    }}>
                        <div>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true"/>
                                <input
                                    type="file"
                                    accept={'.jpg, .png, .jpeg'}
                                    onChange={handleImageFileChange}
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                />
                            </div>
                        </div>
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
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Please enter your password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="contact-number"
                                       className="block text-sm font-medium leading-6 text-gray-400">
                                    Contact Number
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="contact-number"
                                    name="contact-number"
                                    type="text"
                                    autoComplete="tel"
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    placeholder="Please enter your contact number"
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
                                        checked={hasAcceptedAgreements}
                                        onChange={() => setHasAcceptedAgreements(!hasAcceptedAgreements)}
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
                                disabled={!hasAcceptedAgreements}
                                className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 disabled:bg-neutral-500"
                            >
                                {loading ? 'Loading...' : 'Sign up'}
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push('/login').then(r => console.log('Redirects to login page'))
                                }}
                                className="flex w-full justify-center rounded-3xl bg-red-900 border border-gray-400 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
                            >
                                Sign in instead
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <Footer/>
        </div>
    )
        ;
};

export default Register;