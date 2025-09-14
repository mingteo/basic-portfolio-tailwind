import React from 'react'

const Client = () => {
    return (
        <>
            <section id="client" className='pt-36 pb-16 bg-slate-700'>
                <div className="max-w-6xl mx-auto">
                    <div className="w-ful px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className='font-semibold text-lg text-primary mb-2 uppercase'>Client</h4>
                            <h2 className='font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>Partnership</h2>
                            <p className='font-medium text-md text-secondary md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia est numquam temporibus.</p>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center">
                            <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                <img src="/assets/client/google.png" alt="" />
                            </a>
                            <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                <img src="/assets/client/gojek.png" alt="" />
                            </a>
                            <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                <img src="/assets/client/binance.png" alt="" />
                            </a>
                            <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                <img src="/assets/client/shopee.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client