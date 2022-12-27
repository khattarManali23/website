import aboutmobile from "../assets/aboutmobile.png";
import careerbanner from "../assets/careerbanner.png";
import contactbanner from "../assets/contactbanner.png";
import cover from "../assets/cover.png";
import banner from "../assets/Hero.png";
import heroMobile from "../assets/Heromobile.png";
import insightbanner from "../assets/insightbanner.png";
import portfoliobanner from "../assets/portfoliobanner.png";
import servicebanner from "../assets/servicebanner.png";
import technologiesbanner from "../assets/technologiesbanner.png";

const data = [
  {
    id: 1,
    slug: "home",
    heading: "",
    paragraph: "",
    image: banner.src,
    mobileImage: heroMobile,
  },
  {
    id: 2,
    slug: "about",
    heading: "INNOVATION INDEED !",
    paragraph: "",
    image: cover.src,
    mobileImage: aboutmobile,
  },
  {
    id: 3,
    slug: "services",
    heading: "",
    paragraph: "",
    image: servicebanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 4,
    slug: "technologies",
    heading: "",
    paragraph: "",
    image: technologiesbanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 5,
    slug: "portfolio",
    heading: "",
    paragraph: "",
    image: portfoliobanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 6,
    slug: "insights",
    heading: "",
    paragraph: "",
    image: insightbanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 7,
    slug: "careers",
    heading: "",
    paragraph: "",
    image: careerbanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
  {
    id: 8,
    slug: "contact",
    heading: "",
    paragraph: "",
    image: contactbanner.src,
    mobileImage: heroMobile,
    style:
      " font-bold text-6xl leading-[84px] text-center text-white tracking-[1px] w-3/4 text-center border",
  },
];

export default data;
