import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

export default function DogsDetail() {
  return (
    <>
      <section className=" relative top-2 border-2 bg-white p-4">
        {/* Filter By and Sort By for small screens */}
        <div className="flex items-center justify-center space-x-4 lg:justify-between">
          {/* Filter by section */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold">FILTER BY</span>
          </div>

          {/* Divider - visible only on small screens */}
          <div className="h-6 w-px bg-gray-400 lg:hidden"></div>

          {/* Sort by section */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold">SORT BY</span>
          </div>
        </div>

        {/* Full content visible only on large screens */}
        <div className="mt-4 hidden space-x-4 lg:flex lg:items-center lg:justify-between">
          {/* Location filter */}
          <button className="flex items-center justify-center gap-2 rounded border px-4 py-2 font-semibold text-gray-800">
            LOCATION <IoIosArrowDown />
          </button>

          {/* Breed filter */}
          <button className="flex items-center justify-center gap-2 rounded border px-4 py-2 font-semibold text-gray-800">
            BREED <IoIosArrowDown />
          </button>

          {/* Price filter */}
          <button className="flex items-center justify-center gap-2 rounded border px-4 py-2 font-semibold text-gray-800">
            PRICE <IoIosArrowDown />
          </button>

          {/* Availability filter */}
          <button className="flex items-center justify-center gap-2 rounded border px-4 py-2 font-semibold text-gray-800">
            AVAILABILITY <IoIosArrowDown />
          </button>

          {/* Gender filter */}
          <div className="flex items-center space-x-4">
            <span className="font-semibold">GENDER:</span>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>BOY</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>GIRL</span>
            </label>
          </div>

          {/* Specials filter */}
          <div className="flex items-center space-x-4">
            <span className="font-semibold">SPECIALS:</span>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>NEW ARRIVALS</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>LIMITED TIME SPECIAL</span>
            </label>
          </div>

          {/* Clear all filters */}
          <div className="flex items-center justify-center space-x-4">
            <button className="flex items-center justify-center gap-2 font-bold">
              CLEAR ALL FILTER <VscChromeClose />
            </button>
          </div>

          <div className="h-9 w-px bg-gray-400"></div>

          {/* Sort filter */}
          <button className="flex items-center justify-center gap-2 rounded border px-4 py-2 font-semibold text-gray-800">
            AGE: OLD TO YOUNG <IoIosArrowDown />
          </button>
        </div>
      </section>

      <section>
        <div className="flex w-full flex-col space-y-8 py-11  md:flex-row  md:space-y-0">
          <div className="nirmal h-auto w-auto p-8">
            <h1 className="font-fredoka mb-4 text-center text-3xl font-bold text-gray-800 md:text-left">
              ARRANGE A VIRTUAL PUPPY MEET AND GREET
            </h1>
            <p className="font-open-sans mb-6 text-center text-lg text-gray-600 md:text-left">
              We are excited to offer you the opportunity to meet our adorable
              puppies through a virtual meet and greet!
            </p>
            <button className="mx-auto block rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow md:mx-0">
              Arrange now
            </button>
          </div>

          <div className="flex w-full flex-col space-y-8 md:w-2/3 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-lg md:w-1/2">
              <img
                // src="https://placehold.co/600x400"
                src="/Images/dogDetail1.jpg"
                alt="Golden Retriever puppy wearing a captain's hat"
                className="h-auto w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-open-sans font-bold text-gray-800">
                  FENTON - $2,999
                </h2>
                <p className="font-open-sans text-sm text-gray-600">
                  GOLDEN RETRIEVER, BOY
                </p>
              </div>
            </div>
            <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-lg md:w-1/2">
              <img
                // src="https://placehold.co/600x400"
                src="/Images/dogDetail2.jpg"
                alt="Golden Retriever puppy with a yellow and black scarf"
                className="h-auto w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-open-sans font-bold text-gray-800">
                  FENTON -{" "}
                  <span className="text-red-500">RECENTLY ADOPTED</span>
                </h2>
                <p className="font-open-sans text-sm text-gray-600">
                  GOLDEN RETRIEVER, BOY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
