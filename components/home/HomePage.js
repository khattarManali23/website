import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import GlobalSEO from "../../data/next-seo.data";
import { useGetAllCategories } from "../../services/categoryServices";
import { useGetAllNews } from "../../services/news";
import { FadeIn } from "../animate";

import { ErrorScreen } from "../basics";
import TredingNews from "./TredingNews";

const DynamicHomeNews = dynamic(() => import("./HomeNews"));
const DynamicMobileHomeNews = dynamic(() => import("./MobileHomeNews"));

export default function HomePage({ setpageLoading }) {
  const {
    data: categoriesAllData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetAllCategories();

  const {
    data: newsAllData,
    isLoading: newsLoading,
    isError: newsError,
  } = useGetAllNews();

  useEffect(() => {
    if (!categoriesLoading && !newsLoading) {
      setpageLoading(false);
    }
  }, [categoriesLoading, newsLoading]);

  if (categoriesError || newsError) return <ErrorScreen />;

  return (
    <div>
      <DefaultSeo {...GlobalSEO["/"]} {...GlobalSEO} />

      <div className="md:block hidden">
        <FadeIn durationTime="1s">
          <DynamicHomeNews
            newsAllData={newsAllData}
            newsLoading={newsLoading}
          />
        </FadeIn>
      </div>
      <div className="md:hidden">
        <FadeIn durationTime="1s">
          <DynamicMobileHomeNews
            categories={categoriesAllData}
            categoriesLoading={categoriesLoading}
            newsAllData={newsAllData}
            newsLoading={newsLoading}
            setpageLoading={setpageLoading}
          />
        </FadeIn>
      </div>
      <TredingNews />
    </div>
  );
}
