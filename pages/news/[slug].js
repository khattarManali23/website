import { Skeleton } from "@mui/material";
import { DefaultSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ErrorScreen } from "../../components/basics";
import CategoriesBaseCard from "../../components/home/CategoriesBaseCard";
import { SITE_NAME } from "../../data/next-seo.data";
import api from "../../services/api";
import {
  useGetAllCategories,
  useGetOneNewsById,
} from "../../services/categoryServices";

export default function NewsPage({ setpageLoading, news }) {
  console.log(news, "news");
  const { query, push } = useRouter();
  const slug = query?.slug;
  const { data, isLoading, isError } = useGetOneNewsById(slug);

  const [scrolled, setScrolled] = useState(false);

  const {
    data: categoriesAllData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetAllCategories();

  useEffect(() => {
    if (!categoriesLoading) {
      setpageLoading(false);
    }
  }, [categoriesLoading]);

  const changeNavbarShadow = () => {
    if (window.scrollY >= 63) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarShadow);
  }, [scrolled]);

  const filterCardData = (slug) => {
    push(`/news/${slug}`);
  };

  const filterAllData = () => {
    push(`/`);
  };

  if (categoriesError || isError) return <ErrorScreen />;
  console.log(news, "data");
  return (
    <>
      <DefaultSeo
        title={news?.name}
        description="news page description"
        openGraph={{
          url: "https://www.terralogic.com/",

          title: news?.name,
          description: " news page description",
          images: [
            {
              url: news?.icon,
              width: 800,
              height: 600,
              alt: news?.name,
            },
          ],
          site_name: SITE_NAME,
        }}
        twitter={{
          handle: "@terralogic",
          site: "@terralogic",
          cardType: "summary_large_image",
        }}
      />

      {/* desktop view */}
      <div className="md:block hidden font-sans">
        <div className="flex justify-center w-full text-center">
          <div className="container mt-20 md:mx-0 mx-4 mb-20">
            <main>
              {data?.map((item, index) => {
                return (
                  <article className=" mb-10 mx-4 " key={index}>
                    <div className="   hoverline">
                      <div
                        className="relative h-full w-full overflow-hidden cursor-pointer"
                        onClick={() => push(`/news/detail/${item?._id}`)}
                      >
                        {isLoading ? (
                          <Skeleton
                            className="h-[350px] w-full"
                            variant="rectangular"
                          />
                        ) : (
                          <Image
                            loading="lazy"
                            src={item.attach_file}
                            height={1000}
                            width={1000}
                            className="w-full h-full hover:scale-110 overflow-hidden object-contain transition-all duration-500"
                            alt="Sample image"
                          />
                        )}
                      </div>

                      <div className="w-fit relative mt-2.5">
                        {isLoading ? (
                          <Skeleton
                            className="h-[2rem] w-24"
                            variant="rectangular"
                          />
                        ) : (
                          <div
                            className="px-4 py-[0.4rem] font-sm w-fit  absolute bottom-8 left-0
                                font-semibold text-white flex text-center justify-center capitalize cursor-pointer"
                            style={{
                              backgroundColor:
                                index % 2 == 0
                                  ? index % 4 == 0
                                    ? index % 3 == 0
                                      ? "#5856d5"
                                      : "#5ac8fa"
                                    : "#4cd965"
                                  : "#ff4f00",
                            }}
                            onClick={() => push(`/news/${item?.categorySlug}`)}
                          >
                            {item.categorySlug}
                          </div>
                        )}
                      </div>

                      {isLoading ? (
                        <div className="mt-4">
                          <Skeleton
                            className="h-4 w-full my-2"
                            variant="rectangular"
                          />
                          <Skeleton
                            className="h-4 w-3/4"
                            variant="rectangular"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex md:text-justify text-left w-full cursor-pointer"
                          onClick={() => push(`/news/detail/${item?._id}`)}
                        >
                          <a className=" text-2xl font-bold  leading-9 overflow-hidden">
                            <span className="">{item.title}</span>
                          </a>
                        </div>
                      )}

                      {isLoading ? (
                        <div className="my-4">
                          <Skeleton
                            className="h-4 w-full my-2"
                            variant="rectangular"
                          />
                          <Skeleton
                            className="h-4 w-full my-2"
                            variant="rectangular"
                          />
                          <Skeleton
                            className="h-4 w-2/4"
                            variant="rectangular"
                          />
                        </div>
                      ) : (
                        <p
                          className="text-lg font-normal 
                    flex md:text-justify text-left  leading- cursor-pointer"
                          onClick={() => push(`/news/detail/${item?._id}`)}
                        >
                          {item.short_description}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </main>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden font-sans">
        <div className="flex justify-center w-full text-center">
          <div className="container">
            <div className="w-full   flex flex-col">
              <div
                className={`  
             ${
               scrolled === true
                 ? `top-0 sticky shadow-shadow-primary scroll-smooth`
                 : `top-40`
             }
              bg-white py-2
              z-20`}
              >
                <div className="mx-4 ">
                  <div
                    className="flex flex-row  
             gap-y-2 overflow-scroll "
                  >
                    <div
                      onClick={() => filterAllData()}
                      className="flex justify-center w-36 text-sm items-center tab_button py-2 px-4"
                    >
                      Home
                    </div>
                    {categoriesAllData?.map((item, index) => {
                      return (
                        <>
                          {categoriesLoading ? (
                            <div className="">
                              <Skeleton className="h-10 w-20 mx-3" />
                            </div>
                          ) : (
                            <div
                              key={index}
                              onClick={() => filterCardData(item?.slug)}
                              className={`flex justify-center text-sm items-center ${
                                slug == item?.slug
                                  ? "tab_button_active  w-48 py-2 px-4"
                                  : "tab_button py-2 w-48 px-4"
                              }`}
                            >
                              <span className="w-28 whitespace-nowrap">
                                {item?.name}
                              </span>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center w-full">
                <CategoriesBaseCard cardData={data} newsLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

async function getNewsId(slug) {
  const res = await api.get(`/category/all`);

  return res;
}

export async function getStaticPaths() {
  const res = await api.get(`/category/all`);
  const data = res.data.categorys;

  const paths = data.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const res = await getNewsId(slug);
  let data = res.data.categorys;
  // filter data by slug
  data = data.filter((item) => item.slug === slug);

  return {
    props: {
      news: data[0],
    },
  };
}

// export async function getServerSideProps(context) {
//   const slug = context.params.slug;
//   const res = await getNewsId(slug);
//   let data = res.data.categorys;
//   // filter data by slug
//   data = data.filter((item) => item.slug === slug);

//   console.log(data, "data");

//   return {
//     props: {
//       news: data[0],
//     },
//   };
// }
