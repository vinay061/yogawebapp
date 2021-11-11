import React from 'react'
import Link from 'next/dist/client/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/dist/client/image'
import picone from '../public/images/cardone.jpg'
import cobra from '../public/images/cobra.png'
import mind from '../public/images/mind.png'
import energy from '../public/images/energy.jpg'
import joy from '../public/images/joy.png'
import gyoga from '../public/images/groupyoga.jpg'
import Head from 'next/head'

export default function tryoga() {
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
                 {/* <!-- Card --> */}
    <div className="shadow-md rounded-md bg-green-500 mx-5 my-2">

      <div className="p-5">
          <h5 className="text-xl font-semibold mb-2">About</h5>

          <p className="mb-2">This form of yoga focuses on the breath, body, mind and energy</p>
          <p className="text-xl font-semibold">Details</p>
            <ul>
                <li>Duration: 60 mins</li>
                <li>Main focus: Strength with flexibility and relaxation</li>
                <li></li>
            </ul>
      </div>

  </div>
  {/* Image */}
            {/* <div className="container mx-auto bg-yellow-200">
                <div className="p-10">
                    <Image src={gyoga} 
                        alt="group yoga"
                    />
                </div>
            </div> */}
            
            
            
            
            <div>
                <h1 className="text-4xl text-green-500 text-center">Yoga Course Elements</h1>
                <div className="px-10 sm:px-40 md:px-40 lg:px-40 xl:px-40 py-84 mt-5 mb-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    {/* <!-- Card one --> */} {/**style="width: 350px; */}

                    <div className="shadow-md rounded-md hover:shadow-xl transform hover:scale-105 transition duration-500"> 
                        <div className="lg:flex md:flex sm:flex">
                            <div className="">
                                <Image src={cobra} alt="cardone"
                                       width={400}
                                       height={400}   />
                            </div>
                            <div className="flex flex-col justify-between pl-1">
                                <h5 className="text-xl font-semibold mb-2">Body: Yoga Poses (Asanas)</h5>
                                <p className="mb-4">Strengthen and tones muscles, while burning fat and reducing cholestrol. Yoga poses are also great to maintain flexibility and range of motion.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card one --> */}
                    {/* <!-- Card two --> */} {/**style="width: 350px; */}

                    <div className="shadow-md rounded-md hover:shadow-xl transform hover:scale-105 transition duration-500"> 
                        <div className="lg:flex md:flex sm:flex">
                            <div className="">
                                <Image src={mind} alt="mind"
                                       width={300}
                                       height={300} />
                            </div>
                            <div className="flex flex-col justify-between pl-2">
                                <h5 className="text-xl font-semibold mb-2">Mind: Meditation and Relaxtion</h5>
                                <p className="mb-4">Discover yoga nidra an amazing form of conscious relaxation that calms the body and relaxes the mind.</p>
                            </div>
                           
                        </div>
                    </div>
                    {/* <!-- Card two --> */}
                    {/* <!-- Card three --> */} {/**style="width: 350px; */}
                    <div className="shadow-md rounded-md hover:shadow-xl transform hover:scale-105 transition duration-500"> 
                        <div className="lg:flex md:flex sm:flex">
                            
                            <div className="">
                                <Image src={energy} alt="mind"
                                       width={400}
                                       height={400} />
                            </div>
                            <div className="flex flex-col justify-between pl-2">
                                <h5 className="text-xl font-semibold mb-2">Energy: Yogic Breathing (Pranayama)</h5>
                                <p className="mb-4">Tune into your breath with new tools. These tools energize your body and mind so that you feel fresh and equipped for the day.</p>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- Card three --> */}   
                    {/* <!-- Card four --> */} {/**style="width: 350px; */}
                    <div className="shadow-md rounded-md hover:shadow-xl transform hover:scale-105 transition duration-500"> 
                        <div className="lg:flex md:flex sm:flex">
                            
                            <div className="">
                                <Image src={joy} className="" 
                                        alt="mind"
                                        width={430}
                                        height={430}
                                />
                            </div>
                            <div className="flex flex-col justify-between pl-2">
                                <h5 className="text-xl font-semibold mb-2">Emotions: Impact of breath on emotions</h5>
                                <p className="mb-4">Explore how the breath has an impact on your emotions. Every breath inturn affects the way you feel and with practice have an impact on your mind.</p>
                            </div>
                           
                        </div>
                    </div>
                    {/* <!-- Card four --> */}
                </div>
            </div>
            <div className="space-y-2 lg:space-y-4 mt-20">
                            <h2 className="text-5xl text-center text-green-600 font-bold ">Our services and plans</h2> {/**sm:text-3xl */}
                            <p className="text-2xl w-full text-center text-green-600">You can choose different plans as per your needs</p> {/**sm:w-1/2 xl:w-80 md:text-lg*/}
            </div>
            {/**Pricing section */}
            <section className="py-12 lg:py-16 xl:py-28">
                <div className="container mx-auto px-12">
                    <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
                        {/**Card one */}
                        <div className="shadow-md rounded-md overflow-hidden text-center transform hover:scale-105 transition duration-500"> {/*w-3/12*/}
                            <div className="py-3 px-5 bg-gray-100">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-medium">Single Day</h3>
                                        <div className="">
                                            <span className="text-xl font-medium">€35</span>
                                            <span className="text-gray-400">/day</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="p-5">
                                {/* <h5 className="text-xl font-semibold mb-2">Card title</h5> */}
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Duration 60 minutes</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Single day session</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Choose the location, date and time that fits you</p>
                                <div className="border-t border-gray-200 m-bootom-10 mt-2 mb-4"></div>
                                
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Launching Soon
                                    </button>
                                
                            </div>
                            <div className="py-3 px-5 bg-gray-100">
                                    Singleday workout plan
                            </div> 
                        </div>
                        {/* Card one ending*/}
                        {/* Card Two */}
                        <div className="shadow-md rounded-md overflow-hidden text-center transform hover:scale-105 transition duration-500"> {/*w-3/12*/}
                            <div className="py-3 px-5 bg-gray-100">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-medium">Weekly plan</h3>
                                        <div className="">
                                            <span className="text-xl font-medium">€100</span>
                                            <span className="text-gray-400">/week</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="p-5">
                                {/* <h5 className="text-xl font-semibold mb-2">Card title</h5> */}
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Duration 60 minutes</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Weekly 4 sessions</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Choose the location, date and time that fits you</p>
                                <div className="border-t border-gray-200 m-bootom-10 mt-2 mb-4"></div>
                                <Link href='/Location'>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Book Weekly Plan
                                    </button>
                                </Link>
                            </div>
                            <div className="py-3 px-5 bg-gray-100">
                                    Weekly workout plan
                            </div> 
                        </div>
                        {/** Card two ending */}
                        {/**Card three */}
                        <div className="shadow-md rounded-md overflow-hidden text-center transform hover:scale-105 transition duration-500"> {/*w-3/12*/}
                            <div className="py-3 px-5 bg-gray-100">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-medium">Monthly plan</h3>
                                        <div className="">
                                            <span className="text-xl font-medium">€240</span>
                                            <span className="text-gray-400">/month</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="p-5">
                                {/* <h5 className="text-xl font-semibold mb-2">Card title</h5> */}
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Duration 60 minutes</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Weekly 4 sessions and total of 16 sessions</p>
                                <div className="border-t border-gray-200 m-bootom-10 my-2"></div>
                                <p>Choose the location, date and time that fits you</p>
                                <div className="border-t border-gray-200 m-bootom-10 mt-2 mb-4"></div>
                                <button
                                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button">
                                    Launching Soon
                                </button>
                            </div>
                            <div className="py-3 px-5 bg-gray-100">
                                    Monthly workout plan
                            </div> 
                        </div>
                        {/**Card three ending */}
                    </div>
                </div>
            </section>
            <Footer/>

    
        </div>
    )
}


