import { useState } from "react/cjs/react.development"
import Link from "next/link"

const Mobnav = () => {
    const [display, setDisplay] = useState(false)
    return (
        <div>
            <div className="relative min-h-screen md:flex">

            {/* <!-- mobile menu bar --> */}
            <div className="bg-gray-800 text-gray-100 flex justify-between lg:hidden md:hidden">
                {/* <!-- logo --> */}
                <a href="#" className="block p-4 text-white font-bold">Breath of Yoga</a>

                {/* <!-- mobile menu button --> */}
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
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
                </button>
                {/** draft mobile navbar */}
                    {
                        display?
                        <nav className="sidebar bg-gray-800 absolute h-screen space-y-4 w-36 py-7 px-2 inset-y-0
                                     left-0 transform translate-x-0 transition duration-200">
                            <Link href="/">
                                <a className="block p-4 text-xs text-white font-bold hover:bg-blue-700 hover:text-white">
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

            {/* <!-- sidebar --> */}
            <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute 
                            inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 
                            transition duration-200 ease-in-out">

            {/* <!-- logo --> */}
            <a href="#" className="text-white flex items-center space-x-2 px-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-2xl font-extrabold">Breath of Yoga</span>
            </a>

           </div>

                {/* <!-- content --> */}
                <div className="flex-1 p-10 text-2xl font-bold">
                content goes here
                </div>

            </div>
        </div>
    )
}

export default Mobnav