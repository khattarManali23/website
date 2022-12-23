import React from "react";
import girl from "../assets/girl.jpeg";

const CareerBanner = () => {
  return (
    <div>
      <main>
        <div id="hero" class="pt-5 lg:flex items-center">
          <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-4xl lg:mr-8 lg:px-20 event h-full">
            <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1 class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                Hire a Designer Near You
              </h1>
              <p class="mt-4 xl:mt-2">
                World Class Designers, just for you on contract, full-time or
                part-time, whatever you need.
              </p>
            </div>

            <div class="flex-1">
              <div class="relative mt-4 md:mt-0 lg:mt-4">
                <div class="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    class="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Type (e.g junior, senior)"
                />
              </div>
              <div class="relative mt-4">
                <div class="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    class="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Mountain View, California"
                />
              </div>
              <div>
                <button class="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                  Find Designers
                </button>
              </div>
            </div>
          </div>
          <div class="mt-6  flex-1 lg:mt-0">
            <img
              class=""
              src={girl.src}
              className="object-cover w-[725px] h-[578px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerBanner;
