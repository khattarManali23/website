import React from "react";
import { useGetAllNews } from "../../services/news";

function TredingNews() {
  const { data, isError, isLoading } = useGetAllNews();
  //  select random 6 news from data
  const randomNews = data
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 6);
  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  console.log(randomNews, "randomNews");

  return (
    <div className="w-full flex justify-center items-center">
      <div class="w-11/12 mx-auto p-5 sm:p-10 md:p-16">
        <div class="border-b mb-5 flex justify-between text-sm">
          <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" class="font-semibold inline-block">
              Trending News
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 my-4 sm:grid-cols-2 gap-10">
          {randomNews?.map((item, index) => {
            return (
              <div
                class="rounded overflow-hidden flex justify-between items-center  shadow-lg"
                key={index}
              >
                <a href="#">
                  <div class="relative">
                    <img
                      class="w-64 h-64"
                      src={item?.attach_file}
                      alt="Sunset in the mountains"
                    />
                  </div>
                </a>
                <div class="px-6 w-full h-full border-2 border-red-900 py-4">
                  <div className="w-1/2">
                    <div class=" bg-indigo-600 px-4 py-2 text-white text-lg  text-center  hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      {item?.categorySlug}
                    </div>
                  </div>
                  <a
                    href="#"
                    class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out my-4"
                  >
                    {item?.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TredingNews;
