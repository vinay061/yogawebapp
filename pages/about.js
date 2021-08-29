import Image from "next/dist/client/image"
import pic from '../public/images/cardone.jpg'
import cardtwo from '../public/images/cardtwo.jpg'


function about() {
    return (
        <div>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='imgicon' />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">Vidhya Tools</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                </div>
            </div>
            {/*<!-- component -->*/}
            <header>
                {/*<!-- Navbar -->*/}
                <nav className="py-8 bg-white">
                    <div className="md:container px-4 md:px-0 mx-auto flex justify-between">
                        <img className="w-16" src="https://capp.nicepage.com/bf483e57c95e271afd13aa25e2ecbbe017068d1d/images/default-logo.png" alt="" />
                        <div className="space-y-1.5 cursor-pointer">
                            <div className="h-1 w-8 bg-gray-600 rounded"></div>
                            <div className="h-1 w-8 bg-gray-600 rounded"></div>
                            <div className="h-1 w-8 bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </nav>

                {/*<!-- Section Hero -->*/}

                <div className="bg-yellow-100 py-14">
                    <h3 className="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3>
                    <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">Our Features & Services.</h1>

                    {/*<!-- Box -->*/}
                    <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                        {/*<!-- box-1 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={pic} className='' alt="pic of yog" />
                                <img className="w-64" src="" alt="" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Communications</h1>
                                    <p className="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>

                        {/*<!-- box-2 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={cardtwo} />
                                <img className="w-64" src="../public/images/cardtwo.jpg" alt="" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Inspired Design</h1>
                                    <p className="mt-4 text-gray-600">Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>

                        {/*<!-- box-3 -->*/}
                        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div className="w-sm">
                                <Image src={pic} alt="pic of yog" />
                                <img className="w-64" src="" alt="" />
                                <div className="mt-4 text-green-600 text-center">
                                    <h1 className="text-xl font-bold">Happy Customers</h1>
                                    <p className="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                                    <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center font-thin text-xl mt-14">Image from <span className="underline text-gray-600 cursor-pointer">Freepik</span></h4>
                </div>
            </header>

            {/*<!-- Footer -->*/}
            <footer className="text-center py-16 bg-gray-700 text-sm">
                <p className="text-white">
                    Sample text. Click to select the text box. Click again or double <br />
                    click to start editing the text.
                </p>
                <p className="mt-20 text-white"><span className="underline text-green-200 cursor-pointer">Website Templates </span>created with <span className="underline text-green-200 cursor-pointer">Website Builder Software.</span></p>
            </footer>
        </div>

    )
}

export default about
