import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-primary mb-2 text-lg font-semibold uppercase dark:text-white">
                Contact
              </h4>
              <h2 className="text-dark dark:text-primary mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Contact Us
              </h2>
              <p className="text-md text-secondary font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, fugiat.
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="name"
                  className="text-primary text-base font-bold dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-dark focus:border-primary dark:bg-dark w-full rounded-md bg-slate-200 p-3 focus:border-2 focus:outline-none dark:text-white"
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="email"
                  className="text-primary text-base font-bold dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="text-dark dark:bg-dark focus:border-primary w-full rounded-md bg-slate-200 p-3 focus:border-2 focus:outline-none dark:text-white"
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="message"
                  className="text-primary text-base font-bold dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="text-dark dark:bg-dark focus:border-primary h-32 w-full rounded-md bg-slate-200 p-3 focus:border-2 focus:outline-none dark:text-white"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="bg-primary w-full rounded-full px-8 py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
