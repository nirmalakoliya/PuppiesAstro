import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { RiCheckLine } from "react-icons/ri";

export default function DogsDetail() {
  const [filterMenu, setFilterMenu] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [sortbyOpen, setSortbyOpen] = useState(false);

  const handleFilterMenu = () => {
    console.log("Menu button clicked");
    setFilterMenu(!filterMenu);
  };

  const handleLocationMenu = () => {
    console.log("Location button clicked");
    setLocationOpen(!locationOpen);
  };

  const handleSortbyMenu = () => {
    console.log("Sort by button clicked");
    setSortbyOpen(!sortbyOpen);
  };

  const [selectedCount, setSelectedCount] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([
    true,
    true,
    true,
    false,
    false,
    false,
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (index: any) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
    setSelectedCount(newSelectedItems.filter((item) => item).length);
  };

  const selectAll = () => {
    setSelectedItems(new Array(selectedItems.length).fill(true));
    setSelectedCount(selectedItems.length);
  };

  const clearFilter = () => {
    setSelectedItems(new Array(selectedItems.length).fill(false));
    setSelectedCount(0);
  };

  const handleSelectAll = (event: any) => {
    if (event.target.checked) {
      selectAll();
    } else {
      clearFilter();
    }
  };

  return (
    <>
      <div className="FontThree">
        <section className="relative border border-black bg-white p-2 lg:p-4">
          {/* <!-- Filter By and Sort By for small screens --> */}
          <div className="flex items-center justify-center space-x-2 lg:justify-between lg:space-x-4">
            {/* <!-- Filter by section --> */}
            <div className="flex items-center space-x-2">
              <button
                className="flex gap-1 text-sm font-semibold lg:text-base"
                onClick={handleFilterMenu}
              >
                FILTER BY
                <div className="flex w-5 items-center justify-center rounded-md bg-yellow-400 text-[15px] lg:hidden">
                  1
                </div>
                <div className="lg:hidden">
                  <IoIosArrowDown size={20} />
                </div>
              </button>

              {/* Mobile menu */}
              {filterMenu && (
                <div
                  className="absolute left-[-8px] top-0 z-10 h-[58rem] w-full bg-white p-4 lg:hidden"
                  role="menu"
                >
                  <div className="">
                    <div className="mb-6 flex items-center justify-between border-b border-black pb-2">
                      <span className="flex gap-1 font-bold">
                        FILTER BY
                        <span className="ml-2 rounded-md bg-yellow-300 px-2 text-black lg:hidden">
                          8
                        </span>
                      </span>

                      <IoCloseSharp size={20} onClick={handleFilterMenu} />
                    </div>
                    <div className="mb-6 flex items-center justify-between border-b border-black py-2 font-bold">
                      <span className="flex gap-1 font-bold">
                        LOCATION
                        <span className="ml-2 rounded-md bg-yellow-300 px-2 text-black lg:hidden">
                          1
                        </span>
                      </span>
                      <FaAngleRight />
                    </div>

                    <div className="mb-6 mt-4 w-[393px]">
                      <div
                        className="flex items-center justify-between border-b border-black pb-2"
                        onClick={toggleDropdown}
                      >
                        <div className="flex items-center">
                          <span className="font-bold">BREED</span>
                          <span className="ml-2 rounded bg-yellow-300 px-2 font-bold text-black">
                            {selectedCount}
                          </span>
                        </div>
                        <button>
                          {isOpen ? <FaAngleUp /> : <FaAngleRight />}
                        </button>
                      </div>

                      <div
                        className={`mt-2 ${
                          isOpen ? "h-fit" : "h-0 overflow-hidden"
                        } transition-all duration-1000`}
                      >
                        {selectedItems.map((isSelected, index) => (
                          <div key={index} className="mb-2 flex items-center">
                            <input
                              type="checkbox"
                              readOnly
                              checked={isSelected}
                              onChange={() => toggleItem(index)}
                              className="form-checkbox h-4 w-4 text-yellow-500"
                            />
                            <span className="ml-2">BREED NAMING</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between border-t border-black pt-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              readOnly
                              checked={selectedItems.every((item) => item)}
                              onChange={(e) => handleSelectAll(e)}
                              className="form-checkbox h-4 w-4 text-yellow-500"
                            />
                            <span className="ml-2">SELECT ALL</span>
                          </div>
                          <button
                            onClick={clearFilter}
                            className="flex gap-2 text-black"
                          >
                            <VscChromeClose className="relative top-1" />
                            CLEAR FILTER
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 flex items-center justify-between border-b border-black py-2 font-bold">
                      <span className="flex gap-1 font-bold">
                        PRICE
                        <span className="ml-2 rounded-md bg-yellow-300 px-2 text-black lg:hidden">
                          1
                        </span>
                      </span>
                      <FaAngleRight />
                    </div>
                    <div className="mb-6 flex items-center justify-between border-b border-black py-2 font-bold">
                      <span className="flex gap-1 font-bold">
                        AVAILABILITY
                        <span className="ml-2 rounded-md bg-yellow-300 px-2 text-black lg:hidden">
                          1
                        </span>
                      </span>
                      <FaAngleRight />
                    </div>
                    <div className="border-b border-black py-2 pb-6">
                      <span className="font-bold">SPECIALS</span>
                      <div className="mt-2">
                        <label className="flex items-center font-bold">
                          <input type="checkbox" readOnly className="mr-2" />
                          BOY
                        </label>
                        <label className="mt-2 flex items-center">
                          <input
                            type="checkbox"
                            readOnly
                            className="mr-2"
                            checked
                          />
                          <span className="font-bold">GIRL</span>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 border-b border-black py-2 pb-6">
                      <span className="font-bold">GENDER</span>
                      <div className="mt-2">
                        <label className="flex items-center font-bold">
                          <input type="checkbox" readOnly className="mr-2" />
                          NEW ARRIVALS
                        </label>
                        <label className="mt-2 flex items-center">
                          <input
                            type="checkbox"
                            readOnly
                            className="mr-2"
                            checked
                          />
                          <span className="font-bold">
                            LIMITED TIME SPECIAL
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="sticky bottom-0 left-0 right-0 mt-6 flex justify-between bg-white p-4 shadow">
                      <button
                        className="border bg-white px-4 py-2 shadow"
                        onClick={handleFilterMenu}
                      >
                        Clear all filter
                      </button>
                      <button
                        className="border bg-purple-200 px-4 py-2 shadow"
                        onClick={handleFilterMenu}
                      >
                        Apply filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <!--Center Divider - visible only on small screens --> */}
            <div className="h-6 w-px bg-gray-400 lg:hidden"></div>

            {/* <!-- Sort by section --> */}
            <div className="relative flex items-center space-x-2">
              <button
                className="flex gap-2 text-sm font-semibold lg:text-base"
                onClick={handleSortbyMenu}
              >
                SORT BY
                <div className="flex w-5 items-center justify-center rounded-md bg-yellow-400 text-[15px] lg:hidden">
                  1
                </div>
                <div className="relative top-0 lg:hidden">
                  <IoIosArrowDown size={20} />
                </div>
              </button>
            </div>
          </div>

          <div
            className={`absolute z-40 ${
              sortbyOpen ? "block" : "hidden"
            } inset-x-56 top-full w-48 border bg-white p-4 lg:hidden`}
          >
            <ul className="space-y-2">
              <li className="text-gray-800">Featured</li>
              <li className="flex items-center justify-between text-gray-800">
                Age: Young to Old
                <RiCheckLine />
              </li>
              <li className="text-gray-800">Age: Old to Young</li>
              <li className="text-gray-800">Price: Low to High</li>
              <li className="text-gray-800">Price: High to Low</li>
            </ul>
          </div>

          {/* <!-- Full content visible only on large screens --> */}
          <div className="hidden space-x-2 lg:flex lg:items-center lg:justify-between lg:space-x-4">
            {/* <!-- Location filter --> */}
            <button
              className="flex items-center justify-center gap-2 rounded border px-3 py-1 text-sm font-semibold text-gray-800"
              onClick={handleLocationMenu}
            >
              LOCATION <IoIosArrowDown />
            </button>

            <div
              className={`FontTwo absolute z-40 ${
                locationOpen ? "block" : "hidden"
              } w-full bg-white lg:left-[8px] lg:top-[95%] lg:mt-2 lg:w-64 lg:rounded lg:border lg:border-gray-300 lg:p-2`}
            >
              <div className="flex items-center justify-between border-b border-black pb-2">
                <span className="text-sm text-gray-400">LOCATION</span>
                <button className="flex gap-1 text-sm text-gray-600">
                  <VscChromeClose className="relative top-1" /> CLEAR FILTER
                </button>
              </div>

              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    readOnly
                    checked
                    className="form-checkbox text-yellow-500"
                  />
                  <span className="text-sm text-gray-800">FT LAUDERDALE</span>
                </label>

                <label className="mt-2 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    readOnly
                    className="form-checkbox text-gray-500"
                  />
                  <span className="text-sm text-gray-800">NORTH MIAMI</span>
                </label>

                <label className="mt-2 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    readOnly
                    className="form-checkbox text-gray-500"
                  />
                  <span className="text-sm text-gray-800">MIAMI</span>
                </label>

                <label className="mt-2 flex items-center space-x-2 border-t border-black">
                  <input
                    type="checkbox"
                    readOnly
                    className="form-checkbox text-gray-500"
                  />
                  <span className="text-sm text-gray-800">SELECT ALL</span>
                </label>
              </div>
            </div>

            {/* <!-- Price filter --> */}
            <button className="flex items-center justify-center gap-2 rounded border px-3 py-1 text-sm font-semibold text-gray-800">
              PRICE <IoIosArrowDown />
            </button>

            {/* <!-- Availability filter --> */}
            <button className="flex items-center justify-center gap-2 rounded border px-3 py-1 text-sm font-semibold text-gray-800">
              AVAILABILITY <IoIosArrowDown />
            </button>

            {/* <!-- Gender filter --> */}
            <div className="relative bottom-4 flex flex-col items-start space-y-1 lg:space-y-2">
              <span className="text-sm font-semibold lg:text-base ">
                GENDER:
              </span>
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" readOnly className="form-checkbox" />
                  <span className="text-sm">BOY</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" readOnly className="form-checkbox" />
                  <span className="text-sm">GIRL</span>
                </label>
              </div>
            </div>

            {/* <!-- Specials filter --> */}
            <div className="relative bottom-4 flex flex-col items-start space-y-1 lg:space-y-2">
              <span className="text-sm font-semibold lg:text-base">
                SPECIALS:
              </span>
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" readOnly className="form-checkbox" />
                  <span className="text-sm">NEW ARRIVALS</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" readOnly className="form-checkbox" />
                  <span className="text-sm">LIMITED TIME SPECIAL</span>
                </label>
              </div>
            </div>

            {/* <!-- Clear all filters --> */}
            <div className="flex items-center justify-center space-x-2 lg:space-x-4">
              <button className="flex items-center justify-center gap-2 text-sm font-bold lg:text-base">
                CLEAR ALL FILTER <VscChromeClose />
              </button>
            </div>

            <div className="hidden h-9 w-px bg-gray-400 lg:block"></div>

            {/* <!-- Sort filter --> */}
            <button className="flex items-center justify-center gap-2 rounded border px-3 py-1 text-sm font-semibold text-gray-800 lg:px-4 lg:py-2">
              AGE: OLD TO YOUNG <IoIosArrowDown />
            </button>
          </div>
        </section>

        {/* Dog section 1 */}
        <section>
          <div className="relative flex w-full flex-col md:flex-row">
            <div className="h-auto w-full border-r  border-black bg-[#f3efe6] md:w-1/3">
              <div className=" p-4 md:p-8">
                <h1 className="FontOne mb-4 text-center text-xl font-bold text-gray-800 md:text-left md:text-3xl">
                  ARRANGE A VIRTUAL PUPPY MEET AND GREET
                </h1>
                <p className="FontTwo mb-4 text-center text-sm text-gray-600 md:text-left md:text-lg">
                  We are excited to offer you the opportunity to meet our
                  adorable puppies through a virtual meet and greet!
                </p>
                <button className="FontTwo mx-auto block rounded border border-gray-400 bg-white px-3 py-2 text-sm font-semibold shadow  hover:bg-purple-500 hover:text-white md:mx-0 md:px-4 md:py-2">
                  Arrange now
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/*  Card 1 */}
              <div className="flex h-auto w-full flex-col  border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail1.jpg"
                  alt="Golden Retriever puppy wearing a captain's hat"
                  className="h-[26rem] w-full object-cover  md:h-[30rem]"
                />

                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail2.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 2 */}
        <section>
          <div className=" flex w-full flex-col  md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border-r border-t border-black bg-white shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail3.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-[26rem] w-full object-cover md:h-[30rem]"
                  />
                  <div className="font-roboto FontTwo absolute right-4 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    NEW ARRIVAL
                  </div>
                </div>
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail4.jpg"
                  alt="Golden Retriever puppy wearing a captain's hat"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>

                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail5.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 3 */}
        <section>
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex w-full flex-col md:flex-row">
              <div className="flex h-auto w-full flex-col border-t border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail6.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-b border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - <span className="line-through">$2,999</span>{" "}
                    <span className="text-red-500">$1,295</span>
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              <div className="h-auto w-full border border-black bg-[#d9e3a2]">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center rounded-lg p-12 md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                      <h1 className="FontTwo mb-4 text-4xl font-bold text-[#9b6bcb]">
                        UP TO 100% FINANCING AVAILABLE
                      </h1>
                      <p className="FontOne mb-4 font-bold text-[#333]">
                        Apply now to get your available offers for Low Monthly
                        Puppy Payment Plans
                      </p>
                      <button className="FontOne rounded border border-gray-400 bg-white px-4 py-2 font-bold text-black shadow hover:bg-purple-500 hover:text-white">
                        Book now
                      </button>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2">
                      <div className="relative mx-auto h-64 w-64">
                        <img
                          // src="https://placehold.co/400x400"
                          src="/Images/dogDetail7.jpg"
                          alt="Two puppies on an orange float in a pool"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 4*/}
        <section>
          <div className="flex w-full flex-col md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border-r border-black bg-white shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail8.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-[26rem] w-full object-cover md:h-[30rem]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <div className="relative">
                  <img
                    src="/Images/dogDetail9.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-[26rem] w-full object-cover md:h-[30rem]"
                  />
                  <div className="FontTwo absolute right-3 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    SPECIAL OFFER
                  </div>
                </div>
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - <span className="line-through">$2,999</span>
                    <span className="text-red-500">$1,295</span>
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail10.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 5 */}
        <section>
          <div className="flex w-full flex-col border border-black md:flex-row">
            <div className="flex w-full flex-col md:flex-row">
              <div className="h-auto w-full border-r border-black bg-[#ecd79d]">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center rounded-lg  p-12 md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                      <h1 className="FontTwo mb-4 text-4xl font-bold text-[#9b6bcb]">
                        FEAL PUPPU OWNERS, REAL REVIEWS
                      </h1>
                      <p className="FontOne mb-4 font-bold text-[#333]">
                        Browse our past client Google testimonials
                      </p>
                      <button className="FontOne rounded border border-gray-400 bg-white px-4 py-2 font-bold text-black shadow hover:bg-purple-500 hover:text-white">
                        Read reviews
                      </button>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2">
                      <div className="relative mx-auto h-64 w-64">
                        <img
                          // src="https://placehold.co/400x400"
                          src="/Images/dogDetail11.jpg"
                          alt="Two puppies on an orange float in a pool"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border- flex h-auto w-full flex-col bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail12.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 6*/}
        <section>
          <div className="flex w-full flex-col border-b border-black  md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border-r border-black bg-white  shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail13.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-[26rem] w-full object-cover md:h-[30rem]"
                  />
                </div>
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <div className="relative">
                  <img
                    src="/Images/dogDetail14.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-[26rem] w-full object-cover md:h-[30rem]"
                  />
                  <div className="FontTwo absolute right-3 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    NEW ARRIVAL
                  </div>
                </div>
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border-r border-black bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail15.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-[26rem] w-full object-cover md:h-[30rem]"
                />
                <div className="border-t border-black p-3 md:p-4">
                  <h2 className="FontTwo text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>
                  <p className="FontOne text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
