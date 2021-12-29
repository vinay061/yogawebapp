import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    // const [show, setShow] = useState(false);
    const [display, setDisplay] = useState(false)
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <span className="text-2xl pl-2"><i className="em em-grinning"></i>Breath of Yoga</span>
                    </a>
                    </Link>
                   
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link href="/">
                                <a className="inline-block py-2 px-4 text-white no-underline" href="#">HOME</a>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/Directbooking">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">BOOKING</a>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/Profile">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">ABOUT</a>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/Cmsdata">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">BLOG</a>
                            </Link>
                        </li>
                        {/* <li className="mr-3">
                            <Link href="/Booking">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">WEEKLY BOOKING</a>
                            </Link>
                        </li> */}
                        {/* <li className="mr-3">
                            <Link href='#'>
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">MONTHLY BOOKING</a>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href='#'>
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">SINGLE DAY BOOKING</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                { /** Original Mobile Toggle Logic */}
                <div className="block lg:hidden">
                        {/* <button id="nav-toggle" onClick= {() => { 
                            setShow(!show)
                            }} 
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button> */}
                        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                console.log(`first time: ${display}`)
                                setDisplay(!display)
                                console.log("display set")
                                console.log(display)
                                }
                            }>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                </div>
                
            </nav>
                {/*<!-- Original Mobile Nav-->*/}
            {/* {
                show ?
                    <nav className="mt-20 bg-gray-700 text-white">
                        <ul className="ml-10">
                            <li className="py-2">
                                <Link href="/">
                                    <a href="#">HOME</a>
                                </Link>
                            </li>
                            <li className="py-2">
                               <Link href="/Directbooking">
                                   <a className="hover:text-gray-200">BOOKING</a>
                               </Link>
                            </li>
                            <li className="py-2">
                                 <Link href="/Profile">
                                   <a className="hover:text-gray-200">ABOUT</a>
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                    :
                    null
            } */}
            {/**Sidebar for mobile  */}
            <div className="relative">
                {/* <!-- mobile menu bar --> */}
                <div className="bg-gray-800 text-gray-100 flex justify-between lg:hidden md:hidden">
                    {/* <!-- logo --> */}
                    <a href="#" className="block p-4 text-white font-bold">Breath of Yoga</a>

                    {/* <!-- mobile menu button --> */}
                    {/* <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                console.log(`first time: ${display}`)
                                setDisplay(!display)
                                console.log("display set")
                                console.log(display)
                                }
                            }>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> */}
                    {/** draft mobile navbar */}
                        {
                            display?
                            <nav className="sidebar bg-gray-800 fixed h-screen space-y-4 w-72 py-7 px-2 inset-y-0
                                        left-0 transform translate-x-0 transition duration-200 z-40">
                                <Link href="/">
                                    <a className="block p-4 text-lg text-white font-bold hover:bg-blue-700 hover:text-white">
                                        Breath of Yoga
                                    </a> 
                                </Link>
                                <Link href="/">
                                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 
                                    hover:text-white">
                                    Home
                                    </a>
                                </Link>
                                <Link href="/Directbooking">
                                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 
                                        hover:text-white">
                                        Booking
                                    </a>
                                </Link>
                                <Link href="/Profile">
                                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                        About
                                    </a>
                                </Link>
                                <Link href="/Cmsdata">
                                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Blog
                                    </a>
                                </Link>
                                
                            </nav>
                            :
                            null
                        }
                </div>
            </div> 
        </div>
    )
}

export default Navbar


