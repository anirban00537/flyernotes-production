import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">FlyerNotes</span>
                  <img className="h-16" src="/nav-logo.png" alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/bars-3 */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <Link href="/signin">
                  <div className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Log in
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pb-10 pt-48 pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      Under development - please check back soon!{" "}
                      <a href="#" className="font-semibold text-purple-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">→</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
                    Note Taking Made Simple, Never Miss A Thought
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Transform the way you take notes with FlyerNotes.
                    Effortlessly capture and connect your ideas with our
                    intuitive note-taking app, and never miss a thought again.
                    Streamline your productivity and take control of your life -
                    sign up today.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link href="/dashboard">
                      <button className="inline-block rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700">
                        Get started
                        <span className="text-purple-200" aria-hidden="true">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banner;
