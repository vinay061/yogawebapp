import React from 'react'

export default function Taildate() {
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-200 h-full">
                <div className="antialiased sans-serif">
                        <div className="container mx-auto px-4 py-2 md:py-10">
                            <div className="mb-5 w-64">
                                <label className="font-bold mb-1 text-gray-700 block">
                                        Select Date
                                </label>
                                <div className="mb-3 pt-0">
                                    <input type="text" placeholder="Date & Time"
                                        className="px-2 py-1 placeholder-gray-400 text-gray-600 
                                        relative bg-white bg-white rounded text-sm border 
                                        border-green-400 outline-none focus:outline-none 
                                        focus:ring w-full" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
        </div>
    )
}
