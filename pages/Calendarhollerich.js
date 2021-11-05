import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Calendarhollerich() {
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
            <h1 className="mt-28 text-center">Book Weekly Sessions</h1>
            <div className="text-center">
                <h1>*Note: </h1>
                <p>Please select the date and time for the first day only</p>
            </div>
            {/* <iframe src="https://koalendar.com/e/yoga-weekly-session-hollerich?embed=true" width="100%" height="800px" frameBorder="0"></iframe> */}
            <iframe src="https://koalendar.com/e/test-beggen?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
            <Footer/>
        </div>
    )
}

