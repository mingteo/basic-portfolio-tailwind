import React from 'react'

const Hero = () => {
    return (
        <>
            <section id='home' className='pt-36'>
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap">
                        <div className="w-full mx-auto self-center px-4 lg:w-1/2">
                            <h1 className='text-base font-semibold text-dark md:text-xl'>Hello Everyone 👋🏻, I am<span className='block font-bold text-primary text-4xl mt-1 lg:text-5xl'> Dickson Teo</span></h1>
                            <h2 className='font-medium text-primary text-lg mb-5 lg:text-2xl'>College Student & React Dev</h2>
                            <p className='font-medium text-secondary mb-10 leading-relaxed'>Programming is not about typing; its about thinking twice and deleting half.</p>

                            <a href="#" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Contact Me</a>
                        </div>
                        <div className='w-full self-end px-4 lg:w-1/2'>
                            <div className="relative mt-10 lg:mt-0 lg:right-0">
                                <img src="/assets/profile.png" alt="photo-profile" className='max-w-full mx-auto' />
                                <span className='absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                                    <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#2c5f2d" d="M45.9,-57.8C56,-46.3,58.3,-28.5,58.6,-12.5C58.8,3.6,57.2,17.8,49.4,25.9C41.6,34,27.7,35.9,14.4,41.8C1,47.7,-11.7,57.4,-26.4,58.3C-41.2,59.1,-57.9,51.1,-67.1,37.6C-76.4,24,-78.2,5,-71.3,-8.9C-64.5,-22.7,-49,-31.3,-35.6,-42.3C-22.3,-53.3,-11.2,-66.7,3.4,-70.7C17.9,-74.7,35.8,-69.4,45.9,-57.8Z" transform="translate(100 100) scale(1.2)" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero