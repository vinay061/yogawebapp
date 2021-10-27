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
    const [location, setLocation] = useState('Flow Studio')


    //testing time conversion
    // const testDate = new Date()
    // const luxTime = 'Europe/Luxembourg'
    
    // const luxDate = utcToZonedTime(testDate, luxTime)
    
    // format(luxDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'Europe/Luxembourg'})
   
    // console.log(`Lux Time: ${ format(luxDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'Europe/Luxembourg'})}`)

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

    // console.log(` UTC Z1: ${zonedDayOne};; Z2: ${zonedDayTwo};; Z3: ${zonedDayThree}`)
    // console.log(`Format F1: ${formatDayOne};; F2: ${formatDayTwo};; F3: ${formatDayThree}`)

   
    const dateSept = [new Date(2021, 7, 31), new Date(2021, 8, 2),
                      new Date(2021, 8, 7), new Date(2021, 8, 9),
                      new Date(2021, 8, 14), new Date(2021, 8, 16),
                      new Date(2021, 8, 21), new Date(2021, 8, 23),
                      new Date(2021, 8, 28),new Date(2021, 8, 30)
                     ]

    const dateOct = [new Date(2021, 9, 5), new Date(2021, 9, 7), 
                     new Date(2021, 9, 12),new Date(2021, 9, 14),
                     new Date(2021, 9, 19),new Date(2021, 9, 21),
                     new Date(2021, 9, 26),new Date(2021, 9, 28)
                    ]

    const dateNov = [new Date(2021, 11, 2), new Date(2021, 11, 4),
                     new Date(2021, 11, 9), new Date(2021, 11, 11),
                     new Date(2021, 11, 16), new Date(2021, 11, 18),
                     new Date(2021, 11, 23), new Date(2021, 11, 26),
                     new Date(2021, 11, 30)
                    ]

    const isWeek = (date) => {
        const day = date.getDay()
        return day !==0 && day !==6
    }

    const months = new Date()
    const currentMonth = months.toLocaleString('default', { month: 'long'})
    // console.log(currentMonth)

    const timeExcluded = [setHours(setMinutes(new Date(),0), 13),
                          setHours(setMinutes(new Date(), 0), 14),
                          setHours(setMinutes(new Date(), 0), 15)
                         ]

     const MyContainer = ({className, children}) => {
        return(
            <div className="">
                <CalendarContainer className={className}>
                    <div style={{background: "#f0f0f0"}}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative"}}>{children}</div>
                </CalendarContainer>
            </div>
        );
    }
    
    const submit= async () => {
        
        //const fdate= new Date(dayOne)
        // const hour = fdate.getUTCHours()
        // const minute = fdate.getUTCMinutes()
        // const second = fdate.getUTCSeconds()
        //console.log(`Hour: ${hour}; Minute: ${minute}; Second: ${second}`)
        //const parsedata= JSON.parse(dayOne)
        //const stringifydata = JSON.stringify(dayOne)
        //console.log(`Parsing: ${parsedata}`)
        //console.log(`Stringify: ${stringifydata}`)

        //mongodb data fetch and insert
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
            
        

        
        //node js api post
        // axios.post("http://localhost:5000/api/insert", {
        //     email: emailUser,
        //     booking_day_one: formatDayOne,
        //     booking_day_two: formatDayTwo,
        //     booking_day_three: formatDayThree,
        //     booking_day_four: formatDayFour,
        //     location: location 
        //      })
        //      .then(res => {
        //          console.log(res)
        //          console.log(res.data)
        //          console.log(typeof(res.data))
        //          console.log('Posted booking details')
        //      })
        //      .catch(err => {
        //          console.log(err)
        //      })

     }
     return (
        <div>
            <Navbar/>
            
           
            { currentMonth === 'September' ? 
            <div className="text-center">
                <div>
                    <p>Please Select Day One</p>
                    <div className="border-solid border-2 border-green-500 rounded-lg mx-96">
                        <DatePicker
                            selected={dayOne}
                            onChange={(date) => setDayOne(date)}
                            calendarContainer={MyContainer}
                            excludeDates={dateSept}
                            filterDate={isWeek}
                            className="red-border"
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={60}
                            placeholderText="Click to select a date and time"
                            minTime={setHours(setMinutes(new Date(), 0), 6)}
                            maxTime={setHours(setMinutes(new Date(), 30), 19)}
                            excludeTimes={timeExcluded}
                            dateFormat="MMMM, d; hh:mm:ss aa"
                        />
                    </div>
                </div>
                 <p>Please Select Day Two</p>
                 <DatePicker
                    selected={dayTwo}
                    onChange={(date) => setDayTwo(date)}
                    calendarContainer={MyContainer}
                    excludeDates={dateSept}
                    filterDate={isWeek}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={60}
                    placeholderText="Click to select a date and time"
                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                    maxTime={setHours(setMinutes(new Date(), 30), 19)}
                    excludeTimes={timeExcluded}
                    dateFormat="MMMM, d; h:mm aa"
                />
                <p>Please Select Day Three</p>
                <DatePicker
                    selected={dayThree}
                    onChange={(date) => setDayThree(date)}
                    calendarContainer={MyContainer}
                    excludeDates={dateSept}
                    filterDate={isWeek}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={60}
                    placeholderText="Click to select a date and time"
                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                    maxTime={setHours(setMinutes(new Date(), 30), 19)}
                    excludeTimes={timeExcluded}
                    dateFormat="MMMM, d; hh:mm:ss aa"
                />
            </div>
            :
            <div className="shadow-md rounded-md bg-gray-500 mt-28 mx-3 mb-5">
                    <div className="container flex items-center justify-center  mx-auto pt-4">
                        <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex">
                            <label className="font-bold mb-1 mr-2 text-white block">
                                Select Location
                            </label>
                            <div className="mb-3 pt-0 sm:ml-20 md:ml-20 lg:ml-20 xl:ml:20">
                                <select className="form-select block w-full mt-1" 
                                            onChange = {(e)=> {
                                                setLocation(e.target.value)
                                            }}    
                                        >
                                    <option>Hollerich Well-Being Studio</option>
                                    <option>Hamm Happy Place</option>
                                </select>
                            </div>
                        </div>
                    </div>
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
                                onChange={(date) => setDayOne(date)}
                                calendarContainer={MyContainer}
                                excludeDates={dateOct}
                                filterDate={isWeek}
                                showTimeSelect
                                timeFormat="p"
                                timeIntervals={60}
                                placeholderText="Click to select a date and time"
                                minTime={setHours(setMinutes(new Date(), 0), 6)}
                                maxTime={setHours(setMinutes(new Date(), 30), 19)}
                                excludeTimes={timeExcluded}
                                dateFormat="MMMM, d;  h:mm aa"
                                className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                            relative bg-white bg-white rounded text-sm border 
                                            border-green-400 outline-none focus:outline-none 
                                            focus:ring w-full mb-2"
                            />
                        </div>
                    </div>
                </div>
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
                                    onChange={(date) => setDayTwo(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateOct}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 19)}
                                    excludeTimes={timeExcluded}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div>  
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
                                    onChange={(date) => setDayThree(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateOct}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 19)}
                                    excludeTimes={timeExcluded}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div>
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
                                    onChange={(date) => setDayFour(date)}
                                    calendarContainer={MyContainer}
                                    excludeDates={dateOct}
                                    filterDate={isWeek}
                                    showTimeSelect
                                    timeFormat="p"
                                    timeIntervals={60}
                                    placeholderText="Click to select a date and time"
                                    minTime={setHours(setMinutes(new Date(), 0), 6)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 19)}
                                    excludeTimes={timeExcluded}
                                    dateFormat="MMMM, d;  h:mm aa"
                                    className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full mb-2"
                                />
                                </div>
                            </div>
                        </div>

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
                        { dayOne && dayTwo && dayThree && dayFour && (
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
                                            <Link href='/Bookingweekly'>
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
            }
                                           
            <Footer/>    
        </div>
    )
}


