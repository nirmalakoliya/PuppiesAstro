import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function NavBar() {
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
                className="flex items-center justify-center gap-2 text-sm font-medium text-black lg:text-base"
              >
                Our Puppies <FaAngleDown />
              </a>
              {/* Dropdown content */}
              <div className="absolute left-0 mt-2 hidden w-full bg-white shadow-lg group-hover:block sm:w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[99vw]">
                <main className="p-4">
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    {/* Categories */}
                    <div className="flex flex-col space-x-4 md:w-1/2 md:flex-row">
                      <div className="flex-1">
                        <h2 className="mb-2 font-bold">BREEDS</h2>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600">
                              Designer Hybrid
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              Purebred
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              All Breeds
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="flex-1">
                        <h2 className="mb-2 font-bold">CHARACTERISTICS</h2>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="text-gray-600">
                              Hypoallergenic And Low Shed
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              Large Sized
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              Medium Sized
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              Small Sized
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              New Arrival
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-gray-600">
                              Special Deals
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Images */}
                    <div className="flex space-y-4 md:space-x-4 md:space-y-0">
                      <div className="flex flex-col items-center">
                        <h2 className="mb-2 flex items-center justify-center  gap-2 font-bold">
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
                        <h2 className="mb-2 flex  items-center justify-center gap-2 font-bold">
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
                        <h2 className="mb-2 flex  items-center justify-center gap-2 font-bold">
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
            <a href="#" className="text-sm font-medium text-black lg:text-base">
              Financing
            </a>

            <div className="group relative">
              <a
                href=""
                className="r flex items-center gap-2 text-sm font-medium text-black lg:text-base"
              >
                About Us <FaAngleDown />
                <div className="absolute left-0 mt-2 hidden w-full bg-white shadow-lg group-hover:block sm:w-[18vw]">
                  <main className="p-4">
                    <div className="space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="flex flex-col space-x-4 md:w-1/2 md:flex-row">
                        <div className="flex-1">
                          <h2 className="mb-2 text-gray-600">About Us</h2>
                          <ul className="space-y-2">
                            <li>
                              <a href="#" className="text-gray-600">
                                Health Guarantee
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600">
                                Breeder Standards
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600">
                                Customer Reviews
                              </a>
                            </li>
                            <li>
                              <a href="#" className="text-gray-600">
                                Knowledge Center
                              </a>
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
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-[80px] lg:w-[80px]"
              />
            </div>
          </a>

          {/* Right links and contact */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-black lg:text-base">
              (855) 775-0552
            </span>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button className="font-medium text-black">
                <HiOutlineMenuAlt3 />
              </button>
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
