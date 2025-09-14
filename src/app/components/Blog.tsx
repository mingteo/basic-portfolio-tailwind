import React from 'react'

const Blog = () => {
    return (
        <>
            <section id='blog' className='pt-36 pb-32 bg-slate-100'>
                <div className="max-w-6xl mx-auto">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className='font-semibold text-lg text-primary mb-2 uppercase '>Blog</h4>
                            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>Newest Blog</h2>
                            <p className='font-medium text-md text-secondary md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit assumenda mollitia consequatur?</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img src="http://picsum.photos/360/200" alt="" className='w-full' />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tip For Studying Code</a>
                                    </h3>
                                    <p className='font-medium text-secondary text-base mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, velit!</p>
                                    <a href="#" className='bg-primary py-2 px-4 font-medium text-sm text-white rounded-lg hover:opacity-80'>read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img src="http://picsum.photos/360/200" alt="" className='w-full' />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Lorem, ipsum dolor.</a>
                                    </h3>
                                    <p className='font-medium text-secondary text-base mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, velit!</p>
                                    <a href="#" className='bg-primary py-2 px-4 font-medium text-sm text-white rounded-lg hover:opacity-80'>read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                                <img src="http://picsum.photos/360/200" alt="" className='w-full' />
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="" className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, harum.</a>
                                    </h3>
                                    <p className='font-medium text-secondary text-base mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, velit!</p>
                                    <a href="#" className='bg-primary py-2 px-4 font-medium text-sm text-white rounded-lg hover:opacity-80'>read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog