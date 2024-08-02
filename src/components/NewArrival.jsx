import React from 'react'
import BannerImg from '../assets/Home/newArrival.png'
import StarRating from './StarRating'


function NewArrival() {

    return (
        <div className='mx-auto max-w-screen-2xl' >
            <div className='text-center my-10'>
                <h2 className='text-5xl font-extrabold'>NEW ARRIVALS</h2>
            </div>
            <div className='grid grid-cols-4'>

                <div className="max-w-sm bg-white  p-2  ">
                    <a >
                        <img className="rounded-t-lg  rounded-2xl h-[22rem] w-full  " src={BannerImg} alt="" />
                    </a>
                    <div className="p-5">
                        <a >
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">T-SHIRT WITH TAPE DETAILS</h5>
                        </a>
                        <StarRating />
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">$19</h5>


                    </div>
                </div>

                <div className="max-w-sm bg-white  p-2  ">
                    <a >
                        <img className="rounded-t-lg  rounded-2xl h-[22rem] w-full  " src={BannerImg} alt="" />
                    </a>
                    <div className="p-5">
                        <a >
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">T-SHIRT WITH TAPE DETAILS</h5>
                        </a>
                        <StarRating />
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">$19</h5>


                    </div>
                </div>

                <div className="max-w-sm bg-white  p-2  ">
                    <a >
                        <img className="rounded-t-lg  rounded-2xl h-[22rem] w-full  " src={BannerImg} alt="" />
                    </a>
                    <div className="p-5">
                        <a >
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">T-SHIRT WITH TAPE DETAILS</h5>
                        </a>
                        <StarRating />
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">$19</h5>


                    </div>
                </div>

                <div className="max-w-sm bg-white  p-2  ">
                    <a >
                        <img className="rounded-t-lg  rounded-2xl h-[22rem] w-full  " src={BannerImg} alt="" />
                    </a>
                    <div className="p-5">
                        <a >
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">T-SHIRT WITH TAPE DETAILS</h5>
                        </a>
                        <StarRating />
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">$19</h5>
                    </div>
                </div>
            </div>

            <div className='justify-center items-center '>
                <button className=' text-black shadow-lg border-1 px-5 py-2 rounded-lg items-center'>View all</button>

            </div>
        </div>
    )
}

export default NewArrival