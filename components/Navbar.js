import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <span className="text-2xl pl-2"><i className="em em-grinning"></i> BrOY</span>
                    </a>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="#">HOME</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">CLASSES</a>
                        </li>
                        <li className="mr-3">
                            <Link href="/about">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">ABOUT</a>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">LOG IN</a>
                        </li>
                        <li className="mr-3">
                            <Link href='/bar'>
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Nbar</a>
                            </Link>
                            <Link href='/test'>
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">TEST</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="block lg:hidden">
                        <button id="nav-toggle" onClick= {() => { 
                            setShow(!show)
                            }} 
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                </div>
                
            </nav>
                {/*<!--Mobile-->*/}
            {
                show ?
                    <nav className="mt-20 bg-gray-700 text-white">
                        <ul className="ml-10">
                            <li className="py-2">HOME</li>
                            <li className="py-2">
                                <Link href="/about">
                                    <a className="hover:text-gray-200">ABOUT</a>
                                </Link>
                            </li>
                            <li className="py-2">YOGA TYPES</li>
                            <li className="py-2">CLASSES</li>
                        </ul>
                    </nav>
                    :
                    null
            }
             
        </div>
    )
}

export default Navbar


/* 
<div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18">

            </div>
*/