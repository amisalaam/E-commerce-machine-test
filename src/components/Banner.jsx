import React from 'react'
import BannerImg from '../assets/Home/banner.jpeg'

function Banner() {
    return (
        <div className='bg-bannerGray'>
            <div className='  grid grid-cols-2  '>
                <div >
                    <div className='mt-[8rem] mx-[9rem]'>
                        <div> <p className='font-bold text-7xl  ' > FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                        </div>
                        <div>
                            <p className='text-gray-800 text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        </div>
                    </div>

                    <div className='mt-[6rem] mx-[9rem]   justify-between items-center flex'>
                        <div className='  '>
                            <h3 className='text-5xl font-bold' > 200 +</h3>
                            <p className='text-gray-800 font-light'>International Brands</p>
                        </div>
                        <div >
                            <h3 className='text-5xl font-bold' > 2,00 +</h3>
                            <p className='text-gray-800 font-light'>International Brands</p>
                        </div>
                        <div>
                            <h3 className='text-5xl font-bold' > 20,000 +</h3>
                            <p className='text-gray-800 font-light'>International Brands</p>
                        </div>
                    </div>
                </div>

                <div className='items-center justify-center'>
                    <div className="overflow-hidden justify-center items-center">
                        <img src={BannerImg} alt="BannerImage" className="w-[30rem] h-[38rem] object-cover" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner