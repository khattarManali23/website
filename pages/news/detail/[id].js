import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FadeRight } from "../../../components/animate";
import { ErrorScreen, LoadingScreen } from "../../../components/basics";
import { DesktopDetail, MobileDetail } from "../../../components/news";
import api from "../../../services/api";
import { useGetOneNewsById } from "../../../services/news";
import { useGetWhatsappLink } from "../../../services/whatsappService";

const NewsDetailPage = ({ setpageLoading, news }) => {
  const { data, isLoading, isError } = useGetWhatsappLink();
  const { query, fallback } = useRouter();
  const id = query?.id;

  if (fallback) return <LoadingScreen />;

  return (
    <>
      <DefaultSeo
        title={news?.title}
        description={news?.description}
        openGraph={{
          url: "https://www.terralogic.com/",
          title: news?.title,
          description: news?.seoMetaDescription,
          images: [
            {
              url: news?.attach_file,
              width: 800,

              height: 600,
              alt: news?.title,
            },
          ],
          site_name: "https://www.terralogic.com/",
        }}
        twitter={{
          handle: "@terralogic",
          site: "@terralogic",
          cardType: "summary_large_image",
        }}
      />

      <FadeRight durationTime={"1s"}>
        {/* desktop view */}
        <div className="md:block hidden">
          <DesktopDetail oneNewsData={news} data={data} />
        </div>
      </FadeRight>

      <FadeRight durationTime={"1s"}>
        {/* mobile view */}
        <div className="md:hidden">
          <MobileDetail oneNewsData={news} data={data} />
        </div>
      </FadeRight>
    </>
  );
};

export default NewsDetailPage;

async function getNewsId(id) {
  const res = await api.get(`newsmanagement/oneBySlug/${id}`);
  return res;
}

export async function getStaticPaths() {
  const res = await api.get("/newsmanagement/all");
  const data = res.data.data;

  const paths = data.map((news) => ({
    params: { id: news.seoSlug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await getNewsId(params.id);
  console.log(res, "res");

  const data = res.data.data;
  console.log(data, "data");
  return {
    props: {
      news: data,
    },
  };
}
