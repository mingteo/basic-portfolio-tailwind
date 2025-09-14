import React from "react";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
      >
        <div className="mx-auto max-w-6xl">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-primary mb-2 text-lg font-semibold uppercase dark:text-white">
                Portfolio
              </h4>
              <h2 className="text-dark dark:text-primary mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                New Project
              </h2>
              <p className="text-md text-secondary font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                soluta nostrum suscipit vero asperiores, quaerat odio temporibus
                dicta officiis? Quam.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-wrap justify-center px-4 xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src="/assets/portfolio/1.png" alt="" className="w-full" />
              </div>
              <h3 className="text-dark dark:text-primary mt-5 mb-3 text-xl font-semibold">
                Agency Ai
              </h3>
              <p className="text-secondary text-base font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ratione molestias odit?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src="/assets/portfolio/2.png" alt="" className="w-full" />
              </div>
              <h3 className="text-dark dark:text-primary mt-5 mb-3 text-xl font-semibold">
                Next Js
              </h3>
              <p className="text-secondary text-base font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ratione molestias odit?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src="/assets/portfolio/3.png" alt="" className="w-full" />
              </div>
              <h3 className="text-dark dark:text-primary mt-5 mb-3 text-xl font-semibold">
                Near Batam
              </h3>
              <p className="text-secondary text-base font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ratione molestias odit?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <img src="/assets/portfolio/4.png" alt="" className="w-full" />
              </div>
              <h3 className="text-dark dark:text-primary mt-5 mb-3 text-xl font-semibold">
                ITEBA Siakad
              </h3>
              <p className="text-secondary text-base font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ratione molestias odit?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
