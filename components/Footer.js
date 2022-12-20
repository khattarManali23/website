import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 py-8 sm:py-12 ">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 ">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 ">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="mailto:contactus@innodeed.com "
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    contactus@innodeed.com
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="tel:91 788-4062298"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    91 788-4062298
                  </a>
                </li>
              </ul>
              <div className=" sm:mx-auto xl:mt-0 xl:ml-auto pt-16 ">
                <div className="flex sm:justify-center xl:justify-start">
                  <a
                    href=""
                    className="w-8 h-8 border  border-gray-400 rounded-md text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href=""
                    className="w-8 h-8 border border-2 border-gray-400 rounded-md text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href=""
                    className="w-8 h-8 border border-2 border-gray-400 rounded-md text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0 ">
              <hr className="bg-white  h-[0.15rem] mb-8 mt-1" />
              <h5 className="text-xl font-bold mb-6 px-4">USA</h5>
              <ul className="list-none footer-links px-4">
                <li className="mb-2 ">
                  <a
                    href="
                    https://www.google.com/maps/place/Innodeed+Systems+Pvt+Ltd+4040+Civic+Centre+Drive,+Suite+200+San+Rafael,+CA+94903
                    "
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Innodeed Systems Pvt Ltd 4040 Civic Centre Drive, Suite 200
                    San Rafael, CA 94903
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
              <hr className="bg-white  h-[0.15rem] mb-8 mt-1" />

              <h5 className="text-xl font-bold mb-6">UK</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="
                    https://www.google.com/maps/place/Innodeed+Systems+Pvt+Ltd+7,+Parritt+Road+Redhill,+RH11TN+Surrey,+UK
                    "
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Innodeed Systems Pvt Ltd 7, Parritt Road Redhill, RH11TN
                    Surrey, UK
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
              <hr className="bg-white  h-[0.15rem] mb-8 mt-1" />

              <h5 className="text-xl font-bold mb-6">INDIA</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="
                
                    https://www.google.com/maps/place/Innodeed+Systems+Pvt+Ltd+STPI,+Nehru+Nagar(E),+Bhilai,+
                    "
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Innodeed Systems Pvt Ltd STPI, Nehru Nagar(E), Bhilai, C.G.
                    -490020
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:flex sm:flex-wrap justify-around items-center sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className="px-4 ">privacy policy</div>
            <div className="px-4">
              Copyright &copy; 2022 | Designed by Manas Agrawal
            </div>
            <div className="px-4  mt-4 md:mt-0">Terms & Conditions</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
