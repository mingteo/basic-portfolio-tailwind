import React from 'react'

const Portfolio = () => {
    return (
        <>
            <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
                <div className="max-w-6xl mx-auto">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className='font-semibold text-lg text-primary mb-2 uppercase '>Portfolio</h4>
                            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>New Project</h2>
                            <p className='font-medium text-md text-secondary md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta nostrum suscipit vero asperiores, quaerat odio temporibus dicta officiis? Quam.</p>
                        </div>
                    </div>
                    <div className="w-full px-4 mx-auto flex flex-wrap justify-center xl:w-10/12">
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/assets/portfolio/1.png" alt="" className='w-full' />
                            </div>
                            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Agency Ai</h3>
                            <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione molestias odit?</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/assets/portfolio/2.png" alt="" className='w-full' />
                            </div>
                            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Next Js</h3>
                            <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione molestias odit?</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/assets/portfolio/3.png" alt="" className='w-full' />
                            </div>
                            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Near Batam</h3>
                            <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione molestias odit?</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/assets/portfolio/4.png" alt="" className='w-full' />
                            </div>
                            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>ITEBA Siakad</h3>
                            <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione molestias odit?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio