import "../styles/globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeProvider from "../styles/ThemeProvider";
import store from "../redux/store";
import { Provider } from "react-redux";
import useDeviceType from "../custom-hooks/useDeviceType";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import NavbarFooterLayout from "../components/layouts/NavbarFooterLayout";
import GetStarted from "../components/social-login/GetStarted";
import { AppSnackBar, LoadingScreen } from "../components/basics";
import Head from "next/head";

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
