import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
    return (


        <nav >
            <div className='bg-black '>
                <div className='text-white  text-center items-center flex  justify-center'>
                    <p className='p-2 font-light'>Sign up and get 20% off to your first order.
                    </p>
                    <p className='underline font-semibold'>Sign Up now</p>
                </div>
            </div>
            <div className="bg-white border-gray-200 my-2 ">

                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between  mx-auto p-4">

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >

                        <span className="self-center text-3xl font-extrabold  pr-5">SHOP.CO</span>

                        <ul className="flex flex-col font-small p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <Link to='/' className="block py-2 px-3 text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 " aria-current="page">Shop</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent    ">On sale </Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent    ">New Arrival</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent    ">Brands</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="  md:flex md:w-auto md:order-1 ">
                        <input type="text" placeholder='Search for products' className='bg-gray-100  text-gray-900 text-sm rounded-2xl focus:ring-0 block w-[39rem] p-2.5' />

                    </div>
                    <div className="items-center justify-center w-full md:flex md:w-auto md:order-1 ">
                        <div className='m-2'>
                            <MdOutlineShoppingCart size={24} />
                        </div>
                        <div className='m-2'>
                            <FaRegCircleUser size={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar