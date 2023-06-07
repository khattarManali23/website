import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { AppSnackBar, LoadingScreen } from "../components/basics";
import NavbarFooterLayout from "../components/layouts/NavbarFooterLayout";
import useDeviceType from "../custom-hooks/useDeviceType";
import store from "../redux/store";
import "../styles/globals.css";
import ThemeProvider from "../styles/ThemeProvider";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const { isMobile } = useDeviceType();
  const { pathname } = useRouter();
  const [userVisit, setUserVisit] = useState(false);
  const [pageLoading, setpageLoading] = useState(false);
  useEffect(() => {
    const visitValue = window.localStorage.getItem("userVisit");
    if (visitValue == "true") {
      setUserVisit(true);
    } else {
      setUserVisit(false);
    }
  }, []);
  function handleChangeUserVisit() {
    window.localStorage.setItem("userVisit", true);
    setUserVisit(true);
  }
  return (
    <>
      <Head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND5K6VT"
            height="0"
            width="0"
            style={{
              display: "none",

              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
      </Head>

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider>
            {pageLoading ? (
              <LoadingScreen />
            ) : (
              <div>
                <NavbarFooterLayout
                  pageLoading={pageLoading}
                  setpageLoading={setpageLoading}
                >
                  <Component
                    {...pageProps}
                    pageLoading={pageLoading}
                    setpageLoading={setpageLoading}
                  />
                </NavbarFooterLayout>
              </div>
            )}
            <AppSnackBar />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
