import React from 'react'
import { useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
//import axios from 'axios'
import Navbar  from '../components/Navbar'
import Link from 'next/dist/client/link'
import Footer from '../components/Footer'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
//import Taildate from '../components/Taidate'
// import enGB  from 'date-fns/locale/en-GB'

// enGB.code= 'en-GB'
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')




export default function Booking() {

    const [dayOne, setDayOne] = useState(null)
    const [dayTwo, setDayTwo] = useState(null)
    const [dayThree, setDayThree] = useState(null)
    const [dayFour, setDayFour] = useState(null)
    const [emailUser, setEmailUser] = useState('')
    const location = 'Hollerich'

    //converting date and time
    const firstday = new Date(dayOne)
    const seconday = new Date(dayTwo)
    const thirdday = new Date(dayThree)
    const fourthday = new Date(dayFour)
    const timeZone = 'Europe/Luxembourg'
    const zonedDayOne = utcToZonedTime(firstday, timeZone)
    const zonedDayTwo = utcToZonedTime(seconday, timeZone)
    const zonedDayThree = utcToZonedTime(thirdday, timeZone)
    const zonedDayFour = utcToZonedTime(fourthday, timeZone)
    const formatDayOne = format(zonedDayOne, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'Europe/Luxembourg'})
    const formatDayTwo = format(zonedDayTwo, 'yyyy-MM-dd HH:mm:ss zzz', {timeZone: 'Europe/Luxembourg'})
    const formatDayThree = format(zonedDayThree, 'yyyy-MM-dd HH:mm:ss zzz', {timeZone: 'Europe/Luxembourg'})
    const formatDayFour = format(zonedDayFour, 'yyyy-MM-dd HH:mm:ss zzz', {timeZone: 'Europe/Luxembourg'})

   
    //dates for Hollerich: Flow-studio
    const dateHollerich = [new Date(2021,10,5), new Date(2021, 10, 12), 
                           new Date(2021, 10, 19), new Date(2021, 10, 26),
                           new Date(2021, 11, 3), new Date(2021, 11, 10),
                           new Date(2021, 11, 17), new Date(2021, 11, 24),
                           new Date(2021, 11, 31)
                        ]


    const isWeek = (date) => {
        const day = date.getDay()
        return day !==0 && day !==6
    }

    const months = new Date()
    const currentMonth = months.toLocaleString('default', { month: 'long'})
    // console.log(currentMonth)
    
    //exclude time for Hollerich
    const timeHollerich = [setHours(setMinutes(new Date(),0), 8),
                           setHours(setMinutes(new Date(),0), 9),
                           setHours(setMinutes(new Date(),0), 10),
                           setHours(setMinutes(new Date(),0), 11),
                           setHours(setMinutes(new Date(),0), 12),
                           setHours(setMinutes(new Date(),0), 13),
                           setHours(setMinutes(new Date(),0), 14),
                           setHours(setMinutes(new Date(),0), 15),
                           setHours(setMinutes(new Date(),0), 16),
                           setHours(setMinutes(new Date(),0), 17),
                           setHours(setMinutes(new Date(),0), 18),
                           setHours(setMinutes(new Date(),0), 19)
                          ]
   

     const MyContainer = ({className, children}) => {
        return(
            <div className="">
                <CalendarContainer className={className}>
                    <div style={{background: "#ff0000"}} className="text-center">
                        Select Date and Time
                    </div>
                    <div style={{ position: "relative"}}>{children}</div>
                </CalendarContainer>
            </div>
        );
    }
    
    const handleDateChangeRaw = (Event) => {
        Event.preventDefault()
    }

    const handleKeyboardTrigger = (e) => {
        e.target.readOnly = true
    }

    const submit= async () => {
               try{
                const res = await fetch('/api/dates', {
                method: 'POST',
                headers:{
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    location: location,
                    bookingdayone: formatDayOne,
                    bookingdaytwo: formatDayTwo,
                    bookingdaythree: formatDayThree,
                    bookingdayfour: formatDayFour,
                    email: emailUser
                    })
                })
                return res.json()
            }
            catch(error){
                console.log(error)
            }
    }
     return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <title>Breath of Yoga |Yoga in Luxembourg| Calm | Live in the present </title>
                <meta name="description" content="Enjoy Yoga workout for your body, breath and mind in Luxembourg. 
                Feel energised & relaxed after every Yoga session. Yoga Philosophy can be explored on request" />
                <meta name="google-site-verification" content="zX1PEdcO-DPbHLwHEXuhKeyNuh9AgAK3cfvx1zgUbYA" />
            </Head>
            <Navbar/>
            
           
            
            {/** Container for the location-dates-eMail and Submit button */}
            <div className="shadow-md rounded-md bg-gray-500 mt-28 mx-3 mb-5">
                    {/** Select the Location */}
                    <div className="container flex items-center justify-center  mx-auto pt-4">
                        <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                            <label className="font-bold mb-1 mr-2 text-white block">
                                Location Selected
                            </label>
                            <div className="mb-3 pt-0 sm:ml-20 md:ml-20 lg:ml-20 xl:ml:20">
                            <label className="font-bold mb-1 mr-2 text-white block">
                                Hollerich: Flow-Studio
                            </label>
                                
                            </div>
                        </div>
                    </div>

                {/** Location: Hollerich */}


               
                {/**Day One */}
                <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4">
                    <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                        <label className="font-bold mb-1 mr-4 text-white block">
                            Select Date & Time for Day One
                        </label>
                        <div className="mb-3 pt-0">
                            <DatePicker
                                selected={dayOne}
                                minDate={new Date()}
                                onChangeRaw={handleDateChangeRaw}
                                onFocus={handleKeyboardTrigger}
                                onChange={(date) => setDayOne(date)}
                                calendarContainer={MyContainer}
                                excludeDates={dateHollerich}
                                filterDate={isWeek}
                                showTimeSelect
                                timeFormat="p"
                                timeIntervals={60}
                                placeholderText="Click to select a date and time"
                                minTime={setHours(setMinutes(new Date(), 0), 6)}
                                maxTime={setHours(setMinutes(new Date(), 30), 8)}
                                excludeTimes={timeHollerich}
                                dateFormat="MMMM, d;  h:mm aa"
                                className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                            relative bg-white bg-white rounded text-sm border 
                                            border-green-400 outline-none focus:outline-none 
                                            focus:ring w-full mb-2"
                            />
                        </div>
                    </div>
                </div>
                {/**End of Day One */}

                {/**Day Two */}
                <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4"> {/**md:py-10 increses the padding for medium screen */}
                            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                                <label className="font-bold mb-1 mr-4 text-white block">
                                        Select Date & Time for Day Two
                                </label>
                                <div className="mb-3 pt-0">
                                <DatePicker
                                    selected={dayTwo}
                                    minDate={new Date()}
                                    onChangeRaw={handleDateChangeRaw}
                                    onFocus={handleKeyboardTrigger}
                                    onChange={(date) => setDayTwo(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateHollerich}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 8)}
                                    excludeTimes={timeHollerich}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div> 
                    {/**End of Day Two */} 

                    {/**Day Three */}
                    <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4"> {/**md:py-10 increses the padding for medium screen */}
                            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                                <label className="font-bold mb-1 mr-2 text-white block">
                                        Select Date & Time for Day Three
                                </label>
                                <div className="mb-3 pt-0">
                                <DatePicker
                                    selected={dayThree}
                                    minDate={new Date()}
                                    onChangeRaw={handleDateChangeRaw}
                                    onFocus={handleKeyboardTrigger}
                                    onChange={(date) => setDayThree(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateHollerich}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 8)}
                                    excludeTimes={timeHollerich}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div>
                        {/** End of Day three */}                    

                        {/**Day Four */}
                        <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4"> {/**md:py-10 increses the padding for medium screen */}
                            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                                <label className="font-bold mb-1 mr-2 text-white block">
                                        Select Date & Time for Day Four
                                </label>
                                <div className="mb-3 pt-0">
                                <DatePicker
                                    selected={dayFour}
                                    minDate={new Date()}
                                    onChangeRaw={handleDateChangeRaw}
                                    onFocus={handleKeyboardTrigger}
                                    onChange={(date) => setDayFour(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateHollerich}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 7)}
                                    excludeTimes={timeHollerich}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div>
                        {/**End of day four */}

                        {/** Location: Hollerich */}

                        {/** eMail address input- common for both  */}
                        <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4"> {/**md:py-10 increses the padding for medium screen */}
                            <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                                <label className="font-bold mb-1 mr-4 text-white block">
                                        Please Enter Your eMail Address
                                </label>
                                <div className="mb-3 pt-0">
                                <input type="text" onChange={(e) => {
                                        setEmailUser(e.target.value)
                                    }} className="border-solid border-4 border-green-500 rounded-lg"/>
                                </div>
                            </div>
                        </div>

                        


                        { dayOne && dayTwo && dayThree && dayFour && emailUser && (
                            <div className="text-center text-white">
                                <p>
                                    Thank you for selecting the dates from<br></br> 
                                    Day One:{" "}{formatDayOne} {" "}<br></br>
                                    Day Two:{" "}{formatDayTwo} {" "}<br></br>
                                    Day Three:{" "}{formatDayThree} {" "}<br></br>
                                    Day Four:{" "}{formatDayFour} {" "}<br></br>
                                    Please ensure the correct email id is entered. Also, please select only the first day in the following page.
                                </p>
                                <div className="container flex items-center justify-center bg-gray-500 mx-auto pt-4 mb-5"> {/**md:py-10 increses the padding for medium screen */}
                                    <div className="flex">
                                        <div className="mb-3 pt-0 mr-3">
                                            <Link href='/Calendarhollerich'>
                                                <button type="submit" onClick={submit} 
                                                    className="px-6 py-2 font-semibold select-none rounded-md 
                                                        text-white bg-gray-900 hover:bg-gray-800"
                                                >
                                                    SUBMIT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            
                        )}
                          
                
            </div>
            {/** End of Container for the location-dates-eMail and Submit button */}
                                           
            <Footer/>    
        </div>
    )
}


