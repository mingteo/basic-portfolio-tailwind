import React from "react";

const Client = () => {
  return (
    <>
      <section
        id="client"
        className="bg-slate-700 pt-36 pb-16 dark:bg-slate-300"
      >
        <div className="mx-auto max-w-6xl">
          <div className="w-ful px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-primary dark:text-dark mb-2 text-lg font-semibold uppercase">
                Client
              </h4>
              <h2 className="dark:text-primary mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Partnership
              </h2>
              <p className="text-md text-secondary font-medium md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                est numquam temporibus.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href=""
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="/assets/client/google.png" alt="" />
              </a>
              <a
                href=""
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="/assets/client/gojek.png" alt="" />
              </a>
              <a
                href=""
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="/assets/client/binance.png" alt="" />
              </a>
              <a
                href=""
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="/assets/client/shopee.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
