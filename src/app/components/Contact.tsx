import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" className="pt-36 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="px-4 w-full">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className='font-semibold text-lg text-primary mb-2 uppercase'>Contact</h4>
                            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>Contact Us</h2>
                            <p className='font-medium text-md text-secondary md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fugiat.</p>
                        </div>
                    </div>
                    <form>
                        <div className='w-full lg:w-2/3 lg:mx-auto'>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="name" className='text-base text-primary font-bold'>Name</label>
                                <input type="text" name="name" id="name" className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:border-2 focus:border-primary' />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="email" className='text-base text-primary font-bold'>Email</label>
                                <input type="text" name="email" id="email" className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:border-2 focus:border-primary' />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="message" className='text-base text-primary font-bold'>Message</label>
                                <textarea name="message" id="message" className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:border-2 focus:border-primary h-32'></textarea>
                            </div>
                            <div className="w-full px-4">
                                <button className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact