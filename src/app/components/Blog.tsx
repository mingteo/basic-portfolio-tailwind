import React from "react";

const Blog = () => {
  return (
    <>
      <section id="blog" className="dark:bg-dark bg-slate-100 pt-36 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="text-primary mb-2 text-lg font-semibold uppercase dark:text-white">
                Blog
              </h4>
              <h2 className="text-dark dark:text-primary mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Newest Blog
              </h2>
              <p className="text-md text-secondary font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sit assumenda mollitia consequatur?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="http://picsum.photos/360/200"
                  alt=""
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href=""
                      className="text-dark hover:text-primary mb-3 block truncate text-xl font-semibold dark:text-white"
                    >
                      Tip For Studying Code
                    </a>
                  </h3>
                  <p className="text-secondary mb-6 text-base font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus, velit!
                  </p>
                  <a
                    href="#"
                    className="bg-primary rounded-lg px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="http://picsum.photos/360/200"
                  alt=""
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href=""
                      className="text-dark hover:text-primary mb-3 block truncate text-xl font-semibold dark:text-white"
                    >
                      Lorem, ipsum dolor.
                    </a>
                  </h3>
                  <p className="text-secondary mb-6 text-base font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus, velit!
                  </p>
                  <a
                    href="#"
                    className="bg-primary rounded-lg px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                <img
                  src="http://picsum.photos/360/200"
                  alt=""
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href=""
                      className="text-dark hover:text-primary mb-3 block truncate text-xl font-semibold dark:text-white"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore, harum.
                    </a>
                  </h3>
                  <p className="text-secondary mb-6 text-base font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus, velit!
                  </p>
                  <a
                    href="#"
                    className="bg-primary rounded-lg px-4 py-2 text-sm font-medium text-white hover:opacity-80"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
