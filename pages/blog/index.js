import React from "react";
import bloghero from "../../assets/bloghero.jpeg";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <div className=" my-12 ">
      <div className="flex flex-col  sm:items-start items-center  justify-center p-10">
        <h1
          className="sm:text-5xl text-3xl mb-8 px-3  sm:w-1/4 w-full  font-semibold text-center sm:text-left text-transparent bg-clip-text  sm:leading-[75px]  leading-[45.2px]
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
        >
          Our Blogs
        </h1>
        <h1 className="text-2xl sm:w-[35%] w-full sm:text-left text-center font-semibold px-3 leading-[38px]">
          All the most current news and events of our creative team.
        </h1>
      </div>

      <div id="hero" className="pt-5 lg:flex items-center justify-center ">
        <div
          className="mt-6  flex-1 lg:mt-0  flex justify-center items-center 
        w-full lg:w-1/2 lg:max-w-xl

      
        "
        >
          <img
            src={bloghero.src}
            className=" 
            h-[420px] w-4/6
          
         
           
            
            "
          />
        </div>
        <div className="px-5 sm:px-10   md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl ">
          <div className="">
            <h1 className=" sm:text-[40px] text-2xl sm:text-left  text-center leading-[60px] font-semibold">
              About An Incident
            </h1>
            <p className="my-4 xl:my-2  sm:text-xl text-base sm:text-left text-center font-normal leading-[32px]">
              Recreate the kind of apps that are not just installed but are also
              used users love or app and so do businesses we help companies
              bring to life Recreate the kind of apps that are not just
              installed but are also used users love or app and so do businesses
              we help companies bring to lifeRecreate the kind of apps that are
              not just installed but are also used users love or app and so do
              businesses we help companies bring to lifeRecreate the kind of
              apps that are not just installed but are also used users love or
              app and so do businesses we help \
            </p>
          </div>

          {/* <div className="flex-1">
            <div className="relative mt-4 md:mt-0 lg:mt-4">
              <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                <svg
                  className="text-gray-700 w-5"
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
                className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                placeholder="Type (e.g junior, senior)"
              />
            </div>
            <div className="relative mt-4">
              <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                <svg
                  className="text-gray-700 w-5"
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
                className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                placeholder="Mountain View, California"
              />
            </div>
            <div>
              <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                Find Designers
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <BlogCard />
    </div>
  );
};

export default Blog;
