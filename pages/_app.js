import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
// import Splash from "../components/Splash";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Splash /> */}
      <Cursor />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
