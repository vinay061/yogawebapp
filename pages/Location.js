import React from 'react'
import Link from 'next/dist/client/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/dist/client/image'
import pic from '../public/images/cardone.jpg'
import cardtwo from '../public/images/cardtwo.jpg'
import Head from 'next/head'

export default function Location() {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <title>Breath of Yoga</title>
                <meta name="description" content="Enjoy Yoga workout for your body, breath and mind in Luxembourg " />
                <meta name="google-site-verification" content="zX1PEdcO-DPbHLwHEXuhKeyNuh9AgAK3cfvx1zgUbYA" />
            </Head>
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="shadow-md rounded-md bg-green-500 mx-5 my-2">
                <div className="p-5">
                    <h5 className="text-xl font-semibold mb-2">About</h5>

                    <p className="mb-2">This form of yoga focuses on the breath, body, mind and energy</p>
                    <p className="text-xl font-semibold">Details</p>
                        <ul>
                            <li>Duration: 60 mins for Four days</li>
                            <li>Main focus: Strength with flexibility and relaxation</li>
                            <li>Over a period of four days, you will be taken through different yoga poses. This will help you to increase the strength and flexibilty</li>
                        </ul>
                </div>
            </div>
           <div className="mt-16 py-4 px-4 w-72 rounded-xl shadow-lg">
            <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Please choose a location</h1>
            </div> 
           </div>      
           {/*  Card **/}
           <div className="md:flex md:justify-center md:space-x-8 md:px-14 md:py-14">
          
               {/*<!-- box-1 -->*/}
                <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div className="py-3 px-5 bg-gray-100">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Timings: 8 AM to 12 & 14:30 to 20:00 </h3>
                        </div>
                    </div>
                    <div className="w-sm">
                        <Image src={pic} className='' alt="pic of yog" />
                        <div className="mt-4 text-green-600 text-center">
                            <h1 className="text-xl font-bold">Beggen: Rythm and Soul</h1>
                            <p className="mt-4 text-gray-600">Address: 233-241 Rue de Beggen, 1221 Luxembourg</p>
                            <Link href="/Booking">
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                                    Beggen
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*<!-- box-2 -->*/}
                <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="py-3 px-5 bg-gray-100">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-medium">Timings: 6 AM to 8 AM </h3>
                        </div>
                    </div>
                    <div className="w-sm">
                        <Image src={cardtwo} alt="cardtwo" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">Hollerich: Flow-Studio</h1>
                                <p className="mt-4 text-gray-600">89 Rue de Hollerich, 1741 Luxembourg</p>
                                <Link href="/Bookinghollerich">
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                                Hollerich</button>
                                </Link>
                            
                            </div>
                    </div>
                </div>
           </div>
            
            
            
            
            
           
            <Footer/>

    
        </div>
    )
}


