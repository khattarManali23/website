import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
// import Splash from "../components/Splash";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Innodeed"
        description="Innodeed is a full-service digital solution partne that helps businesses grow online. We are a team of passionate designers, developers, and marketers who are committed to helping businesses grow online."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://innodeed-nu.vercel.app/",
          site_name: "Innodeed",
          images: "https://innodeed-nu.vercel.app/images/Logo.png",
        }}
        twitter={{
          handle: "@innodeed",
          site: "@innodeed",
          cardType: "summary_large_image",
        }}
      />

      {/* <Splash /> */}
      <Cursor />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
