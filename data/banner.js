import aboutmobile from "../assets/aboutmobile.png";
import careerbanner from "../assets/careerbanner.png";
import contactbanner from "../assets/contactbanner.png";
import cover from "../assets/cover.png";
import heroMobile from "../assets/Heromobile.png";
import banner from "../assets/home.jpeg";
import insightbanner from "../assets/insightbanner.png";
import portfoliobanner from "../assets/portfoliobanner.png";
import servicebanner from "../assets/servicebanner.png";
import technologiesbanner from "../assets/technologiesbanner.png";

const data = [
  {
    id: 1,
    slug: "home",
    heading: "Driving Innovation for Businesses",
    paragraph:
      "Brave automation solutions that optimize the present while taking care of the Future.",
    image: banner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[88.52px] text-center  tracking-[2rem] w-3/4 text-center ",
  },
  {
    id: 2,
    slug: "about",
    heading: "INNOVATION INDEED !",
    paragraph: "",
    image: cover,
    mobileImage: aboutmobile,
  },
  {
    id: 3,
    slug: "services",
    heading: "",
    paragraph: "",
    image: servicebanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 4,
    slug: "technologies",
    heading: "",
    paragraph: "",
    image: technologiesbanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 5,
    slug: "portfolio",
    heading: "",
    paragraph: "",
    image: portfoliobanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 6,
    slug: "insights",
    heading: "",
    paragraph: "",
    image: insightbanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 7,
    slug: "careers",
    heading: "",
    paragraph: "",
    image: careerbanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 8,
    slug: "contact",
    heading: "",
    paragraph: "",
    image: contactbanner,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
];

export default data;
