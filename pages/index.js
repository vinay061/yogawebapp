import Image from "next/dist/client/image"
import pic from '../public/images/cardone.jpg'
import picone from '../public/images/yoga.webp'
import pictwo from '../public/images/luxembourg.webp'
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
                <title>Breath of Yoga |Yoga in Luxembourg| Fitness | Body | Mind</title>
                <meta name="description" content="Enjoy Yoga workout for your body, breath and mind in Luxembourg. 
                Feel energised & relaxed after every Yoga session. Yoga Philosophy can be explored on request" />
                <meta name="google-site-verification" content="zX1PEdcO-DPbHLwHEXuhKeyNuh9AgAK3cfvx1zgUbYA" />
            </Head>
            {/*<!-- component -->*/}
            <header>
                {/*<!-- Navbar -->*/}
                <Navbar/>

                {/*<!-- Section Hero -->*/}

                <div className="bg-yellow-100 py-14">
                    <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">BREATH OF YOGA</h1>
                    <h3 className="text-2xl mt-6 tracking-widest text-green-600 text-center">Choose your Yoga Style</h3>
                    
                    {/*<!-- Box -->*/}
                    <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                        {/*<!-- box-1 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={picone} className='' alt="pic of yog" />
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
                                <Image src={pictwo} alt="cardtwo" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">108 Yoga Asanas</h1>
                                    <p className="mt-4 text-gray-600">Sun Salutations to increase strength, flexibility and relaxation</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Launching Soon</button>
                                </div>
                            </div>
                        </div>

                        {/*<!-- box-3 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={picone} alt="pic of yog" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Running / Joging Yoga</h1>
                                    <p className="mt-4 text-gray-600">For people who love running and help you run better through yogic practices</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Launching Soon</button>
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

/**Authentication
 * import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
//import Image from "next/dist/client/image"

export default function Home() {
const [session, loading] = useSession()

//the user is stored in session
const user = session?.user
console.log(user)
  return (
    <div className={styles.container}>
      <h4>Welcome BroY</h4>
      { user && 
        <div>
          <p>Welcome image:{user.image}</p>
          <p>Name is: {user.name}</p>
          <button onClick={ () => signOut()} 
          className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg 
          focus:shadow-outline hover:bg-indigo-800">Sign Out</button>
        </div>
      }

      {
        !user &&
        <div>
          <p>User is logged out</p>
          <button onClick={() => signIn('github')}
          className="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg 
          focus:shadow-outline hover:bg-green-800">Sign In</button>
        </div>
      }
    </div>
  )
}
 */