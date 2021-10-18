import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Bookingweekly() {
    return (
        <div>
            <Navbar/>
            <h1 className="mt-28 text-center">Book Weekly Sessions</h1>
            <div className="text-center">
                <h1>*Note: </h1>
                <p>Please select the date and time of the first day</p>
            </div>
            <iframe src="https://koalendar.com/e/108-yoga-1?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
            <Footer/>
        </div>
    )
}

