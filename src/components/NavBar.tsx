import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    console.log("Menu button clicked");
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="border-t-4 border-purple-600">
        <div className="flex items-center justify-between bg-white p-3 shadow-md">
          {/* Left links section */}
          <div className="hidden space-x-4 sm:flex">
            {/* Our Puppies dropdown */}
            <div className="group relative">
              <a
                href="#"
                className="FontOne flex items-center justify-center gap-2 text-sm font-medium text-black lg:text-base"
              >
                Our Puppies <FaAngleDown />
              </a>
              {/* Dropdown content */}
              <div className="absolute left-0 z-50 hidden  w-full bg-white shadow-lg group-hover:block sm:w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[98vw]">
                <main className="p-4">
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    {/* Categories */}
                    <div className="flex flex-col space-x-4 md:w-1/2 md:flex-row">
                      <div className="flex-1">
                        <h2 className="FontTwo mb-2 font-bold">BREEDS</h2>
                        <ul className="FontOne space-y-2">
                          <li>
                            <a href="#">Designer Hybrid</a>
                          </li>
                          <li>
                            <a href="#">Purebred</a>
                          </li>
                          <li>
                            <a href="#">All Breeds</a>
                          </li>
                        </ul>
                      </div>

                      <div className="flex-1">
                        <h2 className="FontTwo mb-2 font-bold">
                          CHARACTERISTICS
                        </h2>
                        <ul className="FontOne space-y-2">
                          <li>
                            <a href="#">Hypoallergenic And Low Shed</a>
                          </li>
                          <li>
                            <a href="#">Large Sized</a>
                          </li>
                          <li>
                            <a href="#">Medium Sized</a>
                          </li>
                          <li>
                            <a href="#">Small Sized</a>
                          </li>
                          <li>
                            <a href="#">New Arrival</a>
                          </li>
                          <li>
                            <a href="#">Special Deals</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Images */}
                    <div className="flex space-y-4 md:space-x-4 md:space-y-0">
                      <div className="flex flex-col items-center">
                        <h2 className="FontTwo mb-2 flex items-center  justify-center gap-2 font-bold">
                          NEW ARRIVALS
                          <GoArrowUpRight />
                        </h2>
                        <img
                          src="/Images/HeaderDog1.jpg"
                          alt="New arrival puppy running in a field"
                          className="h-[200px] w-[100%] border border-black object-cover md:h-[300px] md:w-[350px]"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <h2 className="FontTwo mb-2  flex items-center justify-center gap-2 font-bold">
                          SPECIAL DEALS
                          <GoArrowUpRight />
                        </h2>
                        <img
                          src="/Images/HeaderDog2.jpg"
                          alt="Puppy on a surfboard"
                          className="h-[200px] w-[100%] border border-black object-cover md:h-[300px] md:w-[350px] "
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <h2 className="FontTwo mb-2  flex items-center justify-center gap-2 font-bold">
                          MEET ALL FUR BABIES <GoArrowUpRight />
                        </h2>
                        <img
                          src="/Images/HeaderDog3.jpg"
                          alt="Group of puppies sitting tprojectDropdownogether"
                          className="h-[200px] w-[100%] border border-black object-cover md:h-[300px] md:w-[350px]"
                        />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <a
              href="#"
              className="FontOne text-sm font-medium text-black lg:text-base"
            >
              Financing
            </a>

            <div className="group relative z-50">
              <a
                href="#"
                className="FontOne flex items-center gap-2 text-sm font-medium text-black lg:text-base"
              >
                About Us <FaAngleDown />
                <div className="absolute left-0 top-5 hidden w-full bg-white shadow-lg group-hover:block sm:w-[18vw]">
                  <main className="p-4">
                    <div className="space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="flex flex-col space-x-4  md:flex-row">
                        <div className="flex-1">
                          <h2 className="relative bottom-1">About Us</h2>
                          <ul className="FontOne space-y-2">
                            <li>
                              <a href="#">Health Guarantee</a>
                            </li>
                            <li>
                              <a href="#">Breeder Standards</a>
                            </li>
                            <li>
                              <a href="#">Customer Reviews</a>
                            </li>
                            <li>
                              <a href="#">Knowledge Center</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </a>
            </div>
          </div>

          {/* Logo */}
          <a href="#">
            <div className="flex justify-center text-center">
              <img
                src="/Images/Logo.png"
                alt="Puppies Logo"
                className="h-20 w-20 sm:h-16 sm:w-16 lg:h-[80px] lg:w-[80px]"
              />
            </div>
          </a>

          {/* Right links and contact */}
          <div className="FontOne flex items-center space-x-4">
            <span className="cursor-pointer text-sm font-medium text-black lg:text-base">
              (855) 775-0552
            </span>

            {/* Mobile menu button */}
            <button className="block p-4 sm:hidden" onClick={handleMobileMenu}>
              {mobileMenuOpen ? (
                <AiOutlineClose size={30} className="text-black" />
              ) : (
                <AiOutlineMenu size={30} className="text-black" />
              )}
            </button>

            {/* Mobile menu */}
            <div
              className={`absolute right-0 top-40 z-40 h-screen w-full bg-white p-2 sm:hidden ${
                mobileMenuOpen ? "block" : "hidden"
              }`}
            >
              {/* menu items here */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>OUR PUPPIES</span>
                  <FaAngleRight />
                </div>
                <div className="flex items-center justify-between">
                  <span>SPECIAL DEALS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>NEW ARRIVALS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>MEET ALL FUR BABIES</span>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>FINANCING</span> <FaAngleRight />
                </div>
                <div className="flex items-center justify-between">
                  <span>ABOUT US</span> <FaAngleRight />
                </div>
                <div className="flex items-center justify-between">
                  <span>CONTACT US</span>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="space-y-2">
                <div className="font-bold">OUR LOCATIONS</div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span>
                        <FaAngleUp />
                        Ft Lauderdale
                      </span>
                    </div>
                    <div className="rounded-md border p-2">
                      <div>(855) 775-0552</div>
                      <div>4157 N State Rd 7 Lauderdale Lakes, FL 33319</div>
                      <div>Every Day 11:00AM - 9:00PM</div>
                      <div className="flex space-x-4 text-purple-600">
                        <a href="#">
                          View puppies
                          <FaArrowTrendUp />
                        </a>
                        <a href="#">
                          Get directions
                          <FaArrowTrendUp />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>
                      <FaAngleUp /> Miami
                    </span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>
                      <FaAngleUp /> North Miami
                    </span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact and Location links for larger screens */}
            <a
              href="#"
              className="hidden text-sm font-medium text-black sm:block lg:text-base"
            >
              Contact us
            </a>
            <a
              href="#"
              className="hidden text-sm font-medium text-black sm:block lg:text-base"
            >
              Our Locations
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
