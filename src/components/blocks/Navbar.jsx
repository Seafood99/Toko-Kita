// navbar
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 dark:text-white">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
                        Toko Kita
                    </Link>
                    <button className="text-gray-800 dark:text-white focus:outline-none md:hidden">
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="md:flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col mt-4 md:flex-row md:mt-0 md:mx-1">
                        <Link to="/" className="my-1 text-sm text-gray-800 dark:text-white md:mx-4 md:my-0">Home</Link>
                        <Link to="/products" className="my-1 text-sm text-gray-800 dark:text-white md:mx-4 md:my-0">Products</Link>
                        <Link to="/about" className="my-1 text-sm text-gray-800 dark:text-white md:mx-4 md:my-0">About</Link>
                        <Link to="/contact" className="my-1 text-sm text-gray-800 dark:text-white md:mx-4 md:my-0">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}