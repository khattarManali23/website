import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
