// footer
import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 w-full py-8">
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Toko Kita</h3>
                            <p className="text-gray-800 dark:text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?</p>
                        </div>
                        <div className="flex flex-col mt-4 md:mt-0">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Links</h3>
                            <Link to="/" className="text-gray-800 dark:text-white mt-2">Home</Link>
                            <Link to="/products" className="text-gray-800 dark:text-white mt-2">Products</Link>
                            <Link to="/about" className="text-gray-800 dark:text-white mt-2">About</Link>
                            <Link to="/contact" className="text-gray-800 dark:text-white mt-2">Contact</Link>
                        </div>
                        <div className="flex flex-col mt-4 md:mt-0">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact</h3>
                            <p className="text-gray-800 dark:text-white mt-2">123 Street Name</p>
                            <p className="text-gray-800 dark:text-white mt-2">Road Name</p>
                            <p className="text-gray-800 dark:text-white mt-2">London</p>
                            <p className="text-gray-800 dark:text-white mt-2">+44 74139 13807</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}