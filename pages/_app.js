import AnimatedCursor from "react-animated-cursor";
import Navbar from "../components/Navbar";
// import Splash from "../components/Splash";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Splash /> */}
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="243, 79, 140"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={3}
      />{" "}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
