import React from 'react';
export default function Footer() {
    return (
        <footer className="bg-[url('/footer.png')]   shadow dark:bg-gray-900  min-h-52 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between mt-4">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="./wesearch.jpg" className="h-8" alt="WeSearch" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WeSearch</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">WeSearch</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
