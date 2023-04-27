import { useRouter } from "next/router";
import { useEffect } from "react";
import { FadeRight } from "src/components/animate";
import { ErrorScreen } from "src/components/basics";
import { DesktopDetail, MobileDetail } from "src/components/news";
import { useGetOneNewsById } from "src/services/news";

const NewsDetailPage = ({ setpageLoading }) => {
  const { query } = useRouter();
  const id = query?.id;
  const { data, isLoading: OneNewsIsLoading, isError } = useGetOneNewsById(id);

  useEffect(() => {
    if (!OneNewsIsLoading) {
      setpageLoading(false);
    }
  }, [OneNewsIsLoading]);

  if (isError) return <ErrorScreen />;

  return (
    <>
      <FadeRight durationTime={"1s"}>
        {/* desktop view */}
        <div className="md:block hidden">
          <DesktopDetail
            oneNewsData={data}
            OneNewsIsLoading={OneNewsIsLoading}
            setpageLoading={setpageLoading}
          />
        </div>
      </FadeRight>

      <FadeRight durationTime={"1s"}>
        {/* mobile view */}
        <div className="md:hidden">
          <MobileDetail
            oneNewsData={data}
            OneNewsIsLoading={OneNewsIsLoading}
            setpageLoading={setpageLoading}
          />
        </div>
      </FadeRight>
    </>
  );
};

export default NewsDetailPage;
