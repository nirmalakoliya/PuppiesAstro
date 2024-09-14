import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

export default function DogsDetail() {
  return (
    <>
      <div className="font">
        <section className="relative top-4 border-2 bg-white p-2 lg:p-4">
          {/* <!-- Filter By and Sort By for small screens --> */}
          <div className="flex items-center justify-center space-x-2 lg:justify-between lg:space-x-4">
            {/* <!-- Filter by section --> */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold lg:text-base">
                FILTER BY
              </span>
              <div className="lg:hidden">
                <IoIosArrowDown size={20} />
              </div>
            </div>

            {/* <!-- Divider - visible only on small screens --> */}
            <div className="h-6 w-px bg-gray-400 lg:hidden"></div>

            {/* <!-- Sort by section --> */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold lg:text-base">
                SORT BY
              </span>
            </div>
            <div className="lg:hidden">
              <IoIosArrowDown />
            </div>
          </div>

          {/* <!-- Full content visible only on large screens --> */}
          <div className=" hidden space-x-2 lg:flex lg:items-center lg:justify-between lg:space-x-4">
            {/* <!-- Location filter --> */}
            <button className="flex items-center justify-center gap-2 rounded border px-3 py-1 text-sm font-semibold text-gray-800">
              LOCATION <IoIosArrowDown />
            </button>

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
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">BOY</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" className="form-checkbox" />
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
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">NEW ARRIVALS</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" className="form-checkbox" />
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
          <div className="relative top-8 flex w-full flex-col border-2 md:flex-row">
            <div className="sectionOne h-auto w-full md:w-1/3">
              <div className="p-4 md:p-8">
                <h1 className="mb-4 text-center text-xl font-bold text-gray-800 md:text-left md:text-3xl">
                  ARRANGE A VIRTUAL PUPPY MEET AND GREET
                </h1>
                <p className="mb-4 text-center text-sm text-gray-600 md:text-left md:text-lg">
                  We are excited to offer you the opportunity to meet our
                  adorable puppies through a virtual meet and greet!
                </p>
                <button className="mx-auto block rounded border border-gray-400 bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow md:mx-0 md:px-4 md:py-2">
                  Arrange now
                </button>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/*  Card 1 */}
              <div className="flex h-auto w-full flex-col  bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail1.jpg"
                  alt="Golden Retriever puppy wearing a captain's hat"
                  className="h-48 w-full object-cover  md:h-[30rem]"
                />

                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail2.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 2 */}
        <section>
          <div className="relative top-10 flex w-full flex-col border-2  md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border border-gray-300 bg-white  shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail3.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-48 w-full object-cover md:h-[30rem]"
                  />
                  <div className="font-roboto absolute right-4 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    NEW ARRIVAL
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail4.jpg"
                  alt="Golden Retriever puppy wearing a captain's hat"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>

                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail5.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 3 */}
        <section>
          <div className="relative top-12 flex w-full flex-col border-2  md:flex-row">
            <div className="flex w-full flex-col md:flex-row">
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail6.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - <span className="line-through">$2,999</span>{" "}
                    <span className="text-red-500">$1,295</span>
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              <div className="sectionTwo b h-auto w-full">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center rounded-lg p-12 md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                      <h1 className="mb-4 text-4xl font-bold text-[#9b6bcb]">
                        UP TO 100% FINANCING AVAILABLE
                      </h1>
                      <p className="mb-4 font-bold text-[#333]">
                        Apply now to get your available offers for Low Monthly
                        Puppy Payment Plans
                      </p>
                      <button className="rounded bg-white px-4 py-2 font-bold text-black shadow">
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
          <div className="relative top-14 flex w-full flex-col border-2  md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border border-gray-300 bg-white  shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail8.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-48 w-full object-cover md:h-[30rem]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <div className="relative">
                  <img
                    src="/Images/dogDetail9.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-48 w-full object-cover md:h-[30rem]"
                  />
                  <div className="font-roboto absolute right-3 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    SPECIAL OFFER
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - <span className="line-through">$2,999</span>{" "}
                    <span className="text-red-500">$1,295</span>
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail10.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 5 */}
        <section>
          <div className="relative top-16 flex w-full flex-col border-2  md:flex-row">
            <div className="flex w-full flex-col md:flex-row">
              <div className="sectionThree h-auto w-full">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center rounded-lg  p-12 md:flex-row">
                    <div className="text-center md:w-1/2 md:text-left">
                      <h1 className="mb-4 text-4xl font-bold text-[#9b6bcb]">
                        FEAL PUPPU OWNERS, REAL REVIEWS
                      </h1>
                      <p className="mb-4  font-bold text-[#333]">
                        Browse our past client Google testimonials
                      </p>
                      <button className="rounded  bg-white px-4 py-2 font-bold text-black shadow">
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
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail12.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dog section 6*/}
        <section>
          <div className="relative top-20 flex w-full flex-col border-2  md:flex-row">
            {/*  Card 1 */}
            <div className="h-auto w-full md:w-1/3">
              <div className="md:w-2/1 flex h-auto w-full flex-col border border-gray-300 bg-white  shadow-lg">
                <div className="relative">
                  <img
                    src="/Images/dogDetail13.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-48 w-full object-cover md:h-[30rem]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col md:w-2/3 md:flex-row">
              {/* Card 2 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <div className="relative">
                  <img
                    src="/Images/dogDetail14.jpg"
                    alt="Golden Retriever puppy wearing a captain's hat"
                    className="h-48 w-full object-cover md:h-[30rem]"
                  />
                  <div className="font-roboto absolute right-3 top-2 rounded-lg border border-black bg-white px-2 py-1 text-xs font-bold">
                    NEW ARRIVAL
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON - $2,999
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
                    GOLDEN RETRIEVER, BOY
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex h-auto w-full flex-col border border-gray-300 bg-white shadow-lg md:w-1/2">
                <img
                  src="/Images/dogDetail15.jpg"
                  alt="Golden Retriever puppy with a yellow and black scarf"
                  className="h-48 w-full object-cover md:h-[30rem]"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-sm font-bold text-gray-800 md:text-base">
                    FENTON -
                    <span className="text-red-500">RECENTLY ADOPTED</span>
                  </h2>
                  <p className="text-xs text-gray-600 md:text-sm">
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
