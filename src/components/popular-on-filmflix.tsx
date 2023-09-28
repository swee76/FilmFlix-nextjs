import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"

const posts = [
    {
        id: 1,
        title: 'Film Name 1',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            '/images/Better-call-saul.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Action & Adventure Movies', href: '#'},
    },
    {
        id: 2,
        title: 'Film Name 2',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            '/images/Better-call-saul.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Romantic Movies', href: '#'},
    },
    {
        id: 3,
        title: 'Drama Name 1',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            '/images/Better-call-saul.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'International Dramas', href: '#'},
    },
]

const PopularOnFilmflix = () => {

    const visible = {opacity: 1, x: 0, transition: {duration: 3.5}};

    const leftItemVariants = {
        hidden: {opacity: 0, x: 100},
        visible
    };

    const rightItemVariants = {
        hidden: {opacity: 0, x: -100},
        visible
    };


    return (
        <div className="mx-20">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts.map((post) => (
                    <motion.div key={post.id} initial="hidden" animate="visible"
                                variants={post.id % 2 ? leftItemVariants : rightItemVariants}
                                className={`relative isolate flex flex-col gap-8 ${post.id % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                            <Image
                                src={post.imageUrl}
                                alt={`${post.title} image`}
                                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                width={6000}
                                height={1000}
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <Link
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium text-gray-500 hover:text-red-900 hover:bg-orange-50"
                                >
                                    {post.category.title}
                                </Link>
                            </div>
                            <div className="group relative max-w-xl">
                                <h3 className="mt-3 text-2xl font-semibold leading-6 gradient-text hover:text-red-900">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0"/>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PopularOnFilmflix;