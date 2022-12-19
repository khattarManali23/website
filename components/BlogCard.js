import React from "react";
import blogCard from "../data/blog";

const BlogCard = () => {
  return (
    <div className="py-4 my-20 ">
      <section class=" flex justify-center w-full items-center flex-wrap ">
        {blogCard.map((blog, index) => {
          return (
            <div
              class="flex justify-center items-center flex-col  w-96 text-center  m-4  "
              key={index}
            >
              <a href="#">
                <img src={blog.image} alt="Product" class=" object-cover" />
                <div class="px-4 py-3 w-full">
                  <p class="text-xl font-medium leading-[28px] text-white truncate block capitalize ">
                    {blog.title}
                  </p>
                  <div class="flex items-center  w-full">
                    <p
                      class="text-base  text-white cursor-auto my-3 leading-[32px]  
                    
                    "
                    >
                      {blog.desc}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default BlogCard;
