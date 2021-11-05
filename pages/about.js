import Image from "next/dist/client/image"
import pic from '../public/images/cardone.jpg'
import cardtwo from '../public/images/cardtwo.jpg'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/dist/client/link"
import Head from "next/head"


function about() {
    return (
        <div>
           <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <title>Breath of Yoga |Yoga in Luxembourg| Meditation | Emotions</title>
                <meta name="description" content="Enjoy Yoga workout for your body, breath and mind in Luxembourg. 
                Learn some of the breathing techniques to relax your mind and body. Explore tools to practice at home" />
                <meta name="google-site-verification" content="zX1PEdcO-DPbHLwHEXuhKeyNuh9AgAK3cfvx1zgUbYA" />
            </Head>

            <header>
                {/*<!-- Navbar -->*/}
                <Navbar/>

                {/*<!-- Section Hero -->*/}

                <div className="bg-yellow-100 py-14">
                    <h3 className="text-2xl mt-6 tracking-widest text-green-600 text-center">FEATURES</h3>
                    <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">Our Features & Services.</h1>

                    {/*<!-- Box -->*/}
                    <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                        {/*<!-- box-1 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={pic} className='' alt="pic of yog" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Hatha Yoga</h1>
                                    <p className="mt-4 text-gray-600">Yoga performed with tradional asanas and meditation</p>
                                    <Link href="/tryoga">
                                        <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                                            MORE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*<!-- box-2 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={cardtwo} alt="cardtwo" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">108 Yoga Asanas</h1>
                                    <p className="mt-4 text-gray-600">Sun Salutations to increase strength, flexibility and relaxation</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>

                        {/*<!-- box-3 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={pic} alt="pic of yog" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Running / Joging Yoga</h1>
                                    <p className="mt-4 text-gray-600">For people who love running and help you run better through yogic practices</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*<!-- Footer -->*/}
            <Footer/>
        </div>

    )
}

export default about
